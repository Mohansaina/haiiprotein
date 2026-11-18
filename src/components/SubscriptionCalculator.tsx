"use client";

import { useState } from "react";
import { Check, Send, Sparkles, Flame, Dumbbell, Shield, MessageSquare } from "lucide-react";
import { CITIES } from "@/data/content";

export default function SubscriptionCalculator() {
  const [goal, setGoal] = useState<string>("fat_loss");
  const [mealsPerDay, setMealsPerDay] = useState<number>(2);
  const [duration, setDuration] = useState<number>(30);
  const [dietType, setDietType] = useState<string>("all");
  const [selectedCity, setSelectedCity] = useState<string>("Vizianagaram Town");

  const goals = [
    { id: "fat_loss", label: "Fat Loss & Toning", icon: "🔥", calories: "1,400 - 1,700 kcal" },
    { id: "muscle_gain", label: "Muscle & Strength", icon: "💪", calories: "2,200 - 2,600 kcal" },
    { id: "clean_eating", label: "Clean Eating & Health", icon: "🥗", calories: "1,800 - 2,000 kcal" },
    { id: "detox", label: "Detox & Gut Cleanse", icon: "🍋", calories: "1,200 - 1,500 kcal" },
  ];

  // Pricing calculations
  const basePricePerMeal = 299;
  const discountRate = duration === 30 ? 0.20 : duration === 14 ? 0.10 : 0.05;
  const totalMeals = mealsPerDay * duration;
  const regularTotal = totalMeals * basePricePerMeal;
  const discountedTotal = Math.round(regularTotal * (1 - discountRate));
  const effectivePerMeal = Math.round(discountedTotal / totalMeals);

  const getWhatsAppMessage = () => {
    const goalObj = goals.find((g) => g.id === goal);
    const message = `Hi Haii Protein! 🥑\nI want to customize my meal subscription:\n\n📍 City: ${selectedCity}\n🎯 Goal: ${goalObj?.label}\n🍽️ Meals per day: ${mealsPerDay} meal(s)\n📅 Duration: ${duration} Days (${totalMeals} total meals)\n🥗 Preference: ${dietType}\n💰 Estimated: ₹${discountedTotal} (~₹${effectivePerMeal}/meal)\n\nPlease connect me with a nutritionist to finalize my menu!`;
    return `https://wa.me/918688249985?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="calculator" className="py-24 bg-[#0a0c10] text-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#00d084] mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Interactive Subscription Customizer
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight uppercase font-serif">
            Calculate Your Customized Meal Plan
          </h2>
          <p className="mt-3 text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
            Choose your city, fitness goal, and delivery routine to get personalized pricing and direct nutritionist onboarding.
          </p>
        </div>

        {/* Customizer Box */}
        <div className="bg-[#12151b] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Options (2 cols) */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* 1. City Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                  1. Select Your Delivery City
                </label>
                <div className="flex flex-wrap gap-2">
                  {CITIES.map((city) => (
                    <button
                      key={city}
                      onClick={() => setSelectedCity(city)}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        selectedCity === city
                          ? "bg-[#00d084] text-black shadow-md shadow-[#00d084]/20"
                          : "bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10"
                      }`}
                    >
                      {city}
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Fitness Goal */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                  2. Choose Your Primary Fitness Goal
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {goals.map((g) => (
                    <button
                      key={g.id}
                      onClick={() => setGoal(g.id)}
                      className={`p-3.5 rounded-2xl border text-left flex items-start gap-3 transition-all cursor-pointer ${
                        goal === g.id
                          ? "bg-emerald-500/10 border-[#00d084] text-white"
                          : "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10"
                      }`}
                    >
                      <span className="text-2xl">{g.icon}</span>
                      <div>
                        <h4 className="font-bold text-sm text-white">{g.label}</h4>
                        <span className="text-xs text-gray-400 block mt-0.5">{g.calories}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Meals Per Day */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                  3. Meals Delivered Daily
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { count: 1, label: "1 Meal / Day", sub: "Lunch or Dinner" },
                    { count: 2, label: "2 Meals / Day", sub: "Lunch & Dinner" },
                    { count: 3, label: "Full Day (3 Meals)", sub: "Oats + Lunch + Dinner" },
                  ].map((m) => (
                    <button
                      key={m.count}
                      onClick={() => setMealsPerDay(m.count)}
                      className={`p-3.5 rounded-xl border text-center transition-all cursor-pointer ${
                        mealsPerDay === m.count
                          ? "bg-[#00b4d8]/15 border-[#00b4d8] text-white"
                          : "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10"
                      }`}
                    >
                      <div className="font-bold text-sm">{m.label}</div>
                      <div className="text-[10px] text-gray-400 mt-1">{m.sub}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* 4. Plan Duration */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                  4. Subscription Period
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { days: 7, label: "7 Days", tag: "Trial Plan" },
                    { days: 14, label: "14 Days", tag: "10% OFF" },
                    { days: 30, label: "30 Days", tag: "🔥 20% OFF (Best Value)" },
                  ].map((d) => (
                    <button
                      key={d.days}
                      onClick={() => setDuration(d.days)}
                      className={`p-3.5 rounded-xl border text-center transition-all cursor-pointer ${
                        duration === d.days
                          ? "bg-[#00d084]/20 border-[#00d084] text-white"
                          : "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10"
                      }`}
                    >
                      <div className="font-black text-sm">{d.label}</div>
                      <div className="text-[10px] text-[#00d084] font-semibold mt-1">{d.tag}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* 5. Food Preference */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                  5. Food Preferences
                </label>
                <div className="flex flex-wrap gap-2">
                  {["All / Non-Vegetarian", "Pure Vegetarian (Paneer/Tofu)", "Eggetarian", "Vegan / Dairy-Free"].map((pref) => (
                    <button
                      key={pref}
                      onClick={() => setDietType(pref)}
                      className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        dietType === pref
                          ? "bg-white text-black font-extrabold"
                          : "bg-white/5 text-gray-400 border border-white/10 hover:text-white"
                      }`}
                    >
                      {pref}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Summary Card (1 col) */}
            <div className="bg-[#181d26] border border-white/15 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#00d084] uppercase tracking-wider block mb-1">
                  Summary &amp; Estimate
                </span>
                <h3 className="text-xl font-bold text-white mb-4">
                  {goals.find((g) => g.id === goal)?.label}
                </h3>

                <div className="space-y-3 text-xs border-y border-white/10 py-4 text-gray-300">
                  <div className="flex justify-between">
                    <span>Delivering To:</span>
                    <strong className="text-white">{selectedCity}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Daily Frequency:</span>
                    <strong className="text-white">{mealsPerDay} meal(s) / day</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Meals:</span>
                    <strong className="text-white">{totalMeals} meals</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Preference:</span>
                    <strong className="text-white truncate max-w-[140px] text-right">{dietType}</strong>
                  </div>
                  <div className="flex justify-between text-emerald-400">
                    <span>Discount Applied:</span>
                    <strong>{Math.round(discountRate * 100)}% OFF</strong>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <span className="text-xs text-gray-400 block line-through">
                    ₹{regularTotal}
                  </span>
                  <div className="text-3xl sm:text-4xl font-black text-white mt-0.5">
                    ₹{discountedTotal.toLocaleString()}
                  </div>
                  <span className="text-[11px] text-[#00d084] font-semibold mt-1 block">
                    ~₹{effectivePerMeal} per fresh meal delivered
                  </span>
                </div>

                <div className="mt-4 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-[11px] text-emerald-300 space-y-1">
                  <p className="flex items-center gap-1 font-semibold">
                    <Check className="w-3.5 h-3.5 text-[#00d084]" /> 1-on-1 Assigned Nutritionist Included
                  </p>
                  <p className="flex items-center gap-1 font-semibold">
                    <Check className="w-3.5 h-3.5 text-[#00d084]" /> Pause or Modify Dates Anytime
                  </p>
                  <p className="flex items-center gap-1 font-semibold">
                    <Check className="w-3.5 h-3.5 text-[#00d084]" /> Free Morning Doorstep Delivery
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <a
                  href={getWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#00d084] to-[#00b4d8] text-black font-black text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#00d084]/20 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>DM &amp; Order on WhatsApp</span>
                </a>
                <p className="text-[10px] text-gray-400 text-center mt-2">
                  No advance payment needed to discuss your custom plan.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
