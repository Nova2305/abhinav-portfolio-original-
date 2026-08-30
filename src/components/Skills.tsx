import Reveal from "./Reveal";

const skillGroups = [
  {
    number: "01",
    title: "AI / ML",
    skills:
      "Python · Machine Learning · Deep Learning · LLMs · RAG · Embeddings · AI Agents",
  },
  {
    number: "02",
    title: "Data",
    skills:
      "SQL · PostgreSQL · Pandas · NumPy · ETL · Data Pipelines · Kafka · Data Analysis",
  },
  {
    number: "03",
    title: "Backend",
    skills:
      "TypeScript · JavaScript · Node.js · FastAPI · REST APIs · Redis · Microservices",
  },
  {
    number: "04",
    title: "Cloud",
    skills:
      "AWS · Docker · Kubernetes · Linux · Git · GitHub Actions · CI/CD",
  },
  {
    number: "05",
    title: "MLOps",
    skills:
      "MLflow · Model Deployment · Model Serving · Monitoring · Experiment Tracking",
  },
  {
    number: "06",
    title: "Systems",
    skills:
      "Distributed Systems · Kafka · Caching · Databases · API Design · Scalability",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-b border-white/10 px-6 py-28 md:py-36"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-zinc-600">
              05 — Technical Stack
            </p>
          </div>

          <div>
            <h2 className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-white md:text-7xl">
              Tools for
              <br />
              <span className="text-zinc-500">
                building systems.
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-500 md:text-lg">
              A growing engineering stack across AI, data,
              backend development, cloud infrastructure, and MLOps.
            </p>
          </div>

        </div>

        {/* Skills */}
        <Reveal>
          <div className="mt-24 border-t border-white/10">

            {skillGroups.map((group) => (
              <div
                key={group.number}
                className="group grid gap-5 border-b border-white/10 py-8 transition-colors hover:bg-white/[0.02] md:grid-cols-[80px_0.7fr_1.3fr] md:items-center"
              >

                <span className="font-mono text-xs text-zinc-700">
                  {group.number}
                </span>

                <h3 className="text-xl font-medium text-white md:text-2xl">
                  {group.title}
                </h3>

                <p className="text-sm leading-7 text-zinc-500 transition-colors group-hover:text-zinc-300">
                  {group.skills}
                </p>

              </div>
            ))}

          </div>
        </Reveal>

        {/* Stack statement */}
        <Reveal>
          <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">

            <p className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-700">
              AI → Data → Backend → Cloud → MLOps
            </p>

            <p className="max-w-lg text-sm leading-6 text-zinc-600 md:text-right">
              The stack is intentionally focused on building,
              deploying, and operating production systems.
            </p>

          </div>
        </Reveal>

      </div>
    </section>
  );
}