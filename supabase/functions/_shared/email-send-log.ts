import { createClient } from 'npm:@supabase/supabase-js@2'

export type EmailLogStatus = 'sent' | 'suppressed' | 'failed'

/**
 * Appends a row to the app's email_send_log table. Logging never decides the
 * send result — failures are logged and swallowed.
 */
export async function logEmailSend(params: {
  templateName: string
  recipientEmail: string
  status: EmailLogStatus
  errorMessage?: string
}): Promise<void> {
  const supabaseUrl = Deno.env.get('SUPABASE_URL')
  const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')
  if (!supabaseUrl || !supabaseServiceKey) {
    console.error('email_send_log skipped: missing Supabase environment variables')
    return
  }

  const supabase = createClient(supabaseUrl, supabaseServiceKey)
  const { error } = await supabase.from('email_send_log').insert({
    message_id: null,
    template_name: params.templateName,
    recipient_email: params.recipientEmail,
    status: params.status,
    error_message: params.errorMessage?.slice(0, 1000) ?? null,
  })

  if (error) {
    console.error('Failed to write email_send_log', {
      code: error.code,
      message: error.message,
    })
  }
}
