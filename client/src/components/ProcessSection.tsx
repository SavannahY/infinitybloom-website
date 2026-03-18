/* =============================================================
   PROCESS SECTION — Deep Ocean Tech Design
   How we work — 4-step process with connecting line
   ============================================================= */
import { useEffect, useRef } from "react";
import { Search, FileText, Wrench, BarChart2 } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery & Feasibility",
    description:
      "We begin with a thorough assessment of your energy needs, site conditions, regulatory environment, and financial objectives. Our team produces a detailed feasibility report with multiple scenario analyses.",
    color: "#0EA5E9",
  },
  {
    number: "02",
    icon: FileText,
    title: "Design & Engineering",
    description:
      "Our engineers develop detailed technical designs for your energy or data infrastructure project — from power system schematics and data center layouts to software architecture and integration plans.",
    color: "#06B6D4",
  },
  {
    number: "03",
    icon: Wrench,
    title: "Procurement & Delivery",
    description:
      "We manage the full procurement and construction process, leveraging our network of pre-qualified suppliers and contractors. Rigorous quality control at every stage ensures on-time, on-budget delivery.",
    color: "#10B981",
  },
  {
    number: "04",
    icon: BarChart2,
    title: "Operations & Optimisation",
    description:
      "Post-commissioning, our team provides ongoing monitoring, performance analytics, and optimisation services. Our software platforms give you real-time visibility and control over your infrastructure.",
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

export default function ProcessSection() {
  const titleRef = useReveal();

  return (
    <section className="py-24 bg-[#050E1F] relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 opacity-3"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(14,165,233,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(6,182,212,0.06) 0%, transparent 50%)`
        }}
      />

      <div className="container relative z-10">
        {/* Header */}
        <div ref={titleRef} className="reveal text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#10B981]/30 bg-[#10B981]/10 mb-4">
            <span className="text-xs font-medium text-[#10B981] tracking-widest uppercase" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              How We Work
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-extrabold text-white mb-4"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            Our <span className="gradient-text">Process</span>
          </h2>
          <p className="text-lg text-white/55 max-w-2xl mx-auto" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            A structured, transparent approach from initial discovery through long-term operations.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-14 left-0 right-0 h-px"
            style={{ background: 'linear-gradient(90deg, transparent 5%, rgba(14,165,233,0.2) 20%, rgba(6,182,212,0.2) 50%, rgba(16,185,129,0.2) 80%, transparent 95%)' }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="reveal flex flex-col items-center text-center lg:items-start lg:text-left"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  {/* Step number + icon */}
                  <div className="relative mb-6">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center relative z-10"
                      style={{
                        background: `linear-gradient(135deg, ${step.color}30 0%, ${step.color}10 100%)`,
                        border: `1px solid ${step.color}50`,
                        boxShadow: `0 0 20px ${step.color}20`,
                      }}
                    >
                      <Icon className="w-6 h-6" style={{ color: step.color }} />
                    </div>
                    <div
                      className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold"
                      style={{
                        background: step.color,
                        color: '#050E1F',
                        fontFamily: 'Syne, sans-serif',
                      }}
                    >
                      {step.number.replace('0', '')}
                    </div>
                  </div>

                  <h3
                    className="text-base font-bold text-white mb-2"
                    style={{ fontFamily: 'Syne, sans-serif' }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
