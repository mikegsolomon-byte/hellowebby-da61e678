-- Create form submissions table
CREATE TABLE public.form_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  message TEXT NOT NULL,
  pricing_plan TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.form_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (public form)
CREATE POLICY "Anyone can submit forms"
ON public.form_submissions
FOR INSERT
TO anon
WITH CHECK (true);

-- Create policy for viewing (only authenticated admins could view in future)
CREATE POLICY "Only authenticated users can view submissions"
ON public.form_submissions
FOR SELECT
TO authenticated
USING (true);

-- Create index for faster lookups
CREATE INDEX idx_form_submissions_created_at ON public.form_submissions(created_at DESC);
CREATE INDEX idx_form_submissions_email ON public.form_submissions(email);