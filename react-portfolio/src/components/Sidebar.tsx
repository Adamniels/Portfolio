import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Sidebar() {
  return (
    <aside className="bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white w-full md:w-1/3 lg:w-1/4 md:min-h-screen px-4 py-6 md:px-8 md:py-8 flex flex-col items-center md:items-start text-center md:text-left">
      {/* Profil och beskrivning (alltid synlig) */}
      <div className="flex flex-col items-center md:items-start">
        <img
          src="/Portfolio/profile.png"
          alt="Profile"
          className="w-40 h-40 rounded-full border-4 border-white shadow-lg mb-4"
        />
        <h1 className="text-3xl font-bold">Adam Nielsen</h1>
        <p className="text-sm text-gray-400 mt-2">
          Backend/Fullstack Developer
        </p>
        <p className="mt-4 text-gray-300">Vad ska jag skriva här? TODO:</p>
      </div>

      {/* Navigering och sociala ikoner (bara på desktop) */}
      <div className="hidden md:flex flex-col justify-between h-full mt-10 w-full">
        <nav className="flex flex-col gap-3 text-gray-400 text-sm">
          <Link to="/" className="hover:text-white">
            HOME
          </Link>
          <Link to="/experience" className="hover:text-white">
            EXPERIENCE
          </Link>
          <Link to="/projects" className="hover:text-white">
            PROJECTS
          </Link>
          <Link to="/technicalExperience" className="hover:text-white">
            TECHNICAL EXPERIENCE
          </Link>
          <Link to="/about" className="hover:text-white">
            MORE ABOUT ME
          </Link>
          <Link to="/contact" className="hover:text-white">
            CONTACT ME
          </Link>
        </nav>

        {/* Ikoner */}
        <div className="flex gap-4 mt-10 text-xl mb-8">
          <a
            href="https://github.com/Adamniels"
            target="_blank"
            className="hover:text-white"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            className="hover:text-white"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            className="hover:text-white"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </aside>
  );
}
