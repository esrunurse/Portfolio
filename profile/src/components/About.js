import "../App.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import {
  GitBranchOutline,
  LogoCss3,
  LogoHtml5,
  LogoJavascript,
  LogoNodejs,
  LogoReact,
} from "react-ionicons";
import expressJS from "../Assets/expressjs.svg";
import mongoDB from "../Assets/mongoDB.svg";
import postgreSQL from "../Assets/postgreSQL.svg";
import tailwindCSS from "../Assets/tailwindCSS.svg";

function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const skills = [
    {
      skill: "HTML",
      icon: (
        <LogoHtml5 name="logo-html5" height="1.25rem" color="#0F103F"></LogoHtml5>
      ),
    },
    {
      skill: "CSS",
      icon: (
        <LogoCss3 name="logo-css3" height="1.25rem" color="#0F103F"></LogoCss3>
      ),
    },
    {
      skill: "Javascript",
      icon: (
        <LogoJavascript
          name="logo-javascript"
          height="1.25rem"
          color="#0F103F"
        ></LogoJavascript>
      ),
    },
    { skill: "Tailwind CSS", icon: "", img: tailwindCSS },
    {
      skill: "React.js",
      icon: (
        <LogoReact name="logo-react" height="1.25rem" color="#0F103F"></LogoReact>
      ),
    },
    {
      skill: "Node.js",
      icon: (
        <LogoNodejs
          name="logo-nodejs"
          height="1.25rem"
          color="#0F103F"
        ></LogoNodejs>
      ),
    },
    {
      skill: "Express.js",
      icon: "",
      img: expressJS,
    },
    {
      skill: "MongoDB",
      icon: "",
      img: mongoDB,
    },
    {
      skill: "PostgreSQL",
      icon: "",
      img: postgreSQL,
    },
    {
      skill: "Git",
      icon: (
        <GitBranchOutline
          name="git-branch-outline"
          height="1.25rem"
          color="#0F103F"
        ></GitBranchOutline>
      ),
    },
  ];

  return (
    <section
      id="about"
      className="bg-Blue900 h-full flex items-center w-full justify-center fold:py-12"
    >
      <div className="flex justify-between w-full md:flex-row lg:px-[15vw] md:px-[10vw] fold:flex-col">
        <div
          data-aos="fade-right"
          className="md:w-[45vw] fold:w-full fold:py-14 fold:px-4"
        >
          <h1 className="text-white text-center font-bold fold:text-lg fold:mb-6 md:text-4xl md:mb-12">
            A Bit About Me
          </h1>
          <p className="text-white break-words leading-8 text-center">
            My name is Benyapha Kasemtanakitti. I'm interested in learning new
            things, and I've always had a fascination with statistics and arts.
            As a recent graduate from the Full-Stack Software Development
            Bootcamp at TechUp. I've proficiency in frontend development such as
            HTML, CSS, React, and backend development.
          </p>
        </div>
        <div
          data-aos="fade-left"
          className="pb-12 bg-white h-fit fold:ml-0 md:ml-14 fold:w-full fold:py-14 md:w-[35vw]"
        >
          <h1 className="text-Blue900 z-50 text-center font-bold fold:text-lg fold:mb-6 md:text-4xl md:mb-12">
            Skills
          </h1>
          <div className="flex justify-evenly lg:flex-row md:flex-col md:pl-20 lg:pl-0">
            <ul className="list-none">
              {skills.slice(0, 5).map((data, index) => {
                return (
                  <li key={index} className="mb-3 flex items-center">
                    {data.icon === "" ? (
                      <img className="mr-4 h-5" src={data.img} alt={data.skill} />
                    ) : (
                      <div className="mr-4">{data.icon}</div>
                    )}
                    <span className="font-light text-Blue900 fold:text-xs md:text-sm xl:text-base">
                      {data.skill}
                    </span>
                  </li>
                );
              })}
            </ul>
            <ul className="list-none">
              {skills.slice(5, 10).map((data, index) => {
                return (
                  <li key={index} className="mb-3 flex items-center">
                    {data.icon === "" ? (
                      <img className="mr-4 h-5" src={data.img} alt={data.skill} />
                    ) : (
                      <div className="mr-4">{data.icon}</div>
                    )}
                    <span className="font-light text-Blue900 fold:text-xs md:text-sm xl:text-base">
                      {data.skill}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
