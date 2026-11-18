"use client";

import AnimatedCounter from "@/components/AnimatedCounter";
import ScrollReveal from "@/components/ScrollReveal";

export default function StatsBanner() {
  const stats = [
    {
      value: 7,
      suffix: "+",
      label: "Years in Fitness Industry",
    },
    {
      value: 1500000,
      suffix: "+",
      label: "Meals Delivered",
    },
    {
      value: 50000,
      suffix: "+",
      label: "Transformations",
    },
  ];

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#5063f0] via-[#8545dc] to-[#e84393] text-white shadow-2xl overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal direction="up">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`flex flex-col items-center justify-center ${
                  i > 0 ? "pt-6 md:pt-0" : ""
                }`}
              >
                <span className="text-4xl sm:text-6xl font-black tracking-tight drop-shadow-md">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </span>
                <span className="mt-2 text-sm sm:text-base font-semibold tracking-wide text-white/90">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
