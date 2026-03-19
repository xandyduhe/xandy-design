import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-[#E5E2D9] bg-[#F7F5EE]">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <Link href="/" className="text-lg font-800 tracking-tight text-[#2C2C2A]">
            X <span className="text-[#fab600]">&</span> Y Design
          </Link>
          <p className="text-sm text-[#6B6B69] mt-1">Psychology · Code · Art</p>
        </div>

        <nav className="flex flex-wrap gap-6">
          {[
            { href: '/', label: 'Home' },
            { href: '/about', label: 'About' },
            { href: '/services', label: 'Services' },
            { href: '/contact', label: 'Contact' },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm text-[#6B6B69] hover:text-[#2C2C2A] transition-colors duration-200"
            >
              {label}
            </Link>
          ))}
        </nav>

        <p className="text-xs text-[#6B6B69]">
          © {new Date().getFullYear()} X & Y Design. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
