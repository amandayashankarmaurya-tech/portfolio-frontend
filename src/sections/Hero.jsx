import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Skills from "./Skills";
import profile2 from "../assets/profile2.jpeg"


const Hero = () => {
  return (
    <>
    <section className="min-h-screen flex items-center justify-center pt-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        <div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi, I’m <span className="text-indigo-600">Aman Maurya</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mt-4">
            Full Stack Developer</h2>
          <p className="mt-6 text-gray-600 text-lg">
           Building beautiful web experiences with passion and precision.
          </p>
          <div className="mt-8 flex gap-4">
            <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg">
              Hire Me
            </button>
            <button className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg">
              View Projects
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src={profile2}
            alt="Profile"
            className="w-64 h-68 rounded-full object-cover shadow-lg"
          />
        </div>

      </div>
    
    </section>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </>
  );
};

export default Hero;
