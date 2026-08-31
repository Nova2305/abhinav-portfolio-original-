import { profile } from "../data/profile";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-b border-zinc-200 bg-[#f5f7f2] px-6 py-32 md:py-44"
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute -right-40 top-10 h-[500px] w-[500px] rounded-full bg-emerald-300/25 blur-3xl" />

      <div className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-cyan-300/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* Section label */}
        <p className="mb-12 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600">
          09 — Contact
        </p>

        {/* Heading */}
        <h2 className="max-w-6xl text-6xl font-bold leading-[0.9] tracking-[-0.06em] text-zinc-950 sm:text-7xl md:text-8xl lg:text-[9rem]">
          Let&apos;s build
          <br />

          <span className="text-emerald-500">
            something useful.
          </span>
        </h2>

        {/* Intro */}
        <div className="mt-12 grid gap-10 md:grid-cols-[1fr_0.7fr] md:items-end">

          <p className="max-w-2xl text-base leading-8 text-zinc-600 md:text-lg">
            I&apos;m open to internship opportunities, software
            engineering roles, AI engineering projects, and
            collaborations around AI, cloud, data, and MLOps.
          </p>

          <div className="md:text-right">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-400">
              Available for
            </p>

            <p className="text-sm font-medium text-zinc-700">
              AI Engineering · Cloud · Data · MLOps
            </p>
          </div>

        </div>

        {/* =====================================================
            CONTACT CARD
        ====================================================== */}

        <div className="relative mt-20 overflow-hidden rounded-[2rem] border border-zinc-200 bg-zinc-950 p-6 shadow-2xl shadow-zinc-900/10 md:p-10">

          {/* Card glow */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-[400px] w-[400px] rounded-full bg-emerald-400/20 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-40 -left-20 h-[300px] w-[300px] rounded-full bg-cyan-400/10 blur-3xl" />

          {/* Decorative grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
              backgroundSize: "4rem 4rem",
            }}
          />

          <div className="relative">

            {/* Top */}
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">

              {/* Identity */}
              <div>

                <div className="mb-5 flex items-center gap-3">

                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />

                    <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
                  </span>

                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
                    Open to opportunities
                  </span>

                </div>

                <h3 className="text-4xl font-bold tracking-[-0.04em] text-white md:text-6xl">
                  {profile.name}
                </h3>

                <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-400 md:text-base">
                  AI Engineering · Data Engineering · Cloud Infrastructure ·
                  MLOps
                </p>

              </div>

              {/* Number */}
              <span className="font-mono text-xs tracking-widest text-zinc-600">
                09 / CONTACT
              </span>

            </div>

            {/* Divider */}
            <div className="my-10 h-px bg-white/10" />

            {/* Contact information */}
            <div className="grid gap-6 md:grid-cols-3">

              {/* Email */}
              <a
                href={`mailto:${profile.email}`}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/40 hover:bg-emerald-400/[0.05]"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-600">
                  Email
                </p>

                <p className="mt-4 break-all text-sm font-medium text-zinc-300 transition-colors group-hover:text-emerald-400">
                  {profile.email}
                </p>

                <span className="mt-5 block text-lg text-zinc-700 transition-all group-hover:translate-x-1 group-hover:text-emerald-400">
                  ↗
                </span>
              </a>

              {/* GitHub */}
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/[0.05]"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-600">
                  GitHub
                </p>

                <p className="mt-4 text-sm font-medium text-zinc-300 transition-colors group-hover:text-cyan-400">
                  Nova2305
                </p>

                <span className="mt-5 block text-lg text-zinc-700 transition-all group-hover:translate-x-1 group-hover:text-cyan-400">
                  ↗
                </span>
              </a>

              {/* LinkedIn */}
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:bg-violet-400/[0.05]"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-600">
                  LinkedIn
                </p>

                <p className="mt-4 text-sm font-medium text-zinc-300 transition-colors group-hover:text-violet-400">
                  Abhinav Singh
                </p>

                <span className="mt-5 block text-lg text-zinc-700 transition-all group-hover:translate-x-1 group-hover:text-violet-400">
                  ↗
                </span>
              </a>

            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-col gap-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:flex-row md:items-center md:justify-between md:p-8">

              <div>
                <p className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
                  Have an idea?
                </p>

                <p className="mt-2 text-sm text-zinc-500">
                  Let&apos;s turn it into something useful.
                </p>
              </div>

              <a
                href={`mailto:${profile.email}`}
                className="group inline-flex w-fit items-center gap-4 rounded-full bg-emerald-400 px-7 py-4 text-sm font-semibold text-zinc-950 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-300 hover:shadow-lg hover:shadow-emerald-400/20"
              >
                Let&apos;s talk

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

            </div>

          </div>
        </div>

        {/* Bottom availability */}
        <div className="mt-10 flex items-center gap-3">

          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />

            <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
          </span>

          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
            Currently open to opportunities
          </span>

        </div>

      </div>
    </section>
  );
}

