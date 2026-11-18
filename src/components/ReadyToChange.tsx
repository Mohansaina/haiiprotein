"use client";

import { ArrowRight, Sparkles } from "lucide-react";

interface ReadyToChangeProps {
  onStartSubscription: () => void;
}

export default function ReadyToChange({ onStartSubscription }: ReadyToChangeProps) {
  return (
    <section className="py-24 bg-white text-gray-900 text-center px-4 sm:px-6 lg:px-8 border-b border-gray-100">
      <div className="max-w-4xl mx-auto">
        
        {/* Top Tagline matching Screenshot 7 */}
        <p className="text-sm sm:text-base font-extrabold uppercase tracking-widest text-[#00b4d8] mb-3 flex items-center justify-center gap-1.5">
          <Sparkles className="w-4 h-4" />
          <span>Let&apos;s Get Fit Together!</span>
        </p>

        {/* Main Headline matching Screenshot 7 */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-gray-900 tracking-tight font-serif leading-tight">
          Ready To Change The Way You Diet?
        </h2>

        {/* Subtext matching Screenshot 7 */}
        <p className="mt-6 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          A fully customized diet designed from over <strong className="text-gray-900 font-bold">250+ yummy dishes</strong>, don&apos;t let your diet make you compromise on your taste buds.
        </p>

        {/* Action Button matching Screenshot 7 */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={onStartSubscription}
            className="px-9 py-4 rounded-full bg-gradient-to-r from-[#00b4d8] to-[#00d084] text-black font-extrabold text-sm sm:text-base uppercase tracking-wider flex items-center gap-3 shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <span>Start Food Subscription</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
