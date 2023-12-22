

function ProjectDetails({paragraphs}) {
  return (
    <div className="mt-32 text-black">
      {paragraphs.map((paragraph) => {
        return <p className="my-5">{paragraph}</p>;
      })}
    </div>
  );
}

export default ProjectDetails;
