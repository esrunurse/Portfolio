import "../App.css";
import Frame from "../Assets/Frame.svg";

function Header() {
  return (
    <header className="bg-Blue900 min-h-screen flex items-center w-screen sm:justify-center">
      <div className="lg:ml-40 h-full lg:flex lg:flex-row lg:justify-start lg:w-full lg:pr-20 sm:flex sm:flex-col-reverse sm:m-0 sm:h-screen sm:items-center">
        <div className="flex flex-col justify-center lg:h-screen sm:h-[50vh] relative lg:top-[-10px] lg:left-[10vw] sm:items-center lg:items-start">
          <h1 className="text-white xl:text-[50px] 2xl:text-[65px] 2xl:leading-[100px] lg:text-4xl font-bold z-50 xl:leading-[80px] lg:leading-[60px] sm:text-4xl sm:leading-[70px]">
            I'm{" "}
            <span dataText="Benyapha" id="name" className="xl:text-[50px] 2xl:text-[65px] 2xl:leading-[100px] lg:text-4xl text-transparent xl:leading-[80px] lg:leading-[60px] sm:text-4xl sm:leading-[70px] before:sm:leading-[70px] top-0 before:sm:top-[-8px] font-bold relative z-50 before:absolute before:xl:leading-[80px] before:lg:leading-[60px] before:2xl:leading-[100px] before:lg:top-[-5px] before:2xl:top-[-5px]">
              Benyapha{" "}
            </span>
          </h1>
          <h1 className="text-white xl:text-[50px] 2xl:text-[65px] 2xl:leading-[100px] xl:leading-[80px] lg:text-4xl lg:leading-[60px] sm:text-4xl sm:leading-[70px] font-bold z-50">
            Front-end Developer
          </h1>
          <h1 className="text-white xl:text-[50px] 2xl:text-[65px] 2xl:leading-[100px] xl:leading-[80px] lg:text-4xl lg:leading-[60px] sm:text-4xl sm:leading-[70px] font-bold z-50">
            Based in Bangkok
          </h1>
          <button className="bg-Purple w-fit lg:mb-0 sm:my-16 xl:text-xl font-medium lg:text-lg sm:text-base text-white px-10 py-2 uppercase shadow-lg rounded-lg transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:brightness-110 duration-300">
            hire me
          </button>
        </div>
        <img className="lg:w-[37vw] sm:w-[45vw]" src={Frame} alt="Women" />
      </div>
    </header>
  );
}

export default Header;
