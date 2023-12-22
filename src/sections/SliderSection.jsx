import ImageSlider from "../components/ImageSlider";
import ProjectDetails from "../components/ProjectDetails";
function SliderSection({currentProject}) {

  console.log({currentProject})

  const {slider_images,paragraphs} = currentProject

  return (
    <section className="max-w-5xl px-8 pt-40 pb-16 mx-auto">
      <ImageSlider  sliderArray={slider_images} />
      <ProjectDetails  paragraphs={paragraphs} />
    </section>
  );
}

export default SliderSection;
