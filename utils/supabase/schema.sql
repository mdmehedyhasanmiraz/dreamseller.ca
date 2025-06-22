-- PROJECTS TABLE
create table projects (
  id uuid primary key default uuid_generate_v4(),
  project_name text not null,
  location text not null,
  address text not null,
  status text not null check (status in ('completed', 'ongoing', 'upcoming')),
  type text not null check (type in ('residential', 'commercial')),
  land_area numeric,
  land_orientation text,
  unit_size text,
  floors text,
  basements integer,
  features text[],
  image_url text,
  gallery text[],
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

create or replace function update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger set_updated_at
before update on projects
for each row
execute procedure update_updated_at_column();

-- Contact Form Submissions Table
create table contact_submissions (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  email text not null,
  phone text,
  subject text not null,
  message text not null,
  status text default 'new' check (status in ('new', 'read', 'replied', 'closed')),
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- Team Members Table
create table team_members (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  position text not null,
  photo_url text,
  bio text,
  email text,
  phone text,
  linkedin_url text,
  twitter_url text,
  order_index integer default 0,
  is_active boolean default true,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- Update triggers for updated_at columns
create trigger set_contact_submissions_updated_at
before update on contact_submissions
for each row
execute procedure update_updated_at_column();

create trigger set_team_members_updated_at
before update on team_members
for each row
execute procedure update_updated_at_column(); 