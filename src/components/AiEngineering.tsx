import Reveal from "./Reveal";

export default function AIEngineering() {
  const capabilities = [
    {
      number: "01",
      title: "LLM Applications",
      description:
        "Building applications around large language models with structured outputs, tool calling, and production APIs.",
      tags: ["LLMs", "Prompt Engineering", "Function Calling"],
    },
    {
      number: "02",
      title: "RAG Systems",
      description:
        "Designing retrieval-augmented generation systems that connect language models with domain-specific knowledge.",
      tags: ["RAG", "Embeddings", "Vector DB"],
    },
    {
      number: "03",
      title: "Machine Learning",
      description:
        "Developing ML workflows covering data preparation, model training, evaluation, and inference.",
      tags: ["Python", "Scikit-learn", "PyTorch"],
    },
    {
      number: "04",
      title: "AI Agents",
      description:
        "Building AI workflows that connect models with tools, APIs, memory, and external data sources.",
      tags: ["Agents", "Tools", "APIs"],
    },
  ];

  return (
    <section
      id="ai"
      className="border-b border-zinc-200 bg-[#f5f7f2] px-6 py-28 md:py-36"
    >
      <div className="mx-auto max-w-7xl">

        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">

          {/* Label */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600">
              02 — AI Engineering
            </p>
          </div>

          {/* Heading */}
          <div>

            <h2 className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-zinc-950 md:text-7xl">
              Building AI
              <br />

              <span className="text-zinc-500">
                beyond the prototype.
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-600 md:text-lg">
              Focused on building reliable AI applications that connect
              models, data, APIs, and production infrastructure.
            </p>

          </div>

        </div>

        {/* =====================================================
            CAPABILITIES
        ====================================================== */}

        <Reveal>
          <div className="mt-24 border-t border-zinc-200">

            {capabilities.map((item) => (
              <div
                key={item.number}
                className="group grid gap-6 border-b border-zinc-200 py-8 transition-all duration-300 hover:bg-emerald-500/[0.03] md:grid-cols-[80px_1fr_1.2fr_40px] md:items-center"
              >

                {/* Number */}
                <span className="font-mono text-xs text-zinc-400">
                  {item.number}
                </span>

                {/* Title */}
                <h3 className="text-xl font-semibold tracking-tight text-zinc-900 transition-colors duration-300 group-hover:text-emerald-600 md:text-2xl">
                  {item.title}
                </h3>

                {/* Description + Tags */}
                <div>

                  <p className="max-w-xl text-sm leading-7 text-zinc-600 md:text-base">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-2">

                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-zinc-200 bg-white/60 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-zinc-500 transition-all duration-300 group-hover:border-emerald-200 group-hover:bg-emerald-50 group-hover:text-emerald-700"
                      >
                        {tag}
                      </span>
                    ))}

                  </div>

                </div>

                {/* Arrow */}
                <span className="hidden text-xl text-zinc-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-emerald-500 md:block">
                  →
                </span>

              </div>
            ))}

          </div>
        </Reveal>

        {/* =====================================================
            BOTTOM STATEMENT
        ====================================================== */}

        <Reveal>
          <div className="mt-16 flex flex-col gap-5 border-t border-zinc-200 pt-8 md:flex-row md:items-center md:justify-between">

            <p className="text-xs font-medium uppercase tracking-[0.25em] text-emerald-600">
              Models → Data → Applications
            </p>

            <p className="max-w-md text-sm leading-6 text-zinc-500 md:text-right">
              The goal is not simply to use AI models, but to engineer
              systems around them that are reliable and useful.
            </p>

          </div>
        </Reveal>

      </div>
    </section>
  );
}