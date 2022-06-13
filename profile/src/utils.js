import { useState } from "react";
export function useUtils() {
  const [activeNav, setActiveNav] = useState("header");
  function scroll() {
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
  }
  return {
    activeNav,
    setActiveNav,
    scroll
  };
}
