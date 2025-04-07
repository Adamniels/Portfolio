import { Link } from "react-router-dom";

export default function PadelTournament() {
    return (
      <section className="max-w-3xl mx-auto px-4 py-8 text-gray-300">
        <h1 className="text-3xl font-bold text-white mb-4">Padel Tournament System (Java)</h1>
        <Link to="/projects" className="text-blue-400 hover:underline ml-1">
          ← Go back
        </Link>
        <p className="mb-4">
          This project is a terminal-based Java application for organizing and managing padel tournaments.
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Will handle... should further develop this. and look into spring boot?</li>
          <li>Tracks tournament progress and scores</li>
        </ul>
        <p className="mb-4 font-semibold">What I focused on:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Data structures and object-oriented design</li>
          <li>Separation of logic and user interface</li>
          <li>Writing maintainable and extendable code</li>
        </ul>
        <p className="text-sm text-gray-400">TODO: Add code example or class diagram</p>
      </section>
    );
  }
  