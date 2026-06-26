import * as React from 'npm:react@18.3.1'
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

interface Props {
  name?: string
}

const items: { title: string; desc: string }[] = [
  { title: 'Clear value proposition above the fold', desc: 'One sentence that tells visitors what you do, who it\u2019s for, and why they should care \u2014 visible without scrolling.' },
  { title: 'Obvious primary call-to-action', desc: 'A single, high-contrast button (Book, Call, Buy, Enquire) repeated through the page.' },
  { title: 'Mobile-first design', desc: 'Looks great on phones \u2014 readable text, tap-friendly buttons, fast load.' },
  { title: 'Page speed under 3 seconds', desc: 'Compressed images, modern hosting, minimal heavy scripts.' },
  { title: 'Trust signals', desc: 'Real testimonials, reviews, logos, photos of your team or work.' },
  { title: 'Local SEO basics', desc: 'Town/region in your titles and headings, Google Business Profile linked, NAP (name, address, phone) consistent.' },
  { title: 'Easy contact options', desc: 'Phone, email, WhatsApp or a short form \u2014 never hidden, never more than one click away.' },
  { title: 'Services/products clearly listed', desc: 'Each service on its own section or page with pricing guidance where possible.' },
  { title: 'About page that builds trust', desc: 'Your story, your face, your why. People buy from people.' },
  { title: 'SEO meta titles & descriptions', desc: 'Every page has a unique title (<60 chars) and description (<160 chars) with the keyword you want to rank for.' },
  { title: 'Analytics installed', desc: 'Google Analytics or similar so you can see what\u2019s actually working.' },
  { title: 'Secure (HTTPS) + working forms', desc: 'Padlock in the browser, forms tested monthly, spam protection on.' },
  { title: 'Ongoing updates & backups', desc: 'A plan for content updates, security patches and regular backups \u2014 sites that sit still slip in rankings.' },
]

const Email = ({ name = 'there' }: Props) => {
  const firstName = (name || 'there').split(' ')[0] || 'there'
  return (
    <Html lang="en" dir="ltr">
      <Head />
      <Preview>Your free small business website checklist is inside</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={badge}>
            <Text style={badgeText}>HELLOWEBBY \u2014 FREE CHECKLIST</Text>
          </Section>
          <Heading style={h1}>Here\u2019s your website checklist, {firstName} 🎉</Heading>
          <Text style={lead}>
            A simple, no-nonsense guide to what every small business website needs
            to actually win customers. Work through each item \u2014 if you\u2019re missing
            more than a few, your site is likely leaving money on the table.
          </Text>

          <Section style={card}>
            {items.map((item, i) => (
              <Section key={i} style={row}>
                <Text style={rowNum}>{String(i + 1).padStart(2, '0')}</Text>
                <Text style={rowTitle}>{item.title}</Text>
                <Text style={rowDesc}>{item.desc}</Text>
              </Section>
            ))}
          </Section>

          <Section style={ctaBox}>
            <Text style={ctaTitle}>Want us to handle all of this for you?</Text>
            <Text style={ctaText}>
              HelloWebby builds and looks after small business websites from \u20AC49/mo \u2014
              no upfront cost, Irish support, cancel anytime. Just hit reply and
              we\u2019ll take it from there.
            </Text>
          </Section>

          <Hr style={hr} />
          <Text style={footer}>
            HelloWebby \u00B7 hellowebby.com<br />
            Beautiful websites, looked after for you.
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

export const template = {
  component: Email,
  subject: 'Your free small business website checklist \u2728',
  displayName: 'Lead magnet: website checklist delivery',
  previewData: { name: 'Jane Doe' },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: '"Plus Jakarta Sans", Arial, sans-serif' }
const container = { maxWidth: '600px', margin: '0 auto', padding: '32px 24px' }
const badge = { display: 'inline-block', padding: '6px 12px', backgroundColor: '#111111', borderRadius: '999px', marginBottom: '20px' }
const badgeText = { margin: 0, fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', color: '#FFD500' }
const h1 = { fontSize: '30px', lineHeight: '1.15', fontWeight: 800, color: '#111111', margin: '0 0 12px' }
const lead = { fontSize: '16px', lineHeight: '1.55', color: '#333333', margin: '0 0 24px' }
const card = { backgroundColor: '#FFFBE6', border: '1px solid #111111', borderRadius: '20px', padding: '8px 24px 16px', margin: '0 0 24px' }
const row = { borderBottom: '1px solid #f0e6a8', padding: '14px 0' }
const rowNum = { fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', color: '#888888', margin: '0 0 4px' }
const rowTitle = { fontSize: '15px', fontWeight: 700, color: '#111111', margin: '0 0 4px' }
const rowDesc = { fontSize: '13px', lineHeight: '1.55', color: '#444444', margin: 0 }
const ctaBox = { backgroundColor: '#111111', borderRadius: '20px', padding: '22px 24px', margin: '0 0 16px' }
const ctaTitle = { fontSize: '16px', fontWeight: 700, color: '#FFD500', margin: '0 0 8px' }
const ctaText = { fontSize: '14px', lineHeight: '1.6', color: '#ffffff', margin: 0 }
const hr = { borderColor: '#eeeeee', margin: '28px 0 16px' }
const footer = { fontSize: '12px', color: '#888888', margin: 0, lineHeight: '1.6' }