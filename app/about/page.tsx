import Link from 'next/link';

export const metadata = {
  title: 'About — X & Y Design',
  description: 'Meet Xandy — the psychology, code, and art behind X & Y Design.',
};

export default function About() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 border-b border-[#E5E2D9]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-[#fab600]" />
            <span className="text-sm font-semibold text-[#6B6B69] tracking-widest uppercase">About</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#2C2C2A] tracking-tight leading-tight max-w-3xl">
            One person. Three disciplines. No compromises.
          </h1>
        </div>
      </section>

      {/* Main bio */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Text */}
            <div>
              <h2 className="text-2xl font-bold text-[#2C2C2A] mb-8">Hey, I'm Xandy.</h2>
              <div className="space-y-6 text-[#6B6B69] leading-relaxed">
                <p>
                  I hold a <strong className="text-[#2C2C2A]">Bachelor's degree in Psychology</strong> — and
                  that shapes everything I build. Design is communication, and communication works
                  when it's built around how people actually think. Color, hierarchy, layout, copy —
                  every choice either builds trust or erodes it. Most designers don't know why
                  something works. I do, because I studied it.
                </p>
                <p>
                  My <strong className="text-[#2C2C2A]">Master's degree in Computer Science</strong> means
                  there's no gap between design and execution. I don't hand off a mockup and hope
                  a developer interprets it correctly — I build it myself. Clean code, fast load
                  times, mobile-first, accessible. For local businesses, that means a site that
                  performs as well as it looks — and performs in both senses of the word.
                </p>
                <p>
                  I also hold a <strong className="text-[#2C2C2A]">Fine Art minor</strong>, and my work as
                  an artist has been featured in magazines and recognized with awards. That's not
                  a footnote — it's the part that makes the work actually beautiful. Technical
                  skill without artistic instinct produces competent, forgettable design.
                  The art is what makes it stick.
                </p>
                <p>
                  X & Y Design is a solo studio, and I intend to keep it that way. Every client
                  works directly with me — not an account manager, not a junior designer hired
                  last month. You get my full attention, my full skill set, and someone who
                  is genuinely invested in your business doing well.
                </p>
              </div>

              <div className="mt-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#1A56DB] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#1548c4] transition-colors duration-200"
                >
                  Work with me →
                </Link>
              </div>
            </div>

            {/* Credential cards */}
            <div className="space-y-4">
              {[
                {
                  label: 'B.S. Psychology',
                  detail: 'Design decisions grounded in behavioral science — how people perceive, trust, and decide.',
                  accent: '#1A56DB',
                },
                {
                  label: 'M.S. Computer Science',
                  detail: 'Every site I design, I build. Clean code, fast load, engineered to convert.',
                  accent: '#fab600',
                },
                {
                  label: 'Fine Art Minor',
                  detail: 'Award-winning artist with magazine features. Visual instincts you can\'t learn from a course.',
                  accent: '#2C2C2A',
                },
                {
                  label: 'Solo Studio',
                  detail: 'You always work directly with me — not a team you\'ll never meet.',
                  accent: '#E5E2D9',
                },
              ].map(({ label, detail, accent }) => (
                <div
                  key={label}
                  className="border-l-4 bg-white pl-6 pr-6 py-5 rounded-r-xl"
                  style={{ borderLeftColor: accent }}
                >
                  <p className="font-bold text-[#2C2C2A] mb-1">{label}</p>
                  <p className="text-sm text-[#6B6B69] leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-[#2C2C2A]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-[#fab600] tracking-widest uppercase mb-6">
              Philosophy
            </p>
            <blockquote className="text-3xl md:text-4xl font-extrabold text-white leading-tight tracking-tight">
              "Good design doesn't just attract attention. It builds trust, guides behavior,
              and makes people feel like they're in the right place."
            </blockquote>
            <p className="text-[#9B9B99] mt-8 leading-relaxed">
              That's the bar every project at X & Y Design is held to. Not whether it's pretty —
              whether it works.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#2C2C2A] tracking-tight mb-6">
            Let's build something worth noticing.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 border border-[#E5E2D9] text-[#2C2C2A] px-8 py-4 rounded-full font-semibold hover:border-[#2C2C2A] transition-colors duration-200"
            >
              See Packages
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#fab600] text-[#2C2C2A] px-8 py-4 rounded-full font-bold hover:bg-[#e6a800] transition-colors duration-200"
            >
              Start a Conversation →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
