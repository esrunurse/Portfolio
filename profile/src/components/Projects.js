import { LogoGithub, PersonCircleOutline } from "react-ionicons";
import "../App.css";
import projects from "../Assets/projects";
import { motion } from "framer-motion";
import { useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Projects() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section
      id="projects"
      className="bg-Blue900 h-full w-full flex flex-col items-center justify-center fold:pt-12 fold:pb-14 md:py-20 md:px-[12vw]"
    >
      <h1 data-aos="slide-up" className="text-white text-center break-words font-bold fold:text-lg fold:mb-10 md:text-5xl md:my-6">
        Projects
      </h1>
      <div data-aos="zoom-in" className="flex flex-wrap justify-center items-center w-full md:my-10">
        {projects.map((data, index) => {
          return (
            <motion.div
              onClick={() => setIsOpen(!isOpen)}
              layout
              key={index}
              className={
                !isOpen
                  ? "p-6 relative z-50 overflow-hidden backdrop-blur-sm border-t border-l border-t-white/50 border-l-white/50 shadow-[20px_20px_50px_rgba(0,0,0,0.5)] bg-Purple/40 rounded-xl fold:w-[90vw] md:w-[40vw] lg:w-[30vw] xl:w-[20vw]"
                  : "p-6 relative z-50 overflow-hidden backdrop-blur-sm border-t border-l border-t-white/50 border-l-white/50 shadow-[20px_20px_50px_rgba(0,0,0,0.5)] bg-Purple/40 rounded-xl fold:w-[90vw] md:w-[50vw] lg:w-[40vw] xl:w-[30vw]"
              }
            >
              <motion.div layout="position" className="cursor-pointer">
                {!isOpen ? (
                  <div>
                    <img src={data.image} alt={data.name} />
                    <h2 className="text-center font-light text-white mt-4 fold:text-xs md:text-sm xl:text-base">
                      read more
                    </h2>
                  </div>
                ) : (
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-center font-normal text-white fold:text-sm md:text-base xl:text-lg">
                      {data.name}
                    </h3>
                    <div className="flex items-center">
                      <PersonCircleOutline
                        name="person-circle-outline"
                        height="1.5rem"
                        color="#ffffff"
                      />
                      <h4 className="ml-1 font-normal text-white fold:text-xs md:text-sm xl:text-base">
                        {data.client}
                      </h4>
                    </div>
                  </div>
                )}
              </motion.div>
              {isOpen && (
                <motion.div className="cursor-pointer">
                  <h5 className="mt-2 font-light text-white fold:text-xs md:text-sm xl:text-base">
                    {data.description}
                  </h5>
                  <h5 className="mt-2 font-light text-white fold:text-xs md:text-sm xl:text-base">
                    Responsibilities:
                    <ul className="list-[square] list-inside">
                      {data.responsibilities.map((data, index) => {
                        return (
                          <li key={index} className="mt-2">
                            {data}
                          </li>
                        );
                      })}
                      <li className="mt-2 font-light text-white fold:text-xs md:text-sm xl:text-base">
                        Features:{" "}
                        {data.features.map((data, index) => {
                          return (
                            <span
                              key={index}
                              className="mt-2 fold:leading-5 md:leading-6 xl:leading-7"
                            >
                              {data},{" "}
                            </span>
                          );
                        })}
                        <span>etc.</span>
                      </li>
                    </ul>
                  </h5>
                  <div className="flex w-full justify-around mt-4">
                    {data.live === "" ? (
                      <button
                        type="button"
                        onClick={() => {
                          alert("Coming soon!");
                        }}
                        className=" bg-white mr-2 border border-Blue900 w-full font-light text-Blue900 py-2 shadow-lg transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:brightness-110 duration-300 fold:text-sm sm:text-base"
                      >
                        Live
                      </button>
                    ) : (
                      <a
                        href={data.live}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full"
                      >
                        <button
                          type="button"
                          className=" bg-white mr-2 border border-Blue900 w-full font-light text-Blue900 py-2 shadow-lg transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:brightness-110 duration-300 fold:text-sm sm:text-base"
                        >
                          Live
                        </button>
                      </a>
                    )}
                    <a
                      href={data.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full"
                    >
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
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
