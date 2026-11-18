"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { playSoftClick } from "@/components/SoundEffects";

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "Which areas in Vizianagaram do you deliver to?",
      a: "We deliver across all major locations in Vizianagaram including Cantonment, Mayuri Junction, Ring Road, Collectorate Road, Balaji Nagar, RTC Complex area, and nearby hubs. Morning slots arrive between 6:30 AM and 8:30 AM, and lunch slots by 12:30 PM.",
    },
    {
      q: "Are the meals cooked fresh daily or stored in cold storage?",
      a: "Every single meal is freshly prepared in small batches each morning starting at 5:00 AM. We have a strict zero-cold-storage policy — nothing is frozen or mass-prepped days in advance.",
    },
    {
      q: "Can I swap dishes or customize ingredients for my allergies/preferences?",
      a: "Yes! Once you subscribe, your dedicated nutritionist consults with you 1-on-1 on WhatsApp to note any allergies, dislikes (e.g., dairy-free, pure veg, eggless, keto), and calorie targets. Your daily meals are tailored specifically for you.",
    },
    {
      q: "What if I travel or need to pause my subscription?",
      a: "You have 100% pause flexibility. Simply send a quick WhatsApp message to your assigned nutritionist before 8:00 PM the previous evening, and we will pause your deliveries and extend your subscription days with zero penalty.",
    },
    {
      q: "How do I start and do I need to pay upfront?",
      a: "You can start by clicking 'Start Food Subscription' or DMing us directly on WhatsApp. We offer trial 7-day plans, 14-day kickstarts, and 30-day transformation subscriptions.",
    },
  ];

  const toggle = (idx: number) => {
    playSoftClick();
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-24 bg-white text-gray-900 relative border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 block mb-2">
              Got Questions?
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight uppercase font-serif">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-xl mx-auto">
              Everything you need to know about our healthy meal subscriptions in Vizianagaram.
            </p>
          </div>
        </ScrollReveal>

        {/* Accordion Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIdx === index;
            return (
              <ScrollReveal key={index} direction="up" delayMs={index * 80}>
                <div
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "border-emerald-300 bg-emerald-50/40 shadow-md"
                      : "border-gray-200 bg-white hover:border-gray-300"
                  }`}
                >
                  <button
                    onClick={() => toggle(index)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="font-bold text-base sm:text-lg text-gray-900">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-600 shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-emerald-600" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 text-sm text-gray-600 leading-relaxed border-t border-emerald-100/60 pt-4 animate-in fade-in duration-200">
                      {faq.a}
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* WhatsApp Help Prompt */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-gray-50 border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-bold text-sm text-gray-900">Have a specific dietary question?</h4>
            <p className="text-xs text-gray-600 mt-0.5">Chat directly with our head nutritionist on WhatsApp.</p>
          </div>

          <a
            href="https://wa.me/919560702568?text=Hi%20Haii%20Protein!%20I%20have%20a%20question%20about%20your%20meals%20in%20Vizianagaram."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer shrink-0"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>Ask On WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
