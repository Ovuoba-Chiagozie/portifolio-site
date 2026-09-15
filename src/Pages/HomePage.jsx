import Home from "../sections/Home";
import About from "../sections/About";
import Experience from "../sections/Experience/Experience";
import Projects from "../sections/Project/Projects";
import Testimonials from "../sections/Testimionials";

function HomePage() {
  return (
    <>
      <Home />
      <About />
      <Experience />
      <Projects />
      <Testimonials />
    </>
  );
}

export default HomePage;
