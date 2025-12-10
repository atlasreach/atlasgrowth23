'use client';

import { Business } from '@/lib/supabase';
import { formatPhone, getHeroImage } from '@/utils/business';

type Props = {
  business: Business;
};

export default function HeroSection({ business }: Props) {
  const heroImage = getHeroImage(business);

  const backgroundImage = heroImage.startsWith('/images/')
    ? 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&w=2435&auto=format&fit=crop'
    : heroImage;

  return (
    <section className="relative min-h-[65vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 py-20 flex flex-col items-center justify-center text-white">
        {/* Business Name */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 max-w-5xl text-center leading-tight">
          {business.name}
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl lg:text-3xl mb-10 text-blue-100 max-w-3xl text-center font-medium">
          Professional Plumbing Services in Birmingham, AL
        </p>

        {/* Rating - Only show if 5 stars */}
        {business.rating === 5 && (
          <div className="flex items-center justify-center gap-3 mb-10 flex-wrap">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className="text-3xl md:text-4xl"
                  style={{
                    color: business.logo_primary_color || '#fbbf24',
                  }}
                >
                  ★
                </span>
              ))}
            </div>
            <div className="text-2xl md:text-3xl font-bold">{business.rating}/5</div>
            {business.reviews && (
              <div className="text-lg md:text-xl text-blue-200">
                ({business.reviews.toLocaleString()} reviews)
              </div>
            )}
          </div>
        )}

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          {business.phone && (
            <a
              href={`tel:${business.phone}`}
              className="group relative w-full sm:w-auto overflow-hidden"
            >
              <div
                className="px-14 py-6 rounded-2xl text-2xl font-black text-white transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
                style={{
                  background: `linear-gradient(135deg, ${business.logo_primary_color || '#3b82f6'} 0%, ${business.logo_primary_color || '#3b82f6'}dd 100%)`,
                  boxShadow: `0 15px 45px ${business.logo_primary_color || '#3b82f6'}60`
                }}
              >
                <span className="relative z-10 flex items-center gap-3">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  <span>{formatPhone(business.phone)}</span>
                </span>
                <div
                  className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                ></div>
              </div>
            </a>
          )}
          <a
            href="#contact"
            className="group relative w-full sm:w-auto overflow-hidden"
          >
            <div
              className="px-14 py-6 rounded-2xl text-2xl font-black bg-white transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              style={{
                color: business.logo_primary_color || '#3b82f6',
                boxShadow: '0 15px 45px rgba(0,0,0,0.3)',
                border: `3px solid ${business.logo_primary_color || '#3b82f6'}`
              }}
            >
              <span className="relative z-10 flex items-center gap-3">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <span>GET FREE QUOTE</span>
              </span>
            </div>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white text-4xl opacity-70 hover:opacity-100 transition-opacity">
          ↓
        </a>
      </div>
    </section>
  );
}
