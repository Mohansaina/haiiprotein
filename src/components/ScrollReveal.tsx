"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  delayMs?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
}

export default function ScrollReveal({
  children,
  delayMs = 0,
  className = "",
  direction = "up",
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    const current = elementRef.current;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  const getTransform = () => {
    if (isVisible) return "translate3d(0, 0, 0)";
    switch (direction) {
      case "up":
        return "translate3d(0, 40px, 0)";
      case "down":
        return "translate3d(0, -40px, 0)";
      case "left":
        return "translate3d(40px, 0, 0)";
      case "right":
        return "translate3d(-40px, 0, 0)";
    }
  };

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1) ${delayMs}ms, transform 0.85s cubic-bezier(0.16, 1, 0.3, 1) ${delayMs}ms`,
        willChange: "transform, opacity",
      }}
    >
      {children}
    </div>
  );
}
