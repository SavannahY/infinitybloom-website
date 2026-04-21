/* =============================================================
   PROCESS — Quiet Authority Design
   Clean numbered steps in a horizontal layout.
   Instrument Serif numbers as design element.
   ============================================================= */
import { useRevealAll } from "@/hooks/useReveal";

const steps = [
  {
    num: "01",
    title: "Discovery",
    description:
      "We assess your energy needs, site conditions, regulatory landscape, and business objectives — producing a clear feasibility report.",
  },
  {
    num: "02",
    title: "Strategy",
    description:
      "Our consultants develop tailored technical designs and strategic roadmaps — from power system architecture to software integration.",
  },
  {
    num: "03",
    title: "Implementation",
    description:
      "We manage procurement, construction, and deployment through our global partner network — ensuring quality delivery on time.",
  },
  {
    num: "04",
    title: "Optimisation",
    description:
      "Post-deployment, our platforms provide real-time monitoring, analytics, and ongoing advisory to keep your infrastructure at peak performance.",
  },
];

export default function ProcessSection() {
  const sectionRef = useRevealAll();

  return (
    <section id="process" ref={sectionRef} className="py-24 md:py-40">
      <div className="container">
        {/* Divider */}
        <div className="divider mb-24 md:mb-40" />

        {/* Section header */}
        <div className="reveal mb-16 md:mb-20">
          <span className="text-label mb-4 block">How We Work</span>
          <h2 className="heading-display text-4xl md:text-5xl lg:text-[3.5rem] text-white mb-5">
            Our <span className="italic text-[#00D4AA]">process</span>
          </h2>
          <p className="text-body max-w-2xl">
            A structured, transparent consulting approach from initial discovery
            through long-term support.
          </p>
        </div>

        {/* Steps grid */}
        <div className="reveal-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] rounded-xl overflow-hidden border border-white/[0.06]">
          {steps.map((step) => (
            <div
              key={step.num}
              className="reveal bg-[#09090B] p-7 md:p-8"
            >
              {/* Number */}
              <span className="heading-display text-4xl md:text-5xl text-white/[0.08] block mb-6">
                {step.num}
              </span>

              {/* Title */}
              <h3 className="text-[15px] font-semibold text-white mb-3 tracking-[-0.01em]">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-[14px] leading-relaxed text-white/40">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
