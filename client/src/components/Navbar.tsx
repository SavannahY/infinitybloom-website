/* =============================================================
   NAVBAR — Deep Ocean Tech Design
   Sticky, transparent-to-solid on scroll, with mobile drawer
   ============================================================= */
import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#solutions" },
  { label: "About", href: "#about" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#050E1F]/95 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/30"
            : "bg-transparent"
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a
              href="#"
              className="flex items-center gap-2.5 group"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0EA5E9] to-[#06B6D4] flex items-center justify-center shadow-lg shadow-cyan-500/30 group-hover:shadow-cyan-500/50 transition-all duration-300">
                <Zap className="w-4 h-4 text-white fill-white" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-800 text-white text-base tracking-tight" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800 }}>
                  INFINITY BLOOM
                </span>
                <span className="text-[10px] text-[#0EA5E9] tracking-[0.15em] uppercase font-medium" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Co. Limited
                </span>
              </div>
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="nav-link text-sm font-medium text-white/70 hover:text-[#0EA5E9] transition-colors duration-300"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => handleNavClick("#contact")}
                className="btn-teal px-5 py-2 rounded-lg text-sm font-semibold text-white"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                Get in Touch
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-white/80 hover:text-white transition-colors p-1"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-[#0A1628] border-l border-white/10 shadow-2xl transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full pt-20 pb-8 px-6">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="text-left px-4 py-3 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-all duration-200 text-base font-medium"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  {item.label}
                </button>
              ))}
            </nav>
            <div className="mt-auto">
              <button
                onClick={() => handleNavClick("#contact")}
                className="w-full btn-teal py-3 rounded-lg text-sm font-semibold text-white"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
