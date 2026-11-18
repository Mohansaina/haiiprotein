"use client";

import { useState } from "react";
import { Heart, MessageCircle, Send, Bookmark, CheckCircle, Play } from "lucide-react";
import { TRANSFORMATIONS } from "@/data/content";
import ScrollReveal from "@/components/ScrollReveal";
import TiltCard from "@/components/TiltCard";

export default function TransformationsSection() {
  const [likesState, setLikesState] = useState<{ [key: string]: { count: number; liked: boolean } }>({
    "trans-1": { count: 842, liked: false },
    "trans-2": { count: 1290, liked: true },
    "trans-3": { count: 915, liked: false },
  });

  const toggleLike = (id: string) => {
    setLikesState((prev) => {
      const current = prev[id] || { count: 800, liked: false };
      return {
        ...prev,
        [id]: {
          count: current.liked ? current.count - 1 : current.count + 1,
          liked: !current.liked,
        },
      };
    });
  };

  return (
    <section id="transformations" className="py-24 bg-white text-gray-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <div className="inline-block relative">
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-gray-900 uppercase font-serif">
                #TRANSFORMATIONS
              </h2>
              {/* Mint green highlight underline */}
              <div className="h-2 w-full bg-[#a7f3d0] rounded-full mt-2" />
            </div>

            <p className="mt-4 text-xs sm:text-sm font-bold uppercase tracking-widest text-emerald-700">
              SUCCESS WITH HAII PROTEIN • REAL CLIENT TRANSFORMATIONS
            </p>
            <p className="mt-2 text-gray-600 max-w-xl mx-auto text-sm sm:text-base">
              Real results in Vizianagaram. No starve diets or boring boiled greens.
            </p>
          </div>
        </ScrollReveal>

        {/* Visual Instagram Transformation Cards Grid with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TRANSFORMATIONS.map((item, index) => {
            const likeInfo = likesState[item.id] || { count: item.likes, liked: false };

            return (
              <ScrollReveal key={item.id} direction="up" delayMs={index * 150}>
                <TiltCard maxTilt={6}>
                  <div className="bg-white rounded-3xl border border-gray-200 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between h-full">
                    {/* Instagram Header */}
                    <div className="p-4 flex items-center justify-between border-b border-gray-100">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 p-[2px]">
                          <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-[10px] font-black text-white">
                            HP
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center gap-1">
                            <span className="font-bold text-xs sm:text-sm text-gray-900">haii_protein</span>
                            <CheckCircle className="w-3.5 h-3.5 text-sky-500 fill-sky-500" />
                          </div>
                          <span className="text-[10px] text-gray-500">{item.city}</span>
                        </div>
                      </div>

                      <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                        {item.duration}
                      </span>
                    </div>

                    {/* Card Main Body */}
                    <div className="relative p-6 bg-gradient-to-b from-gray-50 to-white flex-1 flex flex-col items-center justify-center text-center">
                      
                      {/* Transformation Highlight Banner */}
                      <div className="mb-4">
                        <span className="text-[11px] font-extrabold uppercase tracking-widest text-indigo-700 block">
                          SUCCESS WITH HAII PROTEIN
                        </span>
                        <span className="text-xl sm:text-2xl font-black text-emerald-600">
                          {item.weightLoss}
                        </span>
                      </div>

                      {/* Visual Center Indicator / Play Icon */}
                      <div className="relative w-24 h-24 rounded-full p-1 bg-gradient-to-tr from-emerald-500 to-teal-400 shadow-lg mb-5 flex items-center justify-center group cursor-pointer hover:scale-110 transition-transform">
                        <div className="w-full h-full rounded-full bg-slate-900 flex flex-col items-center justify-center text-white p-2">
                          <Play className="w-7 h-7 text-emerald-400 fill-emerald-400 ml-1" />
                          <span className="text-[8px] uppercase font-bold text-gray-300 mt-0.5">Story</span>
                        </div>
                      </div>

                      {/* Customer Review Quote in purple card matching screenshot */}
                      <div className="relative bg-[#3b2063] text-white p-4 rounded-2xl shadow-inner text-xs sm:text-sm font-medium leading-relaxed italic">
                        <p>“{item.quote}”</p>
                        <div className="mt-2 text-[10px] text-emerald-300 font-bold uppercase tracking-wider not-italic">
                          — {item.name} ({item.dietFocus})
                        </div>
                      </div>
                    </div>

                    {/* Instagram Action Bar */}
                    <div className="p-4 border-t border-gray-100 bg-white">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <button
                            onClick={() => toggleLike(item.id)}
                            className="flex items-center gap-1.5 text-gray-600 hover:text-rose-500 transition-colors cursor-pointer"
                          >
                            <Heart
                              className={`w-5 h-5 ${
                                likeInfo.liked ? "text-rose-500 fill-rose-500" : ""
                              }`}
                            />
                            <span className="text-xs font-bold">{likeInfo.count}</span>
                          </button>

                          <button className="text-gray-600 hover:text-gray-900 transition-colors">
                            <MessageCircle className="w-5 h-5" />
                          </button>

                          <button className="text-gray-600 hover:text-gray-900 transition-colors">
                            <Send className="w-5 h-5" />
                          </button>
                        </div>

                        <button className="text-gray-600 hover:text-gray-900 transition-colors">
                          <Bookmark className="w-5 h-5" />
                        </button>
                      </div>
                    </div>

                  </div>
                </TiltCard>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom Instagram Link Prompt */}
        <ScrollReveal direction="up" delayMs={200}>
          <div className="mt-12 text-center">
            <a
              href="https://www.instagram.com/haii_protein/?hl=en#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-emerald-700 hover:text-emerald-800 underline underline-offset-4"
            >
              <span>See more transformation stories on our Instagram @haii_protein</span>
            </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
