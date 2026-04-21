/* =============================================================
   CONTACT — Quiet Authority Design
   Clean form + company info panel. Minimal, no decorative noise.
   ============================================================= */
import { useState } from "react";
import { useRevealAll } from "@/hooks/useReveal";
import { Mail, MapPin, ArrowRight } from "lucide-react";
import { toast } from "sonner";

const serviceAreas = [
  "Renewable Energy Consulting",
  "Data Center Development",
  "Hardware Advisory",
  "Enterprise Software",
  "BTM Solar & Battery",
  "General Enquiry",
];

export default function ContactSection() {
  const sectionRef = useRevealAll();
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your enquiry. We will be in touch shortly.");
    setForm({ name: "", email: "", company: "", service: "", message: "" });
  };

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const inputClass =
    "w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-[14px] text-white placeholder:text-white/25 focus:outline-none focus:border-[#00D4AA]/40 focus:ring-1 focus:ring-[#00D4AA]/20 transition-all duration-200";

  return (
    <section id="contact" ref={sectionRef} className="py-24 md:py-40">
      <div className="container">
        {/* Divider */}
        <div className="divider mb-24 md:mb-40" />

        {/* Section header */}
        <div className="reveal mb-16 md:mb-20">
          <span className="text-label mb-4 block">Contact</span>
          <h2 className="heading-display text-4xl md:text-5xl lg:text-[3.5rem] text-white mb-5">
            Get in <span className="italic text-[#00D4AA]">touch</span>
          </h2>
          <p className="text-body max-w-2xl">
            Tell us about your project. We typically respond within one business day.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Form — 3 columns */}
          <div className="reveal lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-[12px] font-medium text-white/40 uppercase tracking-wider mb-2 block">
                    Name
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    placeholder="Your name"
                    required
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="text-[12px] font-medium text-white/40 uppercase tracking-wider mb-2 block">
                    Email
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    placeholder="you@company.com"
                    required
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-[12px] font-medium text-white/40 uppercase tracking-wider mb-2 block">
                    Company
                  </label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) => update("company", e.target.value)}
                    placeholder="Company name"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="text-[12px] font-medium text-white/40 uppercase tracking-wider mb-2 block">
                    Service Area
                  </label>
                  <select
                    value={form.service}
                    onChange={(e) => update("service", e.target.value)}
                    className={`${inputClass} appearance-none`}
                  >
                    <option value="" className="bg-[#09090B]">Select a service</option>
                    {serviceAreas.map((s) => (
                      <option key={s} value={s} className="bg-[#09090B]">{s}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[12px] font-medium text-white/40 uppercase tracking-wider mb-2 block">
                  Message
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  placeholder="Tell us about your project..."
                  rows={5}
                  required
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button type="submit" className="btn-primary">
                Send Enquiry
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Info panel — 2 columns */}
          <div className="reveal lg:col-span-2">
            <div className="card-surface p-7 md:p-8 space-y-8">
              <div>
                <h4 className="text-[13px] font-medium text-white/30 uppercase tracking-wider mb-4">
                  Reach Us
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-[#00D4AA] mt-1 flex-shrink-0" strokeWidth={1.5} />
                    <div>
                      <p className="text-[14px] text-white/60">Email</p>
                      <a href="mailto:info@infinitybloomco.com" className="text-[14px] text-white hover:text-[#00D4AA] transition-colors">
                        info@infinitybloomco.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#00D4AA] mt-1 flex-shrink-0" strokeWidth={1.5} />
                    <div>
                      <p className="text-[14px] text-white/60">Office</p>
                      <p className="text-[14px] text-white">Hong Kong</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-px bg-white/[0.06]" />

              <div>
                <h4 className="text-[13px] font-medium text-white/30 uppercase tracking-wider mb-4">
                  Service Regions
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["Asia-Pacific", "Middle East", "Southeast Asia", "Greater China", "Global"].map((r) => (
                    <span
                      key={r}
                      className="text-[11px] font-medium text-white/35 bg-white/[0.04] px-2.5 py-1 rounded-md"
                    >
                      {r}
                    </span>
                  ))}
                </div>
              </div>

              <div className="h-px bg-white/[0.06]" />

              <div>
                <h4 className="text-[13px] font-medium text-white/30 uppercase tracking-wider mb-3">
                  Response Time
                </h4>
                <p className="text-[14px] text-white/50">
                  We typically respond within one business day. For urgent enquiries,
                  please indicate in your message.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
