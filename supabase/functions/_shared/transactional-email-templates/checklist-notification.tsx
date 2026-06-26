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
}

const Email = ({ name = 'Unknown', email = 'unknown@example.com' }: Props) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>New checklist lead: {name} ({email})</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={badge}>
          <Text style={badgeText}>NEW CHECKLIST LEAD</Text>
        </Section>
        <Heading style={h1}>{name} downloaded the checklist</Heading>
        <Section style={card}>
          <Text style={row}><span style={label}>Name: </span><span style={value}>{name}</span></Text>
          <Text style={row}><span style={label}>Email: </span><span style={value}>{email}</span></Text>
        </Section>
        <Hr style={hr} />
        <Text style={footer}>
          A copy of the checklist email was also sent to {email}.
        </Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: Email,
  subject: (data: Record<string, unknown>) =>
    `New checklist lead — ${(data.name as string) || 'New subscriber'}`,
  displayName: 'Internal: checklist lead notification',
  to: 'hello@hellowebby.com',
  previewData: { name: 'Jane Doe', email: 'jane@acme.com' },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: '"Plus Jakarta Sans", Arial, sans-serif' }
const container = { maxWidth: '560px', margin: '0 auto', padding: '32px 24px' }
const badge = { display: 'inline-block', padding: '6px 12px', backgroundColor: '#FFD500', borderRadius: '999px', marginBottom: '16px' }
const badgeText = { margin: 0, fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', color: '#111111' }
const h1 = { fontSize: '24px', lineHeight: '1.2', fontWeight: 700, color: '#111111', margin: '0 0 16px' }
const card = { backgroundColor: '#FFFBE6', border: '1px solid #111111', borderRadius: '16px', padding: '20px 22px' }
const row = { fontSize: '14px', margin: '4px 0', color: '#111111' }
const label = { fontWeight: 600, color: '#555555' }
const value = { color: '#111111' }
const hr = { borderColor: '#eeeeee', margin: '28px 0 16px' }
const footer = { fontSize: '12px', color: '#888888', margin: 0 }
