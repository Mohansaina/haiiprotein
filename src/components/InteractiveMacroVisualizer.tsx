"use client";

import { useState } from "react";
import { Flame, Dumbbell, Sparkles, MessageCircle, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function InteractiveMacroVisualizer() {
  const [targetCalories, setTargetCalories] = useState<number>(1800);
  const [goalType, setGoalType] = useState<"cut" | "lean" | "bulk">("lean");

  // Macro calculations based on calories and goal
  const getMacros = () => {
    switch (goalType) {
      case "cut": // High protein, moderate fat, lower carb
        return {
          proteinGrams: Math.round((targetCalories * 0.4) / 4),
          carbGrams: Math.round((targetCalories * 0.3) / 4),
          fatGrams: Math.round((targetCalories * 0.3) / 9),
          meals: "1 High-Protein Nutri Box + 1 Green Detox Elixir + Chia Oats",
        };
      case "bulk": // High carb, high protein
        return {
          proteinGrams: Math.round((targetCalories * 0.3) / 4),
          carbGrams: Math.round((targetCalories * 0.5) / 4),
          fatGrams: Math.round((targetCalories * 0.2) / 9),
          meals: "2 High-Protein Gourmet Paninis + Dark Chocolate Oats + Power Nutri Box",
        };
      case "lean": // Balanced 35/40/25
      default:
        return {
          proteinGrams: Math.round((targetCalories * 0.35) / 4),
          carbGrams: Math.round((targetCalories * 0.4) / 4),
          fatGrams: Math.round((targetCalories * 0.25) / 9),
          meals: "1 Berry Overnight Oats Jar + 1 Nutri Bowl + 1 Cold-Pressed Elixir",
        };
    }
  };

  const macros = getMacros();

  const getWhatsAppLink = () => {
    const text = encodeURIComponent(
      `Hi Haii Protein Vizianagaram! 🥑 I used the Interactive Macro Calculator for my goal:\n\n🎯 Target: ${targetCalories} kcal (${goalType.toUpperCase()})\n💪 Protein: ${macros.proteinGrams}g | 🌾 Carbs: ${macros.carbGrams}g | 🥑 Fats: ${macros.fatGrams}g\n🍽️ Recommended Combo: ${macros.meals}\n\nPlease share availability for delivery in Vizianagaram!`
    );
    return `https://wa.me/918688249985?text=${text}`;
  };

  return (
    <section className="py-16 sm:py-24 bg-[#0a0c10] text-white relative overflow-hidden border-y border-white/10">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-[#00d084]/10 via-[#00b4d8]/10 to-transparent blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-[11px] sm:text-xs font-mono font-bold tracking-widest text-[#00d084] uppercase block mb-1.5 sm:mb-2">
              Interactive Nutrition Engine
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase font-serif">
              Dial In Your Daily Nutrition
            </h2>
            <p className="mt-2.5 sm:mt-3 text-xs sm:text-base text-gray-400 max-w-xl mx-auto px-2">
              Drag the calorie slider below to calculate your tailored macro split. Haii Protein cooks and portions every meal to your exact numbers.
            </p>
          </div>
        </ScrollReveal>

        {/* Interactive Console Card */}
        <ScrollReveal direction="up" delayMs={150}>
          <div className="bg-[#12161f] border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-10 shadow-2xl backdrop-blur-xl">
            
            {/* Goal Toggle Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 mb-6 sm:mb-8">
              {[
                { id: "cut", label: "🔥 Fat Shred", desc: "High Protein / Low Carb" },
                { id: "lean", label: "⚡ Lean & Energized", desc: "Balanced Performance" },
                { id: "bulk", label: "💪 Muscle Building", desc: "Surplus Fuel" },
              ].map((g) => (
                <button
                  key={g.id}
                  onClick={() => setGoalType(g.id as any)}
                  className={`p-3 sm:py-3 rounded-xl sm:rounded-2xl border text-xs sm:text-sm font-bold transition-all cursor-pointer flex flex-row sm:flex-col items-center justify-between sm:justify-center gap-1 touch-manipulation ${
                    goalType === g.id
                      ? "bg-gradient-to-r from-[#00d084] to-[#00b4d8] text-black border-transparent shadow-lg shadow-[#00d084]/25 scale-102 sm:scale-105"
                      : "bg-white/5 border-white/10 text-gray-300 active:bg-white/10"
                  }`}
                >
                  <span className="font-extrabold">{g.label}</span>
                  <span className={`text-[10px] sm:text-[11px] ${goalType === g.id ? "text-black/85 font-semibold" : "text-gray-400"}`}>
                    {g.desc}
                  </span>
                </button>
              ))}
            </div>

            {/* Slider Row */}
            <div className="mb-6 sm:mb-10 text-center px-1">
              <div className="flex items-baseline justify-center gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                <span className="text-3xl sm:text-6xl font-black font-mono text-white tracking-tight">
                  {targetCalories}
                </span>
                <span className="text-sm sm:text-lg font-bold text-[#00d084] uppercase font-mono">
                  kcal / day
                </span>
              </div>

              <input
                type="range"
                min="1300"
                max="2800"
                step="50"
                value={targetCalories}
                onChange={(e) => setTargetCalories(Number(e.target.value))}
                aria-label="Target Calories Slider"
                className="w-full max-w-xl h-2.5 sm:h-3 bg-white/15 rounded-lg appearance-none cursor-pointer accent-[#00d084] touch-manipulation"
              />
              <div className="flex justify-between max-w-xl mx-auto text-[10px] sm:text-[11px] font-mono text-gray-400 mt-2">
                <span>1,300 kcal (Light)</span>
                <span>2,050 kcal (Moderate)</span>
                <span>2,800 kcal (High)</span>
              </div>
            </div>

            {/* Dynamic Macro Metrics Display */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8">
              {/* Protein */}
              <div className="p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-white/5 border border-emerald-500/30 flex flex-col items-center justify-center text-center">
                <span className="text-[9px] sm:text-[11px] font-bold tracking-wider sm:tracking-widest text-[#00d084] uppercase block truncate w-full">
                  Protein
                </span>
                <div className="text-xl sm:text-3xl font-black font-mono text-white mt-1">
                  {macros.proteinGrams}g
                </div>
                <div className="w-full bg-white/10 h-1 sm:h-1.5 rounded-full mt-2 sm:mt-3 overflow-hidden">
                  <div
                    className="bg-[#00d084] h-full rounded-full transition-all duration-300"
                    style={{ width: `${Math.min(100, (macros.proteinGrams / 200) * 100)}%` }}
                  />
                </div>
              </div>

              {/* Carbs */}
              <div className="p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-white/5 border border-sky-500/30 flex flex-col items-center justify-center text-center">
                <span className="text-[9px] sm:text-[11px] font-bold tracking-wider sm:tracking-widest text-[#00b4d8] uppercase block truncate w-full">
                  Carbs
                </span>
                <div className="text-xl sm:text-3xl font-black font-mono text-white mt-1">
                  {macros.carbGrams}g
                </div>
                <div className="w-full bg-white/10 h-1 sm:h-1.5 rounded-full mt-2 sm:mt-3 overflow-hidden">
                  <div
                    className="bg-[#00b4d8] h-full rounded-full transition-all duration-300"
                    style={{ width: `${Math.min(100, (macros.carbGrams / 250) * 100)}%` }}
                  />
                </div>
              </div>

              {/* Healthy Fats */}
              <div className="p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-white/5 border border-amber-500/30 flex flex-col items-center justify-center text-center">
                <span className="text-[9px] sm:text-[11px] font-bold tracking-wider sm:tracking-widest text-amber-400 uppercase block truncate w-full">
                  Fats
                </span>
                <div className="text-xl sm:text-3xl font-black font-mono text-white mt-1">
                  {macros.fatGrams}g
                </div>
                <div className="w-full bg-white/10 h-1 sm:h-1.5 rounded-full mt-2 sm:mt-3 overflow-hidden">
                  <div
                    className="bg-amber-400 h-full rounded-full transition-all duration-300"
                    style={{ width: `${Math.min(100, (macros.fatGrams / 90) * 100)}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Recommended Combo Box */}
            <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-emerald-950/40 border border-emerald-500/30 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
              <div>
                <span className="text-[10px] sm:text-[11px] font-mono text-emerald-300 uppercase tracking-wider block font-bold">
                  Recommended Daily Combo in Vizianagaram:
                </span>
                <p className="text-xs sm:text-sm font-semibold text-white mt-0.5 leading-snug">
                  {macros.meals}
                </p>
              </div>

              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-gradient-to-r from-[#00d084] to-[#00b4d8] text-black font-bold text-xs uppercase tracking-wider whitespace-nowrap flex items-center justify-center gap-2 active:scale-95 transition-all shadow-md cursor-pointer shrink-0 touch-manipulation text-center"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Order Combo via WhatsApp</span>
              </a>
            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
