import React, { useState } from "react";
import "../stylings/Portfolio.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

// images
import image1 from "../assets/0.png";
import image2 from "../assets/1.gif";
import image3 from "../assets/2.png";
import image4 from "../assets/3.png";
import image5 from "../assets/4.png";
import minmax from "../assets/5.png";
import moodtracker from "../assets/6.png";
import newsWeb from "../assets/7.png";

export default function Portfolio() {
  const projects = [
    {
      title: "Clothing Recommendation System",
      github: "https://github.com/khmorad/clothingRecommendationApp/tree/main",
      demo: "https://www.youtube.com/watch?v=P2Y8-JbCPIk",
      description:
        "AI-powered clothing recommender that uses ResNet50 for feature extraction and cosine similarity to suggest visually similar clothing items. Built using a dataset of over 10,000 high-resolution fashion images (VITON HD) and integrated with Google Cloud for image hosting. Users can upload images of clothing items to get top-10 similar recommendations. Features a React-based interactive UI and a Flask backend serving ML predictions.",
      technologies: [
        "React",
        "Flask",
        "Python",
        "TensorFlow",
        "ResNet50",
        "Google Cloud Storage",
        "OpenCV",
        "HTML",
        "CSS",
        "JavaScript",
      ],
      image: image4,
    },
    {
      title: "Mood Stabilizer",
      github: "https://github.com/khmorad/Mood-Tracker",
      description:
        "A full-stack journaling app designed to help users track and manage their emotional well-being with AI-powered prompts, text-to-speech, and secure authentication. Built with a Next.js frontend and FastAPI backend, backed by MySQL on AWS for 99.9% uptime.",
      technologies: [
        "Next.js",
        "TypeScript",
        "FastAPI",
        "MySQL",
        "AWS",
        "Gemini API",
        "OpenAI API",
        "FastAPI",
      ],
      image: moodtracker,
      demo: "https://mood-tracker-rosy.vercel.app/",
    },
    {
      title: "RecipeMaker AI",
      github: "https://github.com/khmorad/recipeMakerAI",
      demo: "https://www.youtube.com/watch?v=erw31rS5tag",
      website: "https://recepie-maker-ai.vercel.app/",
      description:
        "A full-stack recipe generation web app that lets users input ingredients or upload photos for ingredient detection using a fine-tuned VGG-16 CNN model. Integrates Flask and TensorFlow for object detection, the Edamam API for recipe retrieval, and the OpenAI API for time and calorie estimates. Features a React frontend with real-time search, image upload, and responsive design.",
      technologies: [
        "React",
        "Flask",
        "TensorFlow",
        "VGG-16",
        "OpenAI API",
        "Edamam API",
        "HTML",
        "CSS",
        "JavaScript",
      ],
      image: image3,
    },
    {
      title: "Diabetes Risk Prediction Model",
      github: "https://github.com/tkpp26/Diabetes-Classification",
      colab:
        "https://colab.research.google.com/drive/1csXvpUAIGlWY8na0sDJoLn-MRuGZwIjY?usp=sharing",
      description:
        "Ensemble model with careful preprocessing and feature engineering.",
      technologies: [
        "Python",
        "Scikit-learn",
        "Pandas",
        "Matplotlib",
        "Jupyter",
      ],
      image: image2,
    },
    {
      title: "Minimax & Alpha–Beta Visualization",
      github: "https://github.com/khmorad/minimax-alpha-beta-visualizer", // replace with actual repo link
      demo: "https://www.youtube.com/watch?v=XXXXX", // replace with actual demo link if any
      description:
        "An interactive visualization tool for learning and understanding the Minimax and Alpha–Beta pruning algorithms in game theory. Users can step through each stage of the algorithm, view α/β values directly on nodes, and switch between standard Minimax and Alpha–Beta pruning modes. Built with React and D3.js for dynamic graph rendering, the app helps users visually grasp decision-making processes in adversarial search.",
      technologies: ["React", "JavaScript", "D3.js", "HTML", "CSS"],
      image: minmax,
    },
    {
      title: "NewsWeb",
      github: "https://github.com/tkpp26/NewsWeb",
      demo: "https://www.youtube.com/watch?v=XXXXX",
      description:
        "A news application developed using JavaScript, HTML, and CSS. It leverages the NewsAPI to display recent news articles across various categories, allowing users to select their interests.",
      technologies: ["JavaScript", "HTML", "CSS", "NewsAPI"],
      image: newsWeb,
    },
  ];

  // track which cards are expanded
  const [expanded, setExpanded] = useState(() => projects.map(() => false));
  const toggle = (idx) =>
    setExpanded((prev) => prev.map((v, i) => (i === idx ? !v : v)));

  const externalFor = (p) => p.demo || p.website || p.colab;

  return (
    <section id="portfolio" className="pf-container" aria-labelledby="pf-title">
      <header className="pf-heading">
        <h2 id="pf-title">Projects</h2>
        <p className="pf-sub">A tiny gallery of things I’ve built.</p>
      </header>

      <div className="pf-grid">
        {projects.map((p, i) => (
          <article key={i} className="pf-card">
            {/* top-right icon actions */}
            <div className="pf-actions" aria-label="Project links">
              {p.github && (
                <a
                  className="pf-iconbtn"
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  title="GitHub"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              )}
              {externalFor(p) && (
                <a
                  className="pf-iconbtn"
                  href={externalFor(p)}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open"
                  title="Open"
                >
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              )}
            </div>

            <div className="pf-media">
              <img loading="lazy" src={p.image} alt={p.title} />
            </div>

            <div className="pf-body">
              <h3 className="pf-title">{p.title}</h3>

              <p className={`pf-desc ${expanded[i] ? "expanded" : ""}`}>
                {p.description}
              </p>

              <button
                className="pf-morebtn"
                onClick={() => toggle(i)}
                aria-expanded={expanded[i]}
                aria-controls={`desc-${i}`}
              >
                {expanded[i] ? "View less" : "View more"}
              </button>

              {p.technologies?.length > 0 && (
                <ul className="pf-tags" aria-label="Tech stack">
                  {p.technologies.map((t, idx) => (
                    <li key={idx} className="pf-tag">
                      {t}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
