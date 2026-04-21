/* =============================================================
   SERVICES — Quiet Authority Design
   Clean grid of service cards with subtle borders.
   Minimal icons, generous spacing, no decorative noise.
   ============================================================= */
import { useRevealAll } from "@/hooks/useReveal";
import { Zap, Server, Cpu, Code2, Sun } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Renewable Energy Consulting",
    subtitle: "Power Strategy & Procurement",
    description:
      "We advise data center operators and enterprises on clean energy strategy — from PPA structuring and renewable electricity procurement to grid integration planning.",
    tags: ["PPA Advisory", "Energy Strategy", "Grid Integration"],
  },
  {
    icon: Server,
    title: "Data Center Development",
    subtitle: "Infrastructure Design & Delivery",
    description:
      "End-to-end consulting for hyperscale and edge data center projects — covering site selection, power infrastructure design, construction management, and commissioning.",
    tags: ["Site Selection", "Power Design", "Commissioning"],
  },
  {
    icon: Cpu,
    title: "Hardware Advisory",
    subtitle: "Global Technology Consulting",
    description:
      "Our technology consultants advise on server, networking, and cooling hardware — from vendor evaluation and procurement strategy to deployment planning.",
    tags: ["Vendor Evaluation", "Procurement", "TCO Optimization"],
  },
  {
    icon: Code2,
    title: "Enterprise Software",
    subtitle: "Energy & Data Center Platforms",
    description:
      "We develop and license B2B software for data center energy management and campus design — real-time monitoring, predictive analytics, and automated optimization.",
    tags: ["DCIM Platform", "Energy Analytics", "Campus Design"],
  },
  {
    icon: Sun,
    title: "BTM Solar & Battery",
    subtitle: "Behind-the-Meter Systems",
    description:
      "We design, install, and manage behind-the-meter solar PV and battery storage systems for commercial and industrial clients globally.",
    tags: ["Solar PV", "BESS", "Demand Management"],
  },
];

export default function ServicesSection() {
  const sectionRef = useRevealAll();

  return (
    <section id="services" ref={sectionRef} className="py-24 md:py-40">
      <div className="container">
        {/* Divider */}
        <div className="divider mb-24 md:mb-40" />

        {/* Section header */}
        <div className="reveal mb-16 md:mb-20">
          <span className="text-label mb-4 block">What We Do</span>
          <h2 className="heading-display text-4xl md:text-5xl lg:text-[3.5rem] text-white mb-5">
            Our <span className="italic text-[#00D4AA]">services</span>
          </h2>
          <p className="text-body max-w-2xl">
            Technology consulting and integrated solutions across the full energy
            and data infrastructure value chain — serving clients globally.
          </p>
        </div>

        {/* Service cards — 2-column grid */}
        <div className="reveal-stagger grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="reveal card-surface p-7 md:p-8 group"
              >
                {/* Icon */}
                <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mb-5 group-hover:border-[#00D4AA]/30 transition-colors duration-200">
                  <Icon className="w-5 h-5 text-[#00D4AA]" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-white tracking-[-0.01em] mb-1">
                  {s.title}
                </h3>
                <p className="text-[13px] text-[#00D4AA]/70 font-medium mb-4">
                  {s.subtitle}
                </p>

                {/* Description */}
                <p className="text-[15px] leading-relaxed text-white/45 mb-5">
                  {s.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-medium text-white/35 bg-white/[0.04] px-2.5 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
