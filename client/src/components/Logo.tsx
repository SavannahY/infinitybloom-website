/* =============================================================
   LOGO — Infinity Bloom Co.
   Generated logo: infinity symbol with bloom/leaf motif
   Teal-to-cyan gradient on transparent background
   ============================================================= */

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663273873036/bcuuWxzMvVHtBtirGkw3hg/logo_infinity_bloom-CEV2W3NoCKair88HDb4Wmg.png";

interface LogoProps {
  size?: number;
  className?: string;
}

export default function Logo({ size = 36, className = "" }: LogoProps) {
  return (
    <img
      src={LOGO_URL}
      alt="Infinity Bloom logo"
      width={size}
      height={size}
      className={`object-contain ${className}`}
      style={{ width: size, height: size }}
    />
  );
}
