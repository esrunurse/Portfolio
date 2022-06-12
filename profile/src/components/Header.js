import "../App.css";
import Frame from "../Assets/Frame.svg";

function Header() {
  return (
    <header className="bg-Blue900 h-screen flex items-center w-screen fold:justify-center py-10">
      <div className="lg:ml-40 h-full lg:flex lg:flex-row lg:justify-start lg:w-full lg:pr-20 fold:flex fold:flex-col-reverse fold:m-0 fold:h-screen fold:items-center">
        <div className="flex flex-col justify-center lg:h-screen fold:h-[50vh] relative lg:top-[-10px] lg:left-[10vw] fold:items-center lg:items-start">
          <h1 className="text-white xl:text-[50px] 2xl:text-[65px] 2xl:leading-[100px] lg:text-4xl font-bold z-50 xl:leading-[80px] lg:leading-[60px] sm:text-4xl sm:leading-[70px] ss:text-3xl ss:leading-[50px] fold:text-2xl fold:leading-[40px]">
            I'm{" "}
            <span dataText="Benyapha" id="name" className="xl:text-[50px] 2xl:text-[65px] 2xl:leading-[100px] lg:text-4xl text-transparent xl:leading-[80px] lg:leading-[60px] sm:text-4xl sm:leading-[70px] before:sm:leading-[50px] before:sm:top-0 before:ss:top-[2px] before:md:top-0 font-bold relative z-50 before:absolute before:xl:leading-[80px] before:xl:top-[-4px] before:lg:leading-[60px] before:2xl:leading-[100px] before:ss:leading-[40px] before:lg:top-[-5px] before:2xl:top-[-5px] ss:text-3xl ss:leading-[50px] fold:text-2xl fold:leading-[40px]">
              Benyapha{" "}
            </span>
          </h1>
          <h1 className="text-white xl:text-[50px] 2xl:text-[65px] 2xl:leading-[100px] xl:leading-[80px] lg:text-4xl lg:leading-[60px] sm:text-4xl sm:leading-[70px] font-bold z-50 ss:text-3xl ss:leading-[50px] fold:text-2xl fold:leading-[40px]">
            Front-end Developer
          </h1>
          <h1 className="text-white xl:text-[50px] 2xl:text-[65px] 2xl:leading-[100px] xl:leading-[80px] lg:text-4xl lg:leading-[60px] sm:text-4xl sm:leading-[70px] font-bold z-50 ss:text-3xl ss:leading-[50px] fold:text-2xl fold:leading-[40px]">
            Based in Bangkok
          </h1>
          <button className="bg-Purple w-fit lg:mb-0 fold:mt-14 fold:mb-20 sm:my-[5vh] xl:text-xl font-medium lg:text-lg fold:text-sm sm:text-base text-white px-10 py-2 uppercase shadow-lg rounded-lg transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:brightness-110 duration-300">
            about me
          </button>
        </div>
        <img className="lg:w-[37vw] fold:w-[60vw]" src={Frame} alt="Women" />
      </div>
    </header>
  );
}

export default Header;
