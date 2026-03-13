'use client';
import React, { useRef, useEffect, useState } from 'react';
import AppImage from '@/components/ui/AppImage';

const testimonials = [
  {
    quote: 'Mijn BMW M3 ziet er beter uit dan toen ik hem nieuw kocht. De keramische coating is echt fenomenaal — regen glijdt er gewoon af.',
    name: 'Daan van der Berg',
    role: 'BMW M3 eigenaar',
    location: 'Amsterdam',
    rotation: 'rotate-neg-2',
    photo: "https://img.rocket.new/generatedImages/rocket_gen_img_181968901-1772712771750.png",
    photoAlt: 'Daan van der Berg, tevreden klant met bril en donker haar'
  },
  {
    quote: 'Ik heb mijn Porsche 911 bij AutoDetail laten behandelen. Het resultaat overtrof al mijn verwachtingen. Absoluut de beste detailer in Nederland.',
    name: 'Lotte Janssen',
    role: 'Porsche 911 eigenaar',
    location: 'Rotterdam',
    rotation: 'rotate-pos-1',
    photo: "https://img.rocket.new/generatedImages/rocket_gen_img_1f3d0d136-1772821553957.png",
    photoAlt: 'Lotte Janssen, vrouwelijke klant met lach en blond haar'
  },
  {
    quote: 'De aandacht voor detail is ongelooflijk. Ze hebben zelfs de banden en velgen perfect behandeld. Mijn Mercedes ziet er uit als showroommodel.',
    name: 'Sven de Groot',
    role: 'Mercedes GLE eigenaar',
    location: 'Utrecht',
    rotation: 'rotate-neg-1',
    photo: "https://img.rocket.new/generatedImages/rocket_gen_img_11e97631f-1763293592689.png",
    photoAlt: 'Sven de Groot, man met vriendelijke uitstraling'
  },
  {
    quote: 'Fantastisch werk aan mijn Audi RS6. Van buiten tot binnen — alles perfect. Ik kom zeker terug voor het jaarlijkse onderhoud.',
    name: 'Noor Visser',
    role: 'Audi RS6 eigenaar',
    location: 'Den Haag',
    rotation: 'rotate-pos-2',
    photo: "https://img.rocket.new/generatedImages/rocket_gen_img_163aea1ab-1772495906669.png",
    photoAlt: 'Noor Visser, vrouw met donker haar en professionele uitstraling'
  }
];

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll('.fade-up');
    if (!elements) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const updateScrollState = () => {
    if (!railRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = railRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const scroll = (dir: 'left' | 'right') => {
    railRef.current?.scrollBy({ left: dir === 'left' ? -480 : 480, behavior: 'smooth' });
  };

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-24 md:py-32 px-6 md:px-10 overflow-hidden border-b"
      style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
      
      <div className="max-w-7xl mx-auto">
        {/* Header row */}
        <div className="fade-up flex items-end justify-between mb-14 gap-6">
          <div>
            <span
              className="text-[10px] font-medium uppercase tracking-[0.3em] block mb-3"
              style={{ color: '#C9A84C' }}>
              04 — Klanten
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-medium text-[#F5F5F0] leading-tight">
              Wat onze klanten{' '}
              <span className="italic font-light shimmer-text">
                zeggen.
              </span>
            </h2>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className="w-10 h-10 flex items-center justify-center border rounded-sm transition-all duration-300 disabled:opacity-25 hover:border-[#C9A84C] hover:text-[#C9A84C] hover:bg-[rgba(201,168,76,0.06)] active:scale-95"
              style={{ borderColor: 'rgba(255,255,255,0.12)', color: '#71717A' }}
              aria-label="Vorige">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className="w-10 h-10 flex items-center justify-center border rounded-sm transition-all duration-300 disabled:opacity-25 hover:border-[#C9A84C] hover:text-[#C9A84C] hover:bg-[rgba(201,168,76,0.06)] active:scale-95"
              style={{ borderColor: 'rgba(255,255,255,0.12)', color: '#71717A' }}
              aria-label="Volgende">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Scroll rail */}
        <div className="relative">
          {/* Left fade */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 z-10 bg-gradient-to-r from-[#0A0A0A] to-transparent" />
          {/* Right fade */}
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 z-10 bg-gradient-to-l from-[#0A0A0A] to-transparent" />

          <div
            ref={railRef}
            onScroll={updateScrollState}
            className="no-scrollbar flex gap-4 overflow-x-auto pb-6 items-center"
            style={{ scrollSnapType: 'x mandatory' }}>
            
            {testimonials.map((t, i) =>
              <article
                key={i}
                onMouseEnter={() => setActiveIndex(i)}
                onMouseLeave={() => setActiveIndex(null)}
                className={`testimonial-card shrink-0 w-[320px] md:w-[420px] p-8 flex flex-col justify-between rounded-sm ${t.rotation}`}
                style={{
                  scrollSnapAlign: 'start',
                  background: activeIndex === i ? '#161616' : '#111111',
                  border: `1px solid ${activeIndex === i ? 'rgba(201,168,76,0.2)' : 'rgba(255,255,255,0.06)'}`,
                  minHeight: '280px'
                }}>
                
                {/* Stars with stagger */}
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, s) =>
                    <svg
                      key={s}
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="#C9A84C"
                      stroke="none"
                      className="transition-transform duration-300"
                      style={{
                        transform: activeIndex === i ? `scale(1.2) translateY(-${s * 1}px)` : 'scale(1)',
                        transitionDelay: `${s * 40}ms`
                      }}>
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  )}
                </div>

                <blockquote className="text-sm md:text-base text-zinc-300 font-light leading-relaxed mb-6 transition-colors duration-300"
                  style={{ color: activeIndex === i ? '#D4D4D8' : '' }}>
                  "{t.quote}"
                </blockquote>

                <div className="flex items-center gap-3 mt-auto pt-5" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                  <div className="w-9 h-9 rounded-sm overflow-hidden flex-shrink-0 transition-all duration-300"
                    style={{
                      border: `1px solid ${activeIndex === i ? 'rgba(201,168,76,0.4)' : 'transparent'}`,
                      boxShadow: activeIndex === i ? '0 0 12px rgba(201,168,76,0.2)' : 'none'
                    }}>
                    <AppImage
                      src={t.photo}
                      alt={t.photoAlt}
                      width={36}
                      height={36}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium transition-colors duration-300"
                      style={{ color: activeIndex === i ? '#E8C96A' : '#F5F5F0' }}>{t.name}</p>
                    <p className="text-[11px] text-zinc-500">{t.role} · {t.location}</p>
                  </div>
                </div>
              </article>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
