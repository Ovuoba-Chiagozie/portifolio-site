import ImageSlider from "../components/ImageSlider";
import ProjectDetails from "../components/ProjectDetails";

function ImageContainer({ project }) {
  return (
    <div className="flex-1">
      <img src={project} className="w-full h-full object-contain" alt="" />
    </div>
  );
}

function SliderSection({ currentProject }) {
  const { slider_images, paragraphs } = currentProject;

  return (
    <section className="max-w-5xl px-8 pt-40 pb-16 mx-auto">
      <ImageSlider
        sliderArray={slider_images}
        ChildComponent={ImageContainer}
        h={"190px"}
        md={"550px"}
      />
      <ProjectDetails paragraphs={paragraphs} />
    </section>
  );
}

export default SliderSection;
