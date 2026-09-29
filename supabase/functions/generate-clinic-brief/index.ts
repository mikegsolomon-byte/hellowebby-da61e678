import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors'
import { z } from 'npm:zod@3.23.8'
import {
  createLovableAiGatewayRunIdFetch,
  getLovableAiGatewayRunId,
  getLovableAiGatewayResponseHeaders,
} from './run-id.ts'

const MODEL = 'openai/gpt-6-astra'
const GATEWAY_URL = 'https://ai.gateway.lovable.dev/v1/responses'

const BodySchema = z.object({
  clinicName: z.string().trim().max(120).optional().nullable(),
  clinicType: z.string().trim().min(1).max(120),
  location: z.string().trim().max(120).optional().nullable(),
  bookingSystem: z.string().trim().min(1).max(120),
  priorities: z.array(z.string().trim().max(80)).max(12).optional().default([]),
  details: z.string().trim().max(2000).optional().nullable(),
})

// Public endpoint: simple in-memory rate limit per client.
const RATE_LIMIT_WINDOW_MS = 60_000
const RATE_LIMIT_MAX = 4
const hits = new Map<string, number[]>()

function rateLimited(key: string): boolean {
  const now = Date.now()
  const recent = (hits.get(key) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS)
  recent.push(now)
  hits.set(key, recent)
  return recent.length > RATE_LIMIT_MAX
}

const SYSTEM_PROMPT = `You are a senior web strategist at hellowebby, an Irish web design studio that builds and manages websites for small businesses on a monthly subscription (Starter EUR 49/mo, Growth EUR 89/mo, Pro EUR 149/mo). Sites go live within a few days and include hosting, SSL, on-page SEO, unlimited content updates by email, and Irish support.

You write a short, practical "website and booking brief" for a clinic owner based on what they tell you. Rules:
- Write warm, plain English for a busy clinic owner. No jargon, no fluff, no emoji.
- Use markdown with these exact H2 headings, in this order:
  ## Your website in one line
  ## Pages we would build
  ## Bookings and patient flow
  ## Getting found locally
  ## Recommended plan
  ## What happens next
- "Pages we would build": 4-6 bullets, each page name in bold followed by one sentence on what it does for patients.
- "Bookings and patient flow": describe concretely how their named booking tool would be embedded and how an enquiry becomes an appointment. If they have no system, recommend a simple approach.
- "Getting found locally": 3-4 realistic example search phrases patients would type, using their town if given, plus one sentence each on how the site targets them.
- Never mention or recommend Google Business Profile. Keep local-search advice focused on the website itself.
- "Recommended plan": pick exactly one of Starter, Growth or Pro, state the monthly price, and give two sentences of honest reasoning.
- "What happens next": two or three short bullets ending with the free preview offer (no payment until they have seen it).
- Never invent phone numbers, opening hours, staff names, prices for their services, or patient testimonials.
- Keep the whole brief under 450 words.
- Mention GDPR-safe handling of patient enquiries only if they raised privacy, medical records, or intake forms.`

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }

  const apiKey = Deno.env.get('LOVABLE_API_KEY')
  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'AI is not configured for this project.' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }

  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
  if (rateLimited(ip)) {
    return new Response(
      JSON.stringify({ error: 'Too many briefs requested. Please wait a minute and try again.' }),
      { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
    )
  }

  let parsed
  try {
    parsed = BodySchema.safeParse(await req.json())
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid request body.' }), {
      status: 400,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }

  if (!parsed.success) {
    return new Response(JSON.stringify({ error: parsed.error.flatten().fieldErrors }), {
      status: 400,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }

  const { clinicName, clinicType, location, bookingSystem, priorities, details } = parsed.data

  const userPrompt = [
    `Clinic name: ${clinicName || 'not given'}`,
    `Type of practice: ${clinicType}`,
    `Location: ${location || 'not given (Ireland)'}`,
    `Current or preferred booking system: ${bookingSystem}`,
    `Priorities: ${priorities && priorities.length ? priorities.join(', ') : 'not given'}`,
    `In their own words: ${details || 'not given'}`,
  ].join('\n')

  const gateway = createLovableAiGatewayRunIdFetch(getLovableAiGatewayRunId(req))

  try {
    const upstream = await gateway.fetch(GATEWAY_URL, {
      method: 'POST',
      signal: req.signal,
      headers: {
        'Content-Type': 'application/json',
        'Lovable-API-Key': apiKey,
        'X-Lovable-AIG-SDK': 'fetch',
      },
      body: JSON.stringify({
        model: MODEL,
        input: [
          { role: 'system', content: SYSTEM_PROMPT },
          { role: 'user', content: userPrompt },
        ],
        stream: true,
        store: false,
        reasoning: { effort: 'low', summary: 'auto' },
        include: ['reasoning.encrypted_content'],
      }),
    })

    if (!upstream.ok || !upstream.body) {
      const detail = await upstream.text().catch(() => '')
      console.error('AI gateway error', upstream.status, detail.slice(0, 500))
      const message =
        upstream.status === 429
          ? 'The brief generator is busy right now. Please try again in a moment.'
          : upstream.status === 402
            ? 'AI credits have run out for this workspace.'
            : 'We could not generate your brief just now. Please try again.'
      return new Response(JSON.stringify({ error: message }), {
        status: upstream.status,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    const headers = getLovableAiGatewayResponseHeaders(upstream.headers, corsHeaders)
    headers.set('Content-Type', 'text/event-stream')
    headers.set('Cache-Control', 'no-cache')
    return new Response(upstream.body, { status: 200, headers })
  } catch (error) {
    if (req.signal.aborted && error instanceof Error && error.name === 'AbortError') {
      return new Response(null, { status: 499 })
    }
    console.error('generate-clinic-brief failed', error)
    return new Response(JSON.stringify({ error: 'We could not generate your brief just now.' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})
