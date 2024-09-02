import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import "../stylings/Introduction.css";

export default function Introduction() {
  const [index, setIndex] = useState(0); // State to track the index
  const [isVisible, setIsVisible] = useState({ card: false, linksCard: false }); // State to track visibility
  const typingRef = useRef(null); // Reference to the h1 element
  const cardRef = useRef(null); // Reference to the card element
  const linksCardRef = useRef(null); // Reference to the links card element
  const text = "Hi, I'm Shizuka"; // Text to display

  useEffect(() => {
    // Typing function
    const type = () => {
      if (index < text.length) {
        typingRef.current.textContent += text.charAt(index); // Append next character
        setIndex((prevIndex) => prevIndex + 1); // Increment index
      }
    };

    const typingTimeout = setTimeout(type, 100); // Call type function after delay

    // Cleanup function
    return () => {
      clearTimeout(typingTimeout); // Clear the timeout if component unmounts
    };
  }, [index]); // Depend on index to update the effect

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const { target } = entry;
            if (target === cardRef.current) {
              setIsVisible((prev) => ({ ...prev, card: true }));
            } else if (target === linksCardRef.current) {
              setIsVisible((prev) => ({ ...prev, linksCard: true }));
            }
            observer.unobserve(target); // Optionally stop observing after becoming visible
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    if (linksCardRef.current) {
      observer.observe(linksCardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
      if (linksCardRef.current) {
        observer.unobserve(linksCardRef.current);
      }
    };
  }, []);

  return (
    <div id="intro" className="introduction">
      <div ref={cardRef} className={`card ${isVisible.card ? "visible" : ""}`}>
        <div className="typing-container">
          <h1 ref={typingRef}></h1>
        </div>
      </div>

      {/* Links Container inside Introduction */}
      <div
        ref={linksCardRef}
        className={`links-container ${isVisible.linksCard ? "visible" : ""}`}
      >
        <div className="links-card">
          <div className="links">
            <a
              href="https://www.linkedin.com/in/shizukatakao"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} className="icon" />
              LinkedIn
            </a>
            <a
              href="https://github.com/tkpp26"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} className="icon" />
              GitHub
            </a>
            <a
              href="https://drive.google.com/file/d/1MZAc8kKZ0zAYZF37lEjNYc6CjOb4Npjr/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFileAlt} className="icon" />
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
