import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "../stylings/Home.css";
import Introduction from "./Introduction";
import About from "./About";
import Portfolio from "./Portfolio";
import Experience from "./Experience";
import Contact from "./Contact";

export default function Home() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    document.body.classList.toggle('dark-space-theme', !isDarkTheme);
  };

  useEffect(() => {
    // Apply theme class to body on component mount
    if (isDarkTheme) {
      document.body.classList.add('dark-space-theme');
    } else {
      document.body.classList.remove('dark-space-theme');
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('dark-space-theme');
    };
  }, [isDarkTheme]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["intro", "about", "experience", "portfolio"];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      // Remove all active classes
      document.body.classList.remove(
        "intro-active",
        "about-active",
        "experience-active",
        "portfolio-active"
      );

      // Find current section
      let currentSection = "intro";
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + rect.height;

          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            currentSection = section;
          }
        }
      });

      // Add active class for current section
      document.body.classList.add(`${currentSection}-active`);
    };

    // Initial call
    handleScroll();

    // Add scroll listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
      <Introduction isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
    </>
  );
}
