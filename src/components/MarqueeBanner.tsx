"use client";

export default function MarqueeBanner() {
  const items = [
    "🚚 FREE DELIVERY WITHIN 5 KM OF VIZIANAGARAM",
    "🥣 OVERNIGHT OATS",
    "🥪 GOURMET SANDWICHES",
    "🥜 NUTRI BOXES",
    "🍋 COLD-PRESSED DETOX DRINKS",
    "🥑 COOKED FRESH DAILY",
    "🔥 ZERO COLD STORAGE",
    "⚡ 100% CLEAN MACROS",
  ];

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-emerald-950 via-black to-slate-950 py-3.5 sm:py-4 border-y border-white/10 select-none">
      <div className="flex w-max animate-marquee space-x-8 whitespace-nowrap text-[11px] sm:text-xs md:text-sm font-extrabold uppercase tracking-widest text-emerald-400">
        {[...items, ...items, ...items].map((text, i) => (
          <div key={i} className="flex items-center gap-6">
            <span className={`${text.includes("FREE DELIVERY") ? "text-amber-400 font-black drop-shadow" : "hover:text-white transition-colors cursor-default"}`}>
              {text}
            </span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00d084] animate-ping" />
          </div>
        ))}
      </div>
    </div>
  );
}
