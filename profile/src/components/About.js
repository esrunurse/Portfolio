import "../App.css";

function About() {
  return (
    <section
      id="about"
      className="bg-Blue900 h-full flex items-center w-full justify-center fold:py-0 md:py-16"
    >
      <div className="flex w-full md:px-[10vw]">
        <div className="w-[40vw] md:px-10">
          <h1 className="text-white break-words font-bold fold:text-lg fold:my-2 md:text-5xl md:my-6 ">
            A Bit About Me
          </h1>
          <p className="text-white break-words leading-8">
            My name is Benyapha Kasemtanakitti. I'm interested in learning new
            things, and I've always had a fascination with statistics and arts.
            As a recent I graduate from the Full-Stack Software Development
            Bootcamp at TechUp. I've proficiency in frontend development such as
            HTML, CSS, React, and backend development.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
