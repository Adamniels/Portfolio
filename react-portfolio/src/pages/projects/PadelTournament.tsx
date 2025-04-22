import { Link } from "react-router-dom";
import diagram from "/Portfolio/padel-architecture-diagram.png"; // justera sökvägen vid behov

export default function PadelTournament() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-8 text-gray-300">
      <h1 className="text-3xl font-bold text-white mb-4">
        Padel Tournament Manager (Java + Vue)
      </h1>

      <Link to="/projects" className="text-blue-400 hover:underline ml-1">
        ← Go back
      </Link>
      <p className="text-red-700">
        TODO: Add title for my working process and how i structured my time on
        the project
      </p>
      {/* Introduction */}
      <h2 className="text-2xl text-white font-semibold mt-8 mb-2">Overview</h2>
      <p className="mb-4">
        This fullstack application was built to manage padel tournaments from
        start to finish, allowing organizers to register teams, automatically
        generate matches based on fair scheduling logic, update scores in real
        time, and follow the progress on a live scoreboard. The system is
        implemented with a clear architectural separation between the frontend
        and backend, aiming for maintainability, scalability, and testability.
      </p>

      {/* Tech Stack and Structure */}
      <h2 className="text-2xl text-white font-semibold mt-8 mb-2">
        Architecture & Technologies
      </h2>
      <p className="mb-4">
        The backend is developed using Java and Spring Boot, where I’ve designed
        and implemented models such as Tournament, Team, and Match. The core
        logic handles tournament creation, team registration, match generation
        based on round-robin scheduling, and match result updates that affect
        standings dynamically. I created a REST API layer with endpoints to
        perform all operations, including match updates and fetching next
        matches considering available courts, while ensuring no team is
        scheduled for more than one match at a time.
      </p>
      <p className="mb-4">
        On the frontend, I built a Vue 3 application using the Composition API.
        Users can create tournaments, add or remove teams, start the tournament,
        enter match results, and see live standings. The frontend fetches and
        updates data from the backend using plain HTTP and JSON. I made sure
        that the UI updates smoothly and reflects the latest state without page
        reloads.
      </p>

      {/* Features and Challenges */}
      <h2 className="text-2xl text-white font-semibold mt-8 mb-2">
        Key Features & Challenges
      </h2>
      <p className="mb-4">
        One of the more interesting technical challenges was ensuring that the
        match generation respects real-life constraints, such as available
        courts and overlapping matches. The backend computes and returns an
        optimal number of concurrent matches. Standings are automatically sorted
        based on number of wins and score difference, giving a fair and
        intuitive ranking.
      </p>

      {/* Future Plans */}
      <h2 className="text-2xl text-white font-semibold mt-8 mb-2">
        Future Development
      </h2>
      <p className="mb-4">
        Looking ahead, I plan to expand this system by introducing persistent
        data storage using PostgreSQL and Spring Data JPA, enabling tournaments
        to be saved and resumed at any time. I'm also exploring role-based
        authentication to protect certain actions like starting or editing
        tournaments, and improving the user interface with mobile-first design
        principles. To ensure long-term maintainability, I aim to write a full
        suite of unit and integration tests and possibly add advanced features
        like elimination brackets or performance analytics for teams. These
        additions will help transition the application from a prototype to a
        production-ready tournament manager.
      </p>

      {/* Learning Reflections */}
      <h2 className="text-2xl text-white font-semibold mt-8 mb-2">
        What I Learned
      </h2>
      <p className="mb-6">
        This project has been a great way to apply object-oriented programming,
        design RESTful APIs, and build a clean fullstack architecture. It has
        helped me understand how to structure real-world systems with clear
        separation of concerns, reusable components, and maintainable code. I’ve
        also deepened my knowledge of Vue and modern Java tooling.
      </p>

      {/* Diagram */}
      <h2 className="text-2xl text-white font-semibold mt-8 mb-4">
        System Architecture
      </h2>
      <p className="text-red-700">
        TODO: Just an example diagram, change to real one later
      </p>
      <img
        src={diagram}
        alt="Architecture diagram showing frontend, REST API, service, and domain models"
        className="rounded-xl shadow-md border border-gray-700 mb-4"
      />
      <p className="text-sm text-gray-400">
        Architecture diagram: Shows how the Vue frontend communicates with the
        Java REST API and how the domain models interact.
      </p>
    </section>
  );
}

