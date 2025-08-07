import React, { useEffect } from "react";
import Navbar from "./Navbar";
import "../stylings/Home.css";
import Introduction from "./Introduction";
import About from "./About";
import Portfolio from "./Portfolio";
import Experience from "./Experience";

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['intro', 'about', 'experience', 'portfolio'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      // Remove all active classes
      document.body.classList.remove('intro-active', 'about-active', 'experience-active', 'portfolio-active');
      
      // Find current section
      let currentSection = 'intro';
      sections.forEach(section => {
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
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar />
      <Introduction />
      <About />
      <Experience />
      <Portfolio />
    </>
  );
}
