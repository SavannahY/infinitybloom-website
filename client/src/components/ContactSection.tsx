/* =============================================================
   CONTACT SECTION — Deep Ocean Tech Design
   Contact form + company info panel
   ============================================================= */
import { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add("visible"); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function ContactSection() {
  const titleRef = useReveal();
  const leftRef = useReveal();
  const rightRef = useReveal();

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 bg-[#050E1F] relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] opacity-5"
        style={{ background: 'radial-gradient(ellipse at bottom, #0EA5E9 0%, transparent 70%)' }}
      />

      <div className="container relative z-10">
        {/* Header */}
        <div ref={titleRef} className="reveal text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#0EA5E9]/30 bg-[#0EA5E9]/10 mb-4">
            <span className="text-xs font-medium text-[#0EA5E9] tracking-widest uppercase" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Get in Touch
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-extrabold text-white mb-4"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            Contact <span className="gradient-text">Us</span>
          </h2>
          <p className="text-lg text-white/55 max-w-2xl mx-auto" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Whether you're exploring a new project or looking for a long-term partner, we'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left: Company info */}
          <div ref={leftRef} className="reveal lg:col-span-2 space-y-6">
            {/* Info card */}
            <div className="glow-card rounded-2xl p-6">
              <h3
                className="text-lg font-bold text-white mb-5"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                Infinity Bloom Co. Limited
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0EA5E9]/20 border border-[#0EA5E9]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-[#0EA5E9]" />
                  </div>
                  <div>
                    <p className="text-xs text-white/40 mb-0.5" style={{ fontFamily: 'DM Sans, sans-serif' }}>Location</p>
                    <p className="text-sm text-white/80" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      Hong Kong SAR, China
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#06B6D4]/20 border border-[#06B6D4]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-4 h-4 text-[#06B6D4]" />
                  </div>
                  <div>
                    <p className="text-xs text-white/40 mb-0.5" style={{ fontFamily: 'DM Sans, sans-serif' }}>Email</p>
                    <a
                      href="mailto:info@infinitybloomco.com"
                      className="text-sm text-white/80 hover:text-[#06B6D4] transition-colors"
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      info@infinitybloomco.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#10B981]/20 border border-[#10B981]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 text-[#10B981]" />
                  </div>
                  <div>
                    <p className="text-xs text-white/40 mb-0.5" style={{ fontFamily: 'DM Sans, sans-serif' }}>Phone</p>
                    <a
                      href="tel:+85200000000"
                      className="text-sm text-white/80 hover:text-[#10B981] transition-colors"
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      +852 0000 0000
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Service areas */}
            <div className="glow-card rounded-2xl p-6">
              <h4
                className="text-sm font-bold text-white mb-4"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                Service Areas
              </h4>
              <div className="space-y-2">
                {[
                  "Hong Kong SAR",
                  "Mainland China",
                  "Southeast Asia",
                  "Regional APAC",
                ].map((area) => (
                  <div key={area} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                    <span className="text-sm text-white/65" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      {area}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Business hours */}
            <div className="glow-card rounded-2xl p-6">
              <h4
                className="text-sm font-bold text-white mb-3"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                Business Hours (HKT)
              </h4>
              <div className="space-y-1.5">
                <div className="flex justify-between text-sm">
                  <span className="text-white/50" style={{ fontFamily: 'DM Sans, sans-serif' }}>Monday – Friday</span>
                  <span className="text-white/80" style={{ fontFamily: 'DM Sans, sans-serif' }}>9:00 – 18:00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/50" style={{ fontFamily: 'DM Sans, sans-serif' }}>Saturday</span>
                  <span className="text-white/80" style={{ fontFamily: 'DM Sans, sans-serif' }}>By appointment</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/50" style={{ fontFamily: 'DM Sans, sans-serif' }}>Sunday</span>
                  <span className="text-white/50" style={{ fontFamily: 'DM Sans, sans-serif' }}>Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact form */}
          <div ref={rightRef} className="reveal lg:col-span-3">
            <div className="glow-card rounded-2xl p-6 md:p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#10B981]/20 border border-[#10B981]/40 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8 text-[#10B981]" />
                  </div>
                  <h3
                    className="text-xl font-bold text-white mb-2"
                    style={{ fontFamily: 'Syne, sans-serif' }}
                  >
                    Message Received
                  </h3>
                  <p className="text-white/55 max-w-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    Thank you for reaching out. Our team will respond within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-white/50 mb-1.5" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/25 focus:outline-none focus:border-[#0EA5E9]/50 focus:bg-white/8 transition-all duration-300 text-sm"
                        style={{ fontFamily: 'DM Sans, sans-serif' }}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-white/50 mb-1.5" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company Ltd."
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/25 focus:outline-none focus:border-[#0EA5E9]/50 focus:bg-white/8 transition-all duration-300 text-sm"
                        style={{ fontFamily: 'DM Sans, sans-serif' }}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-white/50 mb-1.5" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/25 focus:outline-none focus:border-[#0EA5E9]/50 focus:bg-white/8 transition-all duration-300 text-sm"
                        style={{ fontFamily: 'DM Sans, sans-serif' }}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-white/50 mb-1.5" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+852 XXXX XXXX"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/25 focus:outline-none focus:border-[#0EA5E9]/50 focus:bg-white/8 transition-all duration-300 text-sm"
                        style={{ fontFamily: 'DM Sans, sans-serif' }}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-white/50 mb-1.5" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      Service of Interest
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#0EA5E9]/50 transition-all duration-300 text-sm"
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      <option value="" className="bg-[#0A1628]">Select a service...</option>
                      <option value="renewable" className="bg-[#0A1628]">Renewable Energy Supply</option>
                      <option value="datacenter" className="bg-[#0A1628]">Data Center Development</option>
                      <option value="hardware" className="bg-[#0A1628]">Hardware Consulting</option>
                      <option value="software" className="bg-[#0A1628]">B2B Software Solutions</option>
                      <option value="btm" className="bg-[#0A1628]">BTM Solar & Battery</option>
                      <option value="other" className="bg-[#0A1628]">Other / General Enquiry</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-white/50 mb-1.5" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell us about your project or enquiry..."
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/25 focus:outline-none focus:border-[#0EA5E9]/50 focus:bg-white/8 transition-all duration-300 text-sm resize-none"
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full btn-teal flex items-center justify-center gap-2 py-3.5 rounded-xl text-base font-semibold text-white disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{ fontFamily: 'Syne, sans-serif' }}
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
