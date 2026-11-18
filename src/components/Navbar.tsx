"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, ShoppingBag, Menu, X, Volume2, VolumeX } from "lucide-react";
import { playSoftClick, toggleMute } from "@/components/SoundEffects";

interface NavbarProps {
  onOpenMenu?: () => void;
}

export default function Navbar({ onOpenMenu }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [muted, setMuted] = useState(false);

  const handleSoundToggle = () => {
    const isNowMuted = toggleMute();
    setMuted(isNowMuted);
    if (!isNowMuted) {
      playSoftClick();
    }
  };

  const handleNavClick = (callback?: () => void) => {
    playSoftClick();
    setMobileMenuOpen(false);
    callback?.();
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/90 via-black/50 to-transparent">
      <div className="max-w-[1440px] mx-auto px-3.5 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 sm:h-24">

          {/* Official Haii Protein Brand Logo */}
          <Link
            href="/"
            onClick={() => handleNavClick()}
            className="flex items-center gap-2.5 sm:gap-3 group shrink-0"
          >
            {/* Logo Badge */}
            <div
              className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden shadow-xl border-2 border-amber-400/40 group-hover:scale-105 group-hover:border-[#00d084] transition-all"
              style={{ position: "relative" }}
            >
              <Image
                src="/images/logo.png"
                alt="Haii Protein - Your Cravings Destination"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Brand Text */}
            <div className="flex flex-col">
              <span className="text-lg sm:text-2xl font-black text-white tracking-wider uppercase font-sans leading-none flex items-center">
                HAII<span className="text-amber-400">-</span>PROTEIN
              </span>
              <span className="text-[9px] sm:text-[11px] text-amber-400 font-semibold tracking-wider uppercase mt-1">
                Your Cravings Destination
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6 lg:gap-7 text-[13px] font-medium text-white/90">
            <Link
              href="#pricing"
              onClick={() => handleNavClick()}
              className="hover:text-amber-400 transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="#menu"
              onClick={() => handleNavClick(onOpenMenu)}
              className="hover:text-amber-400 transition-colors"
            >
              Food Subscription
            </Link>
            <Link
              href="#menu"
              onClick={() => handleNavClick(onOpenMenu)}
              className="hover:text-amber-400 transition-colors"
            >
              Food Menu
            </Link>
            <Link
              href="#menu"
              onClick={() => handleNavClick(onOpenMenu)}
              className="hover:text-amber-400 transition-colors"
            >
              HaiiShop
            </Link>
            <Link
              href="#how-it-works"
              onClick={() => handleNavClick()}
              className="hover:text-amber-400 transition-colors"
            >
              Online Coaching
            </Link>
            <Link
              href="#transformations"
              onClick={() => handleNavClick()}
              className="hover:text-amber-400 transition-colors"
            >
              Transformations
            </Link>
            <Link
              href="#history"
              onClick={() => handleNavClick()}
              className="hover:text-amber-400 transition-colors"
            >
              Partner With Us
            </Link>
          </nav>

          {/* Desktop Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {/* Sound FX Toggle */}
            <button
              onClick={handleSoundToggle}
              title={muted ? "Unmute Sound FX" : "Mute Sound FX"}
              aria-label={muted ? "Unmute Sound FX" : "Mute Sound FX"}
              className="p-2 rounded-full border border-white/20 text-white/70 hover:text-white hover:border-white transition-colors cursor-pointer"
            >
              {muted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-[#00d084]" />}
            </button>

            <a
              href="tel:+918688249985"
              onClick={() => handleNavClick()}
              className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-white text-white text-xs font-medium hover:bg-white/10 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 fill-white text-white" />
              <span>Call Now</span>
            </a>

            <button
              onClick={() => handleNavClick(onOpenMenu)}
              aria-label="View Cart"
              className="p-1.5 text-white/90 hover:text-white transition-colors cursor-pointer"
            >
              <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
            </button>
          </div>

          {/* Mobile Right Actions */}
          <div className="flex xl:hidden items-center gap-1.5 sm:gap-2">
            <button
              onClick={handleSoundToggle}
              title={muted ? "Unmute Sound" : "Mute Sound"}
              aria-label={muted ? "Unmute Sound" : "Mute Sound"}
              className="p-2 text-white/80 hover:text-white active:scale-95 touch-manipulation"
            >
              {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#00d084]" />}
            </button>

            <a
              href="tel:+918688249985"
              className="flex items-center gap-1 px-2.5 py-1 rounded-full border border-white text-white text-[11px] font-semibold active:bg-white/10 touch-manipulation"
            >
              <Phone className="w-3 h-3 fill-white text-white" />
              <span>Call</span>
            </a>

            <button
              onClick={() => {
                playSoftClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="p-2 text-white active:scale-95 touch-manipulation"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-black/98 backdrop-blur-2xl border-b border-white/10 px-5 pt-3 pb-6 space-y-3.5 text-sm font-medium text-white/95 animate-in slide-in-from-top-2 duration-200">
          <Link
            href="#pricing"
            onClick={() => handleNavClick()}
            className="block py-2 px-2 rounded-lg hover:bg-white/5 active:bg-white/10"
          >
            Pricing
          </Link>
          <Link
            href="#menu"
            onClick={() => handleNavClick(onOpenMenu)}
            className="block py-2 px-2 rounded-lg text-[#00d084] font-bold hover:bg-white/5 active:bg-white/10"
          >
            Food Subscription
          </Link>
          <Link
            href="#menu"
            onClick={() => handleNavClick(onOpenMenu)}
            className="block py-2 px-2 rounded-lg hover:bg-white/5 active:bg-white/10"
          >
            Food Menu
          </Link>
          <Link
            href="#menu"
            onClick={() => handleNavClick(onOpenMenu)}
            className="block py-2 px-2 rounded-lg hover:bg-white/5 active:bg-white/10"
          >
            HaiiShop
          </Link>
          <Link
            href="#how-it-works"
            onClick={() => handleNavClick()}
            className="block py-2 px-2 rounded-lg hover:bg-white/5 active:bg-white/10"
          >
            Online Coaching
          </Link>
          <Link
            href="#transformations"
            onClick={() => handleNavClick()}
            className="block py-2 px-2 rounded-lg hover:bg-white/5 active:bg-white/10"
          >
            Transformations
          </Link>
          <Link
            href="#history"
            onClick={() => handleNavClick()}
            className="block py-2 px-2 rounded-lg hover:bg-white/5 active:bg-white/10"
          >
            Partner With Us
          </Link>

          <div className="pt-3 border-t border-white/10 flex items-center gap-3">
            <a
              href="tel:+918688249985"
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-white/30 text-white text-xs font-bold active:bg-white/10 touch-manipulation"
            >
              <Phone className="w-3.5 h-3.5 fill-white text-white" />
              <span>Call Now</span>
            </a>
            <button
              onClick={() => handleNavClick(onOpenMenu)}
              className="flex-1 py-3 rounded-xl bg-gradient-to-r from-[#0099d8] to-[#00b074] text-white text-xs font-bold uppercase tracking-wider shadow-md touch-manipulation text-center"
            >
              Order Meals →
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
