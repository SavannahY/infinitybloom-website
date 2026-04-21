/* =============================================================
   ABOUT — Quiet Authority Design
   Clean editorial layout with image, text, and key facts.
   No decorative noise. Generous whitespace.
   ============================================================= */
import { useRevealAll } from "@/hooks/useReveal";

const ABOUT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663273873036/bcuuWxzMvVHtBtirGkw3hg/about_premium_v2-e5GSWK42ESbFEXUxg8mNnr.webp";

const facts = [
  { label: "Headquarters", value: "Hong Kong" },
  { label: "Focus", value: "B2B Consulting" },
  { label: "Coverage", value: "Global" },
  { label: "Languages", value: "EN / 中文 / 廣東話" },
];

export default function AboutSection() {
  const sectionRef = useRevealAll();

  return (
    <section id="about" ref={sectionRef} className="py-24 md:py-40">
      <div className="container">
        {/* Divider */}
        <div className="divider mb-24 md:mb-40" />

        {/* Section header */}
        <div className="reveal mb-16 md:mb-20">
          <span className="text-label mb-4 block">About Us</span>
          <h2 className="heading-display text-4xl md:text-5xl lg:text-[3.5rem] text-white">
            Who we <span className="italic text-[#00D4AA]">are</span>
          </h2>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16 md:mb-20">
          {/* Image */}
          <div className="reveal rounded-xl overflow-hidden border border-white/[0.06]">
            <img
              src={ABOUT_IMG}
              alt="Modern office meeting room with city skyline at dusk"
              className="w-full h-[300px] md:h-[400px] object-cover"
            />
          </div>

          {/* Text */}
          <div className="reveal flex flex-col justify-center">
            <h3 className="heading-section text-xl md:text-2xl text-white mb-6">
              A technology consulting firm for the energy transition
            </h3>
            <div className="space-y-4">
              <p className="text-body">
                Infinity Bloom Co. Limited is a technology consulting firm founded to
                address the growing intersection of digital infrastructure and
                sustainable energy. As data centers become the backbone of the global
                economy, their energy demands have never been greater.
              </p>
              <p className="text-body">
                We work with data center operators, property developers, and enterprises
                worldwide to design and deliver solutions that are both technically
                rigorous and environmentally responsible.
              </p>
              <p className="text-body">
                From renewable energy advisory and data center development to hardware
                consulting and proprietary software platforms — Infinity Bloom is your
                partner for the full infrastructure lifecycle.
              </p>
            </div>
          </div>
        </div>

        {/* Key facts */}
        <div className="reveal-stagger grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.06] rounded-xl overflow-hidden border border-white/[0.06]">
          {facts.map((fact) => (
            <div key={fact.label} className="reveal bg-[#09090B] p-6 md:p-8">
              <div className="text-[12px] font-medium text-white/30 uppercase tracking-wider mb-2">
                {fact.label}
              </div>
              <div className="text-[15px] font-semibold text-white tracking-[-0.01em]">
                {fact.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
