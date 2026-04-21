/* =============================================================
   FOOTER — Quiet Authority Design
   Minimal, clean. Logo, links, copyright. No decorative noise.
   ============================================================= */
import Logo from "./Logo";
import { useLanguage } from "@/contexts/LanguageContext";

const navKeys = [
  { key: "nav.services", href: "#services" },
  { key: "nav.solutions", href: "#solutions" },
  { key: "nav.process", href: "#process" },
  { key: "nav.about", href: "#about" },
  { key: "nav.contact", href: "#contact" },
];

export default function Footer() {
  const { t } = useLanguage();

  const navigate = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer className="border-t border-white/[0.06]">
      <div className="container py-12 md:py-16">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12">
          <Logo />
          <nav className="flex flex-wrap gap-6">
            {navKeys.map((link) => (
              <button
                key={link.key}
                onClick={() => navigate(link.href)}
                className="text-[13px] text-white/40 hover:text-white/70 transition-colors duration-200"
              >
                {t(link.key)}
              </button>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/[0.06] mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-[13px] text-white/25">
            &copy; {new Date().getFullYear()} {t("footer.copyright")}
          </p>
          <div className="flex gap-6">
            <a href="mailto:info@infinitybloomco.com" className="text-[13px] text-white/25 hover:text-white/50 transition-colors">
              info@infinitybloomco.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
