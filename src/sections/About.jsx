function About() {
  return (
    <section className="py-12 max-w-5xl mx-auto" id="about">
      <div className="flex items-center font-bold text-3xl justify-center mb-5">
        <span className="opacity-50 text-4xl ">/</span>
        <span className="text-black">About.</span>
      </div>
      <div className="px-8">
        <p className="mb-4">
          I'm a full-stack Software Engineer with&nbsp;
          <span className="bg-[#ffc200]">4+ years of experience</span>
          &nbsp;helping startups build their product from MVP to launch and
          beyond.
        </p>
        <p className="mb-4">
          I wasn't always a developer though. A friend who'd been in the
          industry for a decade kept advising me to give it a shot. After years
          of doing so many different things, I finally gave in, tried it, and
          boy have I never looked back.
        </p>
        <p className="mb-4">
          I was also a growth marketer within those years, which makes me more
          knowledgeable on what makes a successful product than the average
          developer. That's why&nbsp;
          <span className="bg-[#ffc200]">
            I prioritise building what your ideal customers would want
          </span>
          &nbsp;rather than over engineering and stretching the project longer
          than necessary. These days that looks like shipping real products end
          to end. I built Rendria, an API-first design automation tool that lets
          teams generate marketing visuals at scale from a single template, and
          I've also worked across SaaS, streaming, and fintech on product
          features, APIs, payments, and the infrastructure behind them.
        </p>
        <p className="mb-4">
          If you want to know more about my work,&nbsp;
          <span className="bg-[#ffc200]">
            check out my experience and projects sections where I go deeper on
            the teams and products I've worked with.
          </span>
        </p>
      </div>
    </section>
  );
}

export default About;
