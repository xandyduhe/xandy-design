import Link from 'next/link';

export const metadata = {
  title: 'Services & Packages — X & Y Design',
  description: 'Transparent pricing for brand, web, and social media design packages.',
};

const packages = [
  {
    category: 'Brand',
    items: [
      {
        name: 'Brand Spark',
        price: '$600–900',
        ideal: 'New businesses needing a foundation',
        includes: [
          'Custom logo (primary + alternate marks)',
          'Color palette & typography system',
          'Brand guidelines document',
          'File delivery in all formats',
        ],
      },
      {
        name: 'Brand + Social Launch',
        price: '$1,400–2,000',
        popular: true,
        ideal: 'Businesses ready to show up online consistently',
        includes: [
          'Everything in Brand Spark',
          'Social media profile graphics',
          '10 branded post templates',
          'Story/reel cover templates',
          'Content style guide',
        ],
      },
      {
        name: 'Full Brand + Web',
        price: '$3,500–6,000',
        ideal: 'Businesses that want the complete package',
        includes: [
          'Everything in Brand + Social Launch',
          'Custom website (5–8 pages)',
          'Mobile-optimized, fast, and accessible',
          'Contact form + basic SEO setup',
          '30-day post-launch support',
        ],
      },
    ],
  },
  {
    category: 'Web',
    items: [
      {
        name: 'Landing Page',
        price: '$800–1,500',
        ideal: 'One page built to convert — campaigns, offers, launches',
        includes: [
          'Single high-converting page',
          'Mobile-first design',
          'Contact/lead capture form',
          'Basic SEO meta setup',
        ],
      },
      {
        name: 'Full Website',
        price: '$2,500–5,000',
        ideal: '5–8 page site for established businesses',
        includes: [
          '5–8 custom pages',
          'Mobile-optimized throughout',
          'Contact form + integrations',
          'SEO fundamentals',
          '30-day post-launch support',
        ],
      },
    ],
  },
  {
    category: 'Retainers',
    items: [
      {
        name: 'Social Media Management',
        price: '$800–1,500/mo',
        ideal: 'Businesses that want consistent content without lifting a finger',
        includes: [
          '12–20 posts/month',
          'Platform management (IG, FB, or LinkedIn)',
          'Monthly content calendar',
          'Graphics + captions',
          'Monthly performance report',
        ],
      },
      {
        name: 'Brand Growth Partner',
        price: '$1,500–2,500/mo',
        ideal: 'Full-service brand and marketing partnership',
        includes: [
          'Everything in Social Media Management',
          'Monthly strategy session',
          'Email newsletter (2x/mo)',
          'Ongoing website updates',
          'Priority turnaround',
        ],
      },
    ],
  },
];

export default function Services() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 border-b border-[#E5E2D9]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-[#fab600]" />
            <span className="text-sm font-semibold text-[#6B6B69] tracking-widest uppercase">Services</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#2C2C2A] tracking-tight leading-tight max-w-3xl mb-6">
            Clear packages. Real results.
          </h1>
          <p className="text-lg text-[#6B6B69] max-w-2xl">
            Every package is built around the same principle: make your business look and
            perform at the level it deserves. No filler. No fluff.
          </p>
        </div>
      </section>

      {/* Packages */}
      {packages.map(({ category, items }) => (
        <section key={category} className="py-20 border-b border-[#E5E2D9]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-xs font-bold text-[#6B6B69] tracking-widest uppercase mb-10">
              {category}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map(({ name, price, ideal, includes, popular }) => (
                <div
                  key={name}
                  className={`relative rounded-2xl border p-8 flex flex-col ${
                    popular
                      ? 'border-[#1A56DB] bg-[#1A56DB] text-white'
                      : 'border-[#E5E2D9] bg-white text-[#2C2C2A]'
                  }`}
                >
                  {popular && (
                    <span className="absolute top-4 right-4 text-xs font-bold bg-[#fab600] text-[#2C2C2A] px-3 py-1 rounded-full uppercase tracking-wider">
                      Most Popular
                    </span>
                  )}
                  <div className="mb-6">
                    <p className={`text-xs font-semibold tracking-widest uppercase mb-3 ${popular ? 'text-blue-200' : 'text-[#6B6B69]'}`}>
                      {name}
                    </p>
                    <p className={`text-3xl font-extrabold mb-3 ${popular ? 'text-white' : 'text-[#2C2C2A]'}`}>
                      {price}
                    </p>
                    <p className={`text-sm leading-snug ${popular ? 'text-blue-100' : 'text-[#6B6B69]'}`}>
                      {ideal}
                    </p>
                  </div>

                  <ul className="space-y-2 flex-1 mb-8">
                    {includes.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className={`mt-0.5 text-sm ${popular ? 'text-[#fab600]' : 'text-[#1A56DB]'}`}>✓</span>
                        <span className={`text-sm leading-snug ${popular ? 'text-blue-50' : 'text-[#6B6B69]'}`}>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`w-full text-center py-3 rounded-full text-sm font-semibold transition-colors duration-200 ${
                      popular
                        ? 'bg-white text-[#1A56DB] hover:bg-blue-50'
                        : 'bg-[#2C2C2A] text-white hover:bg-[#3d3d3b]'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* FAQ / note */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-extrabold text-[#2C2C2A] mb-6">Not sure which fits?</h2>
              <p className="text-[#6B6B69] leading-relaxed mb-6">
                Every business is different. If you're not sure which package makes sense,
                just reach out — I'll ask a few questions and tell you exactly what you need
                (and what you don't).
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#fab600] text-[#2C2C2A] px-8 py-4 rounded-full font-bold hover:bg-[#e6a800] transition-colors duration-200"
              >
                Let's figure it out →
              </Link>
            </div>
            <div className="space-y-6">
              {[
                { q: 'Do you work with real estate businesses?', a: 'Yes — real estate is one of the best fits for this work. A strong brand builds trust before the first showing.' },
                { q: 'How long does a project take?', a: 'Brand packages: 1–2 weeks. Websites: 2–4 weeks. Rush timelines available.' },
                { q: 'What do you need from me to start?', a: 'Just a conversation. I\'ll guide you through everything else.' },
              ].map(({ q, a }) => (
                <div key={q} className="border-b border-[#E5E2D9] pb-6">
                  <p className="font-semibold text-[#2C2C2A] mb-2">{q}</p>
                  <p className="text-sm text-[#6B6B69] leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
