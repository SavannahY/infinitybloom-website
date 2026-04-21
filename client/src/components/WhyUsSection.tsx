/* =============================================================
   WHY US — Quiet Authority Design
   Clean differentiator cards. No decorative noise.
   ============================================================= */
import { useRevealAll } from "@/hooks/useReveal";
import { Award, TrendingUp, Users, Globe, Shield, Lightbulb } from "lucide-react";

const differentiators = [
  {
    icon: Award,
    title: "Technical Excellence",
    description: "Deep expertise in power engineering, data center design, and enterprise software — built from decades of combined industry experience.",
  },
  {
    icon: TrendingUp,
    title: "Sustainable Innovation",
    description: "We believe the most resilient infrastructure is built on clean energy. Every engagement we deliver advances the energy transition.",
  },
  {
    icon: Users,
    title: "Consulting Partnership",
    description: "We work as an extension of your team — providing strategic advisory, technical delivery, and long-term operational support.",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description: "Headquartered in Hong Kong with a global outlook. We bring international best practices to every market we serve.",
  },
  {
    icon: Shield,
    title: "Integrated Delivery",
    description: "From energy strategy through software deployment — a single partner for the full infrastructure lifecycle.",
  },
  {
    icon: Lightbulb,
    title: "Proprietary Technology",
    description: "Our B2B software platforms are purpose-built for energy and data center operations — not adapted from generic tools.",
  },
];

export default function WhyUsSection() {
  const sectionRef = useRevealAll();

  return (
    <section ref={sectionRef} className="py-24 md:py-40">
      <div className="container">
        {/* Divider */}
        <div className="divider mb-24 md:mb-40" />

        {/* Section header */}
        <div className="reveal mb-16 md:mb-20">
          <span className="text-label mb-4 block">Why Infinity Bloom</span>
          <h2 className="heading-display text-4xl md:text-5xl lg:text-[3.5rem] text-white mb-5">
            What sets us <span className="italic text-[#00D4AA]">apart</span>
          </h2>
          <p className="text-body max-w-2xl">
            We combine deep technical expertise with a genuine commitment to
            sustainable infrastructure — delivering consulting that creates
            lasting value.
          </p>
        </div>

        {/* Cards grid */}
        <div className="reveal-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-16 md:mb-20">
          {differentiators.map((d) => {
            const Icon = d.icon;
            return (
              <div key={d.title} className="reveal card-surface p-7 md:p-8 group">
                <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mb-5 group-hover:border-[#00D4AA]/30 transition-colors duration-200">
                  <Icon className="w-5 h-5 text-[#00D4AA]" strokeWidth={1.5} />
                </div>
                <h3 className="text-[15px] font-semibold text-white mb-2 tracking-[-0.01em]">
                  {d.title}
                </h3>
                <p className="text-[14px] leading-relaxed text-white/40">
                  {d.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA banner */}
        <div className="reveal card-surface p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="heading-section text-xl md:text-2xl text-white mb-2">
              Ready to start a conversation?
            </h3>
            <p className="text-[15px] text-white/40">
              Let us know about your project and we will get back to you within 24 hours.
            </p>
          </div>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-primary flex-shrink-0"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
}
