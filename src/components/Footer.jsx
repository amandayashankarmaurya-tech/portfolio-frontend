const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white">Aman Maurya</h2>
            <p className="mt-4 text-sm text-gray-400">
              Full Stack Developer building modern, responsive and user-friendly
              web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/home" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/About" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="/Skills" className="hover:text-white">
                  Skills
                </a>
              </li>
              <li>
                <a href="/Projects" className="hover:text-white">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Projects</h3>

            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://weather-wgrk.onrender.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition duration-300"
                >
                  Weather App
                </a>
              </li>

              <li>
                <a
                  href="https://digital-clock-6s48.onrender.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition duration-300"
                >
                  Digital Clock
                </a>
              </li>

              <li>
                <a
                  href="https://typicmaster.onrender.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition duration-300"
                >
                  Typing Master
                </a>
              </li>

              <li>
                <a
                  href="https://your-online-tutorial-link.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition duration-300"
                >
                  Online Tutorial
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>Lucknow, India</li>
              <li>
                <a
                  href="mailto:amandayashankarmaurya@gmail.com"
                  className="hover:text-white"
                >
                  amandayashankarmaurya@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/aman-maurya-55068a288"
                  target="_blank"
                  className="hover:text-white"
                >
                  LinkedIn Profile
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Aman Maurya. All rights reserved.
        </div>
      </div>
    </footer>
  );          
};

export default Footer;
