import { profile } from "../data/profile";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden border-b border-zinc-200 bg-[#f5f7f2] pt-16 text-zinc-950"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      {/* Subtle Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(24,24,27,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(24,24,27,0.05) 1px, transparent 1px)",
          backgroundSize: "5rem 5rem",
        }}
      />

      {/* Emerald Glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-emerald-300/30 blur-3xl" />

      {/* Violet Glow */}
      <div className="pointer-events-none absolute -right-40 top-10 h-[500px] w-[500px] rounded-full bg-violet-300/30 blur-3xl" />

      {/* Cyan Glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-cyan-300/20 blur-3xl" />

      {/* =========================================================
          MAIN CONTAINER
      ========================================================== */}

      <div className="relative mx-auto w-full max-w-7xl px-6 py-24 md:py-32">

        {/* =====================================================
            TOP LABEL
        ====================================================== */}

        <div className="mb-10 flex items-center gap-4">

          <span className="h-px w-12 bg-emerald-500" />

          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
            {profile.title}
          </span>

        </div>

        {/* =====================================================
            HERO GRID
        ====================================================== */}

        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">

          {/* ===================================================
              LEFT CONTENT
          ==================================================== */}

          <div>

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

            {/* Main Heading */}
            <h1 className="max-w-5xl text-[clamp(3.5rem,8vw,8rem)] font-bold leading-[0.88] tracking-[-0.07em] text-zinc-950">

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

            {/* =================================================
                BUTTONS
            ================================================== */}

            <div className="mt-9 flex flex-wrap items-center gap-4">

              {/* Projects */}
              <a
                href="#projects"
                className="group inline-flex items-center gap-3 rounded-full bg-zinc-950 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-zinc-900/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-500 hover:text-zinc-950 hover:shadow-emerald-500/20"
              >
                View Projects

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              {/* Resume */}
              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white/60 px-7 py-3.5 text-sm font-semibold text-zinc-700 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-400 hover:bg-emerald-50 hover:text-emerald-700"
              >
                Resume

                <span className="text-zinc-400">
                  ↗
                </span>
              </a>

            </div>

            {/* =================================================
                SOCIAL LINKS
            ================================================== */}

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

          {/* ===================================================
              RIGHT — PROFILE PHOTO
          ==================================================== */}

          <div className="relative flex justify-center lg:justify-end">

            {/* Large Glow */}
            <div className="absolute h-[380px] w-[380px] rounded-full bg-emerald-400/20 blur-3xl md:h-[500px] md:w-[500px]" />

            {/* Decorative Circle */}
            <div className="absolute -right-4 top-4 h-20 w-20 rounded-full border border-violet-400/40 md:-right-8 md:h-28 md:w-28" />

            {/* Small Decorative Dot */}
            <div className="absolute -left-3 bottom-20 h-5 w-5 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/30 md:left-0" />

            {/* =================================================
                PHOTO WRAPPER
            ================================================== */}

            <div className="relative">

              {/* Gradient Ring */}
              <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-emerald-400 via-cyan-400 to-violet-500 opacity-80 blur-[3px]" />

              {/* White Inner Ring */}
              <div className="relative rounded-full bg-white p-2 shadow-2xl shadow-zinc-900/20">

                <div className="h-[300px] w-[300px] overflow-hidden rounded-full bg-zinc-900 sm:h-[360px] sm:w-[360px] md:h-[430px] md:w-[430px]">

                  <img
                    src="/profile.png"
                    alt="Abhinav Singh"
                    className="h-full w-full object-cover"
                  />

                </div>

              </div>

              {/* =================================================
                  AVAILABLE BADGE
              ================================================== */}

              <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-emerald-200 bg-white px-5 py-3 shadow-xl shadow-zinc-900/10">

                <span className="relative flex h-2.5 w-2.5">

                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />

                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />

                </span>

                <span className="text-xs font-semibold text-zinc-700">
                  Available for opportunities
                </span>

              </div>

              {/* =================================================
                  TECH BADGE
              ================================================== */}

              <div className="absolute -right-4 top-16 rounded-2xl border border-violet-200 bg-white/90 px-5 py-4 shadow-xl shadow-violet-500/10 backdrop-blur-md md:-right-12">

                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-zinc-400">
                  Focus
                </p>

                <p className="mt-1 text-xs font-bold text-violet-600">
                  AI · Cloud · MLOps
                </p>

              </div>

              {/* =================================================
                  LOCATION / ROLE BADGE
              ================================================== */}

              <div className="absolute -left-5 top-20 rounded-2xl border border-cyan-200 bg-white/90 px-4 py-3 shadow-xl shadow-cyan-500/10 backdrop-blur-md md:-left-12">

                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-zinc-400">
                  Building
                </p>

                <p className="mt-1 text-xs font-bold text-cyan-600">
                  AI Systems
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* =====================================================
            BOTTOM TICKER
        ====================================================== */}

        <div className="mt-28 overflow-hidden border-y border-zinc-200 py-5">

          <div className="flex min-w-max items-center gap-8 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-400">

            <span>AI Engineering</span>

            <span className="text-emerald-500">
              ✦
            </span>

            <span>Data Engineering</span>

            <span className="text-cyan-500">
              ✦
            </span>

            <span>Cloud Infrastructure</span>

            <span className="text-violet-500">
              ✦
            </span>

            <span>MLOps</span>

            <span className="text-emerald-500">
              ✦
            </span>

            <span>Distributed Systems</span>

            <span className="text-cyan-500">
              ✦
            </span>

            <span>AI Engineering</span>

          </div>

        </div>

      </div>
    </section>
  );
}
