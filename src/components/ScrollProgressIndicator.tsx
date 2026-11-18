"use client";

import { useEffect, useState } from "react";

export default function ScrollProgressIndicator() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    { id: "hero", label: "01 // INTRO" },
    { id: "how-it-works", label: "02 // PROCESS" },
    { id: "menu", label: "03 // CRAVINGS" },
    { id: "why-us", label: "04 // DIFFERENCE" },
    { id: "transformations", label: "05 // PROOF" },
    { id: "faqs", label: "06 // FAQS" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = totalScroll > 0 ? (window.scrollY / totalScroll) * 100 : 0;
      setScrollProgress(currentProgress);

      // Detect active section
      const scrollPos = window.scrollY + window.innerHeight / 3;
      sections.forEach((sec, idx) => {
        const el = document.getElementById(sec.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(idx);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Top Thin Progress Line */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-white/5 z-50 pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-[#00d084] via-[#00b4d8] to-[#38ef7d] transition-all duration-150 ease-out shadow-sm shadow-[#00d084]/50"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Vertical Section Index */}
      <aside aria-label="Section Navigation" className="fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-end gap-3 select-none">
        <div className="bg-black/80 backdrop-blur-md border border-white/10 px-3 py-4 rounded-full flex flex-col items-center gap-3 shadow-2xl">
          {sections.map((sec, idx) => {
            const isActive = activeSection === idx;
            return (
              <button
                key={sec.id}
                onClick={() => scrollToSection(sec.id)}
                className="group relative flex items-center justify-center cursor-pointer p-1"
                aria-label={sec.label}
              >
                {/* Tooltip on hover */}
                <span className="absolute right-8 px-2.5 py-1 rounded bg-black/90 border border-white/15 text-[10px] font-mono tracking-widest text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                  {sec.label}
                </span>

                {/* Dot */}
                <span
                  className={`block rounded-full transition-all duration-300 ${
                    isActive
                      ? "w-2.5 h-6 bg-gradient-to-b from-[#00d084] to-[#00b4d8] shadow-md shadow-[#00d084]/40"
                      : "w-2 h-2 bg-white/30 hover:bg-white/70"
                  }`}
                />
              </button>
            );
          })}
        </div>
      </aside>
    </>
  );
}
