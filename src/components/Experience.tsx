const experiences = [
  {
    number: "01",
    role: "AI / Software Engineering",
    company: "Open to Internship Opportunities",
    period: "2026",
    description:
      "Currently focused on building production-oriented AI applications, backend systems, data pipelines, and cloud infrastructure.",
    technologies: [
      "AI Engineering",
      "Python",
      "Backend",
      "Cloud",
      "MLOps",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-b border-white/10 px-6 py-28 md:py-36"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-zinc-600">
              05 — Experience
            </p>
          </div>

          <div>
            <h2 className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-white md:text-7xl">
              Engineering
              <br />
              <span className="text-zinc-500">
                through practice.
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-500 md:text-lg">
              A focus on practical engineering experience across AI,
              backend systems, data, cloud infrastructure, and MLOps.
            </p>
          </div>

        </div>

        {/* Experience List */}
        <div className="mt-24 border-t border-white/10">

          {experiences.map((experience) => (
            <ExperienceItem
              key={experience.number}
              experience={experience}
            />
          ))}

        </div>

        {/* Current Focus */}
        <div className="mt-16 border-t border-white/10 pt-8">

          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

            <p className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-zinc-600">
              <span className="h-2 w-2 rounded-full bg-zinc-500" />
              Currently building
            </p>

            <p className="max-w-xl text-sm leading-7 text-zinc-600 md:text-right">
              AI applications, scalable backend services, data
              pipelines, and cloud-native infrastructure.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

function ExperienceItem({
  experience,
}: {
  experience: (typeof experiences)[number];
}) {
  return (
    <article className="group grid gap-8 border-b border-white/10 py-10 md:grid-cols-[80px_1fr_0.8fr] md:gap-12">

      {/* Number */}
      <span className="font-mono text-xs text-zinc-700">
        {experience.number}
      </span>

      {/* Main */}
      <div>

        <div className="flex flex-wrap items-center gap-3">
          <h3 className="text-2xl font-medium tracking-tight text-white md:text-3xl">
            {experience.role}
          </h3>

          <span className="text-zinc-700">·</span>

          <span className="text-sm text-zinc-500">
            {experience.company}
          </span>
        </div>

        <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-500 md:text-base">
          {experience.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {experience.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-wider text-zinc-600 transition-colors group-hover:text-zinc-400"
            >
              {technology}
            </span>
          ))}
        </div>

      </div>

      {/* Period */}
      <div className="md:text-right">
        <span className="font-mono text-xs text-zinc-700">
          {experience.period}
        </span>
      </div>

    </article>
  );
}