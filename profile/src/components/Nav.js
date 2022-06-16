import "../App.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Nav(props) {
  const { activeNav, setActiveNav } = props;
    useEffect(() => {
    Aos.init({duration: 2000});
  }, []);
  
  return (
    <nav className="top-0 fixed w-full h-fit z-[99] fold:hidden md:block">
      <div className="bg-Blue900 z-[99] flex w-full justify-end items-center h-fit px-[10vw]">
        <ul data-aos="zoom-in" className=" flex justify-evenly py-6 md:w-full lg:w-[50vw]">
          <li className="flex flex-col items-center">
            <a
              href="#header"
              onClick={() => setActiveNav("header")}
              className={
                activeNav === "header"
                  ? "text-base font-normal text-white border-b-2 border-b-Purple"
                  : "text-base font-normal text-white"
              }
            >
              Home
            </a>
          </li>
          <li className="flex flex-col items-center">
            <a
              href="#about"
              onClick={() => setActiveNav("about")}
              className={
                activeNav === "about"
                  ? "text-base font-normal text-white border-b-2 border-b-Purple"
                  : "text-base font-normal text-white"
              }
            >
              About
            </a>
          </li>
          <li className="flex flex-col items-center">
            <a
              href="#projects"
              onClick={() => setActiveNav("projects")}
              className={
                activeNav === "projects"
                  ? "text-base font-normal text-white border-b-2 border-b-Purple"
                  : "text-base font-normal text-white"
              }
            >
              Projects
            </a>
          </li>
          <li className="flex flex-col items-center">
            <a
              href="#contact"
              onClick={() => setActiveNav("contact")}
              className={
                activeNav === "contact"
                  ? "text-base font-normal text-white border-b-2 border-b-Purple"
                  : "text-base font-normal text-white"
              }
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
