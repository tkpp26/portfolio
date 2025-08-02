import React, { useEffect, useRef, useState } from "react";
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

  const skills = [
    "Python", "JavaScript", "React", "Node.js", "SQL", "MongoDB", 
    "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy",
    "AWS", "Docker", "Git", "REST APIs", "Machine Learning",
    "Data Analysis", "Computer Vision", "NLP"
  ];

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
          <div
            className={`about-section ${
              visibleSections.section0 ? "visible" : ""
            }`}
            ref={(el) => (aboutRefs.current[0] = el)}
            id="section0"
          >
            <div className="about-card">
              <h2>About Me</h2>
              <p>
                Hello! I'm Shizuka, a Computer Science student at UC Irvine with a passion for 
                machine learning and software development. I love building intelligent systems 
                that solve real-world problems, from clothing recommendation engines using CNNs 
                to RAG-powered chatbots.
              </p>
              <p>
                My journey spans from data science internships to full-stack development, 
                always with an eye for creating user-friendly, impactful solutions. I'm 
                particularly drawn to the intersection of AI and practical applications.
              </p>
              <div className="capybara-note">
                🌸 Currently plotting a peaceful side quest as a Pilates instructor because 
                balance is key (literally!). When I'm not debugging code, you'll find me 
                admiring capybaras - they're the zen masters of the animal kingdom! 🧘‍♀️
              </div>
            </div>
          </div>

          <div
            className={`about-section ${
              visibleSections.section1 ? "visible" : ""
            }`}
            ref={(el) => (aboutRefs.current[1] = el)}
            id="section1"
          >
            <div className="about-card">
              <h2>Education</h2>
              <div className="education-timeline">
                <div className="timeline-item">
                  <h3>University of California, Irvine</h3>
                  <div className="degree">BS in Computer Science</div>
                  <div className="duration">September 2024 - Present</div>
                  <div className="coursework">
                    Relevant Coursework: Data Structures & Algorithms, Software Engineering, 
                    Machine Learning, Database Systems
                  </div>
                </div>
                <div className="timeline-item">
                  <h3>Diablo Valley College</h3>
                  <div className="degree">AS in Computer Science and Mathematics</div>
                  <div className="duration">January 2022 - May 2024</div>
                  <div className="coursework">
                    Relevant Coursework: Object Oriented Programming, Data Structures, 
                    Calculus, Linear Algebra, Statistics
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="technical-skills">
          <div className="about-card">
            <h2>Technical Skills</h2>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-tag">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}