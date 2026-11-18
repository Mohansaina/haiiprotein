"use client";

import { WhatsAppIcon } from "@/components/SocialIcons";

export default function WhatsAppFloatingButton() {
  const whatsappUrl =
    "https://wa.me/919560702568?text=" +
    encodeURIComponent(
      "Hi Haii Protein! 🥑 I want to inquire about starting a customized healthy diet plan in Vizianagaram. Can you please share today's menu and subscription details?"
    );

  return (
    <aside aria-label="Quick WhatsApp Contact" className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] active:scale-95 text-white p-3 sm:px-5 sm:py-3.5 rounded-full shadow-2xl hover:shadow-[#25D366]/40 transition-all duration-300 touch-manipulation"
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp with Haii Protein"
      >
        <div className="relative flex items-center justify-center">
          <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full animate-ping" />
        </div>
        <span className="hidden sm:inline-block font-extrabold text-xs uppercase tracking-wider text-white">
          DM to Order
        </span>
      </a>
    </aside>
  );
}
