import React from "react";
import "../stylings/Experience.css";

export default function Experience() {
  return (
    <div className="experience-section">
      <div className="timeline-section">
        <h2 className="text-2xl font-semibold text-white mb-4">
          Professional Experience
        </h2>
        <ol className="relative border-l border-gray-700 ml-9 mb-6">
          <li className="mb-10" data-aos="zoom-in">
            <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-gray-900 bg-blue-900">
              <svg
                aria-hidden="true"
                className="w-3 h-3 text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold text-white">
              Headstarter
            </h3>
            <p>Software Engineer Fellow</p>
            <time className="block pt-1 pb-3 text-sm font-normal leading-none text-gray-500">
              July 2024 - September 2024
            </time>
            <p className="mb-4 text-base font-normal text-gray-400">
              During my internship at Headstarter, I worked on various web
              development projects, gaining valuable experience in front-end
              technologies and collaborating with a team of developers.
            </p>
          </li>
          <br></br>
          <li className="mb-10" data-aos="zoom-in">
            <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-gray-900 bg-blue-900">
              <svg
                aria-hidden="true"
                className="w-3 h-3 text-blue-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold text-white">
              Kasanare Corporation
            </h3>
            <p>Software Engineer Intern</p>
            <time className="block pt-1 pb-3 text-sm font-normal leading-none text-gray-500">
              August 2023 - October 2023
            </time>
            <p className="mb-4 text-base font-normal text-gray-400">
              At Kasanare Corporation, I gained hands-on experience in front-end
              development, working closely with the team to implement features
              and enhance the user experience.
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
}
