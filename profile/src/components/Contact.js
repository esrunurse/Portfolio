import "../App.css";
import emailjs from "emailjs-com";
import {
  MailOutline,
  CallOutline,
  HomeOutline,
  LogoLinkedin,
  LogoInstagram,
} from "react-ionicons";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();
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
    navigate("/");
  }
  return (
    <div className="h-screen w-screen flex fold:flex-col fold:justify-center lg:pl-40 lg:flex-row items-center lg:justify-center lg:py-[5vh] 2xl:py-[10vh]">
      <form
        id="contact"
        className="flex flex-col justify-around h-full lg:w-[50vw] fold:w-full fold:p-6 md:p-10 shadow-lg"
        onSubmit={sendEmail}
      >
        <div>
          <h1 className="md:text-5xl fold:text-lg font-bold text-Blue900 md:mb-6 fold:mb-2">Get in touch</h1>
          <h3 className="md:text-sm fold:text-xs font-light text-Blue900">
            Feel free to contact me any time!
          </h3>
        </div>
        <div className="flex ss:flex-row fold:flex-col justify-between">
          <input
            required
            className="border-b border-b-Blue900 w-full md:h-11 fold:h-9 fold:mr-0 ss:mr-1 md:mr-2 md:placeholder:text-base fold:placeholder:text-sm placeholder:text-Blue900 focus:border-b focus:border-b-Blue900 focus:outline-none transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300"
            name="name"
            placeholder="Name *"
          />
          <input
            required
            className="border-b border-b-Blue900 w-full md:h-11 fold:h-9 fold:ml-0 md:ml-2 md:placeholder:text-base fold:placeholder:text-sm placeholder:text-Blue900 focus:border-b focus:border-b-Blue900 focus:outline-none transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300"
            name="lastName"
            placeholder="Last Name *"
          />
        </div>
        <div className="flex ss:flex-row fold:flex-col justify-between">
          <input
            required
            className="border-b border-b-Blue900 w-full md:h-11 fold:h-9 fold:mr-0 ss:mr-1 md:mr-2 md:placeholder:text-base fold:placeholder:text-sm placeholder:text-Blue900 focus:border-b focus:border-b-Blue900 focus:outline-none transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300"
            name="email"
            type="email"
            placeholder="Email *"
          />
          <input
            required
            className="border-b border-b-Blue900 w-full md:h-11 fold:h-9 fold:ml-0 md:ml-2 md:placeholder:text-base fold:placeholder:text-sm placeholder:text-Blue900 focus:border-b focus:border-b-Blue900 focus:outline-none transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300"
            name="phone"
            pattern="0[6-9]{1}[0-9]{8}"
            placeholder="Phone Number *"
          />
        </div>
        <textarea
          required
          id="message"
          name="message"
          type="text"
          placeholder="Message *"
          className="md:placeholder:text-base fold:placeholder:text-sm border-b border-b-Blue900 w-full md:h-11 fold:h-9 placeholder:text-Blue900 focus:border-b focus:border-b-Blue900 focus:outline-none transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300"
        />
        <button
          type="submit"
          className="bg-Blue900 fold:mt-4 lg:text-lg fold:text-sm sm:text-base w-full font-normal text-white px-10 py-2 shadow-lg transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:brightness-110 duration-300"
        >
          Send
        </button>
      </form>
      <div className="bg-Blue900 lg:h-[90vh] 2xl:h-[80vh] md:h-[60vh] fold:h-[60vh] md:p-10 fold:p-6 xl:w-[25vw] lg:w-[30vw] flex flex-col justify-evenly shadow-lg">
        <h1 className="text-white md:text-3xl font-semibold fold:text-base">Info</h1>
        <div className="flex items-center">
          <MailOutline name="mail-outline" height="1.5rem" color={"#ffffff"} />
          <h2 className="text-white md:text-lg fold:text-sm font-light ml-3">
            esrunursee@gmail.com
          </h2>
        </div>
        <div className="flex items-center">
          <CallOutline name="call-outline" height="1.5rem" color={"#ffffff"} />
          <h2 className="text-white md:text-lg fold:text-sm font-light ml-3">
            +66 98-910-5594
          </h2>
        </div>
        <div className="flex">
          <HomeOutline name="home-outline" height="1.5rem" color={"#ffffff"} />
          <h2 className="text-white break-words md:text-lg fold:text-sm font-light ml-3">
            31/135 soi53 Suksan6 Kanchanaphisek 005/1 Rd. Laksong Bang
            Khae Bangkok 10160
          </h2>
        </div>
        <hr className="text-white my-2" />
        <div className="flex justify-evenly w-full">
          <a
            href="https://www.linkedin.com/in/benyapha-kas/"
            target="_blank"
            rel="noopener noreferrer"
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
            rel="noopener noreferrer"
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
    </div>
  );
}

export default Contact;
