create table if not exists public.subscriptions (
  id uuid primary key default gen_random_uuid(),
  stripe_subscription_id text not null unique,
  stripe_customer_id text not null,
  customer_email text,
  product_id text not null,
  price_id text not null,
  status text not null default 'active',
  current_period_start timestamptz,
  current_period_end timestamptz,
  cancel_at_period_end boolean default false,
  environment text not null default 'sandbox',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

grant all on public.subscriptions to service_role;

alter table public.subscriptions enable row level security;

create policy "Admins can view subscriptions"
  on public.subscriptions for select
  to authenticated
  using (public.has_role(auth.uid(), 'admin'));

create index if not exists idx_subscriptions_stripe_id on public.subscriptions(stripe_subscription_id);