import React from "react";
import "../stylings/Portfolio.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

// images
import image1 from "../assets/0.png";
import image2 from "../assets/1.png";
import image3 from "../assets/2.png";
import image4 from "../assets/3.png";
import image5 from "../assets/4.png";

export default function Portfolio() {
  const projects = [
    {
      title: "AI Customer Support Chatbot",
      github: "https://github.com/tkpp26/ai-customer-support",
      demo: "https://ai-customer-support-demo.vercel.app",
      description:
        "Next.js + GPT with retrieval for instant answers, memory, and analytics.",
      technologies: ["Next.js", "OpenAI API", "Pinecone", "RAG", "Vercel"],
      image: image1,
    },
    {
      title: "AI Flashcard SaaS",
      github: "https://github.com/tkpp26/ai-flashcards",
      website: "https://ai-flashcards-saas.vercel.app",
      description:
        "Generate spaced-repetition flashcards from any text; includes Stripe.",
      technologies: ["React", "Firebase", "OpenAI", "Stripe", "Material-UI"],
      image: image2,
    },
    {
      title: "Clothing Recommendation System",
      github: "https://github.com/khmorad/clothingRecommendationApp/tree/main",
      demo: "https://www.youtube.com/watch?v=P2Y8-JbCPIk",
      description:
        "ResNet-based image similarity for look-alike clothing recommendations.",
      technologies: ["Python", "TensorFlow", "OpenCV", "React", "Flask"],
      image: image4,
    },
    {
      title: "AI Recipe Generator",
      github: "https://github.com/khmorad/recipeMakerAI",
      demo: "https://www.youtube.com/watch?v=erw31rS5tag",
      website: "https://recepie-maker-ai.vercel.app/",
      description:
        "Creates recipes from pantry items with time & calorie estimates.",
      technologies: ["React", "OpenAI API", "Node.js", "MongoDB", "Vercel"],
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
      image: image5,
    },
  ];

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
              <p className="pf-desc">{p.description}</p>

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
