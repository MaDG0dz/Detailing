import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import MarqueeSection from './components/MarqueeSection';
import ServicesSection from './components/ServicesSection';
import ProcessSection from './components/ProcessSection';
import TestimonialsSection from './components/TestimonialsSection';
import PricingSection from './components/PricingSection';
import BookingSection from './components/BookingSection';

export const metadata: Metadata = {
  title: 'AutoDetail — Premium Car Detailing in the Netherlands',
  description:
    'AutoDetail biedt professionele autodetailing in Nederland. Van interieur reiniging tot keramische coating — uw auto verdient het beste.',
  openGraph: {
    title: 'AutoDetail — Premium Detailing NL',
    description: 'Showroom-kwaliteit voor uw voertuig.',
    images: [{ url: '/assets/images/app_logo.png', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: '/homepage',
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#F5F5F0] overflow-x-hidden">
      {/* Film grain texture overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'AutoDetail',
            description:
              'Professionele autodetailing in Nederland. Exterieur, interieur en keramische coating.',
            url: 'https://autodetail.nl',
            telephone: '+31201234567',
            address: {
              '@type': 'PostalAddress',
              addressCountry: 'NL',
            },
            priceRange: '€€€',
            serviceArea: {
              '@type': 'Country',
              name: 'Netherlands',
            },
            offers: [
              {
                '@type': 'Offer',
                name: 'Basis Pakket',
                price: '149',
                priceCurrency: 'EUR',
              },
              {
                '@type': 'Offer',
                name: 'Premium Pakket',
                price: '349',
                priceCurrency: 'EUR',
              },
              {
                '@type': 'Offer',
                name: 'Elite Keramische Coating',
                price: '899',
                priceCurrency: 'EUR',
              },
            ],
          }),
        }}
      />

      <Header />
      <HeroSection />
      <MarqueeSection />
      <ServicesSection />
      <ProcessSection />
      <TestimonialsSection />
      <PricingSection />
      <BookingSection />
      <Footer />
    </main>
  );
}