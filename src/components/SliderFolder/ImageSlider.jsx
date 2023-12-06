import { useRef, useLayoutEffect, useState, useEffect } from "react";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import SLIDER_ARRAY from "./sliderArray";

function ImageSlider() {
  const divElement = useRef();
  const [width, setWidth] = useState(0);
  const [moveSlide, setMoveSlide] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.45
  });

  const getWidth = () => {

    return divElement.current.offsetWidth

  }

  useLayoutEffect(() => {
    console.log({ width });
    const handleResize = () => {
      setWidth(getWidth());
    };
    console.log(width);

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  

  const nextSlide = () => {
    if (moveSlide.activeIndex === SLIDER_ARRAY.length - 1) {
      return setMoveSlide((prevState) => {
        return {
          ...prevState,
          translate: 0,
          activeIndex: 0,
        };
      });
    }

    setMoveSlide((prevState) => {
      return {
        ...prevState,
        activeIndex: prevState.activeIndex + 1,
      translate: (prevState.activeIndex + 1) * getWidth()
      };
    });
  };

  

  const prevSlide = () => {
    if (moveSlide.activeIndex === 0) {
      return setMoveSlide((prevState) => {
        return {
          ...prevState,
          translate: (SLIDER_ARRAY.length - 1) * getWidth(),
          activeIndex: SLIDER_ARRAY.length - 1,
        };
      });
    }
    
    setMoveSlide((prevState) => {
      return {
        ...prevState,
        activeIndex: prevState.activeIndex - 1,
      translate: (prevState.activeIndex - 1) * getWidth(),
      };
    });
  };
  

  return (
    <div className="relative shadow-2xl">
      <button onClick={prevSlide} className="w-fit h-fit">
      <BiSolidLeftArrow
        size={"1.35rem"}
        className="absolute top-1/2 translate-y-[-50%] translate-x-[-40px] p-2 box-content"
        
      />
      </button>
      <button onClick={nextSlide}>
      <BiSolidRightArrow
        size={"1.35rem"}
        className="absolute top-1/2 right-0 translate-y-[-50%] translate-x-[40px] p-2 box-content"
        
      />
      </button>
      <div
        className="h-64 md:h-[500px] w-full overflow-hidden"
        ref={divElement}
      >
        <div
          className="flex h-full w-full "
          style={{ width: `${width * SLIDER_ARRAY.length}px`, transform: `translateX(-${moveSlide.translate}px)`,
          transition: `transform ease-out ${moveSlide.transition}s` }}
        >
          {SLIDER_ARRAY.map((project) => {
            return (
              <div
                className={`h-full w-full bg-contain bg-no-repeat`}
                style={{
                  backgroundImage: `url(${project})`,
                }}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;
