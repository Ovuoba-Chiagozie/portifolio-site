import SliderSection from "../sections/SliderSection";
import { useParams } from "react-router-dom";
import detailsArray from "../components/deatailsArray";

function Work() {
  const { id } = useParams();

  const currentProject = detailsArray.find((project) => {
    return project.id === id;
  });

  if (!currentProject) {
    window.location.href = "/notfound";
  }

  return (
    <>
      <SliderSection currentProject={currentProject} />
    </>
  );
}

export default Work;
