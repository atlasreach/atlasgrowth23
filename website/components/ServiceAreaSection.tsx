import { Business } from '@/lib/supabase';
import { formatPhone } from '@/utils/business';

type Props = {
  business: Business;
};

const BIRMINGHAM_AREAS = [
  'Birmingham',
  'Hoover',
  'Vestavia Hills',
  'Mountain Brook',
  'Homewood',
  'Irondale',
  'Trussville',
  'Gardendale',
  'Pelham',
  'Helena',
  'Alabaster',
  'Calera',
];

export default function ServiceAreaSection({ business }: Props) {
  return (
    <section id="service-area" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Service Areas
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Proudly serving Birmingham and surrounding areas
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left: Map */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200">
            {business.latitude && business.longitude ? (
              <iframe
                width="100%"
                height="400"
                frameBorder="0"
                style={{ border: 0 }}
                src={`https://www.google.com/maps?q=${business.latitude},${business.longitude}&z=11&output=embed`}
                allowFullScreen
              />
            ) : (
              <div className="w-full h-[400px] bg-gray-200 flex items-center justify-center">
                <p className="text-base text-gray-500">Map not available</p>
              </div>
            )}
          </div>

          {/* Right: Service Areas List */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Areas We Serve
            </h3>

            <div className="grid grid-cols-2 gap-4 mb-6">
              {BIRMINGHAM_AREAS.map((area) => (
                <div key={area} className="flex items-center gap-2">
                  <div
                    className="flex-shrink-0 w-6 h-6 rounded flex items-center justify-center text-white text-xs font-bold"
                    style={{ backgroundColor: business.logo_primary_color || '#3b82f6' }}
                  >
                    ✓
                  </div>
                  <span className="text-sm font-medium text-gray-700">{area}</span>
                </div>
              ))}
            </div>

            <p className="text-sm text-gray-600 mb-6">
              {business.full_address && (
                <><strong>Based in {business.full_address}.</strong> </>
              )}
              We serve all of Birmingham and the surrounding metropolitan area within a
              20-mile radius.
            </p>

            {business.phone && (
              <a
                href={`tel:${business.phone}`}
                className="inline-block px-6 py-3 rounded-lg text-base font-semibold text-white transition-all hover:scale-105 shadow-lg"
                style={{ backgroundColor: business.logo_primary_color || '#3b82f6' }}
              >
                <span className="flex items-center gap-2">
                  <span>📞</span>
                  <span>Call: {formatPhone(business.phone)}</span>
                </span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
