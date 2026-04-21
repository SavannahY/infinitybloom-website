/* =============================================================
   WHY US SECTION — Deep Ocean Tech Design
   Differentiators — tech consulting, global business focus
   ============================================================= */
import { useRevealAll } from "@/hooks/useReveal";
import {
  Layers,
  Lightbulb,
  Handshake,
  Globe,
  ShieldCheck,
  Workflow,
} from "lucide-react";

const differentiators = [
  {
    icon: Layers,
    title: "Full-Stack Consulting",
    description:
      "One of the few firms globally that can advise across the entire value chain — from renewable energy strategy and data center design to hardware procurement and enterprise software. One partner, end-to-end.",
    color: "#0EA5E9",
  },
  {
    icon: Lightbulb,
    title: "Proprietary Technology",
    description:
      "Our in-house software platforms for energy campus management and DCIM are purpose-built for global markets, incorporating local grid characteristics and regulatory requirements.",
    color: "#06B6D4",
  },
  {
    icon: Handshake,
    title: "Trusted B2B Partner",
    description:
      "We operate exclusively in the B2B space, serving data center operators, real estate developers, and large enterprises. Our relationships are built on measurable outcomes and long-term value.",
    color: "#10B981",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "Headquartered in Hong Kong with consulting engagements across Asia-Pacific, the Middle East, and emerging markets. We bring international expertise to every project.",
    color: "#F59E0B",
  },
  {
    icon: ShieldCheck,
    title: "Regulatory Expertise",
    description:
      "Deep knowledge of electricity markets, grid connection requirements, and cross-border energy regulations across multiple jurisdictions and geographies.",
    color: "#0EA5E9",
  },
  {
    icon: Workflow,
    title: "Integrated Delivery",
    description:
      "From initial feasibility and financial modelling through design, delivery, and ongoing operations — our integrated consulting approach reduces handover risk and ensures accountability.",
    color: "#06B6D4",
  },
];

export default function WhyUsSection() {
  const sectionRef = useRevealAll();

  return (
    <section id="why-us" className="py-24 bg-[#0A1628] relative overflow-hidden" ref={sectionRef}>
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-[600px] h-[400px] opacity-5"
        style={{ background: 'radial-gradient(ellipse at top right, #0EA5E9 0%, transparent 70%)' }}
      />

      <div className="container relative z-10">
        {/* Header */}
        <div className="reveal text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#F59E0B]/30 bg-[#F59E0B]/10 mb-4">
            <span className="text-xs font-medium text-[#F59E0B] tracking-widest uppercase" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Why Infinity Bloom
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-extrabold text-white mb-4"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            Our <span className="gradient-text">Advantage</span>
          </h2>
          <p className="text-lg text-white/55 max-w-2xl mx-auto" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            What sets Infinity Bloom apart as a global technology consulting firm.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((d, i) => {
            const Icon = d.icon;
            return (
              <div
                key={d.title}
                className="glow-card rounded-2xl p-6 reveal group"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                    style={{ background: `${d.color}20`, border: `1px solid ${d.color}40` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: d.color }} />
                  </div>
                  <div>
                    <h3
                      className="text-base font-bold text-white mb-2"
                      style={{ fontFamily: 'Syne, sans-serif' }}
                    >
                      {d.title}
                    </h3>
                    <p className="text-sm text-white/55 leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      {d.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 reveal">
          <div
            className="rounded-2xl p-8 md:p-12 relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #0A1E3A 0%, #051428 100%)',
              border: '1px solid rgba(14,165,233,0.2)',
            }}
          >
            {/* Glow */}
            <div className="absolute inset-0 opacity-10"
              style={{ background: 'radial-gradient(ellipse at center, #0EA5E9 0%, transparent 70%)' }}
            />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3
                  className="text-2xl md:text-3xl font-bold text-white mb-2"
                  style={{ fontFamily: 'Syne, sans-serif' }}
                >
                  Ready to Power Your Infrastructure?
                </h3>
                <p className="text-white/60" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Let's discuss how Infinity Bloom can support your energy and data center goals — anywhere in the world.
                </p>
              </div>
              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-teal flex-shrink-0 px-8 py-4 rounded-xl text-base font-bold text-white whitespace-nowrap"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                Start a Conversation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
