"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Flame } from "lucide-react";
import { MENU_ITEMS, MenuItem } from "@/data/content";
import ScrollReveal from "@/components/ScrollReveal";

export default function FoodMenuSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Items", icon: "✨" },
    { id: "oats", label: "Overnight Oats", icon: "🥣" },
    { id: "sandwiches", label: "Gourmet Sandwiches", icon: "🥪" },
    { id: "nutriboxes", label: "Nutri Boxes", icon: "🥜" },
    { id: "detox", label: "Detox Drinks", icon: "🍋" },
  ];

  const filteredItems = activeCategory === "all"
    ? MENU_ITEMS
    : MENU_ITEMS.filter((item) => item.category === activeCategory);

  const createWhatsAppOrderLink = (item: MenuItem) => {
    const text = encodeURIComponent(
      `Hi Haii Protein! 🥑 I want to order/inquire about the ${item.name} (${item.calories} kcal, ${item.protein} protein) in Vizianagaram. Please share ordering details!`
    );
    return `https://wa.me/918688249985?text=${text}`;
  };

  return (
    <section id="menu" className="py-16 sm:py-24 bg-white text-gray-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Feature Split Header */}
        <ScrollReveal direction="up">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 mb-10 sm:mb-14 border-b border-gray-200 pb-8 sm:pb-12">
            <div className="max-w-2xl">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-emerald-600 mb-1.5 sm:mb-2 block">
                Food You Love
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight font-serif">
                Imagine If you could eat all this in your diet &amp; still lose weight.
              </h2>
              <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-gray-600">
                No crash diets, no boring tasteless boiled meals. Fresh overnight oats, grilled sandwiches, nutritious protein boxes and cold-pressed detox cleanses prepared daily in Vizianagaram.
              </p>
            </div>

            <div className="shrink-0 w-full sm:w-auto">
              <a
                href="#menu"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#00b4d8] to-[#00d084] text-black font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all touch-manipulation"
              >
                <span>Customize Food Menu</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Category Filter Pills (Edge-to-edge swipe on mobile) */}
        <div className="-mx-4 px-4 sm:mx-0 sm:px-0 flex items-center gap-2 overflow-x-auto pb-4 mb-8 sm:mb-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-1.5 sm:gap-2 shrink-0 touch-manipulation ${
                activeCategory === cat.id
                  ? "bg-gray-900 text-white shadow-md shadow-gray-900/20 scale-102 sm:scale-105"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200 active:bg-gray-300"
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Food Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item, index) => (
            <ScrollReveal key={item.id} direction="up" delayMs={(index % 3) * 120}>
              <div className="group bg-white rounded-2xl sm:rounded-3xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-2xl hover:border-emerald-200 hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
                {/* Image & Badges */}
                <div
                  className="relative h-48 sm:h-56 w-full overflow-hidden bg-gray-100"
                  style={{ position: "relative" }}
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  
                  {item.badge && (
                    <span className="absolute top-3 left-3 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-black/80 backdrop-blur-md text-white text-[11px] sm:text-xs font-bold tracking-wide shadow-md">
                      {item.badge}
                    </span>
                  )}

                  <div className="absolute bottom-3 right-3 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg bg-black/80 backdrop-blur-md text-emerald-400 text-[11px] sm:text-xs font-bold flex items-center gap-1 shadow-md">
                    <Flame className="w-3.5 h-3.5 text-amber-400" />
                    <span>{item.calories} kcal</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-1.5 sm:mb-2">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors leading-snug">
                        {item.name}
                      </h3>
                      <span className="text-base sm:text-lg font-black text-gray-900 shrink-0">
                        ₹{item.price}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-gray-600 line-clamp-2 leading-relaxed mb-3 sm:mb-4">
                      {item.description}
                    </p>

                    {/* Macro Pills */}
                    <div className="grid grid-cols-3 gap-1.5 sm:gap-2 py-2 sm:py-3 px-2 sm:px-3 rounded-xl sm:rounded-2xl bg-gray-50 border border-gray-100 text-center mb-3 sm:mb-4 text-xs font-bold">
                      <div>
                        <span className="text-[9px] sm:text-[10px] uppercase text-gray-400 block font-semibold">Protein</span>
                        <span className="text-emerald-700">{item.protein}</span>
                      </div>
                      <div>
                        <span className="text-[9px] sm:text-[10px] uppercase text-gray-400 block font-semibold">Carbs</span>
                        <span className="text-sky-700">{item.carbs}</span>
                      </div>
                      <div>
                        <span className="text-[9px] sm:text-[10px] uppercase text-gray-400 block font-semibold">Fats</span>
                        <span className="text-amber-700">{item.fats}</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Action */}
                  <div className="pt-2">
                    <a
                      href={createWhatsAppOrderLink(item)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 px-4 rounded-xl bg-gray-900 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider text-center transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-md active:scale-98 touch-manipulation"
                    >
                      <span>Order on WhatsApp</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
