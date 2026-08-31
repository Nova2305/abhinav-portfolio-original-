"use client";

import { useEffect, useState } from "react";

const cards = [
  {
    title: "AI Engineering",
    description:
      "Building intelligent applications with LLMs, RAG systems, agents, and production APIs.",
    className: "bg-[#00c98b] text-white",
    pattern: "green",
  },
  {
    title: "Data Engineering",
    description:
      "Designing reliable data pipelines, streaming systems, databases, and analytics workflows.",
    className: "bg-[#f4ead7] text-zinc-900",
    pattern: "cream",
  },
  {
    title: "Cloud Infrastructure",
    description:
      "Working with AWS, Docker, Kubernetes, Linux, and cloud-native deployment systems.",
    className: "bg-[#159bd3] text-white",
    pattern: "blue",
  },
  {
    title: "MLOps",
    description:
      "Connecting machine learning models with deployment, CI/CD, monitoring, and lifecycle management.",
    className: "bg-[#50e89a] text-zinc-900",
    pattern: "mint",
  },
  {
    title: "Backend Systems",
    description:
      "Building APIs, distributed services, databases, caching systems, and scalable backends.",
    className: "bg-[#222222] text-white",
    pattern: "dark",
  },
];

export default function CardStack() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((current) => (current + 1) % cards.length);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mx-auto h-[430px] w-full max-w-[620px] md:h-[500px]">

      {cards.map((card, index) => {
        const position =
          (index - active + cards.length) % cards.length;

        const styles = getCardStyle(position);

        return (
          <div
            key={card.title}
            className={`absolute left-1/2 top-1/2 w-[260px] rounded-[20px] p-7 shadow-2xl transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] md:w-[300px] ${card.className}`}
            style={{
              transform: `
                translate(-50%, -50%)
                translate(${styles.x}px, ${styles.y}px)
                rotate(${styles.rotate}deg)
                scale(${styles.scale})
              `,
              zIndex: styles.zIndex,
              opacity: styles.opacity,
            }}
          >

            {/* Pattern */}
            <CardPattern type={card.pattern} />

            {/* Content */}
            <div className="relative mt-16">

              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] opacity-60">
                0{index + 1} — System
              </p>

              <h3 className="text-3xl font-semibold leading-[0.95] tracking-[-0.04em]">
                {card.title}
              </h3>

              <p className="mt-5 text-sm leading-6 opacity-70">
                {card.description}
              </p>

            </div>

            {/* Bottom */}
            <div className="relative mt-8 flex items-center justify-between border-t border-current/20 pt-4">

              <span className="text-[10px] uppercase tracking-[0.2em] opacity-50">
                Abhinav.dev
              </span>

              <span className="text-xl">
                ↗
              </span>

            </div>

          </div>
        );
      })}

    </div>
  );
}


/* -------------------------------- */
/* Card positioning                  */
/* -------------------------------- */

function getCardStyle(position: number) {
  switch (position) {
    case 0:
      return {
        x: 0,
        y: 0,
        rotate: 0,
        scale: 1,
        opacity: 1,
        zIndex: 50,
      };

    case 1:
      return {
        x: 115,
        y: 30,
        rotate: 7,
        scale: 0.94,
        opacity: 1,
        zIndex: 40,
      };

    case 2:
      return {
        x: -115,
        y: 35,
        rotate: -7,
        scale: 0.94,
        opacity: 1,
        zIndex: 30,
      };

    case 3:
      return {
        x: 190,
        y: 65,
        rotate: 12,
        scale: 0.88,
        opacity: 0.75,
        zIndex: 20,
      };

    case 4:
      return {
        x: -190,
        y: 65,
        rotate: -12,
        scale: 0.88,
        opacity: 0.75,
        zIndex: 10,
      };

    default:
      return {
        x: 0,
        y: 0,
        rotate: 0,
        scale: 1,
        opacity: 0,
        zIndex: 0,
      };
  }
}


/* -------------------------------- */
/* Decorative card patterns          */
/* -------------------------------- */

function CardPattern({
  type,
}: {
  type: string;
}) {
  if (type === "dark") {
    return (
      <div className="absolute left-6 right-6 top-6 h-16 rounded-lg border border-white/10">
        <div className="absolute inset-3 grid grid-cols-4 gap-2">
          <span className="rounded border border-white/10" />
          <span className="rounded border border-white/10" />
          <span className="rounded border border-white/10" />
          <span className="rounded border border-white/10" />
        </div>
      </div>
    );
  }

  return (
    <div className="absolute left-6 right-6 top-6 h-14 overflow-hidden">
      <div
        className={`h-full w-full ${
          type === "blue"
            ? "opacity-60"
            : "opacity-40"
        }`}
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, currentColor 0px, currentColor 1px, transparent 1px, transparent 5px)",
        }}
      />
    </div>
  );
}