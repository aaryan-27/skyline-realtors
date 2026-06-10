-- ─────────────────────────────────────────────────────────────
-- GOPAL ESTATES Gurgaon Since 2008 — Supabase schema for lead capture
-- Run in the Supabase SQL editor (Project → SQL → New query)
-- ─────────────────────────────────────────────────────────────

create table if not exists public.leads (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  phone       text not null,
  email       text,
  budget      text,
  interest    text,
  location    text,
  project     text,
  message     text,
  source      text default 'website',
  created_at  timestamptz not null default now()
);

-- Useful indexes for the admin/CRM views
create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_source_idx on public.leads (source);

-- Row Level Security: inserts happen server-side with the service-role key
-- (which bypasses RLS), so keep RLS on and grant no public access.
alter table public.leads enable row level security;

-- Optional: allow authenticated dashboard users to read leads.
-- create policy "Authenticated can read leads"
--   on public.leads for select
--   to authenticated
--   using (true);
