import { LogoGithub, PersonCircleOutline } from "react-ionicons";
import "../App.css";
import projects from "../Assets/project";

function Projects() {
  return (
    <section
      id="projects"
      className="bg-Blue900 h-full w-full flex flex-col justify-center fold:py-0 md:py-16 md:px-[10vw]"
    >
      <h1 className="text-white text-center break-words font-bold fold:text-lg fold:my-2 md:text-5xl md:my-6">
        Projects
      </h1>
      <div className="flex flex-wrap w-full md:my-10 md:px-[5vw]">
        {projects.map((data, index) => {
          return (
            <div
              key={index}
              className="p-5 relative overflow-hidden backdrop-blur-sm border-t border-l border-t-white/50 border-l-white/50 shadow-[20px_20px_50px_rgba(0,0,0,0.5)] rounded-2xl bg-Purple/40 fold:w-[95vw] md:w-[40vw] lg:w-[30vw] xl:w-[20vw]"
            >
              <img src={data.image} alt={data.name} />
              {/*<h3>{data.name}</h3>
               <h4>{data.details}</h4>
              <PersonCircleOutline
                name="person-circle-outline"
                height="1.5rem"
                color="#0F103F"
              />
              <h4>{data.client}</h4> */}
              <div className="flex w-full justify-around mt-4">
                {data.live ===""?
                  <button type="button" onClick={()=> { alert('Coming soon!') }} className=" bg-white mr-2 border border-Blue900 w-full font-light text-Blue900 py-2 shadow-lg transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:brightness-110 duration-300 fold:text-sm sm:text-base">
                    Live
                  </button> : <a href={data.live} target="_blank" className="w-full">
                  <button type="button" className=" bg-white mr-2 border border-Blue900 w-full font-light text-Blue900 py-2 shadow-lg transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:brightness-110 duration-300 fold:text-sm sm:text-base">
                    Live
                  </button>
                </a> }
                <a href={data.repo} target="_blank" className="w-full">
                  <button className="flex items-center justify-center bg-Blue900 border border-Blue900 w-full font-light text-white py-2 shadow-lg transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:brightness-110 duration-300 fold:text-sm sm:text-base">
                    <LogoGithub
                      name="logo-github"
                      height="1rem"
                      color={"#ffffff"}
                    />
                    Github
                  </button>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
