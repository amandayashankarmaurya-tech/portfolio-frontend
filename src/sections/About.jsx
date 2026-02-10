const About = () => {
  return (
    <section className="py-24 bg-slate-100" id="about">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            About Me
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            A quick introduction about who I am and what I do
          </p>
        </div>

        {/* Content Wrapper */}
        <div className="flex justify-center">
          <div className="max-w-3xl bg-white rounded-2xl shadow-md p-8 md:p-12">

            <h3 className="text-2xl font-semibold text-slate-900">
              I’m Aman Maurya
            </h3>

            <p className="mt-5 text-slate-600 leading-relaxed text-base">
              I am a passionate{" "}
              <span className="text-indigo-600 font-medium">
                Full Stack Developer
              </span>{" "}
              with hands-on experience in building responsive and user-friendly
              web applications using React, Tailwind CSS, Node.js, and MongoDB.
            </p>

            <p className="mt-4 text-slate-600 leading-relaxed text-base">
              I enjoy turning complex problems into simple, beautiful, and
              intuitive designs. Currently, I am focused on improving my
              full-stack development skills and working on real-world projects.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 ">
              <div className="border border-blue-600 rounded-xl p-6 text-center hover:shadow transition">
                <h4 className="text-sm text-black">Role</h4>
                <p className="text-lg font-semibold text-slate-900 mt-1">
                  Full Stack Developer
                </p>
              </div>

              <div className="border border-blue-600 rounded-xl p-6 text-center hover:shadow transition">
                <h4 className="text-sm text-slate-500">Projects</h4>
                <p className="text-lg font-semibold text-slate-900 mt-1">
                  4+ Completed
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
