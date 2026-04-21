/* =============================================================
   ABOUT SECTION — Deep Ocean Tech Design
   New company, global focus, tech consulting emphasis
   ============================================================= */
import { useRevealAll } from "@/hooks/useReveal";
import { Globe, Award, Users, TrendingUp } from "lucide-react";

const CONSULTING_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663273873036/bcuuWxzMvVHtBtirGkw3hg/service_consulting-4T4pgK43QVkc2hyj9fNBTh.webp";

const values = [
  {
    icon: Award,
    title: "Technical Excellence",
    description: "Deep expertise in power engineering, data center design, and enterprise software — built from decades of combined industry experience.",
    color: "#0EA5E9",
  },
  {
    icon: TrendingUp,
    title: "Sustainable Innovation",
    description: "We believe the most resilient infrastructure is built on clean energy. Every engagement we deliver advances the energy transition.",
    color: "#10B981",
  },
  {
    icon: Users,
    title: "Consulting Partnership",
    description: "We work as an extension of your team — providing strategic advisory, technical delivery, and long-term operational support.",
    color: "#06B6D4",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description: "Headquartered in Hong Kong with a global outlook. We bring international best practices to every market we serve.",
    color: "#F59E0B",
  },
];

export default function AboutSection() {
  const sectionRef = useRevealAll();

  return (
    <section id="about" className="py-24 bg-[#050E1F] relative overflow-hidden" ref={sectionRef}>
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] opacity-5"
        style={{ background: 'radial-gradient(ellipse at left, #10B981 0%, transparent 70%)' }}
      />

      <div className="container relative z-10">
        {/* Header */}
        <div className="reveal text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#10B981]/30 bg-[#10B981]/10 mb-4">
            <span className="text-xs font-medium text-[#10B981] tracking-widest uppercase" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              About Us
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-extrabold text-white mb-4"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            Who We <span className="gradient-text">Are</span>
          </h2>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left: Image */}
          <div className="reveal relative">
            <div className="relative rounded-2xl overflow-hidden h-80 lg:h-[420px]">
              <img
                src={CONSULTING_IMAGE}
                alt="Infinity Bloom global consulting team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050E1F]/80 via-transparent to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-[#0A1628] border border-[#0EA5E9]/30 rounded-2xl p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0EA5E9] to-[#06B6D4] flex items-center justify-center">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-white/50" style={{ fontFamily: 'DM Sans, sans-serif' }}>Serving Clients</p>
                  <p className="text-sm font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Globally</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Text */}
          <div className="reveal">
            <h3
              className="text-2xl md:text-3xl font-bold text-white mb-5 leading-tight"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              A Technology Consulting Firm for the Energy Transition
            </h3>
            <div className="space-y-4 text-white/60 leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              <p>
                Infinity Bloom Co. Limited is a technology consulting firm founded to address the growing intersection of digital infrastructure and sustainable energy. As data centers become the backbone of the global economy, their energy demands have never been greater — or more consequential.
              </p>
              <p>
                We work with data center operators, property developers, and enterprises worldwide to design and deliver solutions that are both technically rigorous and environmentally responsible. Our team combines expertise in power engineering, IT infrastructure, and enterprise software to provide end-to-end consulting value.
              </p>
              <p>
                From renewable energy advisory and data center development to hardware consulting and proprietary software platforms — Infinity Bloom is your partner for the full infrastructure lifecycle, wherever your business operates.
              </p>
            </div>

            {/* Key facts */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { label: "Headquarters", value: "Hong Kong" },
                { label: "Focus", value: "B2B Consulting" },
                { label: "Coverage", value: "Global" },
                { label: "Languages", value: "EN / 中文 / 廣東話" },
              ].map((fact) => (
                <div key={fact.label} className="glow-card rounded-xl p-4">
                  <p className="text-xs text-white/40 mb-1" style={{ fontFamily: 'DM Sans, sans-serif' }}>{fact.label}</p>
                  <p className="text-sm font-semibold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>{fact.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="section-divider mb-16" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, i) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className="glow-card rounded-2xl p-6 reveal"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${value.color}20`, border: `1px solid ${value.color}40` }}
                >
                  <Icon className="w-5 h-5" style={{ color: value.color }} />
                </div>
                <h4
                  className="text-base font-bold text-white mb-2"
                  style={{ fontFamily: 'Syne, sans-serif' }}
                >
                  {value.title}
                </h4>
                <p className="text-sm text-white/55 leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
