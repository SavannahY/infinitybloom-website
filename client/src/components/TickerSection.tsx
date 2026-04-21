/* =============================================================
   TICKER SECTION — Deep Ocean Tech Design
   Scrolling marquee — global business, tech consulting emphasis
   ============================================================= */

const items = [
  "Technology Consulting",
  "Renewable Energy",
  "Data Center Development",
  "Hardware Advisory",
  "BTM Solar & Battery",
  "Enterprise Software",
  "Energy Campus Design",
  "BESS Integration",
  "DCIM Platforms",
  "Global Coverage",
  "24/7 Data Availability",
  "B2B Solutions",
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
