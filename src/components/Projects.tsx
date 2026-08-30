import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-b border-zinc-200 bg-[#f5f7f2] px-6 py-28 md:py-36"
    >
      <div className="mx-auto max-w-7xl">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">

          {/* Section Label */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600">
              04 — Projects
            </p>
          </div>

          {/* Heading */}
          <div>

            <h2 className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-zinc-950 md:text-7xl">
              Building
              <br />

              <span className="text-emerald-500">
                in public.
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-600 md:text-lg">
              I&apos;m currently developing systems across AI
              engineering, data engineering, cloud infrastructure,
              and MLOps.
            </p>

          </div>

        </div>

        {/* =====================================================
            PROJECTS IN PROGRESS
        ====================================================== */}

        <Reveal>
          <div className="mt-24 border-t border-zinc-200">

            <ProjectRow
              number="01"
              title="AI Engineering"
              description="Currently exploring LLM applications, RAG systems, embeddings, AI agents, and production APIs."
              technologies="LLMs · RAG · FastAPI · Embeddings"
            />

            <ProjectRow
              number="02"
              title="Data Engineering"
              description="Currently developing skills around data pipelines, SQL, event streaming, and data processing systems."
              technologies="Python · SQL · Kafka · PostgreSQL"
            />

            <ProjectRow
              number="03"
              title="Cloud & MLOps"
              description="Currently working toward end-to-end deployment workflows covering containers, cloud infrastructure, CI/CD, and ML operations."
              technologies="Docker · AWS · Kubernetes · MLflow"
            />

          </div>
        </Reveal>

        {/* =====================================================
            BUILDING STATUS
        ====================================================== */}

        <Reveal>
          <div className="mt-16 border-t border-zinc-200 pt-8">

            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

              <div className="flex items-center gap-3">

                <span className="relative flex h-2.5 w-2.5">

                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />

                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />

                </span>

                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600">
                  Currently building
                </span>

              </div>

              <p className="text-sm text-zinc-500 md:text-right">
                Projects will be added here as they are completed.
              </p>

            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
}

/* =============================================================
   PROJECT ROW
============================================================= */

function ProjectRow({
  number,
  title,
  description,
  technologies,
}: {
  number: string;
  title: string;
  description: string;
  technologies: string;
}) {
  return (
    <div className="group grid gap-6 border-b border-zinc-200 py-9 transition-all duration-300 hover:bg-emerald-500/[0.03] md:grid-cols-[80px_0.8fr_1.2fr] md:items-center">

      {/* Number */}
      <span className="font-mono text-xs text-zinc-400">
        {number}
      </span>

      {/* Title */}
      <div>

        <h3 className="text-xl font-semibold tracking-tight text-zinc-900 transition-colors duration-300 group-hover:text-emerald-600 md:text-2xl">
          {title}
        </h3>

        <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-400">
          In progress
        </p>

      </div>

      {/* Description */}
      <div>

        <p className="max-w-xl text-sm leading-7 text-zinc-600 md:text-base">
          {description}
        </p>

        <p className="mt-4 text-[10px] font-medium uppercase tracking-widest text-zinc-400 transition-colors duration-300 group-hover:text-emerald-600">
          {technologies}
        </p>

      </div>

    </div>
  );
}