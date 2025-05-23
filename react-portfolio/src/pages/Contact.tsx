// src/pages/Contact.tsx
import { FiPhone, FiMail, FiMapPin} from "react-icons/fi"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="max-w-3xl">
      <h1 className="text-4xl font-bold text-white mb-10">Contact</h1>

      <ul className="space-y-6 text-gray-300 text-lg">
        <li className="flex items-center gap-4">
          <FiPhone className="text-2xl text-white" />
          <span>+46 700 39 29 30</span>
        </li>
        <li className="flex items-center gap-4">
          <FiMail className="text-2xl text-white" />
          <a href="mailto:adamnielsen401@gmail.com" className="hover:underline">
            adamnielsen401@gmail.com
          </a>
        </li>
        <li className="flex items-center gap-4">
          <FiMapPin className="text-2xl text-white" />
          <span>Prästgårdsgatan 8, Uppsala</span>
        </li>
      </ul>
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
    </section>
  )
}

