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
  pricing_plan?: string
}

const Email = ({ name = 'there', pricing_plan = 'your plan' }: Props) => {
  const firstName = name.split(' ')[0] || 'there'
  return (
    <Html lang="en" dir="ltr">
      <Head />
      <Preview>Thanks {firstName} — we'll be in touch within 24 hours</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={badge}>
            <Text style={badgeText}>HELLOWEBBY</Text>
          </Section>
          <Heading style={h1}>Thanks, {firstName} 👋</Heading>
          <Text style={lead}>
            We've got your details for <strong>{pricing_plan}</strong> and one of
            the team will reply within 24 hours (usually a lot sooner).
          </Text>

          <Section style={card}>
            <Text style={cardTitle}>What happens next</Text>
            <Text style={cardItem}>1. We review your project details.</Text>
            <Text style={cardItem}>2. You'll get a friendly reply with next steps.</Text>
            <Text style={cardItem}>3. We kick things off as soon as you're ready.</Text>
          </Section>

          <Text style={p}>
            In the meantime, if you need to add anything, just reply to this email —
            it goes straight to our inbox.
          </Text>

          <Hr style={hr} />
          <Text style={footer}>
            HelloWebby · hellowebby.com<br />
            Beautiful websites, looked after for you.
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

export const template = {
  component: Email,
  subject: "Thanks — we've got your details ✨",
  displayName: 'Customer: contact form confirmation',
  previewData: {
    name: 'Jane Doe',
    pricing_plan: 'Growth (€89/mo)',
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: '"Plus Jakarta Sans", Arial, sans-serif' }
const container = { maxWidth: '560px', margin: '0 auto', padding: '32px 24px' }
const badge = { display: 'inline-block', padding: '6px 12px', backgroundColor: '#111111', borderRadius: '999px', marginBottom: '20px' }
const badgeText = { margin: 0, fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', color: '#FFD500' }
const h1 = { fontSize: '30px', lineHeight: '1.15', fontWeight: 800, color: '#111111', margin: '0 0 12px' }
const lead = { fontSize: '16px', lineHeight: '1.55', color: '#333333', margin: '0 0 24px' }
const card = { backgroundColor: '#FFFBE6', border: '1px solid #111111', borderRadius: '20px', padding: '22px 24px', margin: '0 0 24px' }
const cardTitle = { fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', color: '#111111', margin: '0 0 12px', textTransform: 'uppercase' as const }
const cardItem = { fontSize: '14px', lineHeight: '1.6', color: '#222222', margin: '4px 0' }
const p = { fontSize: '14px', lineHeight: '1.6', color: '#444444', margin: '0 0 8px' }
const hr = { borderColor: '#eeeeee', margin: '28px 0 16px' }
const footer = { fontSize: '12px', color: '#888888', margin: 0, lineHeight: '1.6' }