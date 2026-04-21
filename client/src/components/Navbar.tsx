/* =============================================================
   NAVBAR — Quiet Authority Design
   Minimal, clean, fixed. Transparent → solid on scroll.
   No decorative elements. Just logo, links, CTA.
   ============================================================= */
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#solutions" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => navigate(item.href)}
                  className="text-[13px] font-medium text-white/50 hover:text-white/90 transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <button
                onClick={() => navigate("#contact")}
                className="btn-primary text-[13px] px-5 py-2"
              >
                Get in Touch
              </button>
            </div>

            {/* Mobile toggle */}
            <button
              className="md:hidden text-white/60 hover:text-white transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
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
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => navigate(item.href)}
                    className="text-left px-4 py-3 text-[15px] text-white/50 hover:text-white hover:bg-white/[0.03] rounded-lg transition-all duration-200"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
              <div className="mt-auto">
                <button
                  onClick={() => navigate("#contact")}
                  className="w-full btn-primary py-3 text-[14px]"
                >
                  Get in Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
