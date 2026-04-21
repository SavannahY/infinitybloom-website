/* =============================================================
   SOLUTIONS SECTION — Deep Ocean Tech Design
   Tabbed solutions — global coverage, data availability, tech consulting
   ============================================================= */
import { useState } from "react";
import { useRevealAll } from "@/hooks/useReveal";
import { CheckCircle2, Globe, BarChart3, Shield, Database } from "lucide-react";

const DC_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663273873036/bcuuWxzMvVHtBtirGkw3hg/service_datacenter-kG6JiRAbRutMhqYpkzk6xw.webp";
const SOLAR_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663273873036/bcuuWxzMvVHtBtirGkw3hg/service_solar-Uh47VyyxE2Ef3rcXCv7FBp.webp";
const CONSULTING_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663273873036/bcuuWxzMvVHtBtirGkw3hg/service_consulting-4T4pgK43QVkc2hyj9fNBTh.webp";

const solutions = [
  {
    id: "coverage",
    tab: "Global Coverage",
    headline: "Worldwide Consulting Reach",
    description:
      "Infinity Bloom operates across Asia-Pacific, the Middle East, and emerging markets. Our consultants bring local regulatory expertise combined with international best practices — enabling seamless cross-border energy and data infrastructure projects wherever you need them.",
    image: CONSULTING_IMAGE,
    features: [
      "Asia-Pacific, Middle East, and global market access",
      "Cross-border project management and advisory",
      "Local regulatory and grid compliance expertise",
      "Multilingual delivery (English, Mandarin, Cantonese)",
      "Strategic partnerships with leading OEMs and EPCs",
    ],
    icon: Globe,
    color: "#0EA5E9",
  },
  {
    id: "data",
    tab: "Data Availability",
    headline: "Always-On Infrastructure Intelligence",
    description:
      "Our enterprise platforms provide 24/7 real-time data availability for energy and data center operations. From power consumption analytics to predictive maintenance alerts, our systems ensure you have the information you need — when you need it.",
    image: DC_IMAGE,
    features: [
      "24/7 real-time monitoring and alerting",
      "Cloud-native architecture with 99.9% platform uptime",
      "Comprehensive API for third-party integration",
      "Historical data analytics and trend reporting",
      "Customizable dashboards and automated reports",
    ],
    icon: Database,
    color: "#06B6D4",
  },
  {
    id: "software",
    tab: "Enterprise Software",
    headline: "Purpose-Built DCIM & Energy Platforms",
    description:
      "Our proprietary software suite is designed for the unique challenges of data center and energy infrastructure management. From capacity planning to carbon accounting, our tools give operators the intelligence they need to make better decisions.",
    image: DC_IMAGE,
    features: [
      "Real-time power and cooling monitoring",
      "AI-driven energy optimization engine",
      "PUE and WUE tracking dashboards",
      "Capacity planning and scenario modelling",
      "API integration with existing BMS and DCIM systems",
    ],
    icon: Shield,
    color: "#10B981",
  },
  {
    id: "btm",
    tab: "BTM Energy",
    headline: "Behind-the-Meter Solar & Storage",
    description:
      "Our BTM solutions help commercial and industrial clients achieve energy independence. We handle the full lifecycle — from feasibility and design through installation, commissioning, and ongoing performance optimization.",
    image: SOLAR_IMAGE,
    features: [
      "Rooftop and ground-mount solar PV consulting",
      "Battery energy storage system (BESS) design",
      "Peak shaving and demand response strategy",
      "Remote monitoring and performance analytics",
      "Regulatory compliance and grid approval support",
    ],
    icon: BarChart3,
    color: "#F59E0B",
  },
];



export default function SolutionsSection() {
  const [active, setActive] = useState(0);
  const sectionRef = useRevealAll();
  const sol = solutions[active];
  const Icon = sol.icon;

  return (
    <section id="solutions" className="py-24 bg-[#0A1628] relative overflow-hidden" ref={sectionRef}>
      {/* Decorative */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] opacity-5"
        style={{ background: 'radial-gradient(ellipse at bottom right, #06B6D4 0%, transparent 70%)' }}
      />

      <div className="container relative z-10">
        {/* Header */}
        <div className="reveal text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#06B6D4]/30 bg-[#06B6D4]/10 mb-4">
            <span className="text-xs font-medium text-[#06B6D4] tracking-widest uppercase" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Our Solutions
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-extrabold text-white mb-4"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            Integrated <span className="gradient-text">Platforms</span>
          </h2>
          <p className="text-lg text-white/55 max-w-2xl mx-auto" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Global consulting expertise paired with enterprise-grade technology platforms.
          </p>
        </div>

        {/* Tab navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {solutions.map((s, i) => {
            const TabIcon = s.icon;
            return (
              <button
                key={s.id}
                onClick={() => setActive(i)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                  active === i
                    ? "text-white"
                    : "text-white/50 hover:text-white/80 bg-white/5 hover:bg-white/8"
                }`}
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  background: active === i ? `${s.color}25` : undefined,
                  border: active === i ? `1px solid ${s.color}50` : '1px solid transparent',
                  color: active === i ? s.color : undefined,
                }}
              >
                <TabIcon className="w-4 h-4" />
                {s.tab}
              </button>
            );
          })}
        </div>

        {/* Content panel */}
        <div className="reveal grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden h-72 lg:h-96 order-2 lg:order-1">
            <img
              src={sol.image}
              alt={sol.headline}
              className="w-full h-full object-cover transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/60 to-transparent" />
            <div
              className="absolute bottom-4 left-4 px-3 py-1.5 rounded-full text-xs font-semibold"
              style={{
                background: `${sol.color}20`,
                border: `1px solid ${sol.color}50`,
                color: sol.color,
                fontFamily: 'DM Sans, sans-serif',
              }}
            >
              <Icon className="w-3 h-3 inline mr-1" />
              {sol.tab}
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <h3
              className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              {sol.headline}
            </h3>
            <p className="text-white/60 leading-relaxed mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              {sol.description}
            </p>
            <ul className="space-y-3">
              {sol.features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: sol.color }} />
                  <span className="text-sm text-white/70" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    {f}
                  </span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="mt-8 btn-teal inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              Discuss Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
