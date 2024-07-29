// src/components/Portfolio.js
import React, { useEffect, useRef, useState } from "react";
import "../stylings/Portfolio.css";

// Import images
import image1 from "../assets/0.png";
import image2 from "../assets/1.png";
import image3 from "../assets/2.png";
import image4 from "../assets/3.png";

export default function Portfolio() {
  const [visibleContainer, setVisibleContainer] = useState(false);
  const [visibleCards, setVisibleCards] = useState({});
  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === containerRef.current) {
            setVisibleContainer(entry.isIntersecting);
          } else {
            setVisibleCards((prev) => ({
              ...prev,
              [entry.target.id]: entry.isIntersecting,
            }));
          }
        });
      },
      { threshold: 0.1 } // Adjust threshold as needed
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    cardRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
      cardRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  // Map images to their imports
  const images = [image1, image2, image3, image4];

  return (
    <div
      id="portfolio"
      className={`portfolio-container ${visibleContainer ? "visible" : ""}`}
      ref={containerRef}
    >
      <div className="portfolio-heading">
        <h1>Portfolio</h1>
      </div>
      <div className="portfolio">
        {[
          "RecipeMaker",
          "NewsWeb",
          "Diabetes Classification",
          "Spotify Recommendation",
        ].map((project, index) => (
          <div
            key={index}
            className={`portfolio-card ${
              visibleCards[`card${index}`] ? "visible" : ""
            }`}
            ref={(el) => (cardRefs.current[index] = el)}
            id={`card${index}`}
          >
            <img src={images[index]} alt={project} />
            <div className="portfolio-description">
              <h3>{project}</h3>
              <p>Description of {project}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
