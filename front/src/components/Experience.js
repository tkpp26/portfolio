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
      title: "Headstarter AI",
      role: "Software Engineer Fellow",
      duration: "July 2024 - September 2024",
      description: "Intensive 7-week fellowship focused on building AI-powered applications and gaining real-world software engineering experience.",
      achievements: [
        "Built 5+ AI apps and APIs using React, Next.js, Firebase, and various AI models",
        "Developed a customer service AI chatbot with 98% accuracy using RAG and OpenAI",
        "Created an AI-powered flashcard SaaS with Stripe payments and user authentication",
        "Collaborated with 4+ engineers in weekly team projects using Agile methodologies",
        "Deployed applications to production serving 1000+ users with 99% uptime"
      ]
    },
    {
      id: "experience2",
      title: "Kasanare Corporation",
      role: "Software Engineer Intern",
      duration: "August 2023 - October 2023",
      description: "Focused on enhancing AI chatbot capabilities through advanced prompt engineering and vector search optimization.",
      achievements: [
        "Enhanced chatbot accuracy by 35% through prompt engineering techniques including Zero-Shot and Chain-of-Thought prompting",
        "Implemented vector search optimization using Pinecone and LangChain, reducing query response time by 40%",
        "Developed chatbot memory functionality and sentiment analysis using OpenAI API",
        "Conducted A/B testing on different prompting strategies to optimize user experience",
        "Collaborated with cross-functional teams to integrate AI solutions into existing products"
      ]
    }
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
                className={`${
                  visibleSections[experience.id] ? "visible" : ""
                }`}
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