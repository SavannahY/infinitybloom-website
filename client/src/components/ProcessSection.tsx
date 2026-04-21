/* =============================================================
   PROCESS SECTION — Deep Ocean Tech Design
   Consulting-focused 4-step process
   ============================================================= */
import { useRevealAll } from "@/hooks/useReveal";
import { Search, PenTool, Rocket, BarChart2 } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery & Assessment",
    description:
      "We assess your energy needs, site conditions, regulatory landscape, and business objectives — producing a clear feasibility report with actionable recommendations.",
    color: "#0EA5E9",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Strategy & Design",
    description:
      "Our consultants develop tailored technical designs and strategic roadmaps — from power system architecture and data center layouts to software integration plans.",
    color: "#06B6D4",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Implementation",
    description:
      "We manage procurement, construction, and deployment through our global partner network — ensuring quality delivery on time and within budget.",
    color: "#10B981",
  },
  {
    number: "04",
    icon: BarChart2,
    title: "Optimisation & Support",
    description:
      "Post-deployment, our platforms provide real-time monitoring, analytics, and ongoing advisory — keeping your infrastructure performing at its best.",
    color: "#F59E0B",
  },
];

export default function ProcessSection() {
  const sectionRef = useRevealAll();

  return (
    <section className="py-24 bg-[#050E1F] relative overflow-hidden" ref={sectionRef}>
      {/* Decorative */}
      <div className="absolute inset-0 opacity-3"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(14,165,233,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(6,182,212,0.06) 0%, transparent 50%)`
        }}
      />

      <div className="container relative z-10">
        {/* Header */}
        <div className="reveal text-center mb-16">
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
            A structured, transparent consulting approach from initial discovery through long-term support.
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
