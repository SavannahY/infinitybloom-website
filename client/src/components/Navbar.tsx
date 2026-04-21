/* =============================================================
   NAVBAR — Quiet Authority Design
   Minimal, clean, fixed. Transparent → solid on scroll.
   Language toggle + logo + links + CTA.
   ============================================================= */
import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import Logo from "./Logo";
import { useLanguage } from "@/contexts/LanguageContext";

const navKeys = [
  { key: "nav.services", href: "#services" },
  { key: "nav.solutions", href: "#solutions" },
  { key: "nav.process", href: "#process" },
  { key: "nav.about", href: "#about" },
  { key: "nav.contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, toggleLang, t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navigate = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#09090B]/90 backdrop-blur-xl border-b border-white/[0.06]"
            : "bg-transparent"
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex-shrink-0"
            >
              <Logo />
            </button>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {navKeys.map((item) => (
                <button
                  key={item.key}
                  onClick={() => navigate(item.href)}
                  className="text-[13px] font-medium text-white/50 hover:text-white/90 transition-colors duration-200"
                >
                  {t(item.key)}
                </button>
              ))}
            </div>

            {/* Desktop CTA + Lang toggle */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={toggleLang}
                className="flex items-center gap-1.5 text-[12px] font-medium text-white/40 hover:text-white/80 transition-colors duration-200 px-2.5 py-1.5 rounded-md border border-white/[0.06] hover:border-white/[0.12]"
                aria-label="Toggle language"
              >
                <Globe className="w-3.5 h-3.5" strokeWidth={1.5} />
                {lang === "en" ? "中文" : "EN"}
              </button>
              <button
                onClick={() => navigate("#contact")}
                className="btn-primary text-[13px] px-5 py-2"
              >
                {t("nav.cta")}
              </button>
            </div>

            {/* Mobile: lang toggle + hamburger */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={toggleLang}
                className="flex items-center gap-1 text-[11px] font-medium text-white/40 hover:text-white/80 transition-colors duration-200 px-2 py-1.5 rounded-md border border-white/[0.06]"
                aria-label="Toggle language"
              >
                <Globe className="w-3.5 h-3.5" strokeWidth={1.5} />
                {lang === "en" ? "中文" : "EN"}
              </button>
              <button
                className="text-white/60 hover:text-white transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute top-0 right-0 h-full w-72 bg-[#09090B] border-l border-white/[0.06]">
            <div className="flex flex-col pt-20 pb-8 px-6 h-full">
              <nav className="flex flex-col gap-1">
                {navKeys.map((item) => (
                  <button
                    key={item.key}
                    onClick={() => navigate(item.href)}
                    className="text-left px-4 py-3 text-[15px] text-white/50 hover:text-white hover:bg-white/[0.03] rounded-lg transition-all duration-200"
                  >
                    {t(item.key)}
                  </button>
                ))}
              </nav>
              <div className="mt-auto">
                <button
                  onClick={() => navigate("#contact")}
                  className="w-full btn-primary py-3 text-[14px]"
                >
                  {t("nav.cta")}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
