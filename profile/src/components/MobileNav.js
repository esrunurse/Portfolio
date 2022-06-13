import "../App.css";
import {
  HomeOutline,
  CallOutline,
  PersonOutline,
  CodeOutline,
} from "react-ionicons";
import { useUtils } from "../utils";

function MobileNav() {
  const { activeNav, setActiveNav, scroll } = useUtils();
  scroll();

  return (
    <nav className="bottom-0 fixed w-full h-fit fold:block md:hidden">
      <ul className="bg-white rounded-t-xl flex justify-around py-2 shadow-[50px_50px_0_-15px_rgba(0,0,0,0.3)]">
        <li>
          <a
            href="#header"
            onClick={() => setActiveNav("header")}
            className={
              activeNav === "header"
                ? "flex flex-col items-center text-sm font-light text-black border-b-2 border-b-Purple"
                : "flex flex-col items-center text-sm font-light text-Blue900"
            }
          >
            <HomeOutline name="home-outline" height="1rem" color={"#1C1C65"} />
            <span>Home</span>
          </a>
        </li>
        <li>
          <a
            href="#about"
            onClick={() => setActiveNav("about")}
            className={
              activeNav === "about"
                ? "flex flex-col items-center text-sm font-light text-black border-b-2 border-b-Purple"
                : "flex flex-col items-center text-sm font-light text-Blue900"
            }
          >
            <PersonOutline
              name="person-outline"
              height="1rem"
              color={"#1C1C65"}
            />
            <span>About</span>
          </a>
        </li>
        <li>
          <a
            href="#projects"
            onClick={() => setActiveNav("projects")}
            className={
              activeNav === "projects"
                ? "flex flex-col items-center text-sm font-light text-black border-b-2 border-b-Purple"
                : "flex flex-col items-center text-sm font-light text-Blue900"
            }
          >
            <CodeOutline name="code-outline" height="1rem" color={"#1C1C65"} />
            <span>Projects</span>
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={() => setActiveNav("contact")}
            className={
              activeNav === "contact"
                ? "flex flex-col items-center text-sm font-light text-black border-b-2 border-b-Purple"
                : "flex flex-col items-center text-sm font-light text-Blue900"
            }
          >
            <CallOutline name="call-outline" height="1rem" color={"#1C1C65"} />
            <span>Contact</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default MobileNav;
