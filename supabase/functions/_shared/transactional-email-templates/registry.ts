import type { ComponentType } from 'npm:react@18.3.1'
import { template as contactNotification } from './contact-notification.tsx'
import { template as contactConfirmation } from './contact-confirmation.tsx'
import { template as checklistDelivery } from './checklist-delivery.tsx'
import { template as checklistNotification } from './checklist-notification.tsx'

export interface TemplateEntry {
  // deno-lint-ignore no-explicit-any
  component: ComponentType<any>
  subject: string | ((data: Record<string, unknown>) => string)
  displayName?: string
  previewData?: Record<string, unknown>
  to?: string | ((data: Record<string, unknown>) => string)
}

export const TEMPLATES: Record<string, TemplateEntry> = {
  'contact-notification': contactNotification,
  'contact-confirmation': contactConfirmation,
  'checklist-delivery': checklistDelivery,
  'checklist-notification': checklistNotification,
}