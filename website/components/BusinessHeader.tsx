'use client';

import { Business } from '@/lib/supabase';
import { formatPhone, isOpen24Hours } from '@/utils/business';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

type Props = {
  business: Business;
};

export default function BusinessHeader({ business }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const primaryColor = business.logo_primary_color || '#3b82f6';
  const is24Hours = isOpen24Hours(business.working_hours);

  const businessEmail = `info@${business.name.toLowerCase().replace(/[^a-z0-9]/g, '')}.com`;
  const cityName = "Birmingham, AL";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
      {/* Mobile Layout */}
      <div className="lg:hidden">
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex-1"></div>
            <Link href={`/${business.slug}`} className="flex flex-col items-center gap-2">
              {business.logo_clean ? (
                <Image
                  src={business.logo_clean}
                  alt={business.name}
                  width={200}
                  height={70}
                  style={{ width: 'auto', height: '70px', maxWidth: '250px' }}
                  unoptimized
                />
              ) : (
                <span className="text-2xl font-bold text-gray-900">{business.name}</span>
              )}
            </Link>
            <div className="flex-1 flex justify-end">
              <button
                className="text-gray-700 hover:text-gray-900 transition-colors p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                <svg className="w-7 h-7" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center gap-2">
            {business.phone && (
              <a
                href={`tel:${business.phone}`}
                className="text-xl font-bold hover:opacity-80 transition-opacity"
                style={{ color: primaryColor }}
              >
                {formatPhone(business.phone)}
              </a>
            )}
            {business.rating === 5 && (
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className="text-2xl"
                    style={{ color: primaryColor }}
                  >
                    ★
                  </span>
                ))}
              </div>
            )}
          </div>

          {isMenuOpen && (
            <div className="mt-6 pb-4 border-t border-gray-200 pt-4">
              <div className="flex flex-col gap-4">
                <a href="#home" className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-lg py-2 text-center" onClick={() => setIsMenuOpen(false)}>
                  Home
                </a>
                <a href="#about" className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-lg py-2 text-center" onClick={() => setIsMenuOpen(false)}>
                  About
                </a>
                <a href="#services" className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-lg py-2 text-center" onClick={() => setIsMenuOpen(false)}>
                  Services
                </a>
                <a href="#reviews" className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-lg py-2 text-center" onClick={() => setIsMenuOpen(false)}>
                  Reviews
                </a>
                <a href="#contact" className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-lg py-2 text-center" onClick={() => setIsMenuOpen(false)}>
                  Contact
                </a>
                <a
                  href="#contact"
                  className="mt-2 px-8 py-4 rounded-lg font-bold text-white text-center hover:opacity-90 transition-all shadow-lg text-lg"
                  style={{ backgroundColor: primaryColor }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get A Quote
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block">
        {/* Top Bar - Contact Info */}
        <div className="border-b border-gray-200 relative" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="container mx-auto px-8 py-4">
            <div className="flex items-center justify-center">
              <div className="flex items-center gap-16">
                {/* Call */}
                {business.phone && (
                  <a
                    href={`tel:${business.phone}`}
                    className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                  >
                    <span className="text-2xl" style={{ color: primaryColor }}>📞</span>
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Call{is24Hours ? ' 24/7' : ''}
                      </span>
                      <span className="text-xl font-black" style={{ color: primaryColor }}>
                        {formatPhone(business.phone)}
                      </span>
                    </div>
                  </a>
                )}

                {/* Send Message */}
                <a
                  href="#contact"
                  className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                >
                  <span className="text-2xl" style={{ color: primaryColor }}>💬</span>
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Send a Message
                    </span>
                    <span className="text-xl font-black" style={{ color: primaryColor }}>
                      Text Us
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${businessEmail}`}
                  className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                >
                  <span className="text-2xl" style={{ color: primaryColor }}>✉️</span>
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Email
                    </span>
                    <span className="text-base font-black text-gray-900">
                      {businessEmail}
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-3">
                  <span className="text-2xl" style={{ color: primaryColor }}>📍</span>
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Location
                    </span>
                    <span className="text-base font-black text-gray-900">
                      {cityName}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Night Mode Toggle - Absolutely positioned */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="absolute right-8 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
              aria-label="Toggle night mode"
            >
              {isDarkMode ? (
                <span className="text-xl">☀️</span>
              ) : (
                <span className="text-xl">🌙</span>
              )}
            </button>
          </div>
        </div>

        {/* Bottom Row - Logo + Navigation */}
        <div className="bg-white">
          <div className="container mx-auto px-8 py-5">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link href={`/${business.slug}`} className="flex-shrink-0">
                {business.logo_clean ? (
                  <Image
                    src={business.logo_clean}
                    alt={business.name}
                    width={220}
                    height={75}
                    style={{ width: 'auto', height: '75px', maxWidth: '300px' }}
                    unoptimized
                  />
                ) : (
                  <span className="text-3xl font-bold text-gray-900">{business.name}</span>
                )}
              </Link>

              {/* Navigation */}
              <nav className="flex items-center gap-10">
                <a
                  href="#home"
                  className="text-lg font-bold text-gray-900 hover:text-gray-900 transition-all duration-300 relative pb-1"
                  onMouseEnter={(e) => {
                    const underline = e.currentTarget.querySelector('.nav-underline') as HTMLElement;
                    if (underline) underline.style.width = '100%';
                  }}
                  onMouseLeave={(e) => {
                    const underline = e.currentTarget.querySelector('.nav-underline') as HTMLElement;
                    if (underline) underline.style.width = '0%';
                  }}
                >
                  HOME
                  <span
                    className="nav-underline absolute bottom-0 left-0 h-0.5 transition-all duration-300"
                    style={{ width: '0%', backgroundColor: primaryColor }}
                  ></span>
                </a>
                <a
                  href="#about"
                  className="text-lg font-bold text-gray-900 hover:text-gray-900 transition-all duration-300 relative pb-1"
                  onMouseEnter={(e) => {
                    const underline = e.currentTarget.querySelector('.nav-underline') as HTMLElement;
                    if (underline) underline.style.width = '100%';
                  }}
                  onMouseLeave={(e) => {
                    const underline = e.currentTarget.querySelector('.nav-underline') as HTMLElement;
                    if (underline) underline.style.width = '0%';
                  }}
                >
                  ABOUT
                  <span
                    className="nav-underline absolute bottom-0 left-0 h-0.5 transition-all duration-300"
                    style={{ width: '0%', backgroundColor: primaryColor }}
                  ></span>
                </a>
                <a
                  href="#services"
                  className="text-lg font-bold text-gray-900 hover:text-gray-900 transition-all duration-300 relative pb-1"
                  onMouseEnter={(e) => {
                    const underline = e.currentTarget.querySelector('.nav-underline') as HTMLElement;
                    if (underline) underline.style.width = '100%';
                  }}
                  onMouseLeave={(e) => {
                    const underline = e.currentTarget.querySelector('.nav-underline') as HTMLElement;
                    if (underline) underline.style.width = '0%';
                  }}
                >
                  SERVICES
                  <span
                    className="nav-underline absolute bottom-0 left-0 h-0.5 transition-all duration-300"
                    style={{ width: '0%', backgroundColor: primaryColor }}
                  ></span>
                </a>
                <a
                  href="#reviews"
                  className="text-lg font-bold text-gray-900 hover:text-gray-900 transition-all duration-300 relative pb-1"
                  onMouseEnter={(e) => {
                    const underline = e.currentTarget.querySelector('.nav-underline') as HTMLElement;
                    if (underline) underline.style.width = '100%';
                  }}
                  onMouseLeave={(e) => {
                    const underline = e.currentTarget.querySelector('.nav-underline') as HTMLElement;
                    if (underline) underline.style.width = '0%';
                  }}
                >
                  REVIEWS
                  <span
                    className="nav-underline absolute bottom-0 left-0 h-0.5 transition-all duration-300"
                    style={{ width: '0%', backgroundColor: primaryColor }}
                  ></span>
                </a>
                <a
                  href="#contact"
                  className="text-lg font-bold text-gray-900 hover:text-gray-900 transition-all duration-300 relative pb-1"
                  onMouseEnter={(e) => {
                    const underline = e.currentTarget.querySelector('.nav-underline') as HTMLElement;
                    if (underline) underline.style.width = '100%';
                  }}
                  onMouseLeave={(e) => {
                    const underline = e.currentTarget.querySelector('.nav-underline') as HTMLElement;
                    if (underline) underline.style.width = '0%';
                  }}
                >
                  CONTACT
                  <span
                    className="nav-underline absolute bottom-0 left-0 h-0.5 transition-all duration-300"
                    style={{ width: '0%', backgroundColor: primaryColor }}
                  ></span>
                </a>
              </nav>

              {/* Get A Quote Button */}
              <a
                href="#contact"
                className="group relative px-10 py-4 rounded-xl font-black text-white transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${primaryColor} 0%, ${primaryColor}dd 100%)`,
                  boxShadow: `0 8px 25px ${primaryColor}50`
                }}
              >
                <span className="relative z-10 flex items-center gap-2 text-lg">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  GET A QUOTE
                </span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
