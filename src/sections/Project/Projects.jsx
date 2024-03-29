import ProjectCard from "../../components/ProjectsCard";
import PROJECTS_ARRAY from "./sliderArrays";

function Projects() {
  return (
    <section className="py-12 max-w-5xl mx-auto" id="projects">
      <div className="px-8">
        <div className="flex items-center flex-col mb-5">
          <h2 className="font-bold text-3xl">
            <span className="opacity-50 text-4xl ">/</span>
            <span className="text-black">Work.</span>
          </h2>
          <p className="my-4 text-lg text-center">
            Selected work I've done in the past.
            <br /> Click for more details
          </p>
        </div>
        <ul className="grid md:grid-cols-2  lg:grid-cols-3 gap-8 grid-cols-1">
          {PROJECTS_ARRAY.map((project) => {
            return (
              <ProjectCard
                key={project.id}
                details_link={project.id}
                link={project.link}
                project_title={project.project_title}
                link_title={project.link_title}
                file={project.file}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Projects;
