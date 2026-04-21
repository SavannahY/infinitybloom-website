/* =============================================================
   HERO SECTION — Deep Ocean Tech Design
   - Fixed heading proportions (not squished)
   - Removed HK tag
   - Stats replaced with coverage & data availability
   - Emphasizes tech consulting & global business
   ============================================================= */
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663273873036/bcuuWxzMvVHtBtirGkw3hg/hero_main-bQub99AcDwxWmFPWy9dYqH.webp";

interface StatProps {
  value: string;
  label: string;
  delay?: number;
}

function AnimatedStat({ value, label, delay = 0 }: StatProps) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="text-center transition-all duration-700"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(12px)',
        transitionDelay: `${delay}ms`,
      }}
    >
      <span
        className="text-2xl md:text-3xl font-bold text-white block"
        style={{ fontFamily: 'Syne, sans-serif' }}
      >
        {value}
      </span>
      <p className="text-xs md:text-sm text-white/45 mt-1.5 tracking-wide" style={{ fontFamily: 'DM Sans, sans-serif' }}>
        {label}
      </p>
    </div>
  );
}

export default function HeroSection() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Infinity Bloom — global technology consulting"
          className="w-full h-full object-cover object-center"
        />
        {/* Multi-layer overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050E1F]/95 via-[#050E1F]/75 to-[#050E1F]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050E1F] via-transparent to-[#050E1F]/30" />
      </div>

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(14,165,233,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.5) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center pt-28 pb-20">
        <div className="container">
          <div className="max-w-3xl">
            {/* Headline — proper proportions, not squished */}
            <h1
              className="text-[3.5rem] sm:text-[4.5rem] lg:text-[6rem] font-extrabold text-white mb-8 animate-fade-up tracking-[-0.02em]"
              style={{ fontFamily: 'Syne, sans-serif', animationDelay: '0ms', lineHeight: '1.15' }}
            >
              Blooming<br />
              <span className="gradient-text">Tech</span>{" "}
              Solutions
            </h1>

            {/* Subheadline — tech consulting & global positioning */}
            <p
              className="text-lg md:text-xl text-white/60 leading-relaxed mb-8 max-w-2xl animate-fade-up"
              style={{ fontFamily: 'DM Sans, sans-serif', animationDelay: '150ms' }}
            >
              A global technology consulting firm specializing in renewable energy infrastructure, 
              data center development, and enterprise software — delivering integrated solutions 
              across Asia-Pacific and beyond.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 animate-fade-up" style={{ animationDelay: '250ms' }}>
              <button
                onClick={() => handleScroll("#services")}
                className="btn-teal inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-base font-semibold text-white"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                Explore Services
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleScroll("#contact")}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-base font-semibold text-white/80 border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all duration-300"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar — coverage & data availability focus */}
      <div className="relative z-10 border-t border-white/10 bg-[#050E1F]/80 backdrop-blur-md">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8">
            <AnimatedStat value="Global" label="Business Coverage" delay={0} />
            <AnimatedStat value="24/7" label="Data Availability" delay={150} />
            <AnimatedStat value="APAC" label="Regional Expertise" delay={300} />
            <AnimatedStat value="End-to-End" label="Consulting Delivery" delay={450} />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => handleScroll("#services")}
        className="absolute bottom-32 md:bottom-40 right-8 md:right-12 z-10 flex flex-col items-center gap-2 text-white/30 hover:text-white/60 transition-colors duration-300"
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest uppercase" style={{ fontFamily: 'DM Sans, sans-serif', writingMode: 'vertical-rl' }}>
          Scroll
        </span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </button>
    </section>
  );
}
