import PROFILE from "../assets/profile-picture.jpg";
import { useState, useEffect } from "react";

function NavBar() {
  const [isOpen, setisOpen] = useState(false);

  const handleClick = () => {
    setisOpen((prevState) => !prevState);
  };

  return (
    <nav className="max-w-5xl mx-auto bg-white px-8 py-4 fixed right-0 left-0 z-20">
      <div className="flex justify-between items-center">
        <a href="/">
      <div className="items-center flex text-base py-1 box-content font-bold">
        <img
          src={PROFILE}
          alt=""
          className="min-w-[40px] h-10 rounded-[50%] mr-4"
        />
        <span className="text-xl text-black">Chiagozie</span>
      </div>
      </a>
      <button
        onClick={handleClick}
        className="flex flex-col justify-center items-center md:hidden"
      >
        <span
          className={`bg-black block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
                      isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                    }`}
        ></span>
        <span
          className={`bg-black block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm my-0.5 ${
                      isOpen ? "opacity-0" : "opacity-100"
                    }`}
        ></span>
        <span
          className={`bg-black block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
                      isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                    }`}
        ></span>
      </button>
      <ul
        className={`flex absolute md:static md:flex-row md:shadow-none md:w-fit md:gap-10 top-16 w-full p-3 items-center ${
          isOpen ? "left-0" : "left-[-100%]"
        } flex-col bg-white shadow-md justify-around text-base text-black gap-5 ease-in-out transition-all`}
      >
        <li className="px-2 py-2 w-full text-center hover:bg-gray-300 md:hover:bg-inherit md:hover:text-[#ffc200] rounded-md">
          <a href="/">Home</a>
        </li>
        <li className="px-2 py-2 w-full text-center hover:bg-gray-300 md:hover:bg-inherit md:hover:text-[#ffc200] rounded-md">
          <a href="#about">About</a>
        </li>
        {/* <li className="px-2 py-2 w-full text-center hover:bg-gray-300 md:hover:bg-inherit md:hover:text-[#ffc200] rounded-md">
          <a href="#">Services</a>
        </li> */}
        <li className="px-2 py-2 w-full text-center hover:bg-gray-300 md:hover:bg-inherit md:hover:text-[#ffc200] rounded-md">
          <a href="#projects">Projects</a>
        </li>
        <li className="px-2 py-2 w-full text-center hover:bg-gray-300 md:hover:bg-inherit md:hover:text-[#ffc200] rounded-md">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      </div>
    </nav>
  );
}

export default NavBar;
