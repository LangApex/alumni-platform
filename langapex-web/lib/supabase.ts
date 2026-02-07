import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types for our data
export interface Event {
  id?: string;
  name: string;
  guest: string;
  attendees: number;
  format: 'online' | 'offline';
  details: string;
  time: string;
  type: string;
  venue?: string;
  zoom_link?: string;
  created_at?: string;
  updated_at?: string;
}

export interface Gallery {
  id?: string;
  title: string;
  description: string;
  image_url: string;
  event_name?: string;
  date: string;
  created_at?: string;
  updated_at?: string;
}
