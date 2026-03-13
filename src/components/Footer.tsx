import React from 'react';
import AppLogo from '@/components/ui/AppLogo';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo + brand */}
          <Link href="/homepage" className="flex items-center gap-2.5 group">
            <div className="transition-transform duration-300 group-hover:scale-110">
              <AppLogo size={28} />
            </div>
            <span
              className="font-display text-base font-medium transition-colors duration-300 group-hover:text-[#E8C96A]"
              style={{ color: '#C9A84C' }}>
              AutoDetail
            </span>
          </Link>

          {/* Links */}
          <div className="flex items-center gap-6 text-xs uppercase tracking-widest text-zinc-500">
            {[
              { label: 'Diensten', href: '#services' },
              { label: 'Prijzen', href: '#pricing' },
              { label: 'Contact', href: '#book' },
              { label: 'Privacy', href: '#' },
            ]?.map((link) => (
              <a
                key={link?.label}
                href={link?.href}
                className="relative transition-colors duration-300 hover:text-[#C9A84C] group">
                {link?.label}
                <span
                  className="absolute -bottom-0.5 left-0 h-px bg-[#C9A84C] transition-all duration-300 w-0 group-hover:w-full"
                />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-[11px] text-zinc-600 uppercase tracking-widest">
            © 2026 AutoDetail · Nederland
          </p>
        </div>
      </div>
    </footer>
  );
}