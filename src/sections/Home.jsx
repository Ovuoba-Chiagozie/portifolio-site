import engineer from "../assets/engineer.jpg";
function Home() {
  return (
    <section className="pt-56 pb-16 md:pb-32 max-w-5xl flex-col md:flex-row flex items-center mx-auto">
      <div className="flex px-8 basis-7/12">
        <div className="">
          <h1 className="my-6 font-bold">
            <span className="text-4xl text-black"> Hey folks, I'm </span>
            <div className="mt-1 text-[#ffc200] text-4xl animate-text-appear h-auto md:inline-block">
              Chiagozie
            </div>
          </h1>
          <p className="text-lg mb-4">
            A full-stack software engineer with a history of helping startups
            build fully featured products that are reliable, scales, and easy to
            maintain.
          </p>
          <div className="flex flex-col md:flex-row">
            <a
              href="#"
              className="py-3 px-7 bg-[#eeeeee] text-center rounded-full font-bold my-3 mr-3 hover:text-[#ffc200]"
            >
              My Work
            </a>
            <a
              href="#"
              className="py-3 px-7 bg-[#474559] text-white text-center rounded-full font-bold my-3 hover:bg-[#ffc200]"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      <div className="basis-5/12 px-4 flex mt-16 md:m-0">
        <img src={engineer} alt="engineer" className="w-full" />
      </div>
    </section>
  );
}

export default Home;
