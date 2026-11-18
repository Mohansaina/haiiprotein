"use client";

import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, ArrowUpRight } from "lucide-react";
import { InstagramIcon } from "@/components/SocialIcons";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 pt-16 pb-12 border-t border-gray-200 text-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* Official Brand Logo */}
        <div className="flex flex-col items-center mb-8">
          <div
            className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden shadow-2xl border-2 border-amber-400 mb-3"
            style={{ position: "relative" }}
          >
            <Image
              src="/images/logo.png"
              alt="Haii Protein - Your Cravings Destination Logo"
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-gray-900 tracking-wider uppercase font-sans">
            HAII<span className="text-amber-500">-</span>PROTEIN
          </h3>
          <p className="text-xs text-amber-600 font-bold uppercase tracking-widest mt-1">
            Your Cravings Destination 📍 Vizianagaram
          </p>
          <p className="text-xs text-emerald-600 font-semibold mt-1">
            🚚 FREE Doorstep Delivery within 5 KM
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-sm font-semibold text-gray-700 mb-8">
          <Link href="#how-it-works" className="hover:text-emerald-600 transition-colors">
            Delivery Schedule
          </Link>
          <Link href="#menu" className="hover:text-emerald-600 transition-colors">
            Food Menu
          </Link>
          <Link href="#menu" className="hover:text-emerald-600 transition-colors">
            HaiiShop
          </Link>
          <Link href="#faqs" className="hover:text-emerald-600 transition-colors">
            FAQs
          </Link>
          <Link href="#history" className="hover:text-emerald-600 transition-colors">
            About
          </Link>
          <a href="#" className="hover:text-emerald-600 transition-colors">
            Terms
          </a>
          <a href="#" className="hover:text-emerald-600 transition-colors">
            Privacy Policy
          </a>
        </nav>

        {/* Sole Official Social Media: Instagram @haii_protein */}
        <div className="mb-8">
          <a
            href="https://www.instagram.com/haii_protein/?hl=en#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white font-bold text-xs sm:text-sm tracking-wide shadow-lg shadow-pink-500/20 hover:scale-105 active:scale-95 transition-all touch-manipulation group"
          >
            <InstagramIcon className="w-4 h-4 text-white" />
            <span>Follow Us on Instagram @haii_protein</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* FSSAI License Number */}
        <div className="flex items-center justify-center gap-2 text-xs font-semibold text-gray-600 mb-6">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>FSSAI Lic. No. 13321010000737</span>
        </div>

        {/* Copyright & Store Details */}
        <div className="text-xs text-gray-500 space-y-1.5 border-t border-gray-100 pt-6 w-full">
          <p>
            &copy; {new Date().getFullYear()} Haii Protein. Email:{" "}
            <a href="mailto:info@haiiprotein.in" className="text-gray-700 hover:underline">
              info@haiiprotein.in
            </a>{" "}
            | Phone:{" "}
            <a href="tel:+919560702568" className="text-gray-700 hover:underline">
              +91 9560702568
            </a>
          </p>
          <p>
            Business Address: Vizianagaram, Andhra Pradesh 535002
          </p>
        </div>

      </div>
    </footer>
  );
}
