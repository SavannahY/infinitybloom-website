/* =============================================================
   SERVICES SECTION — Deep Ocean Tech Design
   5 service cards with glow effect and icons
   ============================================================= */
import { useEffect, useRef } from "react";
import {
  Zap,
  Server,
  Cpu,
  Code2,
  Sun,
  ArrowRight,
} from "lucide-react";

const DC_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663273873036/bcuuWxzMvVHtBtirGkw3hg/service_datacenter-kG6JiRAbRutMhqYpkzk6xw.webp";
const SOLAR_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663273873036/bcuuWxzMvVHtBtirGkw3hg/service_solar-Uh47VyyxE2Ef3rcXCv7FBp.webp";
const CONSULTING_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663273873036/bcuuWxzMvVHtBtirGkw3hg/service_consulting-4T4pgK43QVkc2hyj9fNBTh.webp";

const services = [
  {
    icon: Zap,
    title: "Renewable Energy Supply",
    subtitle: "For Data Centers",
    description:
      "We source and deliver clean, reliable electricity to data center operators — integrating wind, solar, and hydro power into your facility's energy mix. Our procurement team negotiates PPAs and structures energy contracts tailored to your load profile.",
    tags: ["PPA Structuring", "Green Electricity", "Load Management"],
    color: "#0EA5E9",
    image: null,
  },
  {
    icon: Server,
    title: "Data Center Development",
    subtitle: "End-to-End Infrastructure",
    description:
      "From site selection and power infrastructure design to construction management and commissioning — we develop hyperscale and edge data center facilities powered by renewable energy. Full turnkey delivery with energy campus integration.",
    tags: ["Site Selection", "Power Design", "Commissioning"],
    color: "#06B6D4",
    image: DC_IMAGE,
  },
  {
    icon: Cpu,
    title: "Hardware Consulting",
    subtitle: "Infrastructure Advisory",
    description:
      "Our engineers advise on server, networking, and cooling hardware selection, procurement, and deployment. We help clients optimize total cost of ownership while meeting performance and sustainability targets.",
    tags: ["Server Procurement", "Cooling Systems", "Network Design"],
    color: "#10B981",
    image: CONSULTING_IMAGE,
  },
  {
    icon: Code2,
    title: "B2B Software Solutions",
    subtitle: "Energy & Campus Management",
    description:
      "We develop and sell enterprise software for data center energy management and campus design. Our platforms provide real-time monitoring, predictive analytics, and automated optimization for energy-intensive facilities.",
    tags: ["DCIM Software", "Energy Analytics", "Campus Design Tools"],
    color: "#F59E0B",
    image: null,
  },
  {
    icon: Sun,
    title: "BTM Solar & Battery",
    subtitle: "Behind-the-Meter Systems",
    description:
      "We design, install, and operate behind-the-meter solar PV and battery energy storage systems for commercial and industrial clients. Reduce your grid dependency, lower electricity costs, and achieve sustainability targets.",
    tags: ["Solar PV Design", "BESS Integration", "Demand Management"],
    color: "#F59E0B",
    image: SOLAR_IMAGE,
  },
];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useReveal();
  const Icon = service.icon;

  return (
    <div
      ref={ref}
      className="reveal glow-card rounded-2xl overflow-hidden group"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {service.image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050E1F] via-[#050E1F]/40 to-transparent" />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
            style={{ background: `${service.color}20`, border: `1px solid ${service.color}40` }}
          >
            <Icon className="w-5 h-5" style={{ color: service.color }} />
          </div>
          <div>
            <h3
              className="text-lg font-bold text-white leading-tight"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              {service.title}
            </h3>
            <p className="text-xs font-medium mt-0.5" style={{ color: service.color, fontFamily: 'DM Sans, sans-serif' }}>
              {service.subtitle}
            </p>
          </div>
        </div>
        <p className="text-sm text-white/60 leading-relaxed mb-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
          {service.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-full"
              style={{
                background: `${service.color}15`,
                border: `1px solid ${service.color}30`,
                color: service.color,
                fontFamily: 'DM Sans, sans-serif',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        <button
          onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
          className="flex items-center gap-1.5 text-sm font-medium transition-all duration-300 group/btn"
          style={{ color: service.color, fontFamily: 'DM Sans, sans-serif' }}
        >
          Learn More
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
        </button>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const titleRef = useReveal();

  return (
    <section id="services" className="py-24 bg-[#050E1F] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-5"
        style={{ background: 'radial-gradient(ellipse, #0EA5E9 0%, transparent 70%)' }}
      />

      <div className="container relative z-10">
        {/* Section header */}
        <div ref={titleRef} className="reveal text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#0EA5E9]/30 bg-[#0EA5E9]/10 mb-4">
            <span className="text-xs font-medium text-[#0EA5E9] tracking-widest uppercase" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              What We Do
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-extrabold text-white mb-4"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            Our <span className="gradient-text">Services</span>
          </h2>
          <p
            className="text-lg text-white/55 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            From renewable energy procurement to enterprise software — we deliver integrated 
            solutions across the full data center and energy infrastructure value chain.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
