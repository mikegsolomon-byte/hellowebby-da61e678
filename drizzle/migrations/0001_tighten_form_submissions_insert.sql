DROP POLICY IF EXISTS "Anyone can submit forms" ON public.form_submissions;
CREATE POLICY "Anyone can submit valid forms" ON public.form_submissions
FOR INSERT TO anon, authenticated
WITH CHECK (
  char_length(btrim(name)) BETWEEN 2 AND 100
  AND char_length(email) BETWEEN 3 AND 255
  AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  AND char_length(message) BETWEEN 1 AND 15000
  AND char_length(pricing_plan) BETWEEN 1 AND 200
  AND (phone IS NULL OR char_length(phone) <= 40)
  AND (company IS NULL OR char_length(company) <= 200)
);