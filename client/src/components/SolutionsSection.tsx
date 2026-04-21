/* =============================================================
   SOLUTIONS — Quiet Authority Design
   Clean two-column layout with image + feature list.
   ============================================================= */
import { useRevealAll } from "@/hooks/useReveal";
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe, Database, Monitor, Leaf, Check } from "lucide-react";

const SOLUTIONS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663273873036/bcuuWxzMvVHtBtirGkw3hg/solutions_premium_v2-VsNrih2NRnUatpwhcXtwUF.webp";

const capIcons = [Globe, Database, Monitor, Leaf];

export default function SolutionsSection() {
  const sectionRef = useRevealAll();
  const { t } = useLanguage();

  const capabilities = [1, 2, 3, 4].map((i) => ({
    icon: capIcons[i - 1],
    title: t(`solutions.cap.${i}.title`),
    description: t(`solutions.cap.${i}.desc`),
  }));

  const features = [
    t("solutions.reach.f1"),
    t("solutions.reach.f2"),
    t("solutions.reach.f3"),
    t("solutions.reach.f4"),
  ];

  return (
    <section id="solutions" ref={sectionRef} className="py-24 md:py-40">
      <div className="container">
        {/* Divider */}
        <div className="divider mb-24 md:mb-40" />

        {/* Section header */}
        <div className="reveal mb-16 md:mb-20">
          <span className="text-label mb-4 block">{t("solutions.overline")}</span>
          <h2 className="heading-display text-4xl md:text-5xl lg:text-[3.5rem] text-white mb-5">
            {t("solutions.heading.1")}<span className="italic text-[#00D4AA]">{t("solutions.heading.accent")}</span>
          </h2>
          <p className="text-body max-w-2xl">
            {t("solutions.sub")}
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20 md:mb-24">
          {/* Image */}
          <div className="reveal rounded-xl overflow-hidden border border-white/[0.06]">
            <img
              src={SOLUTIONS_IMG}
              alt="Energy management dashboard"
              className="w-full h-[300px] md:h-[400px] object-cover"
            />
          </div>

          {/* Feature list */}
          <div className="reveal flex flex-col justify-center">
            <h3 className="heading-section text-2xl md:text-3xl text-white mb-4">
              {t("solutions.reach.title")}
            </h3>
            <p className="text-body mb-8">
              {t("solutions.reach.desc")}
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
              {t("solutions.reach.cta")}
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
