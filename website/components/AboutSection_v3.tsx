'use client';

import { Business } from '@/lib/supabase';

type Props = {
  business: Business;
};

export default function AboutSection({ business }: Props) {
  const primaryColor = business.logo_primary_color || '#3b82f6';

  return (
    <section className="py-32 lg:py-40 bg-white" id="about">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row" style={{ gap: '64px', alignItems: 'center' }}>
          {/* Image Side - 50% on desktop */}
          <div className="w-full lg:w-1/2 lg:flex-shrink-0">
            <div style={{ height: '500px', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.15)' }} className="lg:h-[700px]">
              <img
                src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?q=80&w=2000&auto=format&fit=crop"
                alt="Professional plumber at work"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>

          {/* Content Side - 50% on desktop */}
          <div className="w-full lg:w-1/2 lg:flex-shrink-0">
            <h2 className="text-5xl lg:text-7xl font-black mb-8" style={{ lineHeight: '1.1', color: primaryColor }}>
              {business.name}
            </h2>

            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed mb-14">
              We deliver expert plumbing solutions throughout Birmingham, AL.
              Our licensed technicians provide quality workmanship and outstanding customer
              service on every job.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', rowGap: '24px' }}>
              <div style={{ display: 'flex', gap: '16px' }}>
                <div style={{
                  flexShrink: 0,
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: `${primaryColor}15`
                }}>
                  <svg style={{ width: '28px', height: '28px', color: primaryColor }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900 mb-1">Licensed & Insured</div>
                  <div className="text-sm text-gray-600">Certified professionals</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px' }}>
                <div style={{
                  flexShrink: 0,
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: `${primaryColor}15`
                }}>
                  <svg style={{ width: '28px', height: '28px', color: primaryColor }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900 mb-1">24/7 Available</div>
                  <div className="text-sm text-gray-600">Emergency service</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px' }}>
                <div style={{
                  flexShrink: 0,
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: `${primaryColor}15`
                }}>
                  <svg style={{ width: '28px', height: '28px', color: primaryColor }} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900 mb-1">Upfront Pricing</div>
                  <div className="text-sm text-gray-600">No hidden fees</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px' }}>
                <div style={{
                  flexShrink: 0,
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: `${primaryColor}15`
                }}>
                  <svg style={{ width: '28px', height: '28px', color: primaryColor }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900 mb-1">Local Experts</div>
                  <div className="text-sm text-gray-600">Birmingham & area</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
