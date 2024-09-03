import React, { useEffect, useRef, useState } from "react";
import Skills from "./Skills";
import Technologies from "./Technologies";
import "../stylings/About.css";

export default function About() {
  const [visibleSections, setVisibleSections] = useState({});
  const aboutRefs = useRef([]);
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

    aboutRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
      aboutRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <div
      id="about"
      className={`about-container ${
        visibleSections.container ? "visible" : ""
      }`}
      ref={containerRef}
    >
      <div className="about-content">
        <div className="about-sections">
          {["About Me", "Education"].map((title, index) => (
            <div
              key={index}
              className={`about-section ${
                visibleSections[`section${index}`] ? "visible" : ""
              }`}
              ref={(el) => (aboutRefs.current[index] = el)}
              id={`section${index}`}
            >
              <div className="about-card">
                <h2>{title}</h2>
                {title === "About Me" && (
                  <p>
                    Hello! I'm Shizuka Takao, an incoming transfer student at
                    the University of California, Irvine, majoring in Computer
                    Science. I've had the opportunity to intern with
                    Retrieval-Augmented Generation (RAG) and am currently
                    delving into web development and machine learning. Recently,
                    I've been learning to build neural networks, especially
                    Convolutional Neural Networks (CNNs) for image
                    classification. I'm looking forward to connecting with
                    everyone and sharing our journeys!
                  </p>
                )}
                {title === "Education" && (
                  <div className="education-timeline-section">
                    <ol className="relative border-l border-gray-700 ml-9 mb-6">
                      <li className="mb-10" data-aos="zoom-in">
                        <h3 className="mb-1 text-lg font-semibold text-white">
                          University of California, Irvine
                        </h3>
                        <p>BS in Computer Science</p>
                        <time className="block pt-1 pb-3 text-sm font-normal leading-none text-gray-500">
                          September 2024 - Present
                        </time>
                        <p className="mb-4 text-base font-normal text-gray-400">
                          Relevant Coursework: Database Management, Introduction
                          to Machine Learning
                        </p>
                      </li>
                      <br></br>
                      <li className="mb-10" data-aos="zoom-in">
                        <h3 className="mb-1 text-lg font-semibold text-white">
                          Diablo Valley College
                        </h3>
                        <p>AS in Computer Science and Mathematics</p>
                        <time className="block pt-1 pb-3 text-sm font-normal leading-none text-gray-500">
                          January 2022 - May 2024
                        </time>
                        <p className="mb-4 text-base font-normal text-gray-400">
                          Relevant Coursework: Object Oriented Programming, Data
                          Structure and Algorithms
                        </p>
                      </li>
                    </ol>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="technical-skills">
          <Technologies />
          <Skills />
        </div>
      </div>
    </div>
  );
}
