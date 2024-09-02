import React, { useState, useEffect, useRef } from "react";
import "../stylings/Portfolio.css";

// Import images
import image1 from "../assets/0.png";
import image2 from "../assets/1.png";
import image3 from "../assets/2.png";
import image4 from "../assets/3.png";
import image5 from "../assets/4.png";

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState(0);
  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  // Define projects with links
  const projects = [
    {
      title: "Spotify Recommendation",
      github: "https://github.com/yourusername/spotify-recommendation",
      demo: "https://yourdemo.com/spotify-recommendation",
      website: "https://yourwebsite.com/spotify-recommendation",
      description:
        "An application that recommends music based on user preferences.",
    },
    {
      title: "Clothing Recommender",
      github: "https://github.com/khmorad/clothingRecommendationApp/tree/main",
      demo: "https://www.youtube.com/watch?v=P2Y8-JbCPIk",
      website: "https://yourwebsite.com/spotify-recommendation",
      description:
        "Designed to help users discover clothing items that are similar to their favorite clothing items.",
    },
    {
      title: "RecipeMaker",
      github: "https://github.com/khmorad/recipeMakerAI",
      demo: "https://www.youtube.com/watch?v=erw31rS5tag",
      website: "https://recepie-maker-ai.vercel.app/",
      description:
        "Generates recipes based on available ingredients and user preferences.",
    },
    {
      title: "Diabetes Classification",
      github: "https://github.com/tkpp26/Diabetes-Classification",
      colab:
        "https://colab.research.google.com/drive/1csXvpUAIGlWY8na0sDJoLn-MRuGZwIjY?usp=sharing",
      description:
        "A model to classify diabetes based on patient data using machine learning.",
    },
    {
      title: "NewsWeb",
      github: "https://github.com/tkpp26/newsWeb",
      demo: "https://yourdemo.com/news-web",
      description:
        "A web application for aggregating and displaying news articles.",
    },
  ];

  const images = [image5, image4, image3, image2, image1];

  const cardsPerPage = 4;
  const totalPages = Math.ceil(projects.length / cardsPerPage);

  const startIndex = currentPage * cardsPerPage;
  const endIndex = Math.min(startIndex + cardsPerPage, projects.length);

  const currentProjects = projects.slice(startIndex, endIndex);
  const currentImages = images.slice(startIndex, endIndex);

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    // IntersectionObserver logic here if needed
  }, [currentPage]);

  return (
    <div id="portfolio" className="portfolio-container" ref={containerRef}>
      <div className="portfolio-heading">
        <h1>Portfolio</h1>
      </div>
      <div className="portfolio-slider">
        <button
          className="slider-control prev"
          onClick={handlePrevPage}
          disabled={currentPage === 0}
        >
          &lt;
        </button>
        <div className="portfolio">
          {currentProjects.length > 0 ? (
            currentProjects.map((project, index) => {
              const cardIndex = startIndex + index;
              const imageIndex = index;

              return (
                <div
                  key={cardIndex}
                  className="portfolio-card"
                  ref={(el) => {
                    cardRefs.current[cardIndex] = el;
                  }}
                  id={`card${cardIndex}`}
                >
                  <img src={currentImages[imageIndex]} alt={project.title} />
                  <div className="portfolio-description">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="portfolio-links">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          GitHub
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Demo
                        </a>
                      )}
                      {project.website && (
                        <a
                          href={project.website}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Website
                        </a>
                      )}
                      {project.colab && (
                        <a
                          href={project.colab}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Colab
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p>No projects to display</p>
          )}
        </div>
        <button
          className="slider-control next"
          onClick={handleNextPage}
          disabled={currentPage === totalPages - 1}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
