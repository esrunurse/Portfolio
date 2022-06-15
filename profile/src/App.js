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
  const { activeNav, setActiveNav } = useUtils();
  const section = document.querySelectorAll('section');

  window.addEventListener('scroll', () => {
    let current = '';
    section.forEach(section => {
      const sectionTop = section.offsetTop;
      if (window.scrollY > sectionTop) {
        current = section.getAttribute('id');
        setActiveNav(current);
      }
    })
  })

  return (
    <div className="flex-col items-center h-full w-full">
      <Nav activeNav={activeNav} setActiveNav={setActiveNav} />
      <MobileNav
        activeNav={activeNav}
        setActiveNav={setActiveNav}
      />
      <Header setActiveNav={setActiveNav} />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
