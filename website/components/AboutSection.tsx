'use client';

import { Business } from '@/lib/supabase';

type Props = {
  business: Business;
};

export default function AboutSection({ business }: Props) {
  const primaryColor = business.logo_primary_color || '#3b82f6';

  return (
    <section className="py-20 bg-white" id="about">
      <div className="w-full px-8">
        {/* Mobile */}
        <div className="lg:hidden space-y-8">
          <div className="w-full h-[400px] rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=2000&auto=format&fit=crop"
              alt="Professional plumbing"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              About {business.name}
            </h2>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              Professional plumbing services in Birmingham, AL. We provide expert solutions for all your residential and commercial plumbing needs.
            </p>
            <p className="text-base text-gray-600 mb-6 leading-relaxed">
              Licensed, insured, and committed to delivering quality workmanship and excellent customer service. Available 24/7 for emergency repairs.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: primaryColor }}></div>
                <span className="text-base text-gray-700">Licensed & Insured Professionals</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: primaryColor }}></div>
                <span className="text-base text-gray-700">24/7 Emergency Service Available</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: primaryColor }}></div>
                <span className="text-base text-gray-700">Upfront Pricing & Free Estimates</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: primaryColor }}></div>
                <span className="text-base text-gray-700">Serving Birmingham & Surrounding Areas</span>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden lg:flex lg:max-w-[1400px] lg:mx-auto">
          {/* Image - exactly 50% */}
          <div style={{ width: '50%', paddingRight: '32px' }}>
            <div className="h-[600px] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=2000&auto=format&fit=crop"
                alt="Professional plumbing"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text - exactly 50% */}
          <div style={{ width: '50%', paddingLeft: '32px' }}>
            <h2 className="text-6xl font-bold text-gray-900 mb-8 leading-tight">
              About {business.name}
            </h2>

            <p className="text-2xl text-gray-600 mb-6 leading-relaxed">
              Professional plumbing services in Birmingham, AL. We provide expert solutions for all your residential and commercial plumbing needs.
            </p>

            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Licensed, insured, and committed to delivering quality workmanship and excellent customer service. Available 24/7 for emergency repairs.
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: primaryColor }}></div>
                <span className="text-xl text-gray-700 font-medium">Licensed & Insured Professionals</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: primaryColor }}></div>
                <span className="text-xl text-gray-700 font-medium">24/7 Emergency Service Available</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: primaryColor }}></div>
                <span className="text-xl text-gray-700 font-medium">Upfront Pricing & Free Estimates</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: primaryColor }}></div>
                <span className="text-xl text-gray-700 font-medium">Serving Birmingham & Surrounding Areas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
