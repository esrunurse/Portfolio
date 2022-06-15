import "../App.css";

function About() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Tailwind CSS",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "Git",
  ];
  return (
    <section
      id="about"
      className="bg-Blue900 h-full flex items-center w-full justify-center fold:py-14"
    >
      <div className="flex justify-between w-full md:flex-row lg:px-[15vw] md:px-[10vw] fold:flex-col">
        <div className="md:w-[45vw] fold:w-full fold:py-14 fold:px-4">
          <h1 className="text-white text-center font-bold fold:text-lg fold:mb-6 md:text-4xl md:mb-12">
            A Bit About Me
          </h1>
          <p className="text-white break-words leading-8 text-center">
            My name is Benyapha Kasemtanakitti. I'm interested in learning new
            things, and I've always had a fascination with statistics and arts.
            As a recent I graduate from the Full-Stack Software Development
            Bootcamp at TechUp. I've proficiency in frontend development such as
            HTML, CSS, React, and backend development.
          </p>
        </div>
        <div className="pb-12 bg-white h-fit fold:ml-0 md:ml-14 fold:w-full fold:py-14 md:w-[35vw]">
          <h1 className="text-Blue900 z-50 text-center font-bold fold:text-lg fold:mb-6 md:text-4xl md:mb-12">
            Skills
          </h1>
          <div className="flex justify-evenly lg:flex-row md:flex-col md:pl-20 lg:pl-0">
            <ul className="list-[square] list-inside">
              {skills.slice(0, 5).map((data, index) => {
                return (
                  <li key={index} className="mt-2 font-light text-Blue900 fold:text-xs md:text-sm xl:text-base">
                    {data}
                  </li>
                );
              })}
            </ul>
            <ul className="list-[square] list-inside">
              {skills.slice(5, 10).map((data, index) => {
                return (
                  <li key={index} className="mt-2 font-light text-Blue900 fold:text-xs md:text-sm xl:text-base">
                    {data}
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
