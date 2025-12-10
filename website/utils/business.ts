import { Business } from '@/lib/supabase';

export function getHeroImage(business: Business): string {
  // 1. Check if custom URL in database
  if (business.hero_image_url) {
    return business.hero_image_url;
  }

  // 2. Check if custom file exists for this slug
  // Note: In production, you'd check if file exists
  // For now, return default
  return '/images/hero-backgrounds/plumber-default.jpg';
}

export function isOpen24Hours(workingHours: any): boolean {
  if (!workingHours) return false;

  try {
    const hours = typeof workingHours === 'string' ? JSON.parse(workingHours) : workingHours;
    const mondayHours = hours?.Monday || hours?.monday || '';
    return mondayHours.toLowerCase().includes('24 hours') || mondayHours.toLowerCase().includes('24/7');
  } catch {
    return false;
  }
}

export function getServicesFromAbout(about: any): string[] {
  if (!about) return [];

  try {
    const aboutData = typeof about === 'string' ? JSON.parse(about) : about;
    const offerings = aboutData?.Offerings || aboutData?.offerings || {};

    return Object.keys(offerings).filter((key) => offerings[key] === true);
  } catch {
    return [];
  }
}

export function formatPhone(phone: string | null): string {
  if (!phone) return '';

  // Remove +1 and format as (XXX) XXX-XXXX
  const digits = phone.replace(/\D/g, '');
  const match = digits.match(/^1?(\d{3})(\d{3})(\d{4})$/);

  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }

  return phone;
}

export function getWorkingHoursDisplay(workingHours: any): string {
  if (!workingHours) return 'Contact for hours';

  try {
    const hours = typeof workingHours === 'string' ? JSON.parse(workingHours) : workingHours;

    // Check if 24/7
    if (isOpen24Hours(workingHours)) {
      return 'Open 24/7';
    }

    // Return Monday hours as example
    const mondayHours = hours?.Monday || hours?.monday;
    return mondayHours || 'Contact for hours';
  } catch {
    return 'Contact for hours';
  }
}
