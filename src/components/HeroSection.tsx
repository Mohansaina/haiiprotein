"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Sparkles,
  Truck,
  Flame,
  ArrowRight,
  MessageCircle,
  Zap,
  CheckCircle2,
  Clock,
  RotateCw,
} from "lucide-react";
import { playSoftClick, playSatisfyingPop } from "./SoundEffects";

interface HeroSectionProps {
  onStartSubscription: () => void;
  backgroundImage?: string;
}

const CYCLING_GOALS = [
  { text: "FAT LOSS & TONING", emoji: "🥑", color: "text-[#00d084]", gradient: "from-[#00d084] to-[#00b4d8]" },
  { text: "LEAN MUSCLE GAIN", emoji: "💪", color: "text-cyan-400", gradient: "from-cyan-400 to-blue-400" },
  { text: "CLEAN DAILY EATING", emoji: "🥗", color: "text-amber-400", gradient: "from-amber-400 to-orange-400" },
  { text: "ALL-DAY ENERGY", emoji: "⚡", color: "text-lime-400", gradient: "from-lime-400 to-emerald-400" },
];

const SPECIALTIES = [
  {
    id: "oats",
    name: "Overnight Oats",
    emoji: "🥣",
    calories: "380 kcal",
    protein: "24g",
    carbs: "46g",
    fats: "9g",
    highlight: "Rolled Oats, Chia, Almond Milk & Dark Cacao",
    color: "from-emerald-500/20 to-teal-500/20",
    border: "border-emerald-400/50",
    glow: "shadow-emerald-500/20",
    accent: "text-emerald-400",
    pillBg: "bg-emerald-500/10",
  },
  {
    id: "sandwiches",
    name: "Sandwiches",
    emoji: "🥪",
    calories: "420 kcal",
    protein: "28g",
    carbs: "38g",
    fats: "12g",
    highlight: "Paneer / Tofu, Sprouted Wheat & Fresh Mint",
    color: "from-sky-500/20 to-blue-500/20",
    border: "border-sky-400/50",
    glow: "shadow-sky-500/20",
    accent: "text-sky-400",
    pillBg: "bg-sky-500/10",
  },
  {
    id: "nutribox",
    name: "Nutri Boxes",
    emoji: "🥜",
    calories: "350 kcal",
    protein: "22g",
    carbs: "34g",
    fats: "11g",
    highlight: "Sprouted Microgreens, Roasted Seeds & Steamed Legumes",
    color: "from-amber-500/20 to-orange-500/20",
    border: "border-amber-400/50",
    glow: "shadow-amber-500/20",
    accent: "text-amber-400",
    pillBg: "bg-amber-500/10",
  },
  {
    id: "detox",
    name: "Detox Drinks",
    emoji: "🍋",
    calories: "95 kcal",
    protein: "3g",
    carbs: "18g",
    fats: "0.5g",
    highlight: "Cold-Pressed Cucumber, Celery, Ginger & Lemon Elixir",
    color: "from-lime-500/20 to-emerald-500/20",
    border: "border-lime-400/50",
    glow: "shadow-lime-500/20",
    accent: "text-lime-400",
    pillBg: "bg-lime-500/10",
  },
];

export default function HeroSection({
  onStartSubscription,
  backgroundImage = "/images/hero-clean.jpg",
}: HeroSectionProps) {
  const [currentGoalIndex, setCurrentGoalIndex] = useState(0);
  const [activeSpecialtyId, setActiveSpecialtyId] = useState("oats");
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  // Auto-cycle kinetic headline goals
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentGoalIndex((prev) => (prev + 1) % CYCLING_GOALS.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  // Subtle interactive parallax & spotlight tracking
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });

    // Subtle 3D tilt (-4deg to +4deg)
    const tiltX = ((e.clientY - rect.top) / rect.height - 0.5) * -6;
    const tiltY = ((e.clientX - rect.left) / rect.width - 0.5) * 6;
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const currentGoal = CYCLING_GOALS[currentGoalIndex];
  const activeSpecialty = SPECIALTIES.find((s) => s.id === activeSpecialtyId) || SPECIALTIES[0];

  const handleSpecialtySelect = (id: string) => {
    playSoftClick();
    setActiveSpecialtyId(id);
  };

  const handleCtaClick = () => {
    playSatisfyingPop();
    onStartSubscription();
  };

  const specialtyOrderLink = `https://wa.me/918688249985?text=${encodeURIComponent(
    `Hi Haii Protein Vizianagaram! 🥑 I want to try your ${activeSpecialty.name} (${activeSpecialty.calories}, ${activeSpecialty.protein} protein). Please share ordering details!`
  )}`;

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[96vh] sm:min-h-[100vh] w-full flex items-center justify-center overflow-hidden bg-[#07090c] text-center px-4 sm:px-6 lg:px-8 select-none"
    >
      {/* Background Culinary Flat Lay */}
      <div
        className="absolute inset-0 z-0 transition-transform duration-700 ease-out"
        style={{
          position: "absolute",
          transform: `scale(1.05) translate(${(mousePos.x - 50) * 0.02}%, ${(mousePos.y - 50) * 0.02}%)`,
        }}
      >
        <Image
          src={backgroundImage}
          alt="Haii Protein - Healthy Diet Delivery in Vizianagaram"
          fill
          priority
          className="object-cover object-center filter brightness-[0.88] contrast-105"
        />
        {/* Dynamic Interactive Spotlight that follows mouse cursor */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 500px at ${mousePos.x}% ${mousePos.y}%, rgba(0, 208, 132, 0.18), transparent 70%)`,
          }}
        />
        {/* Radial vignette for high text contrast */}
        <div className="absolute inset-0 bg-black/55 sm:bg-black/50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.65)_0%,rgba(0,0,0,0.4)_50%,rgba(0,0,0,0.85)_100%)]" />
      </div>

      {/* Floating Interactive Badge (Left): Overnight Oats */}
      <div
        onClick={() => handleSpecialtySelect("oats")}
        className="hidden lg:block absolute left-8 top-1/3 z-20 animate-float-slow cursor-pointer group"
      >
        <div className="bg-black/80 hover:bg-black/90 backdrop-blur-md border border-emerald-500/40 p-3.5 rounded-2xl flex items-center gap-3 shadow-2xl shadow-emerald-500/20 max-w-[230px] text-left transition-all duration-300 group-hover:scale-105 group-hover:border-emerald-400">
          <div className="w-11 h-11 rounded-xl bg-emerald-500/20 text-2xl flex items-center justify-center shrink-0 group-hover:rotate-12 transition-transform">
            🥣
          </div>
          <div>
            <div className="flex items-center gap-1">
              <span className="text-xs font-bold text-white">Overnight Oats</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </div>
            <p className="text-[10px] text-gray-300 mt-0.5">Chia, Almond Milk &amp; Cacao</p>
            <p className="text-[9px] text-emerald-400 font-semibold mt-1">24g Protein • Tap to Preview</p>
          </div>
        </div>
      </div>

      {/* Floating Interactive Badge (Right): Macro Balanced */}
      <div
        onClick={() => handleSpecialtySelect("sandwiches")}
        className="hidden lg:block absolute right-8 top-1/3 z-20 animate-float-reverse cursor-pointer group"
      >
        <div className="bg-black/80 hover:bg-black/90 backdrop-blur-md border border-amber-500/40 p-3.5 rounded-2xl flex items-center gap-3 shadow-2xl shadow-amber-500/20 max-w-[230px] text-left transition-all duration-300 group-hover:scale-105 group-hover:border-amber-400">
          <div className="w-11 h-11 rounded-xl bg-amber-500/20 text-2xl flex items-center justify-center shrink-0 group-hover:-rotate-12 transition-transform">
            🥑
          </div>
          <div>
            <div className="flex items-center gap-1">
              <span className="text-xs font-bold text-white">Macro Balanced</span>
              <span className="text-[9px] px-1 py-0.2 rounded bg-amber-500/20 text-amber-300 font-bold">VZM</span>
            </div>
            <p className="text-[10px] text-gray-300 mt-0.5">Free 5 KM Doorstep Delivery</p>
            <p className="text-[9px] text-amber-400 font-semibold mt-1">Fresh Morning Prep • Tap</p>
          </div>
        </div>
      </div>

      {/* Main Center Content with subtle 3D tilt */}
      <div
        className="relative z-10 max-w-4xl mx-auto flex flex-col items-center justify-center pt-24 sm:pt-28 pb-10 sm:pb-14 transition-transform duration-300 ease-out"
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        }}
      >
        {/* Top Live Status & Free Delivery Pill */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-3.5">
          {/* Free 5KM Delivery Banner */}
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-5 py-1.5 rounded-full bg-gradient-to-r from-amber-500/25 via-emerald-500/25 to-teal-500/25 border border-amber-400/60 backdrop-blur-md shadow-lg shadow-amber-500/10 animate-pulse-subtle">
            <Truck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 shrink-0" />
            <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-amber-300">
              FREE Delivery Within 5 KM of Vizianagaram! 🛵💨
            </span>
          </div>

          {/* Live Kitchen Status Pill */}
          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 border border-emerald-500/30 backdrop-blur-md text-[11px] text-emerald-400 font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Small Batch Daily Kitchen</span>
          </div>
        </div>

        {/* Haii Protein Signature Tagline Pill */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-1 rounded-full bg-black/75 border border-white/20 backdrop-blur-md mb-3 sm:mb-4">
          <span className="text-[11px] sm:text-xs font-semibold text-emerald-400">
            🥑 Eat Healthy • Stay Happy 💚
          </span>
          <span className="text-white/40">•</span>
          <span className="text-[11px] sm:text-xs text-gray-200 font-normal">
            Your Cravings Destination 📍
          </span>
        </div>

        {/* Main Kinetic Headline */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold text-white uppercase tracking-tight leading-[1.18] sm:leading-[1.12] font-serif drop-shadow-lg px-2">
          CUSTOMIZED DIET PLANS &amp;
          <br className="hidden sm:inline" />
          {" "}HEALTHY FOOD DELIVERY
        </h1>

        {/* City & Cycling Goal Highlight */}
        <div className="mt-2.5 sm:mt-3 flex flex-wrap items-center justify-center gap-2 text-sm sm:text-base md:text-xl font-serif">
          <span className="text-white/90 italic drop-shadow">(In Vizianagaram 📍)</span>
          <span className="text-white/40 hidden sm:inline">•</span>
          <span className="inline-flex items-center gap-1.5 font-bold uppercase tracking-wider text-xs sm:text-sm px-3 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-md transition-all duration-500">
            <span>TAILORED FOR</span>
            <span className={`${currentGoal.color} drop-shadow-sm`}>
              {currentGoal.emoji} {currentGoal.text}
            </span>
          </span>
        </div>

        {/* Subtext Paragraph */}
        <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-[15px] text-white/90 max-w-2xl font-normal leading-relaxed drop-shadow px-2">
          Freshly prepared every morning in Vizianagaram. No cold storage, no artificial preservatives. Pure macro-calculated nutrition delivered to your doorstep.
        </p>

        {/* Interactive Food Specialty Switcher Dock */}
        <div className="mt-6 w-full max-w-xl px-2">
          <div className="text-[10px] sm:text-[11px] uppercase tracking-widest text-gray-300 font-bold mb-2 flex items-center justify-center gap-1.5">
            <Sparkles className="w-3 h-3 text-amber-400" />
            <span>Interactive Menu Preview • Tap Any Item</span>
          </div>

          {/* 4 Specialty Switcher Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {SPECIALTIES.map((spec) => {
              const isActive = spec.id === activeSpecialtyId;
              return (
                <button
                  key={spec.id}
                  onClick={() => handleSpecialtySelect(spec.id)}
                  className={`relative p-2.5 sm:p-2 rounded-xl border backdrop-blur-md transition-all duration-300 cursor-pointer text-left sm:text-center touch-manipulation flex sm:flex-col items-center gap-2 sm:gap-1 ${
                    isActive
                      ? `bg-black/90 ${spec.border} ${spec.glow} shadow-xl scale-[1.03]`
                      : "bg-black/60 border-white/15 text-gray-300 hover:border-white/40 hover:bg-black/75"
                  }`}
                >
                  <span className="text-xl sm:text-2xl">{spec.emoji}</span>
                  <div className="flex-1 sm:flex-none">
                    <p className={`text-xs font-bold leading-tight ${isActive ? "text-white" : "text-gray-200"}`}>
                      {spec.name}
                    </p>
                    <p className={`text-[10px] font-semibold mt-0.5 ${isActive ? spec.accent : "text-gray-400"}`}>
                      {spec.protein} Protein
                    </p>
                  </div>
                  {isActive && (
                    <span className="sm:hidden w-2 h-2 rounded-full bg-[#00d084] animate-ping" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Live Micro Nutrition Preview Card for Selected Item */}
          <div className="mt-3 p-3.5 sm:p-4 rounded-2xl bg-black/85 backdrop-blur-lg border border-white/20 shadow-2xl text-left transition-all duration-300 animate-fadeIn">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xl">{activeSpecialty.emoji}</span>
                  <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                    {activeSpecialty.name}
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-gray-200 font-normal">
                      Fresh Today
                    </span>
                  </h3>
                </div>
                <p className="text-xs text-gray-300 mt-1">
                  {activeSpecialty.highlight}
                </p>
              </div>

              {/* Quick WhatsApp Order for this item */}
              <a
                href={specialtyOrderLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playSoftClick()}
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] text-white text-[11px] font-bold uppercase tracking-wider shadow-md hover:scale-105 active:scale-95 transition-all shrink-0 cursor-pointer touch-manipulation"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white text-white" />
                <span>Quick WhatsApp Order</span>
              </a>
            </div>

            {/* Macro Pills Grid */}
            <div className="mt-2.5 pt-2.5 border-t border-white/10 grid grid-cols-4 gap-2 text-center text-[10px] sm:text-xs">
              <div className="bg-white/5 rounded-lg py-1 px-1.5 border border-white/10">
                <span className="text-gray-400 block text-[9px] uppercase">Calories</span>
                <span className="font-bold text-amber-400">{activeSpecialty.calories}</span>
              </div>
              <div className="bg-white/5 rounded-lg py-1 px-1.5 border border-white/10">
                <span className="text-gray-400 block text-[9px] uppercase">Protein</span>
                <span className="font-bold text-emerald-400">{activeSpecialty.protein}</span>
              </div>
              <div className="bg-white/5 rounded-lg py-1 px-1.5 border border-white/10">
                <span className="text-gray-400 block text-[9px] uppercase">Carbs</span>
                <span className="font-bold text-sky-400">{activeSpecialty.carbs}</span>
              </div>
              <div className="bg-white/5 rounded-lg py-1 px-1.5 border border-white/10">
                <span className="text-gray-400 block text-[9px] uppercase">Good Fats</span>
                <span className="font-bold text-violet-400">{activeSpecialty.fats}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Primary CTA Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto px-4 sm:px-0">
          <button
            onClick={handleCtaClick}
            className="relative overflow-hidden w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#0099d8] to-[#00b074] hover:from-[#0088c2] hover:to-[#009e66] text-white font-bold text-sm sm:text-[15px] flex items-center justify-center gap-2.5 shadow-2xl shadow-emerald-500/25 active:scale-[0.98] transition-all cursor-pointer touch-manipulation group"
          >
            {/* Shimmer sweep */}
            <span className="absolute inset-0 shimmer-effect pointer-events-none" />
            <span className="relative z-10 flex items-center gap-2">
              <Flame className="w-4 h-4 text-amber-300" />
              <span>Start Food Subscription</span>
            </span>
            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1.5 transition-transform" />
          </button>

          <a
            href="https://wa.me/918688249985?text=Hi%20Haii%20Protein!%20%F0%9F%A5%91%20I%20want%20to%20discuss%20a%20healthy%20diet%20subscription%20plan%20in%20Vizianagaram."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playSoftClick()}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-black/70 hover:bg-black/90 border border-white/20 hover:border-emerald-400/60 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 backdrop-blur-md active:scale-[0.98] transition-all cursor-pointer touch-manipulation"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
            <span>Chat on WhatsApp (+91 86882 49985)</span>
          </a>
        </div>

        {/* Micro Guarantee footer */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-[10px] sm:text-xs text-white/70">
          <span className="flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            100% Fresh Daily Morning Batch
          </span>
          <span className="hidden sm:inline text-white/30">•</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            Pause / Resume Anytime
          </span>
          <span className="hidden sm:inline text-white/30">•</span>
          <span className="flex items-center gap-1">
            <Truck className="w-3.5 h-3.5 text-sky-400" />
            Free Doorstep Delivery in 5 KM
          </span>
        </div>

      </div>
    </section>
  );
}
