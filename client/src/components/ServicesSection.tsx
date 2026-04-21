/* =============================================================
   SERVICES — Quiet Authority Design
   Clean grid of service cards with subtle borders.
   Minimal icons, generous spacing, no decorative noise.
   ============================================================= */
import { useRevealAll } from "@/hooks/useReveal";
import { useLanguage } from "@/contexts/LanguageContext";
import { Zap, Server, Cpu, Code2, Sun } from "lucide-react";

const serviceIcons = [Zap, Server, Cpu, Code2, Sun];

export default function ServicesSection() {
  const sectionRef = useRevealAll();
  const { t } = useLanguage();

  const services = [1, 2, 3, 4, 5].map((i) => ({
    icon: serviceIcons[i - 1],
    title: t(`services.${i}.title`),
    subtitle: t(`services.${i}.subtitle`),
    description: t(`services.${i}.desc`),
    tags: [t(`services.${i}.tag1`), t(`services.${i}.tag2`), t(`services.${i}.tag3`)],
  }));

  return (
    <section id="services" ref={sectionRef} className="py-24 md:py-40">
      <div className="container">
        {/* Divider */}
        <div className="divider mb-24 md:mb-40" />

        {/* Section header */}
        <div className="reveal mb-16 md:mb-20">
          <span className="text-label mb-4 block">{t("services.overline")}</span>
          <h2 className="heading-display text-4xl md:text-5xl lg:text-[3.5rem] text-white mb-5">
            {t("services.heading.1")}<span className="italic text-[#00D4AA]">{t("services.heading.accent")}</span>
          </h2>
          <p className="text-body max-w-2xl">
            {t("services.sub")}
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
