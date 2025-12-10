'use client';

import { Business } from '@/lib/supabase';
import { formatPhone } from '@/utils/business';

type Props = {
  business: Business;
};

// VERSION 1: Overlapping Card Design
export default function AboutSection({ business }: Props) {
  const primaryColor = business.logo_primary_color || '#3b82f6';

  return (
    <section className="relative py-32 bg-gray-50 overflow-hidden" id="about">
      <div className="relative">
        {/* Background Image */}
        <div className="absolute left-0 top-0 w-[55%] h-full">
          <img
            src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=2000&auto=format&fit=crop"
            alt="Professional plumbing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Content Card */}
        <div className="relative max-w-7xl mx-auto px-8">
          <div className="ml-auto w-full lg:w-[60%] bg-white rounded-3xl shadow-2xl p-12 lg:p-16">
            <div className="inline-block px-6 py-2 rounded-full text-sm font-bold mb-6" style={{ backgroundColor: `${primaryColor}20`, color: primaryColor }}>
              ABOUT US
            </div>

            <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-8 leading-tight">
              Birmingham's #1 Plumbing Experts
            </h2>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {business.name} delivers professional plumbing solutions with a focus on quality,
              reliability, and customer satisfaction. Our licensed technicians are ready to handle
              any job, big or small.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-8 mb-10 py-8 border-y border-gray-200">
              <div>
                <div className="text-4xl font-black mb-2" style={{ color: primaryColor }}>
                  {business.reviews ? business.reviews.toLocaleString() : '500'}+
                </div>
                <div className="text-sm font-semibold text-gray-600 uppercase">Happy Customers</div>
              </div>
              <div>
                <div className="text-4xl font-black mb-2" style={{ color: primaryColor }}>
                  {business.rating || '5.0'}
                </div>
                <div className="text-sm font-semibold text-gray-600 uppercase">Star Rating</div>
              </div>
              <div>
                <div className="text-4xl font-black mb-2" style={{ color: primaryColor }}>24/7</div>
                <div className="text-sm font-semibold text-gray-600 uppercase">Availability</div>
              </div>
            </div>

            {/* CTA */}
            {business.phone && (
              <a
                href={`tel:${business.phone}`}
                className="inline-flex items-center gap-3 px-8 py-5 rounded-2xl text-xl font-black text-white transition-all hover:-translate-y-1"
                style={{
                  background: `linear-gradient(135deg, ${primaryColor} 0%, ${primaryColor}dd 100%)`,
                  boxShadow: `0 10px 30px ${primaryColor}40`
                }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                Call {formatPhone(business.phone)}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
