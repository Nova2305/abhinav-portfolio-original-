const education = {
  degree: "Bachelor of Technology",
  field: "Electronics and Communication Engineering",
  institution: "GKV",
  status: "3rd Year",
  period: "2024 — Present",
};

export default function Education() {
  return (
    <section
      id="education"
      className="border-b border-white/10 px-6 py-28 md:py-36"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-zinc-600">
              06 — Education
            </p>
          </div>

          <div>
            <h2 className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-white md:text-7xl">
              Academic
              <br />
              <span className="text-zinc-500">
                foundation.
              </span>
            </h2>
          </div>

        </div>

        {/* Education */}
        <div className="mt-24 border-t border-white/10">

          <div className="grid gap-8 border-b border-white/10 py-10 md:grid-cols-[80px_1fr_0.5fr] md:gap-12">

            <span className="font-mono text-xs text-zinc-700">
              01
            </span>

            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-zinc-600">
                Undergraduate
              </p>

              <h3 className="mt-4 text-2xl font-medium tracking-tight text-white md:text-3xl">
                {education.degree}
              </h3>

              <p className="mt-2 text-base text-zinc-400">
                {education.field}
              </p>

              <p className="mt-5 text-sm text-zinc-500">
                {education.institution}
              </p>
            </div>

            <div className="md:text-right">
              <p className="font-mono text-xs text-zinc-600">
                {education.period}
              </p>

              <p className="mt-3 text-xs uppercase tracking-widest text-zinc-700">
                {education.status}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}