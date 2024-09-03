// Technologies.js
import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPython,
  faJsSquare,
  faCss3Alt,
  faHtml5,
  faReact,
  faNodeJs,
  faDocker,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faFlask,
  faCodeBranch,
  faServer,
} from "@fortawesome/free-solid-svg-icons";
import "../stylings/Technologies.css";

const technologies = [
  { name: "Python", icon: faPython },
  { name: "SQL", icon: faDatabase },
  { name: "JavaScript", icon: faJsSquare },
  { name: "React", icon: faReact },
  { name: "HTML5", icon: faHtml5 },
  { name: "CSS3", icon: faCss3Alt },
  { name: "Node.js", icon: faNodeJs },
  { name: "Docker", icon: faDocker },
  { name: "Git", icon: faGitAlt },
];

const Technologies = () => {
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
      className={`tech-icons-container ${visibleContainer ? "visible" : ""}`}
      ref={containerRef}
    >
      <h1>Technologies</h1>
      <div className="tech-icons">
        {technologies.map((tech, index) => (
          <div key={index} className="tech-icon">
            <FontAwesomeIcon icon={tech.icon} size="3x" />
            <p>{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
