import "../App.css";
import Frame from "../Assets/Frame.svg";

function Header() {
  return (
    <header className=" bg-Blue900 min-h-screen flex items-center">
      <div className="ml-40 h-full flex pr-20">
        <div className="flex flex-col justify-around h-[50vh] w-full relative top-[92px] left-32">
          <h1 className="text-white text-[8vh] font-bold z-50">
            I'm{" "}
            <span dataText="Benyapha" id="name">
              Benyapha{" "}
            </span>
          </h1>

          <h1 className="text-white text-[8vh] font-bold z-50">
            Front-end Developer
          </h1>
          <h1 className="text-white text-[8vh] font-bold z-50">
            Based in Bangkok
          </h1>
          <button className="bg-Purple w-fit mt-12 text-[3vh] font-normal text-white px-10 py-2 uppercase shadow-lg rounded-lg transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:brightness-110 duration-300">
            hire me
          </button>
        </div>
        <img className="w-[37vw]" src={Frame} alt="Women" />
      </div>
    </header>
  );
}

export default Header;
