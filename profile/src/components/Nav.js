import "../App.css";
import {
  HomeOutline,
  CallOutline,
  PersonOutline,
  CodeOutline,
} from "react-ionicons";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <HomeOutline name="home-outline" height="1.5rem" color={"#ffffff"} />
          <span>Home</span>
        </li>
        <li>
          <PersonOutline
            name="person-outline"
            height="1.5rem"
            color={"#1C1C65"}
          />
          <span>About</span>
        </li>
        <li>
          <CodeOutline name="code-outline" height="1.5rem" color={"#1C1C65"} />
          <span>Projects</span>
        </li>
        <li>
          <CallOutline name="call-outline" height="1.5rem" color={"#1C1C65"} />
          <span>Contact</span>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
