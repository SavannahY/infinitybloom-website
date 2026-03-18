/* =============================================================
   TICKER SECTION — Deep Ocean Tech Design
   Scrolling marquee of capabilities between hero and services
   ============================================================= */

const items = [
  "Renewable Energy Supply",
  "Data Center Development",
  "Hardware Consulting",
  "BTM Solar & Battery",
  "B2B Software",
  "Energy Campus Design",
  "BESS Integration",
  "DCIM Platforms",
  "PPA Structuring",
  "Grid Connection",
  "Hong Kong Based",
  "Greater China Coverage",
];

export default function TickerSection() {
  const doubled = [...items, ...items];

  return (
    <div className="bg-[#0A1628] border-y border-white/5 py-4 overflow-hidden">
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
          <div key={i} className="flex items-center gap-4 px-6 flex-shrink-0">
            <span
              className="text-sm font-medium text-white/40 whitespace-nowrap"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              {item}
            </span>
            <div className="w-1 h-1 rounded-full bg-[#0EA5E9]/60" />
          </div>
        ))}
      </div>
    </div>
  );
}
