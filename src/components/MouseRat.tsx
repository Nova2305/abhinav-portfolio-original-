"use client";

import { useEffect, useRef } from "react";

type Footstep = {
  id: number;
  x: number;
  y: number;
  rotation: number;
  side: "left" | "right";
};

export default function MouseRat() {
  const ratRef = useRef<HTMLDivElement>(null);
  const footstepsRef = useRef<Footstep[]>([]);
  const nextIdRef = useRef(0);

  useEffect(() => {
    const rat = ratRef.current;

    if (!rat) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let ratX = mouseX;
    let ratY = mouseY;

    let lastStepX = ratX;
    let lastStepY = ratY;

    let animationFrame: number;

    const STEP_DISTANCE = 38;
    const FOLLOW_SPEED =  0.025;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    const addFootstep = () => {
      const dx = ratX - lastStepX;
      const dy = ratY - lastStepY;

      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < STEP_DISTANCE) {
        return;
      }

      const angle =
        Math.atan2(mouseY - ratY, mouseX - ratX) * (180 / Math.PI);

      const radians = (angle * Math.PI) / 180;

      // Small sideways offset for left/right paws
      const sideOffset =
        footstepsRef.current.length % 2 === 0 ? -5 : 5;

      const stepX = ratX - Math.sin(radians) * sideOffset;
      const stepY = ratY + Math.cos(radians) * sideOffset;

      const newStep: Footstep = {
        id: nextIdRef.current++,
        x: stepX,
        y: stepY,
        rotation: angle,
        side:
          footstepsRef.current.length % 2 === 0
            ? "left"
            : "right",
      };

      footstepsRef.current.push(newStep);

      // Keep only the latest 12 footsteps
      if (footstepsRef.current.length > 12) {
        footstepsRef.current.shift();
      }

      lastStepX = ratX;
      lastStepY = ratY;

      renderFootsteps();
    };

    const renderFootsteps = () => {
      const container = document.querySelector(
        "[data-rat-footsteps]"
      );

      if (!container) return;

      container.innerHTML = "";

      footstepsRef.current.forEach((step, index) => {
        const footprint = document.createElement("div");

        footprint.className =
          "absolute pointer-events-none text-zinc-400/30";

        footprint.style.left = `${step.x}px`;
        footprint.style.top = `${step.y}px`;

        footprint.style.transform = `
          translate(-50%, -50%)
          rotate(${step.rotation + 90}deg)
        `;

        footprint.style.opacity = `${Math.max(
          0.08,
          index / footstepsRef.current.length
        )}`;

        footprint.innerHTML = `
          <div class="relative h-3 w-4">
            <span class="absolute left-1 top-1 h-1.5 w-1.5 rounded-full bg-zinc-500"></span>
            <span class="absolute left-3 top-0 h-1.5 w-1.5 rounded-full bg-zinc-500"></span>
            <span class="absolute left-0 top-3 h-1.5 w-1.5 rounded-full bg-zinc-500"></span>
            <span class="absolute left-2 top-2 h-2 w-2 rounded-full bg-zinc-500"></span>
          </div>
        `;

        container.appendChild(footprint);
      });
    };

    const animate = () => {
      // Slow mouse following
      ratX += (mouseX - ratX) * FOLLOW_SPEED;
      ratY += (mouseY - ratY) * FOLLOW_SPEED;

      const dx = mouseX - ratX;
      const dy = mouseY - ratY;

      const angle =
        Math.atan2(dy, dx) * (180 / Math.PI);

      rat.style.transform = `
        translate3d(
          ${ratX - 30}px,
          ${ratY - 22}px,
          0
        )
        rotate(${angle}deg)
      `;

      addFootstep();

      animationFrame = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);

    animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <>
      {/* Footsteps */}
      <div
        data-rat-footsteps
        className="pointer-events-none fixed inset-0 z-[9997]"
      />

      {/* Rat */}
      <div
        ref={ratRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
      >
        <div className="relative h-11 w-16">

          {/* Tail */}
          <div className="absolute left-0 top-7 h-6 w-8 rounded-bl-full border-b-2 border-l-2 border-zinc-500" />

          {/* Body */}
          <div className="absolute left-3 top-2 h-7 w-10 rounded-full bg-zinc-800 shadow-sm" />

          {/* Back highlight */}
          <div className="absolute left-5 top-3 h-2 w-5 rounded-full bg-zinc-700" />

          {/* Head */}
          <div className="absolute right-0 top-1 h-8 w-8 rounded-full bg-zinc-800">

            {/* Ear */}
            <span className="absolute -right-1 -top-2 h-4 w-4 rounded-full bg-zinc-700" />

            {/* Inner ear */}
            <span className="absolute -right-0.5 -top-1 h-2 w-2 rounded-full bg-pink-300/70" />

            {/* Eye */}
            <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_5px_rgba(16,185,129,0.8)]" />

            {/* Nose */}
            <span className="absolute -right-1 top-3.5 h-1.5 w-1.5 rounded-full bg-pink-400" />

            {/* Whiskers */}
            <span className="absolute -right-4 top-3 h-px w-4 rotate-6 bg-zinc-400/40" />

            <span className="absolute -right-4 top-5 h-px w-4 -rotate-6 bg-zinc-400/40" />

          </div>

          {/* Back foot */}
          <span className="absolute bottom-0 left-5 h-1.5 w-3 rounded-full bg-zinc-700" />

          {/* Front foot */}
          <span className="absolute bottom-0 left-11 h-1.5 w-3 rounded-full bg-zinc-700" />

        </div>
      </div>
    </>
  );
}