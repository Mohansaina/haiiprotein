"use client";

import Image from "next/image";
import { ShoppingCart, ClipboardList, Clock, Heart } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-[#07080a] text-white relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#00d084]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <div className="inline-block relative">
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase font-serif">
                #HOWITWORKS
              </h2>
              {/* Cyan highlight bar like in the screenshot */}
              <div className="h-1.5 w-full bg-gradient-to-r from-[#00b4d8] to-[#00d084] rounded-full mt-2" />
            </div>
            <p className="mt-4 text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
              From craving-satisfying meals to targeted macros, here is how we make healthy living effortless for you in Vizianagaram.
            </p>
          </div>
        </ScrollReveal>

        {/* Desktop Circular Layout & Mobile Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
          
          {/* Left Column Steps (1 & 2) */}
          <div className="space-y-8">
            <ScrollReveal direction="left" delayMs={100}>
              <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-[#00d084]/50 hover:-translate-y-1 transition-all duration-300 group">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-[#00d084] flex items-center justify-center border border-emerald-500/30 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                    <ShoppingCart className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#00d084] uppercase tracking-widest">Step 01</span>
                    <h3 className="text-xl font-bold text-white">Choose Plan</h3>
                  </div>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Subscribe to our healthy diet plan and get your customized meal schedule.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delayMs={250}>
              <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-[#00b4d8]/50 hover:-translate-y-1 transition-all duration-300 group">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-sky-500/20 text-[#00b4d8] flex items-center justify-center border border-sky-500/30 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                    <ClipboardList className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#00b4d8] uppercase tracking-widest">Step 02</span>
                    <h3 className="text-xl font-bold text-white">Structure Your Diet</h3>
                  </div>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  A nutritionist will be assigned to you and your diet will be custom designed around your taste and goals.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Center Visual Bowl Dish matching Screenshot 2 */}
          <ScrollReveal direction="up" delayMs={150}>
            <div className="flex flex-col items-center justify-center order-first lg:order-none">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full p-2 bg-gradient-to-tr from-[#00d084]/40 via-white/10 to-[#00b4d8]/40 shadow-2xl shadow-[#00d084]/20 hover:scale-105 transition-transform duration-500">
                <div
                  className="relative w-full h-full rounded-full overflow-hidden border-4 border-black"
                  style={{ position: "relative" }}
                >
                  <Image
                    src="/images/how-it-works.jpg"
                    alt="Healthy Diet Plan Dish"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
                {/* Floating ingredient accent dots */}
                <div className="absolute -top-3 left-10 w-4 h-4 rounded-full bg-emerald-400/80 animate-ping" />
                <div className="absolute bottom-4 -right-2 w-3 h-3 rounded-full bg-cyan-400" />
              </div>
              <p className="mt-4 text-xs tracking-wider text-gray-400 font-medium uppercase">
                Fresh Daily Batches • Zero Bulk Storage
              </p>
            </div>
          </ScrollReveal>

          {/* Right Column Steps (3 & 4) */}
          <div className="space-y-8">
            <ScrollReveal direction="right" delayMs={100}>
              <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-amber-500/50 hover:-translate-y-1 transition-all duration-300 group">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Step 03</span>
                    <h3 className="text-xl font-bold text-white">Doorstep Delivery</h3>
                  </div>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Delivery of healthy food across Vizianagaram everyday as per your diet designed.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delayMs={250}>
              <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-rose-500/50 hover:-translate-y-1 transition-all duration-300 group">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center border border-rose-500/30 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                    <Heart className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-rose-400 uppercase tracking-widest">Step 04</span>
                    <h3 className="text-xl font-bold text-white">Get Fit</h3>
                  </div>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Achieve your fitness goals with sustainable nutrition you actually look forward to eating every single day.
                </p>
              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
}
