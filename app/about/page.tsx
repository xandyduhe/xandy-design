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
              <h2 className="text-2xl font-bold text-[#2C2C2A] mb-6">Hey, I'm Xandy.</h2>
              <div className="space-y-5 text-[#6B6B69] leading-relaxed">
                <p>
                  I built X & Y Design because most local businesses get handed a logo and
                  a template and told it's a brand. It's not. A brand is a system of trust —
                  built in milliseconds, felt before a word is read.
                </p>
                <p>
                  I hold a B.S. in Psychology, an M.S. in Computer Science, and a minor in
                  Fine Art. That combination isn't an accident. Psychology tells me why people
                  respond to what they see. CS means I can build it myself — no handoff,
                  no broken telephone. Fine art is the part that makes it actually beautiful.
                </p>
                <p>
                  My artwork has been featured in magazines and won awards. My code ships clean
                  and fast. My design decisions are grounded in how humans actually think and
                  decide — not just what looks nice in a portfolio.
                </p>
                <p>
                  When you work with me, you work with me. There's no account manager relaying
                  messages to a junior designer overseas. You get the real thing.
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
                  detail: 'Behavioral science, perception, decision-making — applied to design.',
                  color: 'border-l-[#1A56DB]',
                },
                {
                  label: 'M.S. Computer Science',
                  detail: 'Every site I design, I build. Clean code, fast load, built to convert.',
                  color: 'border-l-[#fab600]',
                },
                {
                  label: 'Fine Art Minor',
                  detail: 'Award-winning artist. Magazine features. Visual instincts you can\'t fake.',
                  color: 'border-l-[#2C2C2A]',
                },
                {
                  label: 'Solo Studio',
                  detail: 'You always work directly with me — not a team you\'ll never meet.',
                  color: 'border-l-[#E5E2D9]',
                },
              ].map(({ label, detail, color }) => (
                <div
                  key={label}
                  className={`border-l-4 ${color} bg-white pl-6 pr-6 py-5 rounded-r-xl`}
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
