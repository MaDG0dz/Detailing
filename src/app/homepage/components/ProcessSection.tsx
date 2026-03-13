'use client';
import React, { useEffect, useRef, useState } from 'react';

const steps = [
  {
    num: '01',
    title: 'Inspectie',
    desc: 'Wij beoordelen de conditie van uw voertuig grondig — lak, interieur, velgen en glas. Geen verborgen gebreken.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Behandeling',
    desc: 'Op basis van de inspectie voeren wij de afgesproken behandeling uit — van handwas tot keramische coating.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Oplevering',
    desc: 'Uw auto wordt afgeleverd met een eindcontrole en fotoverslag. Klaar voor de weg — en om van te genieten.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
    ),
  },
];

const stats = [
  { value: 500, suffix: '+', label: "Auto\'s behandeld" },
  { value: 8, suffix: '+', label: 'Jaar ervaring' },
  { value: 98, suffix: '%', label: 'Klanttevredenheid' },
  { value: 4, suffix: '', label: 'Vestigingen NL' },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 1800;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, target]);

  return (
    <span ref={ref} className="font-display text-3xl md:text-4xl font-medium text-gold-gradient">
      {count}{suffix}
    </span>
  );
}

export default function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState<number | null>(null);

  useEffect(() => {
    const elements = sectionRef?.current?.querySelectorAll('.fade-up');
    if (!elements) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    elements?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="py-24 md:py-32 px-6 md:px-10 border-b"
      style={{ borderColor: 'rgba(255,255,255,0.06)', background: '#0D0D0D' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="fade-up mb-16">
          <span
            className="text-[10px] font-medium uppercase tracking-[0.3em] block mb-3"
            style={{ color: '#C9A84C' }}
          >
            03 — Werkwijze
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-[#F5F5F0] leading-tight">
            Drie stappen naar{' '}
            <span className="italic font-light shimmer-text">
              perfectie.
            </span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: 'rgba(255,255,255,0.05)' }}>
          {steps?.map((step, i) => (
            <div
              key={step?.num}
              onMouseEnter={() => setActiveStep(i)}
              onMouseLeave={() => setActiveStep(null)}
              className={`fade-up fade-up-delay-${i + 1} group p-8 md:p-10 flex flex-col justify-between min-h-[300px] cursor-pointer transition-all duration-500`}
              style={{
                background: activeStep === i ? 'rgba(201,168,76,0.04)' : '#0D0D0D',
              }}
            >
              <div className="flex items-start justify-between mb-8">
                <span
                  className="text-[10px] font-medium uppercase tracking-[0.25em] transition-colors duration-300"
                  style={{ color: activeStep === i ? 'rgba(201,168,76,0.8)' : 'rgba(201,168,76,0.5)' }}
                >
                  {step?.num}
                </span>
                <div
                  className="w-10 h-10 flex items-center justify-center rounded-sm transition-all duration-500 icon-spin"
                  style={{
                    border: `1px solid ${activeStep === i ? 'rgba(201,168,76,0.6)' : 'rgba(201,168,76,0.2)'}`,
                    color: '#C9A84C',
                    background: activeStep === i ? 'rgba(201,168,76,0.08)' : 'transparent',
                    boxShadow: activeStep === i ? '0 0 20px rgba(201,168,76,0.15)' : 'none'
                  }}
                >
                  {step?.icon}
                </div>
              </div>

              <div>
                <h3
                  className="font-display text-2xl md:text-3xl font-medium mb-4 transition-colors duration-300"
                  style={{ color: activeStep === i ? '#E8C96A' : '#F5F5F0' }}
                >
                  {step?.title}
                </h3>
                <p className="text-sm text-zinc-400 font-light leading-relaxed transition-colors duration-300"
                  style={{ color: activeStep === i ? '#A1A1AA' : '' }}>
                  {step?.desc}
                </p>
              </div>

              {/* Bottom line that animates on hover */}
              <div
                className="mt-8 h-px transition-all duration-700"
                style={{
                  background: '#C9A84C',
                  opacity: 0.4,
                  width: activeStep === i ? '100%' : '0%'
                }}
              />
            </div>
          ))}
        </div>

        {/* Stats bar with animated counters */}
        <div
          className="fade-up mt-3 grid grid-cols-2 md:grid-cols-4 gap-px"
          style={{ background: 'rgba(255,255,255,0.05)' }}
        >
          {stats?.map((stat, i) => (
            <div
              key={stat?.label}
              className="py-8 px-8 flex flex-col gap-1 group transition-colors duration-300 hover:bg-[rgba(201,168,76,0.03)]"
              style={{ background: '#0D0D0D' }}
            >
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <span className="text-[11px] uppercase tracking-wider text-zinc-500 group-hover:text-zinc-400 transition-colors duration-300">
                {stat?.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}