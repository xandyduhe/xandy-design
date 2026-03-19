export const metadata = {
  title: 'Contact — X & Y Design',
  description: 'Start a project with X & Y Design.',
};

const inputClass =
  'w-full border border-[#E5E2D9] rounded-xl px-4 py-3 text-sm text-[#2C2C2A] bg-white placeholder:text-[#BDBBB3] focus:outline-none focus:border-[#1A56DB] transition-colors duration-200';

export default function Contact() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 border-b border-[#E5E2D9]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-[#fab600]" />
            <span className="text-sm font-semibold text-[#6B6B69] tracking-widest uppercase">Contact</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#2C2C2A] tracking-tight leading-tight max-w-3xl">
            Tell me about your project.
          </h1>
        </div>
      </section>

      {/* Contact form + info */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <form
                action="https://formspree.io/f/placeholder"
                method="POST"
                className="space-y-6"
              >
                {/* Name + Business */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#2C2C2A] mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your name"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#2C2C2A] mb-2">
                      Business Name
                    </label>
                    <input
                      type="text"
                      name="business"
                      placeholder="Your business"
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-[#2C2C2A] mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@yourbusiness.com"
                    className={inputClass}
                  />
                </div>

                {/* Type of business */}
                <div>
                  <label className="block text-sm font-semibold text-[#2C2C2A] mb-2">
                    Type of Business
                  </label>
                  <select name="business_type" className={inputClass}>
                    <option value="">Select your industry...</option>
                    <option>Restaurant / Food</option>
                    <option>Real Estate</option>
                    <option>Retail / Boutique</option>
                    <option>Health / Wellness</option>
                    <option>Professional Services</option>
                    <option>Other</option>
                  </select>
                </div>

                {/* Service */}
                <div>
                  <label className="block text-sm font-semibold text-[#2C2C2A] mb-2">
                    Service Interested In
                  </label>
                  <select name="service" className={inputClass}>
                    <option value="">Select a service...</option>
                    <option>Brand Spark ($600–900)</option>
                    <option>Brand + Social Launch ($1,400–2,000)</option>
                    <option>Full Brand + Web ($3,500–6,000)</option>
                    <option>Landing Page ($800–1,500)</option>
                    <option>Full Website ($2,500–5,000)</option>
                    <option>Social Media Management ($800–1,500/mo)</option>
                    <option>Brand Growth Partner ($1,500–2,500/mo)</option>
                    <option>Not sure yet</option>
                  </select>
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-sm font-semibold text-[#2C2C2A] mb-2">
                    Budget Range
                  </label>
                  <select name="budget" className={inputClass}>
                    <option value="">Select a range...</option>
                    <option>Under $1,000</option>
                    <option>$1,000–$3,000</option>
                    <option>$3,000–$6,000</option>
                    <option>Monthly retainer</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-[#2C2C2A] mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell me about your business, your goals, and where you're at right now."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1A56DB] text-white py-4 rounded-full font-semibold text-base hover:bg-[#1548c4] transition-colors duration-200"
                >
                  Send Message →
                </button>

                <p className="text-xs text-[#6B6B69] text-center">
                  I typically respond within 24 hours on business days.
                </p>
              </form>
            </div>

            {/* Info panel */}
            <div className="space-y-10">
              <div>
                <h2 className="text-xl font-bold text-[#2C2C2A] mb-4">What to expect</h2>
                <div className="space-y-4">
                  {[
                    { step: '01', text: 'You fill out the form above.' },
                    { step: '02', text: 'I review your project and reply within 24 hours.' },
                    { step: '03', text: 'We hop on a quick call or exchange a few messages to align.' },
                    { step: '04', text: 'I send a clear proposal — scope, timeline, and price.' },
                    { step: '05', text: 'We get to work.' },
                  ].map(({ step, text }) => (
                    <div key={step} className="flex items-start gap-4">
                      <span className="text-xs font-bold text-[#fab600] mt-0.5 w-6 shrink-0">{step}</span>
                      <p className="text-sm text-[#6B6B69] leading-relaxed">{text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white border border-[#E5E2D9] rounded-2xl p-8">
                <p className="text-sm font-semibold text-[#6B6B69] uppercase tracking-widest mb-4">
                  Working with real estate clients?
                </p>
                <p className="text-[#2C2C2A] font-semibold mb-2">
                  Your brand is doing more selling than you think.
                </p>
                <p className="text-sm text-[#6B6B69] leading-relaxed">
                  In real estate, trust is everything — and trust is built visually before a
                  single conversation happens. A strong brand doesn't just look good.
                  It closes deals.
                </p>
              </div>

              <div>
                <p className="text-sm text-[#6B6B69]">
                  Prefer email?{' '}
                  <a
                    href="mailto:hello@xandydesign.com"
                    className="text-[#1A56DB] hover:underline font-medium"
                  >
                    hello@xandydesign.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
