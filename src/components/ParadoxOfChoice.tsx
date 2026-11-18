"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, X, Sparkles, HelpCircle, ChevronDown, ChevronUp } from "lucide-react";
import { COMPARISON_POINTS } from "@/data/content";

export default function ParadoxOfChoice() {
  const [showComparison, setShowComparison] = useState(false);

  return (
    <section id="why-us" className="py-24 bg-[#0d0f12] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header matching Screenshot 4 */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-sm sm:text-base font-semibold text-gray-300 tracking-wide flex items-center justify-center gap-1.5">
            <span>More options, More confusion -</span>
            <span className="text-lg">🤔</span>
          </p>

          <h2 className="mt-2 text-3xl sm:text-5xl font-black tracking-tight text-[#00d084] font-serif">
            The Paradox of Choice
          </h2>

          <p className="mt-2 text-xl sm:text-2xl font-bold text-gray-200">
            Why Choose Us?
          </p>

          {/* Interactive Button matching Screenshot 4 */}
          <div className="mt-6">
            <button
              onClick={() => setShowComparison(!showComparison)}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-black border-2 border-white/20 hover:border-[#00d084] text-white font-bold text-xs sm:text-sm tracking-wide shadow-lg hover:shadow-[#00d084]/20 transition-all cursor-pointer group"
            >
              <span>Click here to know how are we different!</span>
              <span className="text-base group-hover:scale-125 transition-transform">👆</span>
              {showComparison ? (
                <ChevronUp className="w-4 h-4 text-[#00d084]" />
              ) : (
                <ChevronDown className="w-4 h-4 text-[#00d084]" />
              )}
            </button>
          </div>
        </div>

        {/* Visual Featured Plates matching Screenshot 4 */}
        <div className="relative my-10 max-w-4xl mx-auto rounded-3xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-md p-6 sm:p-10">
          <div
            className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden"
            style={{ position: "relative" }}
          >
            <Image
              src="/images/paradox-choice.jpg"
              alt="Haii Protein Meal Choices Variety"
              fill
              className="object-cover object-center"
            />
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <span className="text-2xl">🥗</span>
              <h4 className="font-bold text-sm text-white mt-1">Over 250+ Dishes</h4>
              <p className="text-xs text-gray-400">Never eat the same meal twice in a month</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <span className="text-2xl">⚖️</span>
              <h4 className="font-bold text-sm text-white mt-1">Exact Macro Splits</h4>
              <p className="text-xs text-gray-400">Grams of protein, carbs &amp; healthy fats matched</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <span className="text-2xl">🌱</span>
              <h4 className="font-bold text-sm text-white mt-1">100% Wholesome</h4>
              <p className="text-xs text-gray-400">Pure cold-pressed oils &amp; organic produce</p>
            </div>
          </div>
        </div>

        {/* Collapsible Comparison Table */}
        {showComparison && (
          <div className="mt-12 max-w-5xl mx-auto rounded-3xl bg-white/5 border border-white/10 overflow-hidden shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="p-6 bg-gradient-to-r from-emerald-950/60 via-slate-900 to-sky-950/60 border-b border-white/10">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#00d084]" />
                Detailed Comparison: Haii Protein vs Alternatives
              </h3>
              <p className="text-xs text-gray-300 mt-1">
                See why thousands of busy professionals switch to our customized meal delivery.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-white/10 bg-black/40 text-gray-400 font-semibold uppercase tracking-wider">
                    <th className="py-4 px-6">Feature</th>
                    <th className="py-4 px-6 text-[#00d084] bg-emerald-500/10">Haii Protein</th>
                    <th className="py-4 px-6">Generic Diet Meal Tiffins</th>
                    <th className="py-4 px-6">Cooking At Home</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {COMPARISON_POINTS.map((pt, i) => (
                    <tr key={i} className="hover:bg-white/5 transition-colors">
                      <td className="py-4 px-6 font-bold text-white">{pt.feature}</td>
                      <td className="py-4 px-6 font-semibold text-emerald-300 bg-emerald-500/5">
                        <span className="flex items-start gap-1.5">
                          <Check className="w-4 h-4 text-[#00d084] shrink-0 mt-0.5" />
                          <span>{pt.haii}</span>
                        </span>
                      </td>
                      <td className="py-4 px-6 text-gray-400">
                        <span className="flex items-start gap-1.5">
                          <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                          <span>{pt.others}</span>
                        </span>
                      </td>
                      <td className="py-4 px-6 text-gray-400">
                        <span className="flex items-start gap-1.5">
                          <HelpCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                          <span>{pt.cooking}</span>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
