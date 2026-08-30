import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-[#f5f7f2] px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">

        {/* Identity */}
        <div>
          <a
            href="#home"
            className="group text-sm font-bold tracking-tight text-zinc-950"
          >
            {profile.name}
            <span className="text-emerald-500 transition-colors group-hover:text-emerald-600">
              .
            </span>
          </a>

          <p className="mt-2 text-xs text-zinc-500">
            AI Engineering · Cloud · MLOps
          </p>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-zinc-500">

          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-300 hover:text-emerald-600"
          >
            GitHub ↗
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-300 hover:text-emerald-600"
          >
            LinkedIn ↗
          </a>

          <a
            href={`mailto:${profile.email}`}
            className="transition-colors duration-300 hover:text-emerald-600"
          >
            Email ↗
          </a>

        </div>

        {/* Copyright */}
        <p className="text-xs text-zinc-400">
          © {new Date().getFullYear()} {profile.name}
        </p>

      </div>
    </footer>
  );
}