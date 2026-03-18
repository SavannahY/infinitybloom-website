/* =============================================================
   SOLUTIONS SECTION — Deep Ocean Tech Design
   Tabbed solutions with feature highlights
   ============================================================= */
import { useEffect, useRef, useState } from "react";
import { CheckCircle2, BarChart3, Shield, Globe, Leaf } from "lucide-react";

const DC_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663273873036/bcuuWxzMvVHtBtirGkw3hg/service_datacenter-kG6JiRAbRutMhqYpkzk6xw.webp";
const SOLAR_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663273873036/bcuuWxzMvVHtBtirGkw3hg/service_solar-Uh47VyyxE2Ef3rcXCv7FBp.webp";
const CONSULTING_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663273873036/bcuuWxzMvVHtBtirGkw3hg/service_consulting-4T4pgK43QVkc2hyj9fNBTh.webp";

const solutions = [
  {
    id: "energy",
    tab: "Energy Campus",
    headline: "Integrated Energy Campus Design",
    description:
      "We design and develop comprehensive energy campuses that co-locate data centers with renewable generation assets. Our approach integrates solar farms, battery storage, and grid connection infrastructure into a single optimized facility — minimizing transmission losses and maximizing uptime.",
    image: DC_IMAGE,
    features: [
      "Co-located solar + data center master planning",
      "Grid connection and substation design",
      "Battery storage sizing and integration",
      "Energy management system (EMS) deployment",
      "Carbon accounting and ESG reporting",
    ],
    icon: Leaf,
    color: "#10B981",
  },
  {
    id: "btm",
    tab: "BTM Solar & Battery",
    headline: "Behind-the-Meter Energy Independence",
    description:
      "Our BTM solar and battery solutions help commercial and industrial clients reduce their reliance on the grid, lower peak demand charges, and achieve energy resilience. We handle everything from feasibility study to installation and ongoing O&M.",
    image: SOLAR_IMAGE,
    features: [
      "Rooftop and ground-mount solar PV design",
      "Battery energy storage system (BESS) integration",
      "Peak shaving and demand response",
      "Remote monitoring and performance analytics",
      "Regulatory compliance and grid approval",
    ],
    icon: BarChart3,
    color: "#F59E0B",
  },
  {
    id: "software",
    tab: "B2B Software",
    headline: "Enterprise Energy & DCIM Software",
    description:
      "Our proprietary software platform gives data center operators and energy managers real-time visibility and control over their infrastructure. From predictive maintenance to automated energy optimization, our tools reduce OpEx and improve sustainability performance.",
    image: CONSULTING_IMAGE,
    features: [
      "Real-time power and cooling monitoring",
      "AI-driven energy optimization engine",
      "PUE and WUE tracking dashboards",
      "Capacity planning and scenario modelling",
      "API integration with existing DCIM/BMS systems",
    ],
    icon: Shield,
    color: "#0EA5E9",
  },
  {
    id: "global",
    tab: "Regional Reach",
    headline: "Hong Kong Hub, Regional Delivery",
    description:
      "Headquartered in Hong Kong, we serve clients across Greater China, Southeast Asia, and beyond. Our team combines deep local regulatory knowledge with international best practices — enabling cross-border energy and data infrastructure projects.",
    image: CONSULTING_IMAGE,
    features: [
      "Hong Kong regulatory and grid expertise",
      "Cross-border project management",
      "Mandarin, Cantonese, and English delivery",
      "Regional PPA and energy procurement",
      "Partnerships with leading OEMs and EPCs",
    ],
    icon: Globe,
    color: "#06B6D4",
  },
];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add("visible"); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function SolutionsSection() {
  const [active, setActive] = useState(0);
  const titleRef = useReveal();
  const contentRef = useReveal();
  const sol = solutions[active];
  const Icon = sol.icon;

  return (
    <section id="solutions" className="py-24 bg-[#0A1628] relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] opacity-5"
        style={{ background: 'radial-gradient(ellipse at bottom right, #06B6D4 0%, transparent 70%)' }}
      />

      <div className="container relative z-10">
        {/* Header */}
        <div ref={titleRef} className="reveal text-center mb-12">
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
            Deep expertise across energy, infrastructure, and software — delivered as integrated solutions.
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
        <div ref={contentRef} className="reveal grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
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
