import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Business = {
  id: number;
  slug: string;
  name: string;
  site: string | null;
  category: string | null;
  phone: string | null;
  phone_carrier_type: string | null;
  full_address: string | null;
  latitude: number | null;
  longitude: number | null;
  rating: number | null;
  reviews: number | null;
  reviews_link: string | null;
  photos_count: number | null;
  working_hours: any;
  about: any;
  logo: string | null;
  logo_clean: string | null;
  logo_primary_color: string | null;
  logo_secondary_color: string | null;
  verified: boolean | null;
  location_link: string | null;
  location_reviews_link: string | null;
  place_id: string | null;
  google_id: string | null;
  email_1: string | null;
  email_1_validator_status: string | null;
  website_has_google_tag: boolean | null;
  is_live: boolean;
  is_seo_indexed: boolean;
  hero_image_url: string | null;
  created_at: string;
  updated_at: string;
};
