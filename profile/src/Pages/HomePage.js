import "../App.css";
import MobileNav from "../components/MobileNav";
import Header from "../components/Header";
import Contact from "../components/Contact";
import Nav from "../components/Nav";
import About from "../components/About";
import Projects from "../components/Projects";

function HomePage() {
  return (
    <div className="flex-col items-center h-full w-full">
      <Nav />
      <MobileNav />
      <Header />
      <About />
      <Projects/>
      <Contact />
    </div>
  );
}

export default HomePage;
