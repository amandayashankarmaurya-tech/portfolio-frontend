import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-indigo-600">
          <Link to="/">Portfolio</Link>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium text-slate-700">
          <li>
            <Link to="/" className="hover:text-indigo-600 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-indigo-600 transition">
              About
            </Link>
          </li>
          <li>
            <Link to="/skills" className="hover:text-indigo-600 transition">
              Skills
            </Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-indigo-600 transition">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-indigo-600 transition">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow px-6 py-4 space-y-4 text-slate-700">
          <Link to="/" onClick={() => setOpen(false)} className="block">
            Home
          </Link>
          <Link to="/about" onClick={() => setOpen(false)} className="block">
            About
          </Link>
          <Link to="/skills" onClick={() => setOpen(false)} className="block">
            Skills
          </Link>
          <Link to="/projects" onClick={() => setOpen(false)} className="block">
            Projects
          </Link>
          <Link to="/contact" onClick={() => setOpen(false)} className="block">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
