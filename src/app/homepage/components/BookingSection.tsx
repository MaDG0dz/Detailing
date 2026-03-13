'use client';
import React, { useEffect, useRef, useState } from 'react';

export default function BookingSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState(0);
  const [focusedField, setFocusedField] = useState<string | null>(null);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const services = ['Basis Pakket', 'Premium Pakket', 'Elite / Coating'];

  return (
    <section
      id="book"
      ref={sectionRef}
      className="py-24 md:py-32 px-6 md:px-10 relative overflow-hidden">
      
      {/* Background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1643212369760-42a509033da4')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'grayscale(100%) brightness(0.4)'
        }} />
      
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A]" />

      {/* Animated background orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 70%)',
          animation: 'float 8s ease-in-out infinite'
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <div className="fade-up text-center mb-14">
          <span
            className="text-[10px] font-medium uppercase tracking-[0.3em] block mb-4"
            style={{ color: '#C9A84C' }}>
            06 — Afspraak
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-medium text-[#F5F5F0] leading-tight mb-4">
            Klaar voor uw{' '}
            <span className="italic font-light shimmer-text">
              behandeling?
            </span>
          </h2>
          <p className="text-sm text-zinc-400 font-light max-w-sm mx-auto">
            Vul het formulier in en wij nemen binnen 24 uur contact met u op voor een offerte op maat.
          </p>
        </div>

        {/* Form */}
        <div
          className="fade-up fade-up-delay-1 p-1 transition-all duration-500"
          style={{ border: '1px solid rgba(201,168,76,0.2)' }}>
          
          <div
            className="p-8 md:p-12"
            style={{ border: '1px solid rgba(255,255,255,0.05)', background: 'rgba(17,17,17,0.9)' }}>
            
            {submitted ? (
              <div className="text-center py-12">
                <div
                  className="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-sm pulse-gold"
                  style={{ border: '1px solid rgba(201,168,76,0.4)', background: 'rgba(201,168,76,0.06)' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-medium text-[#F5F5F0] mb-2">Aanvraag ontvangen!</h3>
                <p className="text-sm text-zinc-400 font-light">Wij nemen binnen 24 uur contact met u op.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-12">
                {/* Service selection */}
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.25em] text-zinc-500 mb-5">
                    Gewenste dienst
                  </label>
                  <div className="grid md:grid-cols-3 gap-3">
                    {services.map((s, i) =>
                      <button
                        key={s}
                        type="button"
                        onClick={() => setSelectedService(i)}
                        className="cursor-pointer text-left transition-all duration-300"
                        style={{
                          padding: '16px',
                          border: `1px solid ${selectedService === i ? 'rgba(201,168,76,0.5)' : 'rgba(255,255,255,0.08)'}`,
                          background: selectedService === i ? 'rgba(201,168,76,0.06)' : 'transparent',
                          boxShadow: selectedService === i ? '0 0 20px rgba(201,168,76,0.08)' : 'none'
                        }}>
                        <div className="flex items-start gap-3">
                          <span
                            className="w-3 h-3 mt-0.5 flex-shrink-0 rounded-sm border transition-all duration-300 flex items-center justify-center"
                            style={{
                              borderColor: selectedService === i ? '#C9A84C' : 'rgba(255,255,255,0.2)',
                              background: selectedService === i ? '#C9A84C' : 'transparent'
                            }}>
                            {selectedService === i && (
                              <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="3">
                                <polyline points="20 6 9 17 4 12"/>
                              </svg>
                            )}
                          </span>
                          <span className="text-sm font-light transition-colors duration-300"
                            style={{ color: selectedService === i ? '#F5F5F0' : '#A1A1AA' }}>{s}</span>
                        </div>
                      </button>
                    )}
                  </div>
                </div>

                {/* Personal info */}
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-8">
                    <label className="block text-[10px] uppercase tracking-[0.25em] text-zinc-500 mb-5">
                      Uw gegevens
                    </label>
                    {[
                      { type: 'text', placeholder: 'Volledige naam', required: true, id: 'name' },
                      { type: 'email', placeholder: 'E-mailadres', required: true, id: 'email' },
                      { type: 'tel', placeholder: 'Telefoonnummer', required: false, id: 'phone' },
                    ].map((field) => (
                      <div key={field.id} className="relative">
                        <input
                          type={field.type}
                          placeholder={field.placeholder}
                          required={field.required}
                          className="w-full bg-transparent py-3 text-sm text-[#F5F5F0] placeholder-zinc-600 focus:outline-none transition-all duration-300"
                          style={{
                            borderBottom: `1px solid ${focusedField === field.id ? '#C9A84C' : 'rgba(255,255,255,0.1)'}`,
                          }}
                          onFocus={() => setFocusedField(field.id)}
                          onBlur={() => setFocusedField(null)}
                        />
                        <div
                          className="absolute bottom-0 left-0 h-px transition-all duration-500"
                          style={{
                            background: 'linear-gradient(90deg, #C9A84C, #E8C96A)',
                            width: focusedField === field.id ? '100%' : '0%'
                          }}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="space-y-8">
                    <label className="block text-[10px] uppercase tracking-[0.25em] text-zinc-500 mb-5">
                      Voertuig & planning
                    </label>
                    {[
                      { type: 'text', placeholder: 'Merk & model (bijv. BMW M3)', id: 'car' },
                      { type: 'date', placeholder: '', id: 'date' },
                    ].map((field) => (
                      <div key={field.id} className="relative">
                        <input
                          type={field.type}
                          placeholder={field.placeholder}
                          className="w-full bg-transparent py-3 text-sm text-zinc-400 focus:outline-none transition-all duration-300"
                          style={{
                            borderBottom: `1px solid ${focusedField === field.id ? '#C9A84C' : 'rgba(255,255,255,0.1)'}`,
                            colorScheme: 'dark'
                          }}
                          onFocus={() => setFocusedField(field.id)}
                          onBlur={() => setFocusedField(null)}
                        />
                        <div
                          className="absolute bottom-0 left-0 h-px transition-all duration-500"
                          style={{
                            background: 'linear-gradient(90deg, #C9A84C, #E8C96A)',
                            width: focusedField === field.id ? '100%' : '0%'
                          }}
                        />
                      </div>
                    ))}
                    <div className="relative">
                      <textarea
                        rows={2}
                        placeholder="Opmerkingen (optioneel)"
                        className="w-full bg-transparent py-3 text-sm text-[#F5F5F0] placeholder-zinc-600 focus:outline-none resize-none transition-all duration-300"
                        style={{
                          borderBottom: `1px solid ${focusedField === 'notes' ? '#C9A84C' : 'rgba(255,255,255,0.1)'}`,
                        }}
                        onFocus={() => setFocusedField('notes')}
                        onBlur={() => setFocusedField(null)}
                      />
                      <div
                        className="absolute bottom-0 left-0 h-px transition-all duration-500"
                        style={{
                          background: 'linear-gradient(90deg, #C9A84C, #E8C96A)',
                          width: focusedField === 'notes' ? '100%' : '0%'
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Submit */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                  <p className="text-[10px] text-zinc-600 max-w-xs">
                    Door in te dienen gaat u akkoord met ons annuleringsbeleid. Aanbetaling van €50 vereist bij bevestiging.
                  </p>
                  <button
                    type="submit"
                    className="group w-full md:w-auto flex items-center justify-center gap-3 px-10 py-4 text-xs font-semibold uppercase tracking-widest transition-all duration-300 bg-[#C9A84C] text-black hover:bg-[#E8C96A] active:scale-95 relative overflow-hidden">
                    <span className="relative z-10">Afspraak Aanvragen</span>
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
                      className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">
                      <path d="M5 12h14m-7-7 7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Contact info */}
        <div className="fade-up fade-up-delay-2 mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {[
            { icon: '📍', label: 'Locatie', value: 'Heel Nederland' },
            { icon: '📞', label: 'Telefoon', value: '+31 20 123 4567' },
            { icon: '✉️', label: 'E-mail', value: 'info@autodetail.nl' }
          ].map((c) =>
            <div
              key={c.label}
              className="flex flex-col items-center gap-1 group cursor-pointer p-4 rounded-sm transition-all duration-300 hover:bg-[rgba(201,168,76,0.04)]"
              style={{ border: '1px solid transparent' }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.15)')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'transparent')}>
              <span className="text-lg group-hover:scale-110 transition-transform duration-300 inline-block">{c.icon}</span>
              <span className="text-[10px] uppercase tracking-widest text-zinc-500">{c.label}</span>
              <span className="text-sm text-zinc-300 font-light group-hover:text-[#C9A84C] transition-colors duration-300">{c.value}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}