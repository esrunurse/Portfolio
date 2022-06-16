import "../App.css";
import emailjs from "emailjs-com";
import {
  MailOutline,
  CallOutline,
  HomeOutline,
  LogoLinkedin,
  LogoInstagram,
} from "react-ionicons";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Contact() {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_h9fn4sh",
        "template_ijk6s5j",
        "#contact",
        "nxvWvZe1GXK90EPiU"
      )
      .then(
        function (response) {
          alert("Thank you for contacting me!");
        },
        function (error) {
          alert("FAILED!" + error);
        }
      );
  }
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section
      id="contact"
      data-aos="zoom-in-up"
      className="h-screen w-full flex items-center fold:flex-col fold:justify-center lg:flex-row lg:justify-center fold:my-12 md:mt-12 md:mb-0 lg:py-[10vh]"
    >
      <form
        id="contact"
        className="flex flex-col justify-around h-full shadow-lg fold:w-full fold:p-6 md:p-10 lg:w-[50vw]"
        onSubmit={sendEmail}
      >
        <div>
          <h1 className="md:text-5xl fold:text-lg font-bold text-Blue900 md:mb-6 fold:mb-2">
            Get in touch
          </h1>
          <h3 className="font-light text-Blue900 fold:text-xs md:text-sm">
            Feel free to contact me any time!
          </h3>
        </div>
        <div className="flex justify-between fold:flex-col ss:flex-row">
          <input
            required
            className="border-b border-b-Blue900 rounded-none w-full transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300 placeholder:text-Blue900 focus:border-b focus:border-b-Blue900 focus:outline-none fold:h-9 fold:ml-0 fold:placeholder:text-sm md:h-11 md:mr-2 md:placeholder:text-base"
            name="name"
            placeholder="Name"
          />
          <input
            required
            className="border-b border-b-Blue900 rounded-none w-full transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300 placeholder:text-Blue900 focus:border-b focus:border-b-Blue900 focus:outline-none fold:h-9 fold:ml-0 fold:placeholder:text-sm md:h-11 md:ml-2 md:placeholder:text-base"
            name="lastName"
            placeholder="Last Name"
          />
        </div>
        <div className="flex ss:flex-row fold:flex-col justify-between">
          <input
            required
            className="border-b border-b-Blue900 rounded-none w-full transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300 placeholder:text-Blue900 focus:border-b focus:border-b-Blue900 focus:outline-none fold:h-9 fold:ml-0 fold:placeholder:text-sm md:h-11 md:mr-2 md:placeholder:text-base"
            name="email"
            type="email"
            placeholder="Email"
          />
          <input
            required
            className="border-b border-b-Blue900 rounded-none w-full transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300 placeholder:text-Blue900 focus:border-b focus:border-b-Blue900 focus:outline-none fold:h-9 fold:ml-0 fold:placeholder:text-sm md:h-11 md:ml-2 md:placeholder:text-base"
            name="phone"
            pattern="0[6-9]{1}[0-9]{8}"
            placeholder="Phone Number"
          />
        </div>
        <textarea
          required
          id="message"
          name="message"
          type="text"
          placeholder="Message"
          className="border-b-Blue900 rounded-none w-full border-b placeholder:text-Blue900 focus:border-b focus:border-b-Blue900 focus:outline-none transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300 fold:placeholder:text-sm fold:h-9 md:placeholder:text-base md:h-11 "
        />
        <button
          type="submit"
          className="bg-Blue900 w-full font-normal text-white px-10 py-2 shadow-lg transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:brightness-110 duration-300 fold:mt-4 fold:text-sm sm:text-base lg:text-lg"
        >
          Send
        </button>
      </form>
      <div className="bg-Blue900 flex flex-col justify-evenly shadow-lg fold:h-[60vh] fold:p-6 md:h-[60vh] md:p-10 lg:h-[80vh] lg:w-[30vw] xl:w-[25vw]">
        <h1 className="text-white font-semibold fold:text-base md:text-3xl">
          Info
        </h1>
        <div className="flex items-center">
          <MailOutline name="mail-outline" height="1.5rem" color={"#ffffff"} />
          <h2 className="text-white font-light ml-3 fold:text-sm md:text-lg">
            esrunursee@gmail.com
          </h2>
        </div>
        <div className="flex items-center">
          <CallOutline name="call-outline" height="1.5rem" color={"#ffffff"} />
          <h2 className="text-white font-light ml-3 fold:text-sm md:text-lg">
            +66 98-910-5594
          </h2>
        </div>
        <div className="flex">
          <HomeOutline name="home-outline" height="1.5rem" color={"#ffffff"} />
          <h2 className="text-white break-words font-light ml-3 fold:text-sm md:text-lg">
            31/135 soi53 Suksan6 Kanchanaphisek 005/1 Rd. Laksong Bang Khae
            Bangkok 10160
          </h2>
        </div>
        <hr className="text-white my-2" />
        <div className="flex justify-evenly w-full">
          <a
            href="https://www.linkedin.com/in/benyapha-kas/"
            target="_blank"
            rel="noreferrer"
            className="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
          >
            <LogoLinkedin
              name="logo-linkedin"
              height="3rem"
              color={"#ffffff"}
            />
          </a>
          <a
            href="https://www.instagram.com/catsrevrywhere/"
            target="_blank"
            rel="noreferrer"
            className="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
          >
            <LogoInstagram
              name="logo-instagram"
              height="3rem"
              color={"#ffffff"}
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
