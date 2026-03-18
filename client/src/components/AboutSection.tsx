/* =============================================================
   ABOUT SECTION — Deep Ocean Tech Design
   Company story, values, and team highlights
   ============================================================= */
import { useEffect, useRef } from "react";
import { MapPin, Award, Users, TrendingUp } from "lucide-react";

const CONSULTING_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663273873036/bcuuWxzMvVHtBtirGkw3hg/service_consulting-4T4pgK43QVkc2hyj9fNBTh.webp";

const values = [
  {
    icon: Award,
    title: "Technical Excellence",
    description: "Our team brings decades of combined experience in power engineering, data center design, and enterprise software development.",
    color: "#0EA5E9",
  },
  {
    icon: TrendingUp,
    title: "Sustainable Growth",
    description: "We believe that the most resilient businesses are built on clean energy foundations. Every project we deliver advances the energy transition.",
    color: "#10B981",
  },
  {
    icon: Users,
    title: "Partnership Approach",
    description: "We work as an extension of your team — from initial feasibility through long-term operations. Our success is measured by yours.",
    color: "#06B6D4",
  },
  {
    icon: MapPin,
    title: "Hong Kong Rooted",
    description: "Incorporated in Hong Kong with deep regional networks, we navigate local regulations and cross-border complexities with confidence.",
    color: "#F59E0B",
  },
];

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

export default function AboutSection() {
  const titleRef = useReveal();
  const leftRef = useReveal();
  const rightRef = useReveal();

  return (
    <section id="about" className="py-24 bg-[#050E1F] relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] opacity-5"
        style={{ background: 'radial-gradient(ellipse at left, #10B981 0%, transparent 70%)' }}
      />

      <div className="container relative z-10">
        {/* Header */}
        <div ref={titleRef} className="reveal text-center mb-16">
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
          <div ref={leftRef} className="reveal relative">
            <div className="relative rounded-2xl overflow-hidden h-80 lg:h-[420px]">
              <img
                src={CONSULTING_IMAGE}
                alt="Infinity Bloom team in Hong Kong"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050E1F]/80 via-transparent to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-[#0A1628] border border-[#0EA5E9]/30 rounded-2xl p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0EA5E9] to-[#06B6D4] flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-white/50" style={{ fontFamily: 'DM Sans, sans-serif' }}>Headquartered in</p>
                  <p className="text-sm font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Hong Kong SAR</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Text */}
          <div ref={rightRef} className="reveal">
            <h3
              className="text-2xl md:text-3xl font-bold text-white mb-5 leading-tight"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              Bridging Renewable Energy and Digital Infrastructure
            </h3>
            <div className="space-y-4 text-white/60 leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              <p>
                Infinity Bloom Co. Limited is a Hong Kong-based technology and energy company founded to address the growing intersection of digital infrastructure and sustainable energy. As data centers become the backbone of the modern economy, their energy demands have never been greater — or more consequential.
              </p>
              <p>
                We work with data center operators, property developers, and enterprises to design and deliver solutions that are both technically rigorous and environmentally responsible. Our team combines expertise in power engineering, IT infrastructure, and enterprise software to provide end-to-end value.
              </p>
              <p>
                From procuring renewable electricity contracts to deploying behind-the-meter solar and battery systems, from hardware advisory to proprietary energy management software — Infinity Bloom is your partner across the full infrastructure lifecycle.
              </p>
            </div>

            {/* Key facts */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { label: "Founded", value: "Hong Kong" },
                { label: "Focus", value: "B2B Enterprise" },
                { label: "Coverage", value: "Greater China & SEA" },
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
