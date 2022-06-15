import { useState } from "react";
export function useUtils() {
  const [activeNav, setActiveNav] = useState("header");
  const scroll = () => {
    const section = document.querySelectorAll("section");

    window.addEventListener("scroll", () => {
      section.forEach((section) => {
        const sectionTop = section.offsetTop-50;
        const sectionHeight = section.offsetHeight
        if (window.scrollY > sectionTop && window.scrollY <= sectionTop + sectionHeight) {
          setActiveNav(section.getAttribute("id"));
        }
      });
    });
  };
  return {
    activeNav,
    setActiveNav,
    scroll,
  };
}
