import { useRef, useLayoutEffect, useState } from "react";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";

function ImageSlider({ sliderArray, ChildComponent, h, md }) {
  const divElement = useRef();
  const [width, setWidth] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const breakpoint = 768;
  const [moveSlide, setMoveSlide] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.45,
  });

  const getWidth = () => {
    return divElement.current.offsetWidth;
  };

  useLayoutEffect(() => {
   
    const handleResize = () => {
      setWidth(getWidth());
    };
   

    window.addEventListener("resize", () => {
      handleResize();
      setWindowWidth(window.innerWidth);
    });
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
    <div className={`relative ${ h === '190px' ? 'shadow-2xl' : ''}`}>
      <BiSolidLeftArrow
        size={"1.35rem"}
        className={`absolute cursor-pointer top-1/2 translate-y-[-50%] z-10 ${ h === '190px' ? 'translate-x-[-40px]' : 'translate-x-[-10px]' }  p-2 box-content`}
        onClick={prevSlide}
      />

      <BiSolidRightArrow
        size={"1.35rem"}
        className={`absolute cursor-pointer top-1/2 right-0 translate-y-[-50%] z-10 ${ h === '190px' ? 'translate-x-[40px]' : 'translate-x-[10px]' }  p-2 box-content`}
        onClick={nextSlide}
      />

      <div
        className="w-full overflow-hidden"
        ref={divElement}
        style={{
          height: windowWidth > breakpoint ? md : h,
        }}
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
            return <ChildComponent project={project} />;
          })}
        </div>
      </div>
      <div className="absolute flex items-center justify-center w-full bottom-[-34px]">
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
