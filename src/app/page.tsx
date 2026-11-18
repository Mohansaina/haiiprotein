"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeBanner from "@/components/MarqueeBanner";
import InteractiveMacroVisualizer from "@/components/InteractiveMacroVisualizer";
import DayInTheLifeTimeline from "@/components/DayInTheLifeTimeline";
import HowItWorks from "@/components/HowItWorks";
import FoodMenuSection from "@/components/FoodMenuSection";
import ParadoxOfChoice from "@/components/ParadoxOfChoice";
import TransformationsSection from "@/components/TransformationsSection";
import OurHistory from "@/components/OurHistory";
import FAQSection from "@/components/FAQSection";
import ReadyToChange from "@/components/ReadyToChange";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import AmbientCanvasStream from "@/components/AmbientCanvasStream";
import ScrollProgressIndicator from "@/components/ScrollProgressIndicator";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  const scrollToMenu = () => {
    const el = document.getElementById("menu");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-[#07090c] text-white selection:bg-[#00d084] selection:text-black overflow-x-hidden relative">
      {/* Luxury Fluid Trailing Glow Cursor (Desktop) */}
      <CustomCursor />

      {/* 60fps Ambient Organic Particle Stream in Background */}
      <AmbientCanvasStream />

      {/* Top Scroll Progress Line + Fixed Right Section Pagination Navigator */}
      <ScrollProgressIndicator />

      {/* Top Header with Official Logo & Sound FX */}
      <Navbar onOpenMenu={scrollToMenu} />

      {/* Hero Section */}
      <div id="hero">
        <HeroSection onStartSubscription={scrollToMenu} />
      </div>

      {/* Continuous Infinite Marquee Ribbon with Free 5km Delivery */}
      <MarqueeBanner />

      {/* Interactive Dial-In Macro Console */}
      <InteractiveMacroVisualizer />

      {/* #HOWITWORKS with Staggered Scroll Animations */}
      <HowItWorks />

      {/* "Food You Love" Menu Showcase with Card Transitions */}
      <FoodMenuSection />

      {/* Interactive "A Day of Clean Fueling" Timeline */}
      <DayInTheLifeTimeline />

      {/* "The Paradox of Choice" */}
      <ParadoxOfChoice />

      {/* #TRANSFORMATIONS with 3D Tilt Cards */}
      <TransformationsSection />

      {/* "Our Story" in Vizianagaram */}
      <OurHistory />

      {/* Interactive FAQ Accordion */}
      <FAQSection />

      {/* "Ready To Change The Way You Diet?" */}
      <ReadyToChange onStartSubscription={scrollToMenu} />

      {/* Clean White Footer with Official Logo */}
      <Footer />

      {/* Floating WhatsApp Quick Order Button */}
      <WhatsAppFloatingButton />
    </main>
  );
}
