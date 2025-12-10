'use client';

import { Business } from '@/lib/supabase';
import { formatPhone } from '@/utils/business';

type Props = {
  business: Business;
};

// VERSION 2: Stats Hero Style
export default function AboutSection({ business }: Props) {
  const primaryColor = business.logo_primary_color || '#3b82f6';

  return (
    <section className="py-20 bg-white" id="about">
      {/* Hero Image with Overlay */}
      <div className="relative h-[500px] mb-16">
        <img
          src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=2000&auto=format&fit=crop"
          alt="Professional plumbing"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>

        {/* Overlay Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-8 w-full">
            <h2 className="text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
              {business.name}
            </h2>
            <p className="text-2xl text-white/90 max-w-2xl font-medium">
              Professional plumbing services in Birmingham, AL. Licensed, insured, and ready to serve.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Boxes */}
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-xl border-t-4" style={{ borderColor: primaryColor }}>
            <div className="text-5xl font-black mb-3" style={{ color: primaryColor }}>
              {business.reviews ? business.reviews.toLocaleString() : '500'}+
            </div>
            <div className="text-lg font-bold text-gray-900">Happy Customers</div>
            <div className="text-sm text-gray-500 mt-2">Served in Birmingham area</div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl border-t-4" style={{ borderColor: primaryColor }}>
            <div className="text-5xl font-black mb-3" style={{ color: primaryColor }}>
              {business.rating || '5.0'}
            </div>
            <div className="text-lg font-bold text-gray-900">Star Rating</div>
            <div className="text-sm text-gray-500 mt-2">Google verified reviews</div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl border-t-4" style={{ borderColor: primaryColor }}>
            <div className="text-5xl font-black mb-3" style={{ color: primaryColor }}>24/7</div>
            <div className="text-lg font-bold text-gray-900">Emergency Service</div>
            <div className="text-sm text-gray-500 mt-2">Always available</div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl border-t-4" style={{ borderColor: primaryColor }}>
            <div className="text-5xl font-black mb-3" style={{ color: primaryColor }}>10+</div>
            <div className="text-lg font-bold text-gray-900">Years Experience</div>
            <div className="text-sm text-gray-500 mt-2">Local expertise</div>
          </div>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Us</h3>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              We're not just another plumbing company. We're your neighbors, committed to delivering
              exceptional service with integrity and professionalism.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: `${primaryColor}20` }}>
                  <svg className="w-6 h-6" style={{ color: primaryColor }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="text-lg font-semibold text-gray-900">Licensed & Insured Technicians</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: `${primaryColor}20` }}>
                  <svg className="w-6 h-6" style={{ color: primaryColor }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="text-lg font-semibold text-gray-900">Upfront, Transparent Pricing</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: `${primaryColor}20` }}>
                  <svg className="w-6 h-6" style={{ color: primaryColor }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="text-lg font-semibold text-gray-900">Same-Day Service Available</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            {business.phone && (
              <div className="text-center">
                <div className="text-xl text-gray-600 mb-4 font-semibold">Ready to get started?</div>
                <a
                  href={`tel:${business.phone}`}
                  className="inline-block px-12 py-6 rounded-2xl text-3xl font-black text-white transition-all hover:scale-105"
                  style={{
                    background: `linear-gradient(135deg, ${primaryColor} 0%, ${primaryColor}dd 100%)`,
                    boxShadow: `0 20px 40px ${primaryColor}40`
                  }}
                >
                  {formatPhone(business.phone)}
                </a>
                <div className="text-sm text-gray-500 mt-4">Call now for immediate assistance</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
