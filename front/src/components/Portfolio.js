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

  // Updated projects with more detailed descriptions
  const projects = [
    {
      title: "AI Customer Support Chatbot",
      github: "https://github.com/tkpp26/ai-customer-support",
      demo: "https://ai-customer-support-demo.vercel.app",
      description:
        "Intelligent customer service chatbot built with Next.js, OpenAI GPT-4, and RAG architecture. Features real-time responses, conversation memory, and 98% accuracy in handling customer queries.",
      technologies: ["Next.js", "OpenAI API", "Pinecone", "RAG", "Vercel"],
    },
    {
      title: "AI Flashcard SaaS",
      github: "https://github.com/tkpp26/ai-flashcards",
      website: "https://ai-flashcards-saas.vercel.app",
      description:
        "SaaS platform that generates intelligent flashcards from any text using AI. Includes spaced repetition algorithms, progress tracking, and Stripe payment integration.",
      technologies: ["React", "Firebase", "OpenAI", "Stripe", "Material-UI"],
    },
    {
      title: "Clothing Recommendation System",
      github: "https://github.com/khmorad/clothingRecommendationApp/tree/main",
      demo: "https://www.youtube.com/watch?v=P2Y8-JbCPIk",
      description:
        "ML-powered clothing recommendation engine using CNNs for image analysis. Features image segmentation, similarity matching, and personalized recommendations based on user preferences.",
      technologies: ["Python", "TensorFlow", "OpenCV", "React", "Flask"],
    },
    {
      title: "AI Recipe Generator",
      github: "https://github.com/khmorad/recipeMakerAI",
      demo: "https://www.youtube.com/watch?v=erw31rS5tag",
      website: "https://recepie-maker-ai.vercel.app/",
      description:
        "Smart recipe generator that creates personalized recipes based on available ingredients, dietary restrictions, and preferences using OpenAI's GPT models.",
      technologies: ["React", "OpenAI API", "Node.js", "MongoDB", "Vercel"],
    },
    {
      title: "Diabetes Risk Prediction Model",
      github: "https://github.com/tkpp26/Diabetes-Classification",
      colab:
        "https://colab.research.google.com/drive/1csXvpUAIGlWY8na0sDJoLn-MRuGZwIjY?usp=sharing",
      description:
        "Machine learning model for diabetes risk assessment using ensemble methods. Achieved 94% accuracy with comprehensive data preprocessing and feature engineering.",
      technologies: [
        "Python",
        "Scikit-learn",
        "Pandas",
        "Matplotlib",
        "Jupyter",
      ],
    },
  ];

  const images = [image1, image2, image4, image3, image5];

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
    // Animation logic can be added here if needed
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
          ‹
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
                    {project.technologies && (
                      <div className="tech-stack">
                        <small>
                          <strong>Tech Stack:</strong>{" "}
                          {project.technologies.join(", ")}
                        </small>
                      </div>
                    )}
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
                          Live Site
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
          ›
        </button>
      </div>

      {/* Progress indicator */}
      <div className="progress-indicator">
        {Array.from({ length: totalPages }, (_, index) => (
          <div
            key={index}
            className={`progress-dot ${index === currentPage ? "active" : ""}`}
            onClick={() => setCurrentPage(index)}
          />
        ))}
      </div>
    </div>
  );
}
