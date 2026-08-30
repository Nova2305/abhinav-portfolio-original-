import Reveal from "./Reveal";

export default function About() {
  const focusAreas = [
    {
      number: "01",
      title: "AI Engineering",
      description:
        "LLMs, RAG systems, machine learning, embeddings, and AI-powered applications.",
    },
    {
      number: "02",
      title: "Data Engineering",
      description:
        "SQL, data pipelines, ETL workflows, streaming systems, and analytics.",
    },
    {
      number: "03",
      title: "Cloud & DevOps",
      description:
        "AWS, Docker, Kubernetes, Linux, CI/CD, and cloud-native infrastructure.",
    },
    {
      number: "04",
      title: "MLOps & Systems",
      description:
        "Model deployment, MLflow, monitoring, backend APIs, Redis, Kafka, and distributed systems.",
    },
  ];

  return (
    <section
      id="about"
      className="border-b border-white/10 px-6 py-28 md:py-36"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-zinc-600">
              01 — About
            </p>
          </div>

          <div>
            <h2 className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-white md:text-7xl">
              Engineering AI systems
              <br />
              <span className="text-zinc-500">
                from idea to production.
              </span>
            </h2>

            <p className="mt-10 max-w-2xl text-base leading-8 text-zinc-500 md:text-lg">
              I&apos;m Abhinav Singh, a third-year Electronics and
              Communication Engineering student focused on AI
              engineering, data, cloud infrastructure, and
              production machine learning systems.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-600 md:text-lg">
              My goal is to understand the complete engineering
              lifecycle — from models and data to backend services,
              infrastructure, deployment, and operations.
            </p>
          </div>

        </div>

        {/* Focus Areas */}
        <Reveal>
          <div className="mt-24 border-t border-white/10">

            {focusAreas.map((area) => (
              <div
                key={area.number}
                className="group grid gap-5 border-b border-white/10 py-8 transition-colors hover:bg-white/[0.02] md:grid-cols-[80px_1fr_1.2fr_40px] md:items-center"
              >

                <span className="font-mono text-xs text-zinc-700">
                  {area.number}
                </span>

                <h3 className="text-xl font-medium tracking-tight text-white md:text-2xl">
                  {area.title}
                </h3>

                <p className="max-w-xl text-sm leading-7 text-zinc-500">
                  {area.description}
                </p>

                <span className="hidden text-xl text-zinc-800 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white md:block">
                  →
                </span>

              </div>
            ))}

          </div>
        </Reveal>

      </div>
    </section>
  );
}