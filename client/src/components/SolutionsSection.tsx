/* =============================================================
   SOLUTIONS — Quiet Authority Design
   Clean two-column layout with image + feature list.
   ============================================================= */
import { useRevealAll } from "@/hooks/useReveal";
import { Globe, Database, Monitor, Leaf, Check } from "lucide-react";

const SOLUTIONS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663273873036/bcuuWxzMvVHtBtirGkw3hg/solutions_premium_v2-VsNrih2NRnUatpwhcXtwUF.webp";

const capabilities = [
  {
    icon: Globe,
    title: "Global Coverage",
    description: "Consulting engagements across Asia-Pacific, the Middle East, and emerging markets with local regulatory expertise.",
  },
  {
    icon: Database,
    title: "24/7 Data Availability",
    description: "Real-time monitoring and analytics platforms that keep your infrastructure performing at its best, around the clock.",
  },
  {
    icon: Monitor,
    title: "Enterprise Software",
    description: "Proprietary DCIM and energy campus management platforms purpose-built for global data center operations.",
  },
  {
    icon: Leaf,
    title: "BTM Energy Solutions",
    description: "Behind-the-meter solar PV and battery storage systems that reduce grid dependency and lower operational costs.",
  },
];

const features = [
  "Asia-Pacific, Middle East, and global market access",
  "Cross-border project management and advisory",
  "Local regulatory and grid compliance expertise",
  "Multilingual delivery (English, Mandarin, Cantonese)",
];

export default function SolutionsSection() {
  const sectionRef = useRevealAll();

  return (
    <section id="solutions" ref={sectionRef} className="py-24 md:py-40">
      <div className="container">
        {/* Divider */}
        <div className="divider mb-24 md:mb-40" />

        {/* Section header */}
        <div className="reveal mb-16 md:mb-20">
          <span className="text-label mb-4 block">Our Solutions</span>
          <h2 className="heading-display text-4xl md:text-5xl lg:text-[3.5rem] text-white mb-5">
            Integrated <span className="italic text-[#00D4AA]">platforms</span>
          </h2>
          <p className="text-body max-w-2xl">
            Global consulting expertise paired with enterprise-grade technology
            platforms for energy and data infrastructure.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20 md:mb-24">
          {/* Image */}
          <div className="reveal rounded-xl overflow-hidden border border-white/[0.06]">
            <img
              src={SOLUTIONS_IMG}
              alt="Energy management dashboard with solar panel view"
              className="w-full h-[300px] md:h-[400px] object-cover"
            />
          </div>

          {/* Feature list */}
          <div className="reveal flex flex-col justify-center">
            <h3 className="heading-section text-2xl md:text-3xl text-white mb-4">
              Worldwide Consulting Reach
            </h3>
            <p className="text-body mb-8">
              Infinity Bloom operates across Asia-Pacific, the Middle East, and emerging
              markets. Our consultants bring local regulatory expertise combined with
              international best practices.
            </p>
            <ul className="space-y-3 mb-8">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#00D4AA] mt-1 flex-shrink-0" strokeWidth={2} />
                  <span className="text-[15px] text-white/50">{f}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-primary self-start"
            >
              Discuss Your Project
            </button>
          </div>
        </div>

        {/* Capabilities grid */}
        <div className="reveal-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <div key={cap.title} className="reveal card-surface p-6">
                <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mb-4">
                  <Icon className="w-4 h-4 text-[#00D4AA]" strokeWidth={1.5} />
                </div>
                <h4 className="text-[15px] font-semibold text-white mb-2 tracking-[-0.01em]">
                  {cap.title}
                </h4>
                <p className="text-[13px] leading-relaxed text-white/40">
                  {cap.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
