"use client";

import { useEffect, useRef } from "react";

export default function AmbientCanvasStream() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle system
    const particleCount = Math.min(Math.floor(width / 16), 75);
    const particles: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      color: string;
      pulse: number;
    }[] = [];

    const colors = [
      "rgba(0, 208, 132, ", // Emerald Green
      "rgba(0, 180, 216, ", // Cyan Blue
      "rgba(168, 216, 58, ", // Lime Gold
      "rgba(255, 255, 255, ", // Clean White
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2.2 + 0.8,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: (Math.random() - 0.5) * 0.4 - 0.2, // gentle drift upwards
        opacity: Math.random() * 0.4 + 0.15,
        color: colors[Math.floor(Math.random() * colors.length)],
        pulse: Math.random() * Math.PI * 2,
      });
    }

    // Pointer interactivity
    let mouseX = -1000;
    let mouseY = -1000;
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Scroll acceleration
    let lastScrollY = window.scrollY;
    let scrollVelocity = 0;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      scrollVelocity = (currentScrollY - lastScrollY) * 0.1;
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Damp scroll velocity smoothly back to 0
      scrollVelocity *= 0.92;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Normal movement
        p.x += p.speedX;
        p.y += p.speedY - scrollVelocity * 0.3;

        // Mouse attraction/repulsion
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 140) {
          const force = (140 - dist) / 140;
          p.x -= (dx / dist) * force * 1.5;
          p.y -= (dy / dist) * force * 1.5;
        }

        // Pulse opacity
        p.pulse += 0.02;
        const dynamicOpacity = p.opacity + Math.sin(p.pulse) * 0.1;

        // Wrap around bounds
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Draw particle with gentle glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${Math.max(0.05, dynamicOpacity)})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color + "0.6)";
        ctx.fill();

        // Connect nearby particles with subtle neural/constellation web
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist2 = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist2 < 95) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 208, 132, ${0.08 * (1 - dist2 / 95)})`;
            ctx.lineWidth = 0.5;
            ctx.shadowBlur = 0;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10 opacity-70"
      style={{ pointerEvents: "none" }}
    />
  );
}
