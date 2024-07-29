import React, { useEffect, useRef, useState } from "react";
import "../stylings/Experience.css";

export default function Experience() {
  const [visibleSections, setVisibleSections] = useState({});
  const experienceRefs = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === containerRef.current) {
            setVisibleSections((prev) => ({
              ...prev,
              container: entry.isIntersecting,
            }));
          } else {
            setVisibleSections((prev) => ({
              ...prev,
              [entry.target.id]: entry.isIntersecting,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    experienceRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
      experienceRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  const experiences = [
    {
      id: "experience1",
      title: "Headstarter",
      role: "Software Engineer Fellow",
      duration: "July 2024 - September 2024",
      description:
        "During my internship at Headstarter, I worked on various web development projects, gaining valuable experience in front-end technologies and collaborating with a team of developers.",
    },
    {
      id: "experience2",
      title: "Kasanare Corporation",
      role: "Software Engineer Intern",
      duration: "August 2023 - October 2023",
      description:
        "At Kasanare Corporation, I gained hands-on experience in front-end development, working closely with the team to implement features and enhance the user experience.",
    },
  ];

  return (
    <div
      id="experience"
      className={`experience-section ${
        visibleSections.container ? "visible" : ""
      }`}
      ref={containerRef}
    >
      <div className="wrapper-container">
        <h1>Experience</h1>
        <div className="timeline-section">
          <ol className="relative">
            {experiences.map((experience, index) => (
              <li
                key={experience.id}
                id={experience.id}
                className={`mb-10 ${
                  visibleSections[experience.id] ? "visible" : ""
                }`}
                data-aos="zoom-in"
                ref={(el) => (experienceRefs.current[index] = el)}
              >
                <h3 className="mb-1 text-lg font-semibold text-white">
                  {experience.title}
                </h3>
                <p>
                  {experience.role} <br /> {experience.duration}
                </p>
                <p className="mb-4 text-base font-normal text-gray-400">
                  {experience.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
