create table if not exists visits (
  id bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  path text not null,
  country text,
  region text,
  city text,
  referrer text,
  user_agent text,
  timezone text,
  screen_width smallint,
  screen_height smallint
);

create index if not exists visits_created_at_idx on visits (created_at desc);
create index if not exists visits_country_region_idx on visits (country, region);

alter table visits enable row level security;
