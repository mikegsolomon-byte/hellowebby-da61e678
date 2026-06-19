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
  email?: string
  phone?: string
  company?: string
  message?: string
  pricing_plan?: string
}

const Email = ({
  name = 'Unknown',
  email = 'unknown@example.com',
  phone,
  company,
  message = '',
  pricing_plan = 'Not specified',
}: Props) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>New HelloWebby lead from {name} ({pricing_plan})</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={badge}>
          <Text style={badgeText}>NEW LEAD</Text>
        </Section>
        <Heading style={h1}>{name} wants to get started</Heading>
        <Text style={subhead}>Plan: <strong>{pricing_plan}</strong></Text>

        <Section style={card}>
          <Row label="Name" value={name} />
          <Row label="Email" value={email} />
          {phone ? <Row label="Phone" value={phone} /> : null}
          {company ? <Row label="Company" value={company} /> : null}
        </Section>

        <Heading as="h2" style={h2}>Project details</Heading>
        <Section style={messageBox}>
          <Text style={messageText}>{message}</Text>
        </Section>

        <Hr style={hr} />
        <Text style={footer}>
          Sent automatically from hellowebby.com — reply directly to {email} to get in touch.
        </Text>
      </Container>
    </Body>
  </Html>
)

const Row = ({ label, value }: { label: string; value: string }) => (
  <Text style={rowStyle}>
    <span style={rowLabel}>{label}: </span>
    <span style={rowValue}>{value}</span>
  </Text>
)

export const template = {
  component: Email,
  subject: (data: Record<string, unknown>) =>
    `New HelloWebby lead — ${(data.name as string) || 'New enquiry'} (${(data.pricing_plan as string) || 'Plan'})`,
  displayName: 'Internal: new lead notification',
  to: 'hello@hellowebby.com',
  previewData: {
    name: 'Jane Doe',
    email: 'jane@acme.com',
    phone: '+353 1 234 5678',
    company: 'Acme Ltd',
    message: 'We need a brand new marketing site with monthly content updates.',
    pricing_plan: 'Growth (€89/mo)',
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: '"Plus Jakarta Sans", Arial, sans-serif' }
const container = { maxWidth: '560px', margin: '0 auto', padding: '32px 24px' }
const badge = { display: 'inline-block', padding: '6px 12px', backgroundColor: '#FFD500', borderRadius: '999px', marginBottom: '16px' }
const badgeText = { margin: 0, fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', color: '#111111' }
const h1 = { fontSize: '26px', lineHeight: '1.2', fontWeight: 700, color: '#111111', margin: '0 0 8px' }
const h2 = { fontSize: '15px', fontWeight: 700, color: '#111111', margin: '24px 0 8px' }
const subhead = { fontSize: '14px', color: '#555555', margin: '0 0 24px' }
const card = { backgroundColor: '#FFFBE6', border: '1px solid #111111', borderRadius: '16px', padding: '20px 22px' }
const rowStyle = { fontSize: '14px', margin: '4px 0', color: '#111111' }
const rowLabel = { fontWeight: 600, color: '#555555' }
const rowValue = { color: '#111111' }
const messageBox = { backgroundColor: '#f7f7f7', borderRadius: '12px', padding: '16px 18px' }
const messageText = { fontSize: '14px', lineHeight: '1.6', color: '#222222', margin: 0, whiteSpace: 'pre-wrap' as const }
const hr = { borderColor: '#eeeeee', margin: '28px 0 16px' }
const footer = { fontSize: '12px', color: '#888888', margin: 0 }