/* =============================================================
   HERO SECTION — Deep Ocean Tech Design
   Full-bleed dark hero with split layout, animated stats
   ============================================================= */
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663273873036/bcuuWxzMvVHtBtirGkw3hg/hero_main-bQub99AcDwxWmFPWy9dYqH.webp";

interface StatProps {
  value: number;
  suffix: string;
  label: string;
  delay?: number;
}

function AnimatedStat({ value, suffix, label, delay = 0 }: StatProps) {
  const [count, setCount] = useState(0);
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

  useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(() => {
      const duration = 1800;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      const interval = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(interval);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timer);
  }, [visible, value, delay]);

  return (
    <div ref={ref} className="text-center">
      <div className="flex items-baseline justify-center gap-1">
        <span className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
          {count}
        </span>
        <span className="text-xl md:text-2xl font-bold text-[#0EA5E9]" style={{ fontFamily: 'Syne, sans-serif' }}>
          {suffix}
        </span>
      </div>
      <p className="text-sm text-white/50 mt-1 tracking-wide" style={{ fontFamily: 'DM Sans, sans-serif' }}>
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
          alt="Infinity Bloom data center campus with renewable energy"
          className="w-full h-full object-cover object-center"
        />
        {/* Multi-layer overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050E1F]/95 via-[#050E1F]/75 to-[#050E1F]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050E1F] via-transparent to-[#050E1F]/30" />
      </div>

      {/* Decorative grid lines */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(14,165,233,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.5) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center pt-24 pb-16">
        <div className="container">
          <div className="max-w-3xl">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#0EA5E9]/30 bg-[#0EA5E9]/10 mb-6 animate-fade-up" style={{ animationDelay: '0ms' }}>
              <div className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9] animate-pulse" />
              <span className="text-xs font-medium text-[#0EA5E9] tracking-widest uppercase" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Hong Kong · Renewable Energy & Data Infrastructure
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-6 animate-fade-up"
              style={{ fontFamily: 'Syne, sans-serif', animationDelay: '100ms' }}
            >
              Blooming{" "}
              <span className="gradient-text">Tech</span>
              <br />
              Solutions
            </h1>

            {/* Subheadline */}
            <p
              className="text-lg md:text-xl text-white/65 leading-relaxed mb-8 max-w-xl animate-fade-up"
              style={{ fontFamily: 'DM Sans, sans-serif', animationDelay: '200ms' }}
            >
              Powering the next generation of data centers with renewable electricity, 
              intelligent hardware, and enterprise software — from Hong Kong to the world.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 animate-fade-up" style={{ animationDelay: '300ms' }}>
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

      {/* Stats bar */}
      <div className="relative z-10 border-t border-white/10 bg-[#050E1F]/80 backdrop-blur-md">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8">
            <AnimatedStat value={50} suffix="+" label="MW Renewable Capacity" delay={0} />
            <AnimatedStat value={30} suffix="+" label="Data Center Projects" delay={150} />
            <AnimatedStat value={200} suffix="+" label="Hardware Clients" delay={300} />
            <AnimatedStat value={99} suffix=".9%" label="Uptime SLA" delay={450} />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => handleScroll("#services")}
        className="absolute bottom-28 md:bottom-36 right-8 md:right-12 z-10 flex flex-col items-center gap-2 text-white/30 hover:text-white/60 transition-colors duration-300 group"
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
