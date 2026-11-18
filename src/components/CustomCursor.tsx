"use client";

import { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [hoverText, setHoverText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const requestRef = useRef<number>(0);

  useEffect(() => {
    // Check if device has fine pointer (mouse), not touch
    if (!window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setIsVisible(true);
      setPosition({ x: e.clientX, y: e.clientY });

      // Check what element is under the cursor
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const clickable = target.closest("button, a, input, [role='button']");
      if (clickable) {
        setIsHovered(true);
        if (clickable.tagName === "BUTTON" || clickable.closest("button")) {
          setHoverText("");
        } else if (clickable.closest("#menu")) {
          setHoverText("");
        }
      } else {
        setIsHovered(false);
        setHoverText("");
      }
    };

    const onMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);

    // Smooth trailing animation loop
    const animateTrailing = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.15,
        y: prev.y + (position.y - prev.y) * 0.15,
      }));
      requestRef.current = requestAnimationFrame(animateTrailing);
    };

    requestRef.current = requestAnimationFrame(animateTrailing);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      cancelAnimationFrame(requestRef.current);
    };
  }, [position.x, position.y]);

  if (!isVisible) return null;

  return (
    <>
      {/* Precision Inner Dot */}
      <div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-[#00d084] rounded-full pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 shadow-sm shadow-[#00d084]/80 transition-transform duration-75"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${isHovered ? 0.5 : 1})`,
        }}
      />

      {/* Smooth Trailing Glow Aura */}
      <div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 transition-[width,height,border-color,background-color] duration-300 ease-out flex items-center justify-center font-mono font-bold text-[9px] uppercase tracking-widest text-[#00d084]"
        style={{
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0)`,
          width: isHovered ? "48px" : "28px",
          height: isHovered ? "48px" : "28px",
          border: isHovered ? "1.5px solid rgba(0, 208, 132, 0.8)" : "1px solid rgba(0, 208, 132, 0.3)",
          backgroundColor: isHovered ? "rgba(0, 208, 132, 0.08)" : "transparent",
          backdropFilter: isHovered ? "blur(1px)" : "none",
        }}
      >
        {hoverText}
      </div>
    </>
  );
}
