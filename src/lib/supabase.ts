import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Profile {
  id: string;
  name: string;
  title: string;
  bio: string;
  profile_image: string | null;
  resume_url: string | null;
  email: string | null;
  location: string | null;
}

export interface Skill {
  id: string;
  name: string;
  icon_url: string | null;
  category: string;
  order_index: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image_url: string | null;
  demo_url: string | null;
  github_url: string | null;
  tech_stack: string[];
  order_index: number;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  description: string;
  start_date: string;
  end_date: string | null;
  location: string | null;
  order_index: number;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issue_date: string;
  credential_id: string | null;
  credential_url: string | null;
  order_index: number;
}

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  icon: string;
  order_index: number;
}
