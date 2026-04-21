/* =============================================================
   LOGO — Quiet Authority Design
   Clean wordmark with generated logo icon
   ============================================================= */

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663273873036/bcuuWxzMvVHtBtirGkw3hg/logo_infinity_bloom-CEV2W3NoCKair88HDb4Wmg.png";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <img
        src={LOGO_URL}
        alt=""
        className="w-7 h-7 object-contain"
      />
      <span
        className="text-[15px] font-semibold tracking-[-0.02em] text-white/90"
        style={{ fontFamily: "Inter, system-ui, sans-serif" }}
      >
        Infinity Bloom
      </span>
    </div>
  );
}
