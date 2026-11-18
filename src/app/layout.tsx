import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Haii Protein | Customized Diet Plans & Healthy Food Delivery",
  description:
    "Your Cravings Destination. Overnight Oats, Gourmet Sandwiches, Nutri Boxes & Detox Drinks freshly prepared in small batches and delivered to your doorstep in Vizianagaram, Andhra Pradesh.",
  keywords: [
    "Haii Protein",
    "healthy food delivery Vizianagaram",
    "customized diet plans Vizianagaram",
    "overnight oats",
    "nutri boxes",
    "detox drinks",
    "fitness meals",
    "high protein diet",
  ],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#0b0d11] text-gray-100 font-sans antialiased selection:bg-[#00d084] selection:text-black">
        {children}
      </body>
    </html>
  );
}
