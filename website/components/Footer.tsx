import { Business } from '@/lib/supabase';
import { formatPhone, getWorkingHoursDisplay } from '@/utils/business';
import Image from 'next/image';

type Props = {
  business: Business;
};

export default function Footer({ business }: Props) {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Logo & Tagline */}
          <div>
            {business.logo_clean && (
              <div className="mb-4">
                <Image
                  src={business.logo_clean}
                  alt={business.name}
                  width={120}
                  height={60}
                  style={{ width: 'auto', height: '50px', filter: 'brightness(0) invert(1)' }}
                  unoptimized
                />
              </div>
            )}
            <p className="text-gray-400 text-sm">
              Birmingham's trusted plumbing experts
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-bold text-base mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#service-area" className="text-gray-400 hover:text-white transition-colors">
                  Service Area
                </a>
              </li>
              {business.reviews_link && (
                <li>
                  <a
                    href={business.reviews_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Reviews
                  </a>
                </li>
              )}
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="font-bold text-base mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Emergency Plumbing</li>
              <li>Drain Cleaning</li>
              <li>Water Heaters</li>
              <li>Leak Detection</li>
              <li>Sewer Lines</li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="font-bold text-base mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm text-gray-400">
              {business.phone && (
                <div className="flex items-start gap-2">
                  <span className="flex-shrink-0">📞</span>
                  <a
                    href={`tel:${business.phone}`}
                    className="hover:text-white transition-colors"
                  >
                    {formatPhone(business.phone)}
                  </a>
                </div>
              )}

              {business.email_1 && business.email_1_validator_status === 'RECEIVING' && (
                <div className="flex items-start gap-2">
                  <span className="flex-shrink-0">📧</span>
                  <a
                    href={`mailto:${business.email_1}`}
                    className="hover:text-white transition-colors break-all"
                  >
                    {business.email_1}
                  </a>
                </div>
              )}

              {business.full_address && (
                <div className="flex items-start gap-2">
                  <span className="flex-shrink-0">📍</span>
                  <span>{business.full_address}</span>
                </div>
              )}

              <div className="flex items-start gap-2">
                <span className="flex-shrink-0">⏰</span>
                <span>{getWorkingHoursDisplay(business.working_hours)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 text-center text-gray-400">
          <p className="mb-2 text-sm">
            © {new Date().getFullYear()} {business.name}. All rights reserved.
          </p>
          <p className="text-xs">
            Website powered by{' '}
            <a href="https://atlasgrowth.ai" className="hover:text-white transition-colors">
              AtlasGrowth.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
