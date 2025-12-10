import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { supabase, Business } from '@/lib/supabase';
import {
  getHeroImage,
  isOpen24Hours,
  formatPhone,
  getWorkingHoursDisplay,
  getServicesFromAbout,
} from '@/utils/business';
import { hexWithAlpha } from '@/utils/colors';
import BusinessHeader from '@/components/BusinessHeader';
import HeroSection from '@/components/HeroSection';
import AboutSection_v1 from '@/components/AboutSection_v1';
import AboutSection_v2 from '@/components/AboutSection_v2';
import AboutSection_v3 from '@/components/AboutSection_v3';

type Props = {
  params: Promise<{ slug: string }>;
};

async function getBusiness(slug: string): Promise<Business | null> {
  const { data, error } = await supabase
    .from('businesses')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error || !data) {
    return null;
  }

  return data as Business;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const business = await getBusiness(slug);

  if (!business) {
    return {
      title: 'Business Not Found',
    };
  }

  return {
    title: `${business.name} | Plumber in Birmingham, AL`,
    description: `${business.name} - Rated ${business.rating}/5 with ${business.reviews} reviews. Call ${business.phone} for plumbing services in Birmingham, AL.`,
    robots: business.is_seo_indexed
      ? 'index, follow'
      : 'noindex, nofollow',
  };
}

export default async function BusinessPage({ params }: Props) {
  const { slug } = await params;
  const business = await getBusiness(slug);

  if (!business) {
    notFound();
  }

  return (
    <div>
      {/* Header */}
      <BusinessHeader business={business} />

      {/* Preview Banner */}
      {!business.is_live && (
        <div className="bg-yellow-100 border-b border-yellow-300 px-4 py-2 text-center text-sm mt-32">
          <strong>Preview Mode</strong> - This is a demo website for {business.name}
        </div>
      )}

      {/* Hero Section */}
      <HeroSection business={business} />

      {/* About Section */}
      <AboutSection_v3 business={business} />
    </div>
  );
}
