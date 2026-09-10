import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors'
import { z } from 'npm:zod@3.23.8'
import { sendTemplateEmail } from '../_shared/transactional-email-templates/send-email.ts'
import { logEmailSend } from '../_shared/email-send-log.ts'

const INTERNAL_RECIPIENT = 'hello@hellowebby.com'

const BodySchema = z.object({
  submissionId: z.string().min(1).max(100),
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
})

// Simple in-memory rate limit: this endpoint is public (lead magnet form).
const RATE_LIMIT_WINDOW_MS = 60_000
const RATE_LIMIT_MAX = 5
const hits = new Map<string, number[]>()

function rateLimited(key: string): boolean {
  const now = Date.now()
  const recent = (hits.get(key) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS)
  recent.push(now)
  hits.set(key, recent)
  return recent.length > RATE_LIMIT_MAX
}

async function send(
  templateName: string,
  recipient: string,
  templateData: Record<string, unknown>,
  idempotencyKey: string,
) {
  try {
    const result = await sendTemplateEmail(templateName, recipient, {
      templateData,
      idempotencyKey,
    })
    await logEmailSend({
      templateName,
      recipientEmail: recipient,
      status: result.sent ? 'sent' : 'suppressed',
    })
    return result
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    console.error('Checklist email send failed', { templateName, message })
    await logEmailSend({
      templateName,
      recipientEmail: recipient,
      status: 'failed',
      errorMessage: message,
    })
    return { sent: false as const, reason: 'send_failed' as const }
  }
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }

  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'
  if (rateLimited(ip)) {
    return new Response(JSON.stringify({ error: 'Too many requests' }), {
      status: 429,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }

  let parsed
  try {
    parsed = BodySchema.safeParse(await req.json())
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON in request body' }), {
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

  const { submissionId, name, email } = parsed.data
  const templateData = { name, email }

  await send('checklist-delivery', email, templateData, `checklist-deliver-${submissionId}`)
  await send(
    'checklist-notification',
    INTERNAL_RECIPIENT,
    templateData,
    `checklist-notify-${submissionId}`,
  )

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  })
})
