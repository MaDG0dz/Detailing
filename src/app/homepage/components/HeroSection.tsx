'use client';
import React, { useEffect, useRef, useState } from 'react';

const BG_IMAGES = [
  '/assets/images/car-detailing-with-a-polishing-machine-in-a-professional-workshop-photo-1773430254863.jpg',
  '/assets/images/360_F_198465715_4bEEoXMMKdRq3cPtRmzzkgbCfUrjZ6hT-1773430311886.jpg',
];

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
    const elements = sectionRef?.current?.querySelectorAll('.fade-up');
    if (!elements) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    elements?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Crossfade slideshow — switch every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % BG_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden border-b"
      style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
      
      {/* Cursor spotlight */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-60"
        style={{
          background: `radial-gradient(600px circle at ${50 + mousePos.x * 0.5}% ${50 + mousePos.y * 0.5}%, rgba(201,168,76,0.06), transparent 60%)`
        }}
      />

      {/* Crossfade background images */}
      <div
        ref={bgRef}
        className="absolute right-0 top-0 w-full md:w-3/5 h-full"
        style={{
          transform: `translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px)`,
          transition: 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)'
        }}>

        {BG_IMAGES.map((src, i) => (
          <div
            key={src}
            className="absolute inset-0 w-full h-full bg-cover bg-center scale-110"
            style={{
              backgroundImage: `url('${src}')`,
              filter: 'grayscale(20%) contrast(1.1) brightness(0.65)',
              opacity: activeIndex === i ? 1 : 0,
              transition: 'opacity 1.6s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          />
        ))}

        {/* gradient fade left */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A]/80 via-[#0A0A0A]/40 to-[#0A0A0A]/60 z-10" />
        {/* gradient fade bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-transparent to-transparent z-10" />
      </div>

      {/* Animated grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-10 pt-28 pb-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
        {/* Left: Big headline */}
        <div className="lg:col-span-7">
          {/* Eyebrow */}
          <div className="fade-up flex items-center gap-4 mb-8">
            <div
              className="h-px"
              style={{
                background: '#C9A84C',
                width: isLoaded ? '40px' : '0px',
                transition: 'width 1s cubic-bezier(0.25, 1, 0.5, 1) 0.3s'
              }}
            />
            <span
              className="text-[10px] font-medium uppercase tracking-[0.3em]"
              style={{ color: '#C9A84C' }}>
              Est. 2018 · Nederland
            </span>
          </div>

          {/* Massive headline */}
          <h1 className="font-display leading-[0.88] tracking-tight mb-8">
            <span className="fade-up fade-up-delay-1 block text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-medium text-[#F5F5F0]">
              Precisie
            </span>
            <span
              className="fade-up fade-up-delay-2 block text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-light italic shimmer-text">
              ontmoet
            </span>
            <span className="fade-up fade-up-delay-3 block text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-medium text-[#F5F5F0]">
              Perfectie.
            </span>
          </h1>
        </div>

        {/* Right: Sub + CTA */}
        <div className="lg:col-span-5 fade-up fade-up-delay-4">
          <p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed max-w-sm mb-10">
            Professionele autodetailing in heel Nederland. Wij herstellen en
            beschermen uw voertuig tot showroom-kwaliteit — met oog voor elk
            detail.
          </p>

          <div className="flex flex-col gap-4">
            <a
              href="#book"
              className="group btn-ripple flex items-center justify-between border-b pb-4 transition-colors duration-300 hover:border-[#C9A84C]"
              style={{ borderColor: 'rgba(255,255,255,0.15)' }}>
              
              <span
                className="text-xs font-semibold uppercase tracking-widest transition-colors duration-300 group-hover:text-[#C9A84C]"
                style={{ color: '#F5F5F0' }}>
                Afspraak Maken
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#C9A84C"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300">
                <path d="M7 17L17 7M7 7h10v10" />
              </svg>
            </a>
            <a
              href="#services"
              className="group btn-ripple flex items-center justify-between border-b pb-4 transition-colors duration-300 hover:border-[#C9A84C]"
              style={{ borderColor: 'rgba(255,255,255,0.15)' }}>
              
              <span className="text-xs font-medium uppercase tracking-widest text-zinc-400 group-hover:text-[#C9A84C] transition-colors duration-300">
                Bekijk Diensten
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-zinc-500 group-hover:text-[#C9A84C] transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300">
                <path d="M7 17L17 7M7 7h10v10" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {BG_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className="transition-all duration-500"
            style={{
              width: activeIndex === i ? '24px' : '6px',
              height: '6px',
              borderRadius: '3px',
              background: activeIndex === i ? '#C9A84C' : 'rgba(255,255,255,0.3)',
            }}
            aria-label={`Background ${i + 1}`}
          />
        ))}
      </div>

      {/* Bottom info bar */}
      <div
        className="absolute bottom-8 left-6 md:left-10 right-6 md:right-10 flex items-end justify-between"
        style={{ color: 'rgba(255,255,255,0.3)' }}>
        
        <span className="hidden md:block text-[10px] uppercase tracking-widest">
          01 — Intro
        </span>
        <div className="float-anim">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="M12 5v14m-6-6l6 6 6-6" />
          </svg>
        </div>
      </div>
    </section>
  );
}