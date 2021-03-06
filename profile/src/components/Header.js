import "../App.css";
import Frame from "../Assets/Frame.svg";
import bubble from "../Assets/bubble.svg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Header(props) {
  const { setActiveNav } = props

  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);

  return (
    <section
      id="header"
      className="bg-Blue900 h-full w-full flex items-center justify-center fold:py-0 md:pt-8 md:pb-10"
    >
      <div data-aos="fade-in" className="h-full fold:flex fold:flex-col-reverse fold:m-0 fold:h-fit fold:items-center lg:flex lg:flex-row lg:justify-center lg:w-full">
        <div className="flex flex-col justify-center relative fold:h-[40vh] fold:items-center lg:h-screen lg:top-[-10px] lg:left-[5vw] lg:items-start">
          <h1 className="text-white font-bold z-50 fold:text-2xl fold:leading-[40px] ss:text-3xl ss:leading-[50px] sm:text-4xl sm:leading-[70px] lg:text-4xl lg:leading-[60px] xl:text-[50px] xl:leading-[80px] 2xl:text-[65px] 2xl:leading-[100px]">
            I'm{" "}
            <span
              id="name"
              className="text-transparent font-bold relative z-50 before:absolute before:content-['Benyapha'] before:left-0 before:w-0 before:h-full before:text-white before:overflow-hidden  fold:text-2xl fold:leading-[40px] ss:text-3xl ss:leading-[50px] before:ss:leading-[40px] before:ss:top-[2px] sm:text-4xl sm:leading-[70px] before:sm:leading-[50px] before:sm:top-0 before:md:top-0 lg:text-4xl lg:leading-[60px] before:lg:leading-[60px] before:lg:top-[-5px] xl:text-[50px] xl:leading-[80px] before:xl:leading-[80px] before:xl:top-[-4px] 2xl:text-[65px] 2xl:leading-[100px] before:2xl:leading-[100px] before:2xl:top-[-5px]"
            >
              Benyapha{" "}
            </span>
          </h1>
          <h1 className="text-white font-bold z-50 fold:text-2xl fold:leading-[40px] ss:text-3xl ss:leading-[50px] sm:text-4xl sm:leading-[70px] lg:text-4xl lg:leading-[60px] xl:text-[50px] xl:leading-[80px] 2xl:text-[65px] 2xl:leading-[100px]">
            Software Developer
          </h1>
          <h1 className="text-white font-bold z-50 fold:text-2xl fold:leading-[40px] ss:text-3xl ss:leading-[50px] sm:text-4xl sm:leading-[70px] lg:text-4xl lg:leading-[60px] xl:text-[50px] xl:leading-[80px] 2xl:text-[65px] 2xl:leading-[100px]">
            Based in Bangkok
          </h1>
          <a href="#about" className="fold:hidden md:block">
          <button data-aos="zoom-in" type="button" onClick={() => setActiveNav("about")} className="bg-Purple z-50 w-fit font-medium text-white px-10 py-2 uppercase shadow-lg transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:brightness-110 duration-300 fold:mt-12 fold:mb-20 fold:text-sm sm:text-base sm:my-[5vh] lg:mb-0 xl:text-lg">
            about me
          </button></a>
        </div>
        <div className="relative lg:right-[5vw] fold:mt-[10vh] md:mt-0">
          <img className="fold:w-[60vw] lg:w-[37vw]" src={Frame} alt="Women" />
          <div className="flex w-full h-full items-center">
            <h3 className="text-blue900 absolute font-semibold z-[99] fold:text-xl fold:top-5 fold:right-0 ss:text-2xl sm:text-3xl md:text-4xl md:top-10 md:right-3 lg:top-11 lg:right-10 2xl:text-4xl">
              Hi!
            </h3>
            <img
              className="absolute z-50 rotate-12 fold:w-[15vw] fold:top-[10px] fold:right-[-10px] lg:w-[7vw] lg:top-5 lg:right-5"
              src={bubble}
              alt="Hi!"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
