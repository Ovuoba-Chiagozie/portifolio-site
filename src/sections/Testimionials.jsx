import ImageSlider from "../components/ImageSlider";
import { TESTIMONIAL_ARRAY } from "./Project/sliderArrays";
function reviewContainer({ project }) {
  const { testimonial, name, position } = project;
  return (
    <div className="container px-2 md:px-10">
      <blockquote>{testimonial}</blockquote>
      <div className="mt-11 text-lg">
        <span className="px-[40px] text-black font-bold">{name}</span>
        <span className='before:content-["\2014_\2009"] block px-[20px]'>
          {position}
        </span>
      </div>
    </div>
  );
}

function Testimonials() {
  return (
    <section className="max-w-5xl px-3 md:px-8 py-12 mx-auto">
      <div className="flex items-center font-bold text-3xl justify-center mb-11">
        <span className="opacity-50 text-4xl ">/</span>
        <span className="text-black">Testimonials.</span>
      </div>
      <ImageSlider
        sliderArray={TESTIMONIAL_ARRAY}
        ChildComponent={reviewContainer}
      />
    </section>
  );
}

export default Testimonials;
