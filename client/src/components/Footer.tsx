/* =============================================================
   FOOTER — Quiet Authority Design
   Minimal, clean. Logo, links, copyright. No decorative noise.
   ============================================================= */
import Logo from "./Logo";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#solutions" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
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
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => navigate(link.href)}
                className="text-[13px] text-white/40 hover:text-white/70 transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/[0.06] mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-[13px] text-white/25">
            &copy; {new Date().getFullYear()} Infinity Bloom Co. Limited. All rights reserved.
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
