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

export interface PaymentLineItem {
  description: string
  amountTotal: string
  recurringLabel?: string | null
}

interface Props {
  customerEmail?: string | null
  total?: string
  lineItems?: PaymentLineItem[]
  sessionId?: string
  environment?: string
}

const Email = ({
  customerEmail,
  total = '—',
  lineItems = [],
  sessionId = '',
  environment = 'live',
}: Props) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>New payment received — {total}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={badge}>
          <Text style={badgeText}>
            {environment === 'sandbox' ? 'TEST PAYMENT' : 'NEW PAYMENT'} · VERIFIED BY STRIPE
          </Text>
        </Section>
        <Heading style={h1}>New payment received: {total}</Heading>
        <Section style={card}>
          <Text style={row}>
            <span style={label}>Customer: </span>
            <span style={value}>{customerEmail || '(no email captured)'}</span>
          </Text>
          {lineItems.length === 0 ? (
            <Text style={row}>(no line items)</Text>
          ) : (
            lineItems.map((li, i) => (
              <Text key={i} style={row}>
                <span style={value}>{li.description}</span>
                {li.recurringLabel ? <span style={label}> ({li.recurringLabel})</span> : null}
                <span style={value}> — {li.amountTotal}</span>
              </Text>
            ))
          )}
          <Text style={totalRow}>Total paid: {total}</Text>
        </Section>
        <Hr style={hr} />
        <Text style={footer}>
          This alert is sent only after Stripe confirms the payment. Stripe session: {sessionId}
        </Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: Email,
  subject: (data: Record<string, unknown>) => {
    const prefix = data.environment === 'sandbox' ? '[TEST] ' : ''
    const who = data.customerEmail ? ` from ${data.customerEmail}` : ''
    return `${prefix}New payment — ${(data.total as string) || ''}${who}`
  },
  displayName: 'Internal: verified payment notification',
  to: 'hello@hellowebby.com',
  previewData: {
    customerEmail: 'jane@acme.com',
    total: '€89.00',
    lineItems: [{ description: 'Growth plan', amountTotal: '€89.00', recurringLabel: 'every month' }],
    sessionId: 'cs_test_123',
    environment: 'live',
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: '"Plus Jakarta Sans", Arial, sans-serif' }
const container = { maxWidth: '560px', margin: '0 auto', padding: '32px 24px' }
const badge = { display: 'inline-block', padding: '6px 12px', backgroundColor: '#FFD500', borderRadius: '999px', marginBottom: '16px' }
const badgeText = { margin: 0, fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', color: '#111111' }
const h1 = { fontSize: '24px', lineHeight: '1.2', fontWeight: 700, color: '#111111', margin: '0 0 16px' }
const card = { backgroundColor: '#FFFBE6', border: '1px solid #111111', borderRadius: '16px', padding: '20px 22px' }
const row = { fontSize: '14px', margin: '4px 0', color: '#111111' }
const totalRow = { fontSize: '15px', margin: '12px 0 0', fontWeight: 700, color: '#111111' }
const label = { fontWeight: 600, color: '#555555' }
const value = { color: '#111111' }
const hr = { borderColor: '#eeeeee', margin: '28px 0 16px' }
const footer = { fontSize: '12px', color: '#888888', margin: 0 }
