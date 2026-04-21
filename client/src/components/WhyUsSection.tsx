/* =============================================================
   WHY US — Quiet Authority Design
   Clean differentiator cards. No decorative noise.
   ============================================================= */
import { useRevealAll } from "@/hooks/useReveal";
import { useLanguage } from "@/contexts/LanguageContext";
import { Award, TrendingUp, Users, Globe, Shield, Lightbulb } from "lucide-react";

const diffIcons = [Award, TrendingUp, Users, Globe, Shield, Lightbulb];

export default function WhyUsSection() {
  const sectionRef = useRevealAll();
  const { t } = useLanguage();

  const differentiators = [1, 2, 3, 4, 5, 6].map((i) => ({
    icon: diffIcons[i - 1],
    title: t(`whyus.${i}.title`),
    description: t(`whyus.${i}.desc`),
  }));

  return (
    <section ref={sectionRef} className="py-24 md:py-40">
      <div className="container">
        {/* Divider */}
        <div className="divider mb-24 md:mb-40" />

        {/* Section header */}
        <div className="reveal mb-16 md:mb-20">
          <span className="text-label mb-4 block">{t("whyus.overline")}</span>
          <h2 className="heading-display text-4xl md:text-5xl lg:text-[3.5rem] text-white mb-5">
            {t("whyus.heading.1")}<span className="italic text-[#00D4AA]">{t("whyus.heading.accent")}</span>
          </h2>
          <p className="text-body max-w-2xl">
            {t("whyus.sub")}
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
              {t("whyus.cta.title")}
            </h3>
            <p className="text-[15px] text-white/40">
              {t("whyus.cta.desc")}
            </p>
          </div>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-primary flex-shrink-0"
          >
            {t("whyus.cta.btn")}
          </button>
        </div>
      </div>
    </section>
  );
}
