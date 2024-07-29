import React, { useEffect, useRef, useState } from "react";
import Skills from "./Skills";
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
          {["About Me", "Experience", "Education"].map((title, index) => (
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
                <p>
                  {title === "About Me" &&
                    `Hello! I'm Shizuka, an incoming transfer student at the University
                    of California, Irvine, majoring in Computer Science. I've had the
                    opportunity to intern with Retrieval-Augmented Generation (RAG) and
                    am currently delving into web development and machine learning.
                    Recently, I've been learning to build neural networks, especially
                    Convolutional Neural Networks (CNNs) for image classification. I'm
                    looking forward to connecting with everyone and sharing our
                    journeys!`}
                  {title === "Experience" && (
                    <>
                      <div className="timeline-section">
                        <ol className="relative border-l border-gray-700 ml-9 mb-6">
                          <li className="mb-10" data-aos="zoom-in">
                            <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-gray-900 bg-blue-900">
                              <svg
                                aria-hidden="true"
                                className="w-3 h-3 text-blue-300"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                            </span>
                            <h3 className="mb-1 text-lg font-semibold text-white">
                              Headstarter
                            </h3>
                            <p>Software Engineer Fellow</p>
                            <time className="block pt-1 pb-3 text-sm font-normal leading-none text-gray-500">
                              July 2024 - September 2024
                            </time>
                            <p className="mb-4 text-base font-normal text-gray-400">
                              During my internship at XYZ Company, I worked on
                              various web development projects, gaining valuable
                              experience in front-end technologies and
                              collaborating with a team of developers.
                            </p>
                          </li>
                          <br></br>
                          <li className="mb-10" data-aos="zoom-in">
                            <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-gray-900 bg-blue-900">
                              <svg
                                aria-hidden="true"
                                className="w-3 h-3 text-blue-300"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                            </span>
                            <h3 className="mb-1 text-lg font-semibold text-white">
                              Kasanare Corporation
                            </h3>
                            <p>Software Engineer Intern</p>
                            <time className="block pt-1 pb-3 text-sm font-normal leading-none text-gray-500">
                              August 2023 - October 2023
                            </time>
                            <p className="mb-4 text-base font-normal text-gray-400">
                              During my internship at XYZ Company, I worked on
                              various web development projects, gaining valuable
                              experience in front-end technologies and
                              collaborating with a team of developers.
                            </p>
                          </li>
                        </ol>
                      </div>
                    </>
                  )}
                  {title === "Education" && (
                    <>
                      <div className="timeline-section">
                        <ol className="relative border-l border-gray-700 ml-9 mb-6">
                          <li className="mb-10" data-aos="zoom-in">
                            <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-gray-900 bg-blue-900">
                              <svg
                                aria-hidden="true"
                                className="w-3 h-3 text-blue-300"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                            </span>
                            <h3 className="mb-1 text-lg font-semibold text-white">
                              University of California, Irvine
                            </h3>
                            <p>BS in Computer Science</p>
                            <time className="block pt-1 pb-3 text-sm font-normal leading-none text-gray-500">
                              September 2024 - Present
                            </time>
                            <p className="mb-4 text-base font-normal text-gray-400">
                              Relevant Coursework: Database Management,
                              Introduction to Machine Learning
                            </p>
                          </li>
                          <br></br>
                          <li className="mb-10" data-aos="zoom-in">
                            <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-gray-900 bg-blue-900">
                              <svg
                                aria-hidden="true"
                                className="w-3 h-3 text-blue-300"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                            </span>
                            <h3 className="mb-1 text-lg font-semibold text-white">
                              Diablo Valley College
                            </h3>
                            <p>AS in Computer Science and Mathematics</p>
                            <time className="block pt-1 pb-3 text-sm font-normal leading-none text-gray-500">
                              January 2022 - May 2024
                            </time>
                            <p className="mb-4 text-base font-normal text-gray-400">
                              Relevant Coursework: Object Oriented Programming,
                              Data Structure and Algorithms
                            </p>
                          </li>
                        </ol>
                      </div>
                    </>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Skills />
      </div>
    </div>
  );
}
