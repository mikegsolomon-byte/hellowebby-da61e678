DROP POLICY IF EXISTS "Anyone can submit forms" ON public.form_submissions;
CREATE POLICY "Anyone can submit forms"
ON public.form_submissions
FOR INSERT
TO anon, authenticated
WITH CHECK (true);