import Link from 'next/link';

const services = [
  {
    name: 'Brand Spark',
    price: '$600–900',
    desc: 'Logo, color palette, typography, and brand guidelines to get you started strong.',
  },
  {
    name: 'Brand + Social Launch',
    price: '$1,400–2,000',
    popular: true,
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

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-screen flex items-center pt-16">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-px bg-[#fab600]" />
              <span className="text-sm font-semibold text-[#6B6B69] tracking-widest uppercase">
                Marketing Design Studio
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-[#2C2C2A] leading-[1.05] tracking-tight mb-8">
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

            <p className="text-lg md:text-xl text-[#6B6B69] max-w-2xl leading-relaxed mb-12">
              Built on psychology, powered by code, finished with art. For local businesses
              that are ready to look as serious as they are.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#1A56DB] text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-[#1548c4] transition-colors duration-200"
              >
                Start a Project
                <span className="text-lg">→</span>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 border border-[#E5E2D9] text-[#2C2C2A] px-8 py-4 rounded-full font-semibold text-base hover:border-[#2C2C2A] transition-colors duration-200"
              >
                See Packages & Pricing
              </Link>
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

      {/* Featured packages */}
      <section className="py-24 bg-[#2C2C2A]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
              Popular packages
            </h2>
            <p className="text-[#9B9B99]">
              Transparent pricing. No surprises.{' '}
              <Link href="/services" className="text-[#fab600] hover:underline">
                See all packages →
              </Link>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map(({ name, price, desc, popular }) => (
              <div
                key={name}
                className={`relative rounded-2xl p-8 border ${
                  popular
                    ? 'bg-[#1A56DB] border-[#1A56DB] text-white'
                    : 'bg-[#363634] border-[#3F3F3D] text-white'
                }`}
              >
                {popular && (
                  <span className="absolute top-4 right-4 text-xs font-bold bg-[#fab600] text-[#2C2C2A] px-3 py-1 rounded-full uppercase tracking-wider">
                    Most Popular
                  </span>
                )}
                <p className="text-sm font-semibold text-[#fab600] mb-2 uppercase tracking-widest">
                  {name}
                </p>
                <p className="text-3xl font-extrabold mb-4">{price}</p>
                <p className={`text-sm leading-relaxed ${popular ? 'text-blue-100' : 'text-[#9B9B99]'}`}>
                  {desc}
                </p>
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
