'use client';
import React, { useEffect, useRef, useState } from 'react';

const services = [
  {
    id: '01',
    title: 'Exterieur Detailing',
    subtitle: 'Buitenkant behandeling',
    description: 'Diepgaande reiniging, kleibehandeling, één- of meerfase polijst en een beschermende waslaag. Uw lak glanst als nieuw.',
    features: ['Handwas & droging', 'Kleibehandeling', 'Machine polijsten', 'Carnauba wax'],
    image: "/assets/images/ai-generated-close-up-of-professional-car-wash-black-sports-car-being-shampooed-for-a-sparkling-clean-finish-free-photo-1773430568892.jpg",
    span: 'lg:col-span-7 lg:row-span-2',
    tall: true
  },
  {
    id: '02',
    title: 'Interieur Detailing',
    subtitle: 'Binnenste behandeling',
    description: 'Stoomreiniging, leerbehandeling en odour-eliminatie. Uw interieur oogt en ruikt als showroom.',
    features: ['Stoomreiniging', 'Leer conditionering', 'Geurverwijdering'],
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f5688a00-1773428144402.png",
    span: 'lg:col-span-5',
    tall: false
  },
  {
    id: '03',
    title: 'Keramische Coating',
    subtitle: 'Langdurige bescherming',
    description: '9H hardheid, hydrofobe eigenschappen en 3–5 jaar bescherming in één behandeling.',
    features: ['9H keramische laag', 'Hydrofobe coating', '3–5 jaar garantie'],
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d480b0bf-1773428144306.png",
    span: 'lg:col-span-5',
    tall: false
  }
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

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
      id="services"
      ref={sectionRef}
      className="py-24 md:py-32 px-6 md:px-10 border-b"
      style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="fade-up flex items-end justify-between mb-14 gap-6">
          <div>
            <span
              className="text-[10px] font-medium uppercase tracking-[0.3em] block mb-3"
              style={{ color: '#C9A84C' }}>
              02 — Diensten
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-[#F5F5F0] leading-tight">
              Wat wij<br />
              <span className="italic font-light shimmer-text">
                bieden.
              </span>
            </h2>
          </div>
          <p className="hidden md:block text-sm text-zinc-500 font-light leading-relaxed max-w-xs text-right">
            Van een snelle opfrisbeurt tot een volledige keramische
            bescherming — elk pakket op maat.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
          {services?.map((service, i) =>
            <div
              key={service?.id}
              onMouseEnter={() => setHoveredId(service?.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`fade-up fade-up-delay-${i + 1} card-glow gold-shimmer glow-border group relative overflow-hidden cursor-pointer ${service?.span} ${service?.tall ? 'min-h-[500px]' : 'min-h-[260px]'} rounded-sm`}
              style={{ background: '#111111' }}>
              
              {/* Background image with zoom */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-700"
                style={{
                  backgroundImage: `url('${service?.image}')`,
                  opacity: hoveredId === service?.id ? 0.45 : 0.25,
                  transform: hoveredId === service?.id ? 'scale(1.05)' : 'scale(1)'
                }}
              />
            
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent" />

              {/* Animated gold border on hover */}
              <div
                className="absolute inset-0 pointer-events-none transition-opacity duration-500"
                style={{
                  opacity: hoveredId === service?.id ? 1 : 0,
                  background: 'linear-gradient(135deg, rgba(201,168,76,0.08) 0%, transparent 60%)'
                }}
              />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-between p-7 md:p-8">
                <div className="flex items-start justify-between">
                  <span
                    className="text-[10px] font-medium uppercase tracking-[0.25em] transition-colors duration-300"
                    style={{ color: hoveredId === service?.id ? 'rgba(201,168,76,0.9)' : 'rgba(201,168,76,0.6)' }}>
                    {service?.id}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#C9A84C"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-all duration-500"
                    style={{
                      opacity: hoveredId === service?.id ? 1 : 0,
                      transform: hoveredId === service?.id ? 'translate(2px, -2px)' : 'translate(0, 0)'
                    }}>
                    <path d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </div>

                <div>
                  <p className="text-[11px] uppercase tracking-widest text-zinc-500 mb-2">
                    {service?.subtitle}
                  </p>
                  <h3 className="font-display text-2xl md:text-3xl font-medium text-[#F5F5F0] mb-3 transition-colors duration-300"
                    style={{ color: hoveredId === service?.id ? '#F5F5F0' : '#F5F5F0' }}>
                    {service?.title}
                  </h3>
                  <p className="text-sm text-zinc-400 font-light leading-relaxed mb-5 max-w-xs transition-all duration-500"
                    style={{ opacity: hoveredId === service?.id ? 1 : 0.7 }}>
                    {service?.description}
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {service?.features?.map((f, fi) =>
                      <li
                        key={f}
                        className="text-[10px] uppercase tracking-wider px-3 py-1 rounded-sm font-medium transition-all duration-300"
                        style={{
                          background: hoveredId === service?.id ? 'rgba(201,168,76,0.15)' : 'rgba(201,168,76,0.08)',
                          color: hoveredId === service?.id ? 'rgba(201,168,76,0.9)' : 'rgba(201,168,76,0.7)',
                          border: '1px solid rgba(201,168,76,0.15)',
                          transitionDelay: `${fi * 50}ms`
                        }}>
                        {f}
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}