import { useRef, useLayoutEffect, useState } from "react";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";


function ImageSlider({sliderArray}) {
  console.log({sliderArray})
  const divElement = useRef();
  const [width, setWidth] = useState(0);
  const [moveSlide, setMoveSlide] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.45,
  });

  const getWidth = () => {
    return divElement.current.offsetWidth;
  };

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
  }, [ ]);

  const nextSlide = () => {
    if (moveSlide.activeIndex === sliderArray.length - 1) {
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
        translate: (prevState.activeIndex + 1) * getWidth(),
      };
    });
  };

  const prevSlide = () => {
    if (moveSlide.activeIndex === 0) {
      return setMoveSlide((prevState) => {
        return {
          ...prevState,
          translate: (sliderArray.length - 1) * getWidth(),
          activeIndex: sliderArray.length - 1,
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
      <BiSolidLeftArrow
        size={"1.35rem"}
        className="absolute cursor-pointer top-1/2 translate-y-[-50%] translate-x-[-40px] p-2 box-content"
        onClick={prevSlide}
      />

      <BiSolidRightArrow
        size={"1.35rem"}
        className="absolute cursor-pointer top-1/2 right-0 translate-y-[-50%] translate-x-[40px] p-2 box-content"
        onClick={nextSlide}
      />

      <div
        className="w-full overflow-hidden h-fit"
        ref={divElement}
      >
        <div
          className="flex w-full h-full "
          style={{
            width: `${width * sliderArray.length}px`,
            transform: `translateX(-${moveSlide.translate}px)`,
            transition: `transform ease-out ${moveSlide.transition}s`,
          }}
        >
          {sliderArray.map((project) => {
            return (
              // <div
              //   className={`h-full w-full bg-contain bg-no-repeat`}
              //   style={{
              //     backgroundImage: `url(${project})`,
              //   }}
              // ></div>
              <div className="flex-1"><img src={project} className="w-full h-full" alt="" /></div>
              
            );
          })}
        </div>
      </div>
      <div className="absolute flex items-center justify-center w-full bottom-6">
        {sliderArray.map((slide, i) => {
          //
          return (
            <span
              key={slide}
              className="p-[5px] mr-2 cursor-pointer rounded-[50%]"
              style={{
                background: moveSlide.activeIndex === i ? "#ffc200" : "black",
              }}
            ></span>
          );
        })}
      </div>
    </div>
  );
}

export default ImageSlider;
