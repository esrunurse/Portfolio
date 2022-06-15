import Header from "./components/Header";
import Nav from "./components/Nav";
import MobileNav from "./components/MobileNav";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";
import { useUtils } from "./utils";
import { useEffect } from "react";

function App() {
  const { activeNav, setActiveNav, scroll} = useUtils();
  useEffect(() => {
    scroll();
  });
  return (
    <div className="flex-col items-center h-full w-full">
      <Nav activeNav={activeNav} setActiveNav={setActiveNav} />
      <MobileNav activeNav={activeNav} setActiveNav={setActiveNav} />
      <Header setActiveNav={setActiveNav} />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
