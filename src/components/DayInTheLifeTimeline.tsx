"use client";

import { useState } from "react";
import Image from "next/image";
import { Sunrise, Sun, Dumbbell, Moon, Check, Sparkles, Clock } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { playSoftClick } from "@/components/SoundEffects";

export default function DayInTheLifeTimeline() {
  const [activeSlot, setActiveSlot] = useState(0);

  const timeline = [
    {
      time: "07:30 AM",
      icon: Sunrise,
      label: "Morning Fuel",
      title: "Overnight Oats Jar",
      dish: "Dark Chocolate Peanut Butter or Wild Berry Jar",
      macros: "24g Protein • 380 kcal • Slow-Release Carbs",
      desc: "Delivered chilled to your door by 7 AM. Creamy rolled oats steeped overnight with chia seeds and almond milk to give you clean, crash-free focus for your morning meetings.",
      image: "https://images.unsplash.com/photo-1584776296944-ab6fb57b0bdd?auto=format&fit=crop&w=800&q=80",
      tag: "Zero Prep Needed",
    },
    {
      time: "01:00 PM",
      icon: Sun,
      label: "Clean Lunch",
      title: "Gourmet Panini / Wrap",
      dish: "Tandoori Paneer or Herbed Chicken Club",
      macros: "38g Protein • 420 kcal • Fiber Rich",
      desc: "Fresh whole-grain artisan sourdough loaded with lean protein, crisp veggies, and house-made mint yogurt dip. No heavy oil slumps — just clean sustained energy.",
      image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80",
      tag: "Freshly Grilled at 11 AM",
    },
    {
      time: "05:00 PM",
      icon: Dumbbell,
      label: "Workout Fuel",
      title: "Nutri Power Box",
      dish: "Mediterranean Quinoa & Spiced Chicken / Tofu",
      macros: "46g Protein • 480 kcal • Clean Micro-Nutrients",
      desc: "Calorie-counted, chef-seasoned lean protein with tricolor quinoa and crisp roasted greens. Powers muscle repair and prevents evening junk food snacking.",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
      tag: "Anabolic Muscle Recovery",
    },
    {
      time: "08:30 PM",
      icon: Moon,
      label: "Evening Cleanse",
      title: "Cold-Pressed Detox Drink",
      dish: "Green Goddess or Activated Charcoal Aloe",
      macros: "3g Protein • 85 kcal • 100% Raw Juice",
      desc: "Zero added sugar or water. Cold-pressed celery, green apple, cucumber, ginger, and mint to reduce bloating, flush toxins, and support restful recovery.",
      image: "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=800&q=80",
      tag: "Gut Health & Anti-Bloat",
    },
  ];

  const current = timeline[activeSlot];

  return (
    <section className="py-24 bg-[#080a0e] text-white relative overflow-hidden border-t border-white/10">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#00d084]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-14">
            <span className="text-xs font-mono font-bold tracking-widest text-[#00d084] uppercase block mb-2">
              Automate Your Daily Nutrition
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight uppercase font-serif">
              A Day of Clean Fueling in Vizianagaram
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-400 max-w-xl mx-auto">
              How a typical subscriber stays on track without cooking, counting calories, or washing dishes.
            </p>
          </div>
        </ScrollReveal>

        {/* Time Tabs */}
        <div className="flex justify-center gap-2 sm:gap-4 mb-10 overflow-x-auto pb-2 scrollbar-none">
          {timeline.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeSlot === index;
            return (
              <button
                key={item.time}
                onClick={() => {
                  playSoftClick();
                  setActiveSlot(index);
                }}
                className={`px-4 sm:px-6 py-3 rounded-2xl border text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-2.5 cursor-pointer whitespace-nowrap ${
                  isActive
                    ? "bg-gradient-to-r from-[#00d084] to-[#00b4d8] text-black border-transparent shadow-lg shadow-[#00d084]/20 scale-105"
                    : "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-black" : "text-[#00d084]"}`} />
                <span>{item.time}</span>
                <span className="hidden md:inline-block text-xs font-normal opacity-80">
                  — {item.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Interactive Stage Card */}
        <div className="bg-[#10141c] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            
            {/* Visual Plate */}
            <div
              className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden border border-white/10 bg-black shadow-inner"
              style={{ position: "relative" }}
            >
              <Image
                src={current.image}
                alt={current.dish}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-emerald-400 text-xs font-bold border border-emerald-500/30">
                {current.tag}
              </span>
            </div>

            {/* Content Details */}
            <div className="flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#00b4d8] uppercase tracking-wider mb-2">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{current.time} • {current.label}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
                  {current.title}
                </h3>
                <h4 className="text-sm font-bold text-emerald-400 mb-4">
                  {current.dish}
                </h4>

                <div className="inline-block px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-gray-200 mb-5">
                  {current.macros}
                </div>

                <p className="text-sm text-gray-300 leading-relaxed">
                  {current.desc}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-gray-400">
                  Step {activeSlot + 1} of {timeline.length}
                </span>

                <div className="flex gap-2">
                  {timeline.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        playSoftClick();
                        setActiveSlot(i);
                      }}
                      className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                        activeSlot === i ? "w-8 bg-[#00d084]" : "bg-white/20 hover:bg-white/50"
                      }`}
                      aria-label={`Jump to step ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
