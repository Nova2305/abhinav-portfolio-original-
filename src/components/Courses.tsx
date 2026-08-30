const courses = [
  {
    number: "01",
    title: "Machine Learning",
    provider: "Online Coursework",
    focus: "Supervised Learning · Model Evaluation · Feature Engineering",
  },
  {
    number: "02",
    title: "Generative AI",
    provider: "Online Coursework",
    focus: "LLMs · RAG · Embeddings · AI Applications",
  },
  {
    number: "03",
    title: "Data Engineering",
    provider: "Online Coursework",
    focus: "SQL · ETL · Data Pipelines · Kafka",
  },
  {
    number: "04",
    title: "Cloud & DevOps",
    provider: "Online Coursework",
    focus: "AWS · Docker · Kubernetes · CI/CD",
  },
  {
    number: "05",
    title: "MLOps",
    provider: "Online Coursework",
    focus: "MLflow · Deployment · Monitoring · Model Lifecycle",
  },
];

export default function Courses() {
  return (
    <section
      id="courses"
      className="border-b border-white/10 px-6 py-28 md:py-36"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-zinc-600">
              07 — Courses
            </p>
          </div>

          <div>
            <h2 className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-white md:text-7xl">
              Continuous
              <br />
              <span className="text-zinc-500">
                learning.
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-500 md:text-lg">
              Focused coursework supporting my work across AI,
              data engineering, cloud infrastructure, and MLOps.
            </p>
          </div>

        </div>

        {/* Course List */}
        <div className="mt-24 border-t border-white/10">

          {courses.map((course) => (
            <div
              key={course.number}
              className="group grid gap-5 border-b border-white/10 py-7 transition-colors hover:bg-white/[0.02] md:grid-cols-[80px_1fr_1fr] md:items-center"
            >

              <span className="font-mono text-xs text-zinc-700">
                {course.number}
              </span>

              <div>
                <h3 className="text-lg font-medium text-white md:text-xl">
                  {course.title}
                </h3>

                <p className="mt-1 text-xs uppercase tracking-widest text-zinc-700">
                  {course.provider}
                </p>
              </div>

              <p className="text-sm leading-6 text-zinc-600 md:text-right">
                {course.focus}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
