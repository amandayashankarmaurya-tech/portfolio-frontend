import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb } from "react-icons/si";

const skills = [
  {
    name: "HTML",
    icon: <FaHtml5 />,
    color: "text-orange-500",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt />,
    color: "text-blue-500",
  },
  {
    name: "JavaScript",
    icon: <FaJsSquare />,
    color: "text-yellow-400",
  },
  {
    name: "React",
    icon: <FaReact />,
    color: "text-cyan-500",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    color: "text-sky-500",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
    color: "text-green-600",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    color: "text-green-500",
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
    color: "text-red-500",
  },
];

const Skills = () => {
  return (
    

    <section className="py-24 bg-slate-100" id="skills">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-14">
          Skills
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`text-5xl ${skill.color}`}>
                {skill.icon}
              </div>

              <p className="text-slate-800 font-medium">
                {skill.name}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
