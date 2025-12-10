import { Business } from '@/lib/supabase';
import { isOpen24Hours } from '@/utils/business';
import { hexWithAlpha } from '@/utils/colors';

type Props = {
  business: Business;
};

export default function WhyChooseUsSection({ business }: Props) {
  const is24Hours = isOpen24Hours(business.working_hours);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Why Choose {business.name}?
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Trusted expertise and quality service you can count on
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left: Features */}
          <div className="space-y-6">
            {/* Feature 1 */}
            {business.verified && (
              <div className="flex gap-4">
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center text-xl"
                  style={{
                    backgroundColor: business.logo_primary_color || '#3b82f6',
                  }}
                >
                  <span className="text-white">✓</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    Google Verified Business
                  </h3>
                  <p className="text-sm text-gray-600">
                    Trusted and verified by Google for quality service
                  </p>
                </div>
              </div>
            )}

            {/* Feature 2 */}
            {business.rating && business.reviews && (
              <div className="flex gap-4">
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center text-xl"
                  style={{
                    backgroundColor: business.logo_primary_color || '#3b82f6',
                  }}
                >
                  <span className="text-white">⭐</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    Highly Rated Service
                  </h3>
                  <p className="text-sm text-gray-600">
                    {business.rating}/5 stars from {business.reviews.toLocaleString()}+ satisfied customers
                  </p>
                </div>
              </div>
            )}

            {/* Feature 3 - conditional */}
            {is24Hours && (
              <div className="flex gap-4">
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center text-xl"
                  style={{
                    backgroundColor: business.logo_primary_color || '#3b82f6',
                  }}
                >
                  <span className="text-white">⚡</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    24/7 Emergency Service
                  </h3>
                  <p className="text-sm text-gray-600">
                    Available around the clock for your plumbing emergencies
                  </p>
                </div>
              </div>
            )}

            {/* Feature 4 */}
            <div className="flex gap-4">
              <div
                className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center text-xl"
                style={{
                  backgroundColor: business.logo_primary_color || '#3b82f6',
                }}
              >
                <span className="text-white">📍</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  Local Experts
                </h3>
                <p className="text-sm text-gray-600">
                  Proudly serving Birmingham, AL and surrounding areas
                </p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="flex gap-4">
              <div
                className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center text-xl"
                style={{
                  backgroundColor: business.logo_primary_color || '#3b82f6',
                }}
              >
                <span className="text-white">🛡️</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  Licensed & Insured
                </h3>
                <p className="text-sm text-gray-600">
                  Fully licensed and insured for your peace of mind
                </p>
              </div>
            </div>
          </div>

          {/* Right: Reviews Display */}
          <div>
            {/* Rating Summary */}
            {business.rating && business.reviews && (
              <>
                <div
                  className="bg-white rounded-xl p-8 mb-6 text-center border-l-4 shadow-lg"
                  style={{ borderColor: business.logo_primary_color || '#3b82f6' }}
                >
                  <div className="flex justify-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className="text-3xl"
                        style={{
                          color:
                            i < Math.floor(business.rating!)
                              ? business.logo_primary_color || '#f59e0b'
                              : '#E5E7EB',
                        }}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <div className="text-4xl font-bold mb-2" style={{
                    color: business.logo_primary_color || '#3b82f6'
                  }}>
                    {business.rating}/5
                  </div>
                  <div className="text-sm text-gray-600">
                    Based on {business.reviews.toLocaleString()} reviews
                  </div>
                </div>

                {/* Sample Review */}
                <div className="mb-6">
                  <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md">
                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className="text-lg"
                          style={{ color: business.logo_primary_color || '#f59e0b' }}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <p className="text-base text-gray-700 italic mb-3">
                      "Excellent service! Fast, professional, and fair pricing."
                    </p>
                    <p className="text-xs text-gray-500">- Google Review</p>
                  </div>
                </div>

                {/* CTA */}
                {business.reviews_link && (
                  <a
                    href={business.reviews_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center px-6 py-3 rounded-lg text-sm font-semibold border-2 transition-all hover:bg-gray-50"
                    style={{
                      borderColor: business.logo_primary_color || '#3b82f6',
                      color: business.logo_primary_color || '#3b82f6',
                    }}
                  >
                    Read All Reviews on Google →
                  </a>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
