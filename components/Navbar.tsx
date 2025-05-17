"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const sections = [
    {name: "hero", label: "Home"},
    {name: "about", label: "About"},
    {name: "projects", label: "Projects"},
    {name: "contact", label: "Contact"}
];

export default function Navbar(){
    const [activeSection, setActiveSection] = useState("hero");
    const { scrollYProgress } = useScroll();

    const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

      useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section.name);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.name);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (sectionName: string) => {
    document.getElementById(sectionName)?.scrollIntoView({ behavior: "smooth" });
  };

   return (
    <motion.nav
      style={{ opacity }}
      className="fixed left-50 top-4/6 transform -translate-y-1/2 z-50 hidden xl:block"
    >
      <ul className="space-y-6">
        {sections.map((section) => (
          <li key={section.name}>
            <button
              onClick={() => handleClick(section.name)}
              className={`flex items-center transition-all ${
                activeSection === section.name
                  ? "font-semibold text-accent scale-110"
                  : "font-light text-text hover:text-accent"
              }`}
            >
              <span className="mr-2">-</span>
              {section.label}
            </button>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}