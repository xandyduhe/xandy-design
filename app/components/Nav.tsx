'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F7F5EE]/90 backdrop-blur-sm border-b border-[#E5E2D9]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-lg font-800 tracking-tight text-[#2C2C2A]">
            X <span className="text-[#fab600]">&</span> Y
          </span>
          <span className="text-sm font-500 text-[#6B6B69] hidden sm:block">Design</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-500 transition-colors duration-200 ${
                pathname === href
                  ? 'text-[#1A56DB]'
                  : 'text-[#6B6B69] hover:text-[#2C2C2A]'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="text-sm font-600 bg-[#1A56DB] text-white px-4 py-2 rounded-full hover:bg-[#1548c4] transition-colors duration-200"
          >
            Get a Quote
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-[#2C2C2A] transition-all duration-200 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-[#2C2C2A] transition-all duration-200 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-[#2C2C2A] transition-all duration-200 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#F7F5EE] border-t border-[#E5E2D9] px-6 py-4 flex flex-col gap-4">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`text-sm font-500 ${
                pathname === href ? 'text-[#1A56DB]' : 'text-[#2C2C2A]'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="text-sm font-600 bg-[#1A56DB] text-white px-4 py-2 rounded-full text-center hover:bg-[#1548c4] transition-colors duration-200"
          >
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
}
