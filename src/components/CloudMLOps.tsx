import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-b border-white/10 px-6 py-28 md:py-36"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-zinc-600">
              04 — Projects
            </p>
          </div>

          <div>
            <h2 className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-white md:text-7xl">
              Building
              <br />
              <span className="text-emerald-400">
                in public.
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-500 md:text-lg">
              I&apos;m currently developing systems across AI
              engineering, data engineering, cloud infrastructure,
              and MLOps.
            </p>
          </div>

        </div>

        {/* Projects in progress */}
        <Reveal>
          <div className="mt-24 border-t border-white/10">

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

        {/* Building status */}
        <Reveal>
          <div className="mt-16 border-t border-white/10 pt-8">

            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

              <div className="flex items-center gap-3">

                <span className="relative flex h-2 w-2">

                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />

                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />

                </span>

                <span className="text-xs uppercase tracking-[0.25em] text-emerald-400/70">
                  Currently building
                </span>

              </div>

              <p className="text-sm text-zinc-600 md:text-right">
                Projects will be added here as they are completed.
              </p>

            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
}

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
    <div className="group grid gap-6 border-b border-white/10 py-9 transition-colors hover:bg-emerald-400/[0.02] md:grid-cols-[80px_0.8fr_1.2fr] md:items-center">

      {/* Number */}
      <span className="font-mono text-xs text-zinc-700">
        {number}
      </span>

      {/* Title */}
      <div>
        <h3 className="text-xl font-medium tracking-tight text-white transition-colors group-hover:text-emerald-400 md:text-2xl">
          {title}
        </h3>

        <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-zinc-700">
          In progress
        </p>
      </div>

      {/* Description */}
      <div>

        <p className="max-w-xl text-sm leading-7 text-zinc-500">
          {description}
        </p>

        <p className="mt-4 text-[10px] uppercase tracking-widest text-zinc-700 transition-colors group-hover:text-zinc-400">
          {technologies}
        </p>

      </div>

    </div>
  );
}
