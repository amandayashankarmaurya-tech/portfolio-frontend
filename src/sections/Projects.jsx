import React from "react";
import weather from "../assets/wether.png"
import digital from "../assets/digital.png"
import titorial from "../assets/titorial.png"
import typic from "../assets/typic.png"

const projects = [
  {
    title: "Weather Application",
    description:
      "A responsive weather app that shows real-time weather data using public APIs with search functionality.",
    tech: ["HTML", "CSS", "JavaScript", "API"],
    image:weather,
    link: "https://github.com/amandayashankarmaurya-tech/Digital-Clock.git",
  },
  {
    title: "Typing Master Practice App",
    description:
      "A typing practice app to improve typing speed and accuracy with timer and WPM calculation.",
    tech: ["HTML", "CSS", "JavaScript"],
    image:typic ,
    link: "#",
  },
  {
    title: "DigitalClock Application",
    description:
      "A live digital clock application displaying real-time hours, minutes, and seconds with clean UI.",
    tech: ["React", "JavaScript", "Tailwind CSS"],
    image:digital,
    link: "#",
  },
  {
    title: "Online Tutorial Website",
    description:
      "A MERN-based online learning platform with authentication, courses, videos, and progress tracking.",
    tech: ["React", "Node", "MongoDB"],
    image: titorial,
    link: "#",
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
              className="bg-gray-200 rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex flex-col overflow-hidden"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-50 object-cover rounded-2xl"
              />

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-3">
                  {project.title}
                </h3>

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

                {/* Button */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block text-center bg-indigo-600 text-white py-1 rounded-lg hover:bg-indigo-700 transition"
                >
                 GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
