function About() {
  return (
    <section className="py-12 max-w-5xl mx-auto" id="about">
      <div className="flex items-center font-bold text-3xl justify-center mb-5">
        <span className="opacity-50 text-4xl ">/</span>
        <span className="text-black">About.</span>
      </div>
      <div className="px-8">
        <p className="mb-4">
          I'm a&nbsp;
          <span className="bg-[#ffc200]"> full-stack Software Engineer </span>
          &nbsp;passionate about helping startups build their product from MVP
          to launch and beyond.
        </p>
        <p className="mb-4">
          I wasn't always a developer though. A friend who had been in the
          industry for more than 7+ years was always advising me to give it a
          shot. And after years of doing so many different things, i finally
          gave in, tried it, and boy have I never looked back.
        </p>
        <p className="mb-4">
          I was also a growth marketer within those years, which makes me more
          knowledgeable on what makes a successful product than the average
          developer. That's why&nbsp;
          <span className="bg-[#ffc200]">
            {" "}
            I prioritise building what your ideal customers would want{" "}
          </span>
          &nbsp;rather than over engineering and stretching the project longer
          than necessary.
        </p>
        <p className="mb-4">
          If you want to know more about my work experience,&nbsp;
          <span className="bg-[#ffc200]">
            {" "}
            check out my projects section where I highlight businesses I've
            helped turned their ideas to reality.{" "}
          </span>
        </p>
      </div>
    </section>
  );
}

export default About;
