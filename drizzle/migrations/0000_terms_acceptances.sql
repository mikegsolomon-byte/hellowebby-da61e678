create table public.terms_acceptances (
  id uuid primary key default gen_random_uuid(),
  customer_email text,
  plan_price_id text not null,
  terms_version text not null,
  accepted_at timestamptz not null default now(),
  stripe_session_id text,
  environment text,
  ip_address text,
  user_agent text
);
grant all on public.terms_acceptances to service_role;
grant select on public.terms_acceptances to authenticated;
alter table public.terms_acceptances enable row level security;
create policy "Admins can view terms acceptances" on public.terms_acceptances
  for select to authenticated using (public.has_role(auth.uid(), 'admin'));