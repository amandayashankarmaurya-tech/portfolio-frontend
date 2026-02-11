import React from "react";
import weather from "../assets/wether.png";
import digital from "../assets/digital.png";
import titorial from "../assets/titorial.png";
import typic from "../assets/typic.png";

const projects = [
  {
    title: "Weather Application",
    description:
      "A responsive weather app that shows real-time weather data using public APIs with search functionality.",
    tech: ["HTML", "CSS", "JavaScript", "API"],
    image: weather,
    link: "https://github.com/amandayashankarmaurya-tech/Digital-Clock.git",
    live: "https://your-weather-app.onrender.com",
  },
  {
    title: "Typing Master Practice App",
    description:
      "A typing practice app to improve typing speed and accuracy with timer and WPM calculation.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: typic,
    link: "https://github.com/amandayashankarmaurya-tech/TypicMaster.git",
    live: "#",
  },
  {
    title: "DigitalClock Application",
    description:
      "A live digital clock application displaying real-time hours, minutes, and seconds with clean UI.",
    tech: ["React", "JavaScript", "Tailwind CSS"],
    image: digital,
    link: "https://github.com/amandayashankarmaurya-tech/Digital-Clock.git",
    live: "#",
  },
  {
    title: "Online Tutorial Website",
    description:
      "A MERN-based online learning platform with authentication, courses, videos, and progress tracking.",
    tech: ["React", "Node", "MongoDB"],
    image: titorial,
    link: "#",
    live: "#",
    
  },
];

const Projects = () => {
  return (
    <section className="py-20 bg-slate-100" id="projects">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Projects
        </h2>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 flex flex-col overflow-hidden"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>

                <p className="text-gray-600 text-sm flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="text-xs bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-6 flex gap-3">
                  {/* GitHub Button */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
                  >
                    GitHub
                  </a>

                  {/* Live Button */}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-300"
                    >
                      Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
