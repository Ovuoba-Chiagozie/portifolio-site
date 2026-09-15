import EXPERIENCE_ARRAY from "./experienceArray";

function Experience() {
  return (
    <section className="py-12 max-w-5xl mx-auto" id="experience">
      <div className="px-8">
        <div className="flex items-center flex-col mb-5">
          <h2 className="font-bold text-3xl">
            <span className="opacity-50 text-4xl ">/</span>
            <span className="text-black">Experience.</span>
          </h2>
          <p className="my-4 text-lg text-center text-black/70">
            Selected engineering record.
          </p>
        </div>

        <ul className="divide-y divide-black/10">
          {EXPERIENCE_ARRAY.map((job) => (
            <li
              key={`${job.company}-${job.years}`}
              className="py-8 first:pt-2 md:grid md:grid-cols-[140px_1fr] md:gap-8"
            >
              <p className="mb-2 md:mb-0 md:pt-1">
                <span className="px-3 py-1 inline-flex rounded-[4px] text-sm text-[#0068d1] items-center bg-[#ebf5ff]">
                  {job.years}
                </span>
              </p>
              <div>
                <h3 className="font-bold text-xl text-black">{job.company}</h3>
                <p className="text-black/60 mt-1 mb-4">{job.role}</p>
                <p className="mb-4 leading-relaxed">{job.paragraph}</p>
                <p className="text-sm flex flex-wrap gap-2">
                  {job.stack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-[#ffc200] px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className="pt-4">
          <a
            href="/assets/Ovuoba_Chiagozie_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-[#ffc200]"
          >
            Read the complete résumé
          </a>
        </div>
      </div>
    </section>
  );
}

export default Experience;
