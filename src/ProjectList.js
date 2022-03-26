import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";

const project = [
  {
    name: "Notes App",
    thumbnail: "./media/notes.png",
    copy: "A CRUD application to store and edit notes using React and TailwindCSS.",
    caseStudy: "/Notes",
    link: "https://awesome-lamport-4fcaff.netlify.app/",
    github: "https://github.com/hellodeborahuk/coding-notebook",
  },
  {
    name: "React Weather App",
    thumbnail: "./media/react-weather.png",
    copy: "A weather app built with React and API intergration for my SheCodes Workshop project.",
    caseStudy: "/WeatherApp",
    link: "https://ecstatic-swartz-7b404c.netlify.app/",
    github: "https://github.com/hellodeborahuk/react-weather-app",
  },
  {
    name: "Ayurveda Dosha Quiz",
    thumbnail: "./media/dosha-quiz.png",
    copy: "I created a quiz from scratch to implement what I've learnt about React.",
    caseStudy: "/Dosha",
    link: "https://cranky-curran-3d406a.netlify.app/",
    github: "https://github.com/hellodeborahuk/dosha-quiz",
  },
  {
    name: "Tic Tac Toe Game",
    thumbnail: "./media/tictactoe.png",
    copy: "A simple tic tac toe game build using React.",
    link: "https://happy-bartik-7e504a.netlify.app/",
    github: "https://github.com/hellodeborahuk/tic-tac-toe",
  },
  {
    name: "Recipe Search",
    thumbnail: "./media/recipe-search.png",
    copy: "A recipe search website using React and API intergration.",
    link: "https://jolly-ride-611c10.netlify.app/",
    github: "https://github.com/hellodeborahuk/recipe-app",
  },
  {
    name: "Dictionary",
    thumbnail: "./media/dictionary.png",
    copy: "A dictionary built with React and API intergration for my SheCodes Workshop project.",
    link: "https://relaxed-stonebraker-528b23.netlify.app/",
    github: "https://github.com/hellodeborahuk/dictionary-project",
  },
  {
    name: "Breathing Animation",
    thumbnail: "./media/breathing-app.png",
    copy: "A simple breathing app using html and css animation.",
    link: "https://codepen.io/hellodeborahuk/full/xxRaRKO",
  },
];

function Project({ maxItems }) {
  return (
    <div className="container mx-auto mb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
      {project.slice(0, maxItems).map(function (project, index) {
        return (
          <div
            key={index}
            className="
                bg-orange-50
                rounded-lg
                shadow-lg
                              "
          >
            <div className="w-full h-48 relative">
              <img
                src={project.thumbnail}
                alt={project.name}
                className="rounded-t-lg absolute h-full w-full object-cover"
              />
             
            </div>

            <div className="px-6 pt-6 pb-4">
              <h1 className="font-bold mb-2 text-xl text-teal-800">
                {project.name}
              </h1>
              <p className="text-teal-700 mb-3">{project.copy}</p>
              {!project.caseStudy ? (
                ""
              ) : (
                <div className="flex justify-center mb-3">
                  <a
                    href={project.caseStudy}
                    className="px-10
              py-2
              rounded
              shadow-lg
              hover:shadow-2xl
              bg-gradient-to-br
              from-teal-600
              to-teal-800
              hover:from-teal-800 hover:to-teal-600
              text-teal-50
              tracking-wide
              font-bold
              transition
              duration-500"
                  >
                    Case study
                  </a>
                </div>
              )}
            </div>
            <div className="flex mb-4 m-auto justify-evenly w-1/2">
              <p className="text-3xl font-bold text-orange-400">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="link to live website"
                >
                  <FaLink
                    className="transform
                transition
                duration-500
                hover:scale-110"
                  />
                </a>
              </p>
              {!project.github ? (
                ""
              ) : (
                <p className="text-3xl font-bold text-orange-400">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="link to project on github"
                  >
                    <FaGithub
                      className="transform
                transition
                duration-500
                hover:scale-110"
                    />
                  </a>
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Project;
