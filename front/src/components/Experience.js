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
      title: "Ding's Lab, UC Irvine",
      role: "Undergraduate Researcher",
      duration: "June 2025 - Present",
      description:
        "Designing and implementing advanced computer vision pipelines for biological microscopy image analysis, integrating GUI-based labeling tools, multi-channel image processing, and state-of-the-art segmentation models.",
      achievements: [
        "Developed a computer vision pipeline for cytoplasm segmentation guided by nucleus localization using the Segment Anything Model (SAM)",
        "Enhanced input quality with CLAHE preprocessing, morphological edge detection, and gradient-based feature stacking to boost model sensitivity to faint boundaries",
        "Engineered a pseudo-RGB fusion technique by stacking multi-channel contrast and gradient features to enable structure-aware segmentation",
        "Built interactive Tkinter-based GUI tools with brush, eraser, and bounding-box utilities for manual refinement and automated SAM-based segmentation",
        "Implemented real-time contrast/brightness adjustment and segmentation mask editing with efficient blitting to optimize rendering performance",
        "Integrated Grounding DINO for automated object detection, applying bounding box filtering heuristics to remove false positives and overlapping detections",
        "Optimized large-scale microscopy workflows by enabling batch bounding-box generation and multi-threaded processing for speed-up",
        "Added .pkl session save/load capabilities and MATLAB export functions to support reproducible annotation workflows and downstream analysis",
        "Developed multi-channel TIFF file ingestion with automated preprocessing steps including filtering, morphology operations, and watershed segmentation",
        "Implemented geometric and intensity-based filtering algorithms to remove low-quality detections, ensuring robust segmentation in challenging datasets",
      ],
    },
    {
      id: "experience2",
      title: "Cornell University",
      role: "Break Through Tech AI Fellow",
      duration: "May 2025 - Present",
      description:
        "Selected from 3000+ applicants nationwide for a highly competitive program aimed at diversifying the field of artificial intelligence and machine learning.",
      achievements: [
        "Selected from 3000+ applicants nationwide for the Break Through Tech AI Program",
        "Completed a Machine Learning Foundations course and earned a certificate from Cornell University",
        "Participated in hands-on AI/ML projects and workshops with industry mentors",
        "Collaborated with diverse cohort of students on cutting-edge AI applications",
      ],
    },
    {
      id: "experience3",
      title: "UC Irvine",
      role: "Full-Stack Developer - Fabflix Movie Database",
      duration: "April 2025 - June 2025",
      description:
        "Built a comprehensive full-stack web application for movie database management with advanced performance optimization and cloud deployment.",
      achievements: [
        "Built full-stack web app with 3000+ lines of code using Java, JQuery, and HTML/CSS",
        "Configured AWS EC2, MySQL, and Tomcat server, and imported 50K+ movie records into the database",
        "Designed and executed ETL pipeline to parse and ingest large XML datasets",
        "Optimized backend performance by 3× using connection pooling, MySQL replication, and load balancing",
        "Containerized and deployed the app using Docker on a Kubernetes cluster across multiple AWS nodes",
      ],
    },
    {
      id: "experience4",
      title: "Headstarter",
      role: "Software Engineer Fellow",
      duration: "July 2024 - September 2024",
      description:
        "Intensive fellowship focused on building AI-powered applications and learning various frameworks through weekly projects.",
      achievements: [
        "Engaged in weekly projects to learn various frameworks and tools, including AWS, Firebase, and Next.js",
        "Built web-scraping application for 'Rate My Professor' using Selenium for automated data collection",
        "Developed a mobile application using Kotlin with modern Android development practices",
        "Collaborated with fellow engineers on multiple full-stack projects using Agile methodologies",
      ],
    },
    {
      id: "experience5",
      title: "Kasanare Corporation",
      role: "Software Engineer Intern",
      duration: "June 2023 - August 2023",
      description:
        "Enhanced AI chatbot capabilities through advanced prompt engineering and vector search optimization in Tokyo, Japan.",
      achievements: [
        "Enhanced query input processing and implemented chatbot memory to improve chatbot's accuracy",
        "Conducted repeated vector search of dataset stored using Pinecone and Langchain's agents and custom tools",
        "Optimized chatbot response quality through advanced prompt engineering techniques",
        "Collaborated with international team to integrate AI solutions into existing products",
      ],
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
          <ol>
            {experiences.map((experience, index) => (
              <li
                key={experience.id}
                id={experience.id}
                className={`${visibleSections[experience.id] ? "visible" : ""}`}
                ref={(el) => (experienceRefs.current[index] = el)}
              >
                <div className="experience-card">
                  <h3>{experience.title}</h3>
                  <div className="role-duration">
                    <div className="role">{experience.role}</div>
                    <div className="duration">{experience.duration}</div>
                  </div>
                  <p className="description">{experience.description}</p>
                  <ul className="achievements">
                    {experience.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
