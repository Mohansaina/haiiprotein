"use client";

import Image from "next/image";
import { Sparkles, Truck, Flame, Heart } from "lucide-react";

interface HeroSectionProps {
  onStartSubscription: () => void;
  backgroundImage?: string;
}

export default function HeroSection({
  onStartSubscription,
  backgroundImage = "/images/hero-clean.jpg",
}: HeroSectionProps) {
  return (
    <section className="relative min-h-[95vh] sm:min-h-[100vh] w-full flex items-center justify-center overflow-hidden bg-black text-center px-4 sm:px-6 lg:px-8">
      {/* Clean High-Resolution Culinary Flat Lay Background */}
      <div
        className="absolute inset-0 z-0"
        style={{ position: "absolute" }}
      >
        <Image
          src={backgroundImage}
          alt="Haii Protein - Customized Diet Plans & Healthy Food Delivery in Vizianagaram"
          fill
          priority
          className="object-cover object-center filter brightness-95 contrast-105"
        />
        {/* Subtle center darkening for crystal-clear readability */}
        <div className="absolute inset-0 bg-black/45 sm:bg-black/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.7)_0%,rgba(0,0,0,0.3)_55%,rgba(0,0,0,0.75)_100%)]" />
      </div>

      {/* Floating Organic Ingredient Vibe Badges (Desktop) */}
      <div className="hidden lg:block absolute left-8 top-1/3 z-20 animate-float-slow pointer-events-none select-none">
        <div className="bg-black/75 backdrop-blur-md border border-emerald-500/30 p-3.5 rounded-2xl flex items-center gap-3 shadow-2xl shadow-emerald-500/10 max-w-[220px] text-left">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-2xl flex items-center justify-center shrink-0">
            🥣
          </div>
          <div>
            <h4 className="text-xs font-bold text-white">Overnight Oats</h4>
            <p className="text-[10px] text-gray-300">Chia, Almond Milk &amp; Dark Cacao</p>
          </div>
        </div>
      </div>

      <div className="hidden lg:block absolute right-8 top-1/3 z-20 animate-float-reverse pointer-events-none select-none">
        <div className="bg-black/75 backdrop-blur-md border border-amber-500/30 p-3.5 rounded-2xl flex items-center gap-3 shadow-2xl shadow-amber-500/10 max-w-[220px] text-left">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-2xl flex items-center justify-center shrink-0">
            🥑
          </div>
          <div>
            <h4 className="text-xs font-bold text-white">Macro Balanced</h4>
            <p className="text-[10px] text-amber-300">Free 5 KM Delivery in VZM</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center justify-center pt-24 sm:pt-28 pb-8 sm:pb-12">

        {/* Free Delivery Announcement Banner */}
        <div className="inline-flex items-center gap-2 px-3.5 sm:px-5 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 via-emerald-500/20 to-teal-500/20 border border-amber-400/50 backdrop-blur-md mb-3.5 shadow-lg shadow-amber-500/10 animate-pulse-subtle">
          <Truck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
          <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-amber-300">
            FREE Delivery Within 5 KM of Vizianagaram! 🛵💨
          </span>
        </div>

        {/* Haii Protein Signature Tagline */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 rounded-full bg-black/70 border border-white/15 backdrop-blur-md mb-3 sm:mb-4">
          <span className="text-[11px] sm:text-sm font-medium text-emerald-400">
            🥑 Eat Healthy • Stay Happy 💚
          </span>
          <span className="text-white/40">•</span>
          <span className="text-[11px] sm:text-sm text-gray-200 font-normal">
            Your Cravings Destination 📍
          </span>
        </div>

        {/* Headline: Bold white Serif font, responsive */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-white uppercase tracking-tight leading-[1.18] sm:leading-[1.15] font-serif drop-shadow-lg px-2">
          CUSTOMIZED DIET PLANS &amp;
          <br className="hidden sm:inline" />
          {" "}HEALTHY FOOD DELIVERY
        </h1>

        {/* City Subtitle */}
        <p className="mt-2.5 sm:mt-3.5 text-sm sm:text-base md:text-xl text-white/95 italic font-serif tracking-wide drop-shadow">
          (In Vizianagaram 📍)
        </p>

        {/* Subtext Paragraph */}
        <p className="mt-3 sm:mt-5 text-xs sm:text-sm md:text-base text-white/90 max-w-2xl font-normal leading-relaxed drop-shadow px-2">
          Diet tailored meals freshly prepared in small batches every morning. No cold storage or bulk preparation involved.
        </p>

        {/* Core Product Line from Instagram Bio */}
        <div className="mt-4 flex flex-wrap justify-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-semibold text-gray-200 px-2">
          <span className="px-2.5 sm:px-3 py-1 rounded-md bg-black/70 border border-white/10 backdrop-blur-sm hover:border-[#00d084] transition-colors">
            🥣 Overnight Oats
          </span>
          <span className="px-2.5 sm:px-3 py-1 rounded-md bg-black/70 border border-white/10 backdrop-blur-sm hover:border-sky-400 transition-colors">
            🥪 Sandwiches
          </span>
          <span className="px-2.5 sm:px-3 py-1 rounded-md bg-black/70 border border-white/10 backdrop-blur-sm hover:border-amber-400 transition-colors">
            🥜 Nutri Boxes
          </span>
          <span className="px-2.5 sm:px-3 py-1 rounded-md bg-black/70 border border-white/10 backdrop-blur-sm hover:border-lime-400 transition-colors">
            🍋 Detox Drinks
          </span>
        </div>

        {/* CTA Button with Shimmer sweep */}
        <div className="mt-6 sm:mt-7 w-full sm:w-auto px-4 sm:px-0">
          <button
            onClick={onStartSubscription}
            className="relative overflow-hidden w-full sm:w-auto px-8 py-3.5 sm:py-3 rounded-md bg-gradient-to-r from-[#0099d8] to-[#00b074] hover:from-[#0088c2] hover:to-[#009e66] text-white font-semibold text-sm sm:text-[15px] flex items-center justify-center gap-2.5 shadow-xl shadow-emerald-500/20 active:scale-[0.98] transition-all cursor-pointer touch-manipulation group"
          >
            {/* Shimmer sweep */}
            <span className="absolute inset-0 shimmer-effect pointer-events-none" />
            <span className="relative z-10">Start Food Subscription</span>
            <span className="relative z-10 text-base group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>

      </div>
    </section>
  );
}
