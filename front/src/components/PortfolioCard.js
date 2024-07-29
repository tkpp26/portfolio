// PortfolioCard.js
import React, { useEffect, useRef, useState } from "react";
import "../stylings/PortfolioCard.css";

// Import images
import image1 from "../assets/0.png";
import image2 from "../assets/1.png";
import image3 from "../assets/2.png";

export default function PortfolioCard() {
  const [visibleContainer, setVisibleContainer] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === containerRef.current) {
            setVisibleContainer(entry.isIntersecting);
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

  // Map images to their imports
  const images = [image1, image2, image3];
  console.log(images); // Debugging: Check if images are imported correctly

  return (
    <div
      className={`portfolio-container ${visibleContainer ? "visible" : ""}`}
      ref={containerRef}
    >
      <div className="portfolio">
        {["RecipeMaker", "NewsWeb", "Diabetes"].map((project, index) => (
          <div key={index} className="portfolio-card">
            <img
              src={images[index]}
              alt={project}
              className="portfolio-card-image"
            />
            <div className="portfolio-card-description">
              <h3>{project}</h3>
              <p>Description of {project}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
