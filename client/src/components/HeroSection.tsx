/* =============================================================
   HERO — Quiet Authority Design
   Large Instrument Serif heading, left-aligned, generous spacing.
   Subtle stats bar below. Premium hero image as accent.
   ============================================================= */
import { useRevealAll } from "@/hooks/useReveal";
import { ArrowRight } from "lucide-react";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663273873036/bcuuWxzMvVHtBtirGkw3hg/hero_premium_v2-NnVBZfixHdp3ybdhZfMZ2A.webp";

const metrics = [
  { value: "Global", label: "Business Coverage" },
  { value: "24/7", label: "Data Availability" },
  { value: "APAC+", label: "Regional Reach" },
  { value: "End-to-End", label: "Consulting Delivery" },
];

export default function HeroSection() {
  const sectionRef = useRevealAll();

  return (
    <section ref={sectionRef} className="relative min-h-screen flex flex-col justify-center pt-16">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#09090B] via-[#09090B]/95 to-[#09090B]" />

      {/* Dot grid texture */}
      <div className="absolute inset-0 dot-grid opacity-[0.03]" />

      <div className="container relative z-10">
        {/* Main content */}
        <div className="max-w-4xl pt-16 md:pt-24 lg:pt-32">
          {/* Overline */}
          <div className="reveal mb-6">
            <span className="text-label">Technology Consulting</span>
          </div>

          {/* Display heading */}
          <h1 className="reveal heading-display text-[clamp(2.5rem,7vw,5.5rem)] text-white mb-8">
            Infrastructure for the{" "}
            <span className="italic text-[#00D4AA]">energy transition</span>
          </h1>

          {/* Subheading */}
          <p className="reveal text-body max-w-xl mb-10 text-[1.125rem] leading-relaxed">
            We advise on renewable energy, data center development, and enterprise
            software — delivering integrated consulting across Asia-Pacific and beyond.
          </p>

          {/* CTAs */}
          <div className="reveal flex flex-wrap gap-4 mb-20 md:mb-28">
            <button
              onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-primary"
            >
              Explore Services
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-ghost"
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* Hero image — full width, with subtle rounded corners */}
        <div className="reveal mb-16 md:mb-24">
          <div className="relative rounded-xl overflow-hidden border border-white/[0.06]">
            <img
              src={HERO_IMG}
              alt="Modern data center campus with solar arrays at twilight"
              className="w-full h-[240px] md:h-[360px] lg:h-[420px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090B]/40 to-transparent" />
          </div>
        </div>

        {/* Metrics bar */}
        <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pb-16 md:pb-24 border-t border-white/[0.06] pt-8 md:pt-12">
          {metrics.map((m) => (
            <div key={m.label}>
              <div className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-1">
                {m.value}
              </div>
              <div className="text-[13px] text-white/40 font-medium">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
