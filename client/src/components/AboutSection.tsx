/* =============================================================
   ABOUT — Quiet Authority Design
   Clean editorial layout with image, text, and key facts.
   No decorative noise. Generous whitespace.
   ============================================================= */
import { useRevealAll } from "@/hooks/useReveal";
import { useLanguage } from "@/contexts/LanguageContext";

const ABOUT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663273873036/bcuuWxzMvVHtBtirGkw3hg/about_premium_v2-e5GSWK42ESbFEXUxg8mNnr.webp";

export default function AboutSection() {
  const sectionRef = useRevealAll();
  const { t } = useLanguage();

  const facts = [1, 2, 3, 4].map((i) => ({
    label: t(`about.fact.${i}.label`),
    value: t(`about.fact.${i}.value`),
  }));

  return (
    <section id="about" ref={sectionRef} className="py-24 md:py-40">
      <div className="container">
        {/* Divider */}
        <div className="divider mb-24 md:mb-40" />

        {/* Section header */}
        <div className="reveal mb-16 md:mb-20">
          <span className="text-label mb-4 block">{t("about.overline")}</span>
          <h2 className="heading-display text-4xl md:text-5xl lg:text-[3.5rem] text-white">
            {t("about.heading.1")}<span className="italic text-[#00D4AA]">{t("about.heading.accent")}</span>
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
              {t("about.subtitle")}
            </h3>
            <div className="space-y-4">
              <p className="text-body">{t("about.p1")}</p>
              <p className="text-body">{t("about.p2")}</p>
              <p className="text-body">{t("about.p3")}</p>
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
