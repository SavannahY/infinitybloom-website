/* =============================================================
   CONTACT — Quiet Authority Design
   Clean form + company info panel. Minimal, no decorative noise.
   ============================================================= */
import { useState } from "react";
import { useRevealAll } from "@/hooks/useReveal";
import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, MapPin, ArrowRight } from "lucide-react";
import { toast } from "sonner";

export default function ContactSection() {
  const sectionRef = useRevealAll();
  const { t } = useLanguage();
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const serviceAreas = [1, 2, 3, 4, 5, 6].map((i) => t(`contact.form.service.${i}`));
  const regions = [1, 2, 3, 4, 5].map((i) => t(`contact.info.region.${i}`));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(t("contact.form.success"));
    setForm({ name: "", email: "", company: "", service: "", message: "" });
  };

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const inputClass =
    "w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-[14px] text-white placeholder:text-white/25 focus:outline-none focus:border-[#00D4AA]/40 focus:ring-1 focus:ring-[#00D4AA]/20 transition-all duration-200";

  return (
    <section id="contact" ref={sectionRef} className="py-24 md:py-40">
      <div className="container">
        {/* Divider */}
        <div className="divider mb-24 md:mb-40" />

        {/* Section header */}
        <div className="reveal mb-16 md:mb-20">
          <span className="text-label mb-4 block">{t("contact.overline")}</span>
          <h2 className="heading-display text-4xl md:text-5xl lg:text-[3.5rem] text-white mb-5">
            {t("contact.heading.1")}<span className="italic text-[#00D4AA]">{t("contact.heading.accent")}</span>
          </h2>
          <p className="text-body max-w-2xl">
            {t("contact.sub")}
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Form — 3 columns */}
          <div className="reveal lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-[12px] font-medium text-white/40 uppercase tracking-wider mb-2 block">
                    {t("contact.form.name")}
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    placeholder={t("contact.form.name.ph")}
                    required
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="text-[12px] font-medium text-white/40 uppercase tracking-wider mb-2 block">
                    {t("contact.form.email")}
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    placeholder={t("contact.form.email.ph")}
                    required
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-[12px] font-medium text-white/40 uppercase tracking-wider mb-2 block">
                    {t("contact.form.company")}
                  </label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) => update("company", e.target.value)}
                    placeholder={t("contact.form.company.ph")}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="text-[12px] font-medium text-white/40 uppercase tracking-wider mb-2 block">
                    {t("contact.form.service")}
                  </label>
                  <select
                    value={form.service}
                    onChange={(e) => update("service", e.target.value)}
                    className={`${inputClass} appearance-none`}
                  >
                    <option value="" className="bg-[#09090B]">{t("contact.form.service.ph")}</option>
                    {serviceAreas.map((s) => (
                      <option key={s} value={s} className="bg-[#09090B]">{s}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[12px] font-medium text-white/40 uppercase tracking-wider mb-2 block">
                  {t("contact.form.message")}
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  placeholder={t("contact.form.message.ph")}
                  rows={5}
                  required
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button type="submit" className="btn-primary">
                {t("contact.form.submit")}
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Info panel — 2 columns */}
          <div className="reveal lg:col-span-2">
            <div className="card-surface p-7 md:p-8 space-y-8">
              <div>
                <h4 className="text-[13px] font-medium text-white/30 uppercase tracking-wider mb-4">
                  {t("contact.info.reach")}
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-[#00D4AA] mt-1 flex-shrink-0" strokeWidth={1.5} />
                    <div>
                      <p className="text-[14px] text-white/60">{t("contact.info.email")}</p>
                      <a href="mailto:info@infinitybloomco.com" className="text-[14px] text-white hover:text-[#00D4AA] transition-colors">
                        info@infinitybloomco.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#00D4AA] mt-1 flex-shrink-0" strokeWidth={1.5} />
                    <div>
                      <p className="text-[14px] text-white/60">{t("contact.info.office")}</p>
                      <p className="text-[14px] text-white">{t("contact.info.office.value")}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-px bg-white/[0.06]" />

              <div>
                <h4 className="text-[13px] font-medium text-white/30 uppercase tracking-wider mb-4">
                  {t("contact.info.regions")}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {regions.map((r) => (
                    <span
                      key={r}
                      className="text-[11px] font-medium text-white/35 bg-white/[0.04] px-2.5 py-1 rounded-md"
                    >
                      {r}
                    </span>
                  ))}
                </div>
              </div>

              <div className="h-px bg-white/[0.06]" />

              <div>
                <h4 className="text-[13px] font-medium text-white/30 uppercase tracking-wider mb-3">
                  {t("contact.info.response")}
                </h4>
                <p className="text-[14px] text-white/50">
                  {t("contact.info.response.desc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
