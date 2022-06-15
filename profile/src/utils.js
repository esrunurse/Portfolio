import { useState } from "react";
export function useUtils() {
  const [activeNav, setActiveNav] = useState("header");
  return {
    activeNav,
    setActiveNav,
  };
}
