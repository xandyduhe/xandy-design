import Link from 'next/link';
import Image from 'next/image';

const services = [
  {
    name: 'Brand Spark',
    price: '$600–900',
    desc: 'Logo, color palette, typography, and brand guidelines to get you started strong.',
  },
  {
    name: 'Brand + Social Launch',
    price: '$1,400–2,000',
    desc: 'Full brand identity plus a cohesive social media presence ready to post.',
  },
  {
    name: 'Full Brand + Web',
    price: '$3,500–6,000',
    desc: 'Everything from brand identity to a custom, high-converting website.',
  },
];

const pillars = [
  {
    icon: '◉',
    label: 'Psychology',
    desc: 'Every design decision is rooted in how people actually perceive, trust, and decide. Not guesswork — behavioral science.',
  },
  {
    icon: '⌗',
    label: 'Code',
    desc: 'Sites built by hand, not templates. Fast, accessible, and engineered to convert.',
  },
  {
    icon: '◈',
    label: 'Art',
    desc: 'Award-winning visual instincts that make your brand impossible to ignore.',
  },
];

const projects = [
  {
    title: 'Oakwood Bistro',
    service: 'Brand Identity',
    desc: 'Full visual identity for a neighborhood restaurant — logo, palette, menu design, and signage system.',
    bg: '#1A56DB',
    accent: '#fab600',
    shape: 'circle',
  },
  {
    title: 'Summit Realty',
    service: 'Website + Brand',
    desc: 'Custom website and brand identity built to convert leads before the first showing.',
    bg: '#2C2C2A',
    accent: '#fab600',
    shape: 'cross',
  },
  {
    title: 'Bloom Wellness',
    service: 'Social Media',
    desc: 'Cohesive social presence and content system for a wellness studio — 20 templates, full style guide.',
    bg: '#fab600',
    accent: '#1A56DB',
    shape: 'diamond',
  },
];

function GeoShape({ shape, accent }: { shape: string; accent: string }) {
  if (shape === 'circle') {
    return (
      <svg viewBox="0 0 120 120" className="w-full h-full" aria-hidden>
        <circle cx="60" cy="60" r="45" fill="none" stroke={accent} strokeWidth="8" opacity="0.6" />
        <circle cx="60" cy="60" r="22" fill={accent} opacity="0.25" />
        <line x1="15" y1="60" x2="105" y2="60" stroke={accent} strokeWidth="3" opacity="0.4" />
        <line x1="60" y1="15" x2="60" y2="105" stroke={accent} strokeWidth="3" opacity="0.4" />
      </svg>
    );
  }
  if (shape === 'cross') {
    return (
      <svg viewBox="0 0 120 120" className="w-full h-full" aria-hidden>
        <rect x="50" y="15" width="20" height="90" rx="4" fill={accent} opacity="0.5" />
        <rect x="15" y="50" width="90" height="20" rx="4" fill={accent} opacity="0.5" />
        <rect x="40" y="40" width="40" height="40" rx="6" fill={accent} opacity="0.3" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 120 120" className="w-full h-full" aria-hidden>
      <polygon points="60,10 110,60 60,110 10,60" fill="none" stroke={accent} strokeWidth="7" opacity="0.6" />
      <polygon points="60,30 90,60 60,90 30,60" fill={accent} opacity="0.25" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      {/* Urgency banner */}
      <div className="bg-[#fab600] text-[#2C2C2A] text-center py-2.5 px-4">
        <p className="text-sm font-semibold">
          Now accepting new clients for April — 2 spots remaining.{' '}
          <Link href="/contact" className="underline underline-offset-2 hover:opacity-70 transition-opacity">
            Claim yours →
          </Link>
        </p>
      </div>

      {/* Hero */}
      <section className="min-h-[calc(100vh-40px)] flex items-center pt-20">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <span className="w-8 h-px bg-[#fab600]" />
                <span className="text-sm font-semibold text-[#6B6B69] tracking-widest uppercase">
                  Marketing Design Studio
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#2C2C2A] leading-[1.05] tracking-tight mb-8">
                Most designers make{' '}
                <em className="not-italic text-[#6B6B69]">things look pretty.</em>
                <br />
                <span className="text-[#1A56DB]">X & Y Design</span> makes things{' '}
                <span className="relative inline-block">
                  work.
                  <span
                    className="absolute bottom-1 left-0 w-full h-3 bg-[#fab600] -z-10 opacity-40"
                    aria-hidden
                  />
                </span>
              </h1>

              <p className="text-lg text-[#6B6B69] max-w-xl leading-relaxed mb-10">
                Built on psychology, powered by code, finished with art. For local businesses
                that are ready to look as serious as they are.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#1A56DB] text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-[#1548c4] transition-colors duration-200"
                >
                  Start a Project →
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 border border-[#E5E2D9] text-[#2C2C2A] px-8 py-4 rounded-full font-semibold text-base hover:border-[#2C2C2A] transition-colors duration-200"
                >
                  See Packages & Pricing
                </Link>
              </div>
            </div>

            {/* Hero geometric */}
            <div className="relative hidden lg:flex items-center justify-center">
              <div className="relative w-[420px] h-[420px]">
                {/* Background circle */}
                <div className="absolute inset-0 rounded-full bg-[#1A56DB] opacity-5" />

                {/* Large X */}
                <svg
                  viewBox="0 0 420 420"
                  className="absolute inset-0 w-full h-full"
                  aria-hidden
                >
                  {/* X strokes — blue, prominent */}
                  <line x1="70" y1="70" x2="350" y2="350" stroke="#1A56DB" strokeWidth="32" strokeLinecap="round" opacity="0.55" />
                  <line x1="350" y1="70" x2="70" y2="350" stroke="#1A56DB" strokeWidth="32" strokeLinecap="round" opacity="0.55" />
                  {/* Y strokes — gold, on top */}
                  <line x1="210" y1="210" x2="210" y2="370" stroke="#fab600" strokeWidth="26" strokeLinecap="round" opacity="0.9" />
                  <line x1="120" y1="80" x2="210" y2="210" stroke="#fab600" strokeWidth="26" strokeLinecap="round" opacity="0.9" />
                  <line x1="300" y1="80" x2="210" y2="210" stroke="#fab600" strokeWidth="26" strokeLinecap="round" opacity="0.9" />
                  {/* Junction dot */}
                  <circle cx="210" cy="210" r="20" fill="#1A56DB" />
                  <circle cx="210" cy="210" r="9" fill="#fab600" />
                  {/* Corner dots */}
                  <circle cx="70" cy="70" r="10" fill="#fab600" opacity="0.8" />
                  <circle cx="350" cy="350" r="10" fill="#fab600" opacity="0.8" />
                  <circle cx="350" cy="70" r="10" fill="#1A56DB" opacity="0.7" />
                  <circle cx="70" cy="350" r="10" fill="#1A56DB" opacity="0.7" />
                  {/* Grid dots */}
                  {[105, 210, 315].map((x) =>
                    [105, 210, 315].map((y) => (
                      <circle key={`${x}-${y}`} cx={x} cy={y} r="3" fill="#2C2C2A" opacity="0.1" />
                    ))
                  )}
                </svg>

                {/* Floating logo badge */}
                <div className="absolute bottom-8 right-4 bg-white border border-[#E5E2D9] rounded-xl px-4 py-3 shadow-sm flex flex-col items-center gap-1">
                  <Image
                    src="/xandylogo.png"
                    alt="X & Y Design"
                    width={96}
                    height={38}
                    className="h-10 w-auto"
                  />
                  <p className="text-xs text-[#6B6B69] tracking-widest">Psychology · Code · Art</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-24 border-t border-[#E5E2D9]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#2C2C2A] tracking-tight mb-4">
              The difference is in the discipline.
            </h2>
            <p className="text-[#6B6B69] max-w-xl">
              Three fields. One studio. An edge most agencies can't replicate.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {pillars.map(({ icon, label, desc }) => (
              <div key={label}>
                <div className="text-3xl text-[#fab600] mb-4">{icon}</div>
                <h3 className="text-xl font-bold text-[#2C2C2A] mb-3">{label}</h3>
                <p className="text-[#6B6B69] leading-relaxed text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Projects */}
      <section className="py-24 border-t border-[#E5E2D9]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#2C2C2A] tracking-tight mb-3">
                Selected Projects
              </h2>
              <p className="text-[#6B6B69]">A sample of what's possible.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map(({ title, service, desc, bg, accent, shape }) => (
              <div key={title} className="group flex flex-col rounded-2xl overflow-hidden border border-[#E5E2D9]">
                {/* Tile */}
                <div
                  className="h-52 flex items-center justify-center p-10"
                  style={{ backgroundColor: bg }}
                >
                  <div className="w-28 h-28 opacity-80">
                    <GeoShape shape={shape} accent={accent} />
                  </div>
                </div>
                {/* Info */}
                <div className="bg-white px-6 py-5 flex-1">
                  <span
                    className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3"
                    style={{ backgroundColor: `${bg}18`, color: bg === '#fab600' ? '#2C2C2A' : bg }}
                  >
                    {service}
                  </span>
                  <h3 className="text-lg font-extrabold text-[#2C2C2A] mb-2">{title}</h3>
                  <p className="text-sm text-[#6B6B69] leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured packages */}
      <section className="py-24 bg-[#2C2C2A]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
              Packages
            </h2>
            <p className="text-[#9B9B99]">
              Transparent pricing. No surprises.{' '}
              <Link href="/services" className="text-[#fab600] hover:underline">
                See all packages →
              </Link>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map(({ name, price, desc }) => (
              <div
                key={name}
                className="rounded-2xl p-8 border bg-[#363634] border-[#3F3F3D] text-white"
              >
                <p className="text-sm font-semibold text-[#fab600] mb-2 uppercase tracking-widest">
                  {name}
                </p>
                <p className="text-3xl font-extrabold mb-4">{price}</p>
                <p className="text-sm leading-relaxed text-[#9B9B99]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="py-16 border-b border-[#E5E2D9]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { stat: 'Psychology', sub: 'Understanding what makes people act' },
              { stat: 'M.S. CS', sub: 'Engineering that works as good as it looks' },
              { stat: 'Fine Art', sub: 'Award-winning visual instincts' },
              { stat: '1 studio.', sub: 'You work directly with Xandy. Always.' },
            ].map(({ stat, sub }) => (
              <div key={stat}>
                <p className="text-xl font-extrabold text-[#2C2C2A] mb-1">{stat}</p>
                <p className="text-xs text-[#6B6B69] leading-snug">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#2C2C2A] tracking-tight mb-6">
            Ready to look like you mean business?
          </h2>
          <p className="text-[#6B6B69] text-lg mb-10 max-w-xl mx-auto">
            Tell me about your project. I'll tell you exactly what it needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#fab600] text-[#2C2C2A] px-10 py-4 rounded-full font-bold text-base hover:bg-[#e6a800] transition-colors duration-200"
          >
            Let's Talk →
          </Link>
        </div>
      </section>
    </>
  );
}
