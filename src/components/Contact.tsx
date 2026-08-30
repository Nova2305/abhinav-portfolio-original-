import { profile } from "../data/profile";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-b border-zinc-200 bg-[#f5f7f2] px-6 py-32 md:py-44"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -right-40 top-20 h-[400px] w-[400px] rounded-full bg-emerald-300/20 blur-3xl" />

      <div className="pointer-events-none absolute -left-40 bottom-0 h-[350px] w-[350px] rounded-full bg-violet-300/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* Section Label */}
        <p className="mb-12 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600">
          09 — Contact
        </p>

        {/* Main Heading */}
        <h2 className="max-w-6xl text-6xl font-bold leading-[0.9] tracking-[-0.05em] text-zinc-950 sm:text-7xl md:text-8xl lg:text-[9rem]">
          Let&apos;s build
          <br />

          <span className="text-emerald-500">
            something useful.
          </span>
        </h2>

        {/* Description */}
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

        {/* Contact Links */}
        <div className="mt-20 border-t border-zinc-200">

          <ContactLink
            label="Email"
            value={profile.email}
            href={`mailto:${profile.email}`}
          />

          <ContactLink
            label="GitHub"
            value="github.com/abhinav0523"
            href={profile.github}
          />

          <ContactLink
            label="LinkedIn"
            value="linkedin.com/in/abhinav-singh-thakur"
            href={profile.linkedin}
          />

        </div>

        {/* Availability */}
        <div className="mt-10 flex items-center gap-3">

          <span className="relative flex h-3 w-3">

            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />

            <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.4)]" />

          </span>

          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
            Currently open to opportunities
          </span>

        </div>

      </div>
    </section>
  );
}

function ContactLink({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="group flex flex-col gap-3 border-b border-zinc-200 py-7 transition-all duration-300 hover:bg-emerald-500/[0.03] md:flex-row md:items-center md:justify-between"
    >

      {/* Label */}
      <span className="text-sm font-semibold text-zinc-800 transition-colors duration-300 group-hover:text-emerald-600">
        {label}
      </span>

      {/* Value */}
      <div className="flex items-center gap-5">

        <span className="text-sm text-zinc-500 transition-colors duration-300 group-hover:text-zinc-800">
          {value}
        </span>

        <span className="text-lg text-zinc-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-emerald-500">
          ↗
        </span>

      </div>

    </a>
  );
}