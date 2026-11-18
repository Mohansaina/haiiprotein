"use client";

import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function OurHistory() {
  return (
    <section id="history" className="relative py-28 bg-[#090b0e] text-white overflow-hidden">
      {/* Background with mosaic reference and green overlay matching Screenshot 6 */}
      <div
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{ position: "absolute" }}
      >
        <Image
          src="/images/our-history.jpg"
          alt="Haii Protein Community Transformations Mosaic"
          fill
          className="object-cover object-center filter grayscale contrast-150"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#090b0e] via-[#090b0e]/95 to-[#00d084]/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          
          {/* Subtitle matching Screenshot 6 */}
          <span className="text-sm font-semibold tracking-wider text-[#00d084] italic block mb-2 font-serif">
            Our Story
          </span>

          {/* Heading */}
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight font-serif">
            Haii Protein is dedicated to transforming lives with healthy, craving-satisfying meals in{" "}
            <span className="text-[#00d084]">Vizianagaram</span>.
          </h2>

          {/* Body Text */}
          <p className="mt-6 text-gray-300 text-base sm:text-lg leading-relaxed font-light">
            We are determined to bring pure fitness nutrition right to your doorsteps across{" "}
            <span className="text-white font-semibold">
              Vizianagaram, Cantonment, Ring Road, Mayuri Junction, and surrounding areas
            </span>.
          </p>

          <p className="mt-4 text-emerald-400 font-medium text-base sm:text-lg">
            Imagine a diet that helps you stay lean, active, and healthy — without feeling hungry or having to compromise on your taste buds.
          </p>

          {/* Highlights */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#00d084]" />
              <span>Nutritionist Approved Menus</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#00d084]" />
              <span>Cooked Fresh Every Morning In Vizianagaram</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#00d084]" />
              <span>Organic Ingredients &amp; Cold Pressed Oils</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#00d084]" />
              <span>Doorstep Morning Delivery Across Town</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-10">
            <a
              href="#menu"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#00b4d8] to-[#00d084] text-black font-extrabold text-sm uppercase tracking-wider hover:opacity-95 shadow-lg shadow-[#00d084]/20 transition-all cursor-pointer"
            >
              <span>Explore Plans &amp; Start Today</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
