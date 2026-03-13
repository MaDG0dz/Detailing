'use client';
import React, { useEffect, useRef, useState } from 'react';

const plans = [
  {
    name: 'Basis',
    subtitle: 'Exterieur opfris',
    price: '149',
    period: 'per behandeling',
    description: 'Perfecte opfrisbeurt voor uw dagelijkse rijder.',
    features: [
      'Handwas & droging',
      'Bandenwas & velgenreiniging',
      'Ruitenreiniging',
      'Interieur stofzuigen',
      'Carnauba wax',
    ],
    cta: 'Boek Basis',
    featured: false,
  },
  {
    name: 'Premium',
    subtitle: 'Volledig pakket',
    price: '349',
    period: 'per behandeling',
    description: 'De meest gekozen behandeling — buiten én binnen perfect.',
    features: [
      'Alles uit Basis',
      'Kleibehandeling lak',
      'Machine polijsten (1-fase)',
      'Stoomreiniging interieur',
      'Leerbehandeling',
      'Hydrofobe glascoating',
    ],
    cta: 'Boek Premium',
    featured: true,
  },
  {
    name: 'Elite',
    subtitle: 'Keramische coating',
    price: '899',
    period: 'per behandeling',
    description: 'Maximale bescherming voor uw kostbare investering.',
    features: [
      'Alles uit Premium',
      'Paint Correction (2-fase)',
      '9H Keramische coating',
      '3 jaar garantie',
      'Velgen coating',
      'Fotoverslag & certificaat',
    ],
    cta: 'Boek Elite',
    featured: false,
  },
];

export default function PricingSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);

  useEffect(() => {
    const elements = sectionRef?.current?.querySelectorAll('.fade-up');
    if (!elements) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.08 }
    );
    elements?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="py-24 md:py-32 px-6 md:px-10 border-b"
      style={{ borderColor: 'rgba(255,255,255,0.06)', background: '#0D0D0D' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="fade-up mb-14">
          <span
            className="text-[10px] font-medium uppercase tracking-[0.3em] block mb-3"
            style={{ color: '#C9A84C' }}
          >
            05 — Prijzen
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-[#F5F5F0] leading-tight">
            Transparante{' '}
            <span className="italic font-light shimmer-text">
              tarieven.
            </span>
          </h2>
        </div>

        {/* Pricing grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {plans?.map((plan, i) => (
            <div
              key={plan?.name}
              onMouseEnter={() => setHoveredPlan(plan?.name)}
              onMouseLeave={() => setHoveredPlan(null)}
              className={`pricing-card fade-up fade-up-delay-${i + 1} relative flex flex-col rounded-sm p-8 ${
                plan?.featured ? 'pricing-featured border-pulse' : 'card-glow'
              }`}
              style={{
                background: plan?.featured ? undefined : '#111111',
              }}
            >
              {plan?.featured && (
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 text-[10px] font-semibold uppercase tracking-widest"
                  style={{ background: '#C9A84C', color: '#000' }}
                >
                  Meest Populair
                </div>
              )}

              <div className="mb-6">
                <p
                  className="text-[10px] font-medium uppercase tracking-[0.25em] mb-1"
                  style={{ color: 'rgba(201,168,76,0.6)' }}
                >
                  {plan?.subtitle}
                </p>
                <h3 className="font-display text-2xl font-medium mb-3 transition-colors duration-300"
                  style={{ color: hoveredPlan === plan?.name ? '#E8C96A' : '#F5F5F0' }}>
                  {plan?.name}
                </h3>
                <p className="text-sm text-zinc-400 font-light leading-relaxed">
                  {plan?.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-8 pb-8" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="flex items-baseline gap-1">
                  <span className="text-sm text-zinc-500 font-light">€</span>
                  <span
                    className="font-display text-5xl font-medium transition-all duration-300"
                    style={{
                      color: hoveredPlan === plan?.name ? '#E8C96A' : '#F5F5F0',
                      textShadow: hoveredPlan === plan?.name ? '0 0 30px rgba(201,168,76,0.3)' : 'none'
                    }}>
                    {plan?.price}
                  </span>
                </div>
                <span className="text-[11px] text-zinc-500 uppercase tracking-wider">
                  {plan?.period}
                </span>
              </div>

              {/* Features */}
              <ul className="flex flex-col gap-3 mb-10 flex-1">
                {plan?.features?.map((f, fi) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 text-sm font-light transition-colors duration-300"
                    style={{
                      color: hoveredPlan === plan?.name ? '#A1A1AA' : '#71717A',
                      transitionDelay: `${fi * 30}ms`
                    }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#C9A84C"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-0.5 flex-shrink-0 transition-transform duration-300"
                      style={{ transform: hoveredPlan === plan?.name ? 'scale(1.2)' : 'scale(1)' }}
                    >
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#book"
                className={`w-full flex items-center justify-center gap-2 py-3.5 text-xs font-semibold uppercase tracking-widest transition-all duration-300 rounded-sm active:scale-95 ${
                  plan?.featured
                    ? 'bg-[#C9A84C] text-black hover:bg-[#E8C96A]'
                    : 'border text-[#C9A84C] hover:bg-[#C9A84C] hover:text-black'
                }`}
                style={
                  !plan?.featured
                    ? { borderColor: 'rgba(201,168,76,0.35)' }
                    : undefined
                }
              >
                {plan?.cta}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-300 group-hover:translate-x-1">
                  <path d="M5 12h14m-7-7 7 7-7 7"/>
                </svg>
              </a>
            </div>
          ))}
        </div>

        <p className="fade-up mt-6 text-center text-xs text-zinc-600 font-light">
          Prijzen zijn indicatief. Exact tarief na inspectie. Alle bedragen exclusief BTW.
        </p>
      </div>
    </section>
  );
}