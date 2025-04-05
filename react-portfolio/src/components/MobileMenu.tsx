// src/components/MobileMenu.tsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger ikon */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 text-white text-2xl"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Meny-overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#0f172a] z-40 p-8 flex flex-col items-center justify-start gap-6 text-white text-lg">
          <Link to="/" onClick={() => setIsOpen(false)}>HOME</Link>
          <Link to="/experience" onClick={() => setIsOpen(false)}>EXPERIENCE</Link>
          <Link to="/projects" onClick={() => setIsOpen(false)}>PROJECTS</Link>
          <Link to="/technicalExperience" onClick={() => setIsOpen(false)}>TECHNICAL EXPERIENCE</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>MORE ABOUT ME</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>CONTACT ME</Link>
        </div>
      )}
    </>
  );
}
