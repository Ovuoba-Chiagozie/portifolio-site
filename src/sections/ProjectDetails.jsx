import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import ImageSlider from "../components/SliderFolder/ImageSlider";

function ProjectDetails() {
  return (
    <section className="pt-56 pb-16 md:pb-32 px-8 max-w-5xl mx-auto">
      {/* <BiSolidLeftArrow className="absolute top-1/2 translate-y-[-50%]" /> */}
      <ImageSlider />
    </section>
  );
}

export default ProjectDetails;
