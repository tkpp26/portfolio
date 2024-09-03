import React, { useEffect, useRef, useState } from "react";
import ProgressBar from "./ProgressBar";
import "../stylings/Skills.css";

const skills = [
  { language: "Python", level: 70 },
  { language: "SQL", level: 60 },
  { language: "JavaScript", level: 60 },
  { language: "C++", level: 60 },
  { language: "Java", level: 20 },
  // Add more skills as needed
];

const Skills = () => {
  const [visibleContainer, setVisibleContainer] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleContainer(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 } // Adjust threshold as needed
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`skills-container ${visibleContainer ? "visible" : ""}`}
      ref={containerRef}
    >
      <h2>Programming Skills</h2>
      {skills.map((skill, index) => (
        <ProgressBar
          key={index}
          language={skill.language}
          level={skill.level}
        />
      ))}
    </div>
  );
};

export default Skills;
