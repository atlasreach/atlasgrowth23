import { Business } from '@/lib/supabase';
import { hexWithAlpha } from '@/utils/colors';

type Props = {
  business: Business;
};

const STANDARD_SERVICES = [
  {
    id: 1,
    name: 'Emergency Plumbing',
    description: '24/7 emergency repairs with fast response times',
    icon: '🚨',
    slug: 'emergency-plumbing',
  },
  {
    id: 2,
    name: 'Drain Cleaning',
    description: 'Professional drain cleaning and clog removal',
    icon: '🚿',
    slug: 'drain-cleaning',
  },
  {
    id: 3,
    name: 'Water Heater Service',
    description: 'Installation, repair, and maintenance of water heaters',
    icon: '🔥',
    slug: 'water-heater',
  },
  {
    id: 4,
    name: 'Leak Detection',
    description: 'Advanced leak detection and pipe repair services',
    icon: '💧',
    slug: 'leak-detection',
  },
  {
    id: 5,
    name: 'Bathroom & Kitchen',
    description: 'Fixture installation and plumbing for remodels',
    icon: '🚽',
    slug: 'bathroom-kitchen',
  },
  {
    id: 6,
    name: 'Sewer Line Service',
    description: 'Sewer line repair and video inspection',
    icon: '🔧',
    slug: 'sewer-line',
  },
];

export default function ServicesSection({ business }: Props) {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Our Services
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Expert plumbing solutions for your home or business
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {STANDARD_SERVICES.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100"
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-lg flex items-center justify-center mb-4 text-2xl"
                style={{
                  backgroundColor: business.logo_primary_color || '#3b82f6',
                }}
              >
                {service.icon}
              </div>

              {/* Service Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {service.name}
              </h3>
              <p className="text-sm text-gray-600 mb-4">{service.description}</p>
              <a
                href={`#contact`}
                className="inline-flex items-center gap-1 font-semibold text-sm transition-colors"
                style={{ color: business.logo_primary_color || '#3b82f6' }}
              >
                <span>Get Started</span>
                <span>→</span>
              </a>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href="#contact"
            className="inline-block px-6 py-3 rounded-lg text-base font-semibold text-white transition-all hover:scale-105 shadow-lg"
            style={{ backgroundColor: business.logo_primary_color || '#3b82f6' }}
          >
            Request Free Quote
          </a>
        </div>
      </div>
    </section>
  );
}
