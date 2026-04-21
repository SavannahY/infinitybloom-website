/* =============================================================
   TICKER — Quiet Authority Design
   Subtle horizontal scrolling text. Minimal, no decorative noise.
   ============================================================= */
import { useLanguage } from "@/contexts/LanguageContext";

export default function TickerSection() {
  const { t } = useLanguage();

  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => t(`ticker.${i}`));
  const doubled = [...items, ...items];

  return (
    <div className="border-y border-white/[0.06] overflow-hidden py-4">
      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ticker-track {
          display: flex;
          width: max-content;
          animation: ticker 30s linear infinite;
        }
        .ticker-track:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-5 px-5 flex-shrink-0">
            <span className="text-[13px] font-medium text-white/20 tracking-wider uppercase whitespace-nowrap">
              {item}
            </span>
            <span className="text-white/10">·</span>
          </div>
        ))}
      </div>
    </div>
  );
}
