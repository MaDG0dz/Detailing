'use client';
import React, { useState, useEffect } from 'react';
import AppLogo from '@/components/ui/AppLogo';
import Link from 'next/link';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const docHeight = document.documentElement?.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0);

      // Detect active section
      const sections = ['services', 'process', 'pricing', 'book'];
      for (const id of sections?.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el?.offsetTop - 120) {
          setActiveLink(`#${id}`);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Diensten', href: '#services' },
    { label: 'Werkwijze', href: '#process' },
    { label: 'Prijzen', href: '#pricing' },
    { label: 'Contact', href: '#book' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'nav-blur' : 'bg-transparent'
      }`}
    >
      {/* Scroll progress bar */}
      <div
        id="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/homepage" className="flex items-center gap-2.5 group">
          <div className="transition-transform duration-300 group-hover:scale-110">
            <AppLogo size={36} />
          </div>
          <span
            className="font-display text-xl font-medium tracking-tight hidden sm:block transition-colors duration-300 group-hover:text-[#E8C96A]"
            style={{ color: '#C9A84C' }}
          >
            AutoDetail
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks?.map((link) => (
            <a
              key={link?.href}
              href={link?.href}
              className="underline-gold text-xs font-medium uppercase tracking-widest transition-colors duration-300"
              style={{ color: activeLink === link?.href ? '#C9A84C' : '#71717A' }}
            >
              {link?.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#book"
          className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold uppercase tracking-widest border transition-all duration-300 hover:bg-[#C9A84C] hover:text-black hover:border-[#C9A84C] active:scale-95"
          style={{ borderColor: 'rgba(201,168,76,0.5)', color: '#C9A84C' }}
        >
          Boek Nu
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu openen"
        >
          <span
            className={`block w-5 h-px bg-[#C9A84C] transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2.5' : ''}`}
          />
          <span
            className={`block w-5 h-px bg-[#C9A84C] transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-5 h-px bg-[#C9A84C] transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}
          />
        </button>
      </div>
      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          menuOpen ? 'max-h-80 nav-blur' : 'max-h-0'
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-6">
          {navLinks?.map((link) => (
            <a
              key={link?.href}
              href={link?.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium uppercase tracking-widest transition-colors duration-300"
              style={{ color: activeLink === link?.href ? '#C9A84C' : '#D4D4D8' }}
            >
              {link?.label}
            </a>
          ))}
          <a
            href="#book"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center justify-center px-6 py-3 text-xs font-semibold uppercase tracking-widest border text-[#C9A84C] border-[rgba(201,168,76,0.4)] hover:bg-[#C9A84C] hover:text-black transition-all duration-300"
          >
            Boek Nu
          </a>
        </div>
      </div>
    </header>
  );
}