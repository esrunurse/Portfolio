import "../App.css";
import Frame from "../Assets/Frame.svg";

function Header() {
  return (
    <header className="bg-Blue900 min-h-screen flex items-center min-w-screen sm:justify-center">
      <div className="lg:ml-40 h-full lg:flex lg:pr-20 sm:flex sm:flex-col-reverse sm:m-0 sm:h-screen sm:items-center">
        <div className="flex flex-col justify-center lg:h-screen sm:h-[50vh] w-full relative lg:top-[-10px] lg:left-[10vw] sm:items-center">
          <h1 className="text-white xl:text-5xl lg:text-4xl font-bold z-50 xl:leading-[80px] lg:leading-[60px] sm:text-5xl sm:leading-[80px]">
            I'm{" "}
            <span dataText="Benyapha" id="name" className="xl:text-5xl lg:text-4xl text-transparent xl:leading-[80px] lg:leading-[60px] sm:text-5xl sm:leading-[80px] font-bold relative z-50 before:absolute before:xl:leading-[80px] before:lg:leading-[60px] xl:top-0">
              Benyapha{" "}
            </span>
          </h1>
          <h1 className="text-white xl:text-5xl xl:leading-[80px] lg:text-4xl lg:leading-[60px] sm:text-5xl sm:leading-[80px] font-bold z-50">
            Front-end Developer
          </h1>
          <h1 className="text-white xl:text-5xl xl:leading-[80px] lg:text-4xl lg:leading-[60px] sm:text-5xl sm:leading-[80px] font-bold z-50">
            Based in Bangkok
          </h1>
          <button className="bg-Purple w-fit lg:mt-12 sm:my-16 xl:text-xl font-medium lg:text-lg sm:text-base text-white px-10 py-2 uppercase shadow-lg rounded-lg transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:brightness-110 duration-300">
            hire me
          </button>
        </div>
        <img className="w-[37vw] sm:w-[45vw]" src={Frame} alt="Women" />
      </div>
    </header>
  );
}

export default Header;
