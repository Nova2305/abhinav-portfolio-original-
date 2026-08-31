import CardStack from "./CardStack";
import { profile } from "../data/profile";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden border-b border-zinc-200 bg-[#f5f7f2] pt-16 text-zinc-950"
    >
      {/* =========================
          BACKGROUND
      ========================== */}

      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(24,24,27,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(24,24,27,0.045) 1px, transparent 1px)",
          backgroundSize: "5rem 5rem",
        }}
      />

      {/* Emerald glow */}
      <div className="pointer-events-none absolute -left-40 top-10 h-[500px] w-[500px] rounded-full bg-emerald-300/25 blur-3xl" />

      {/* Cyan glow */}
      <div className="pointer-events-none absolute left-1/3 top-0 h-[450px] w-[450px] rounded-full bg-cyan-300/20 blur-3xl" />

      {/* Violet glow */}
      <div className="pointer-events-none absolute -right-40 top-10 h-[500px] w-[500px] rounded-full bg-violet-300/20 blur-3xl" />

      {/* =========================
          MAIN
      ========================== */}

      <div className="relative mx-auto w-full max-w-7xl px-6 py-24 md:py-32">

        {/* Top label */}
        <div className="mb-10 flex items-center gap-4">
          <span className="h-px w-12 bg-emerald-500" />

          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
            {profile.title}
          </span>
        </div>

        {/* =========================
            HERO GRID
        ========================== */}

        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-6">

          {/* =========================
              LEFT — INTRO
          ========================== */}

          <div className="relative z-10">

            {/* Availability */}
            <div className="mb-7 flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />

                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
              </span>

              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-600">
                Open to internship opportunities
              </span>
            </div>

            {/* Heading */}
            <h1 className="max-w-4xl text-[clamp(3.5rem,8vw,8rem)] font-bold leading-[0.88] tracking-[-0.07em] text-zinc-950">

              Building

              <br />

              <span className="text-zinc-500">
                AI systems
              </span>

              <br />

              for{" "}

              <span className="text-emerald-500">
                production.
              </span>

            </h1>

            {/* Description */}
            <p className="mt-10 max-w-2xl text-base leading-8 text-zinc-600 md:text-lg">
              I build AI-powered applications, scalable backend systems,
              data pipelines, and cloud infrastructure with a focus on
              reliable production engineering.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-wrap items-center gap-4">

              <a
                href="#projects"
                className="group inline-flex items-center gap-3 rounded-full bg-zinc-950 px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-500 hover:text-zinc-950 hover:shadow-emerald-500/30"
              >
                View Projects

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white/80 px-7 py-3.5 text-sm font-semibold text-zinc-700 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400 hover:bg-emerald-50 hover:text-emerald-700"
              >
                Resume

                <span className="text-zinc-400">
                  ↗
                </span>
              </a>

            </div>

            {/* Social links */}
            <div className="mt-8 flex flex-wrap gap-6 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-emerald-600"
              >
                GitHub ↗
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-emerald-600"
              >
                LinkedIn ↗
              </a>

              <a
                href={`mailto:${profile.email}`}
                className="transition-colors hover:text-emerald-600"
              >
                Email ↗
              </a>

            </div>

          </div>

          {/* =========================
              RIGHT — CARD STACK
          ========================== */}

          <div className="relative flex min-h-[480px] items-center justify-center lg:min-h-[560px]">

            {/* Background glow */}
            <div className="pointer-events-none absolute h-[420px] w-[420px] rounded-full bg-emerald-300/20 blur-3xl" />

            <div className="relative z-10 w-full">
              <CardStack />
            </div>

          </div>

        </div>

        {/* =========================
            TICKER
        ========================== */}

        <div className="mt-20 overflow-hidden border-y border-zinc-200 py-5 md:mt-24">

          <div className="ticker-track">

            {/* Set 1 */}
            <div className="flex shrink-0 items-center gap-8 pr-8 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">

              <span>AI Engineering</span>
              <span className="text-emerald-500">✦</span>

              <span>Data Engineering</span>
              <span className="text-cyan-500">✦</span>

              <span>Cloud Infrastructure</span>
              <span className="text-violet-500">✦</span>

              <span>MLOps</span>
              <span className="text-emerald-500">✦</span>

              <span>Distributed Systems</span>
              <span className="text-cyan-500">✦</span>

            </div>

            {/* Set 2 */}
            <div className="flex shrink-0 items-center gap-8 pr-8 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">

              <span>AI Engineering</span>
              <span className="text-emerald-500">✦</span>

              <span>Data Engineering</span>
              <span className="text-cyan-500">✦</span>

              <span>Cloud Infrastructure</span>
              <span className="text-violet-500">✦</span>

              <span>MLOps</span>
              <span className="text-emerald-500">✦</span>

              <span>Distributed Systems</span>
              <span className="text-cyan-500">✦</span>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}