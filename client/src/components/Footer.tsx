/* =============================================================
   FOOTER — Deep Ocean Tech Design
   Dense information grid with brand identity
   ============================================================= */
import { Zap, Mail, Phone, MapPin, ExternalLink } from "lucide-react";

const services = [
  "Renewable Energy Supply",
  "Data Center Development",
  "Hardware Consulting",
  "B2B Software Solutions",
  "BTM Solar & Battery",
  "Energy Campus Design",
];

const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#solutions" },
  { label: "About Us", href: "#about" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer className="bg-[#030B18] border-t border-white/5">
      {/* Main footer */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0EA5E9] to-[#06B6D4] flex items-center justify-center shadow-lg shadow-cyan-500/20">
                <Zap className="w-4 h-4 text-white fill-white" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-extrabold text-white text-sm tracking-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
                  INFINITY BLOOM
                </span>
                <span className="text-[9px] text-[#0EA5E9] tracking-[0.15em] uppercase" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Co. Limited
                </span>
              </div>
            </div>
            <p className="text-sm text-white/45 leading-relaxed mb-5" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Blooming Tech Solutions — powering the future of data infrastructure with renewable energy from Hong Kong.
            </p>
            <div className="space-y-2.5">
              <a
                href="mailto:info@infinitybloomco.com"
                className="flex items-center gap-2 text-sm text-white/45 hover:text-[#0EA5E9] transition-colors duration-300"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                <Mail className="w-3.5 h-3.5 text-[#0EA5E9]" />
                info@infinitybloomco.com
              </a>
              <a
                href="tel:+85200000000"
                className="flex items-center gap-2 text-sm text-white/45 hover:text-[#0EA5E9] transition-colors duration-300"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                <Phone className="w-3.5 h-3.5 text-[#0EA5E9]" />
                +852 0000 0000
              </a>
              <div className="flex items-center gap-2 text-sm text-white/45" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                <MapPin className="w-3.5 h-3.5 text-[#0EA5E9]" />
                Hong Kong SAR, China
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-sm font-bold text-white mb-4 tracking-wide"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => handleNavClick("#services")}
                    className="text-sm text-white/45 hover:text-white/80 transition-colors duration-300 text-left"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4
              className="text-sm font-bold text-white mb-4 tracking-wide"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              Company
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm text-white/45 hover:text-white/80 transition-colors duration-300 text-left"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Focus areas */}
          <div>
            <h4
              className="text-sm font-bold text-white mb-4 tracking-wide"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              Focus Areas
            </h4>
            <div className="space-y-2">
              {[
                { label: "Renewable Energy", color: "#10B981" },
                { label: "Data Centers", color: "#0EA5E9" },
                { label: "BTM Solar", color: "#F59E0B" },
                { label: "BESS Storage", color: "#06B6D4" },
                { label: "DCIM Software", color: "#0EA5E9" },
                { label: "Hardware Advisory", color: "#10B981" },
              ].map((tag) => (
                <div key={tag.label} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: tag.color }} />
                  <span className="text-sm text-white/45" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    {tag.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Website link */}
            <div className="mt-6">
              <a
                href="https://infinitybloomco.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-[#0EA5E9] hover:text-[#06B6D4] transition-colors duration-300"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                infinitybloomco.com
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="container py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-white/30" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              © {new Date().getFullYear()} Infinity Bloom Co. Limited. All rights reserved. Incorporated in Hong Kong SAR.
            </p>
            <div className="flex items-center gap-4">
              <button className="text-xs text-white/30 hover:text-white/60 transition-colors" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Privacy Policy
              </button>
              <button className="text-xs text-white/30 hover:text-white/60 transition-colors" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
