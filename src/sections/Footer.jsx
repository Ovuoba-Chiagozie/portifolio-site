import { FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";

function Footer() {

  const Year = new Date().getFullYear()

  return (
    <section className="py-12 bg-black">
      <div className="max-w-5xl mx-auto text-white px-8">
        <div className="flex flex-col pb-14 lg:flex-row justify-between">
          <div className="mb-11 lg:max-w-[50%]">
            <h2 className="text-lg font-bold uppercase">Ovuoba Chiagozie</h2>
            <p className="mt-4 text-sm">
              A full-stack software engineer with a history of helping startups
              build fully featured products that are reliable, scales, and easy
              to maintain.
            </p>
          </div>
          <div className="">
            <h1 className="text-lg font-bold uppercase">Social</h1>
            <div className="flex gap-4 mt-5">
              <a href="https://www.linkedin.com/in/chiagozie-ovuoba-77bb24268" target="_blank">
                <FaLinkedin size={"1.35rem"} />
              </a>
              <a href="https://github.com/Ovuoba-Chiagozie" target="_blank">
                <FaGithub size={"1.35rem"} />
              </a>
              <a href="https://twitter.com/ovubs" target="_blank">
                <FaXTwitter size={"1.35rem"} />
              </a>
              <a href="mailto:ovuobachiagozie@gmail.com" >
                <CiMail size={"1.35rem"} />
              </a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-[#444]"><span>&copy; Ovuoba Chiagozie {Year} </span></div>
      </div>
    </section>
  );
}

export default Footer;
