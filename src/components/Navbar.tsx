"use client";

import { useEffect, useState } from "react";
import { profile } from "../data/profile";

const links = [
  { name: "About", href: "#about" },
  { name: "AI", href: "#ai" },
  { name: "Cloud", href: "#cloud" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Courses", href: "#courses" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visible.length > 0) {
          setActive(`#${visible[0].target.id}`);
        }
      },
      {
        rootMargin: "-20% 0px -65% 0px",
        threshold: [0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.10] bg-black/80 backdrop-blur-xl">

      <div className="mx-auto max-w-7xl px-6">

        {/* Main Bar */}
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <a
            href="#home"
            onClick={() => setOpen(false)}
            className="group text-lg font-bold tracking-tight text-white"
          >
            Abhinav
            <span className="text-zinc-400 transition-colors group-hover:text-emerald-400">
              .dev
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 xl:flex">

            {links.map((link) => {
              const isActive = active === link.href;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative rounded-md px-3 py-2 text-[13px] font-semibold tracking-wide transition-all duration-200 ${
                    isActive
                      ? "text-emerald-400"
                      : "text-zinc-300 hover:text-white"
                  }`}
                >
                  {link.name}

                  {/* Active Indicator */}
                  <span
                    className={`absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-emerald-400 transition-all duration-300 ${
                      isActive ? "w-5" : "w-0"
                    }`}
                  />
                </a>
              );
            })}

          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">

            {/* Resume */}
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-md border border-white/20 bg-white/[0.03] px-4 py-2 text-xs font-semibold text-white transition-all hover:border-emerald-400/40 hover:bg-emerald-400/10 hover:text-emerald-400 sm:block"
            >
              Resume
              <span className="ml-1 text-zinc-400">
                ↗
              </span>
            </a>

            {/* Mobile Menu */}
            <button
              type="button"
              onClick={() => setOpen(!open)}
              aria-label="Toggle navigation"
              aria-expanded={open}
              className="flex h-9 w-9 items-center justify-center rounded-md border border-white/20 text-zinc-300 transition hover:border-emerald-400/40 hover:text-emerald-400 xl:hidden"
            >
              <span className="text-sm">
                {open ? "✕" : "☰"}
              </span>
            </button>

          </div>

        </div>

        {/* Mobile Navigation */}
        <div
          className={`overflow-hidden transition-all duration-300 xl:hidden ${
            open
              ? "max-h-[600px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-white/[0.10] py-5">

            <div className="flex flex-col gap-1">

              {links.map((link) => {
                const isActive = active === link.href;

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setOpen(false)}
                   className={`relative rounded-md px-3 py-2 text-[13px] font-semibold tracking-wide transition-all duration-200 ${
                  isActive
                  ? "text-emerald-400"
                   : "text-zinc-300 hover:text-emerald-400"
                   }`}
                  >
                    {link.name}
                  </a>
                );
              })}

              {/* Mobile Resume */}
              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-3 border-t border-white/[0.10] px-3 pt-5 text-sm font-semibold text-white transition-colors hover:text-emerald-400"
              >
                View Resume ↗
              </a>

            </div>

          </div>
        </div>

      </div>
    </nav>
  );
}