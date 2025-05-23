import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <section className="max-w-3xl">
      <h1 className="text-4xl font-bold text-white mb-6">Projects</h1>
      <h2 className="font-bold text-red-400 mb-6">
        TODO: nu har jag chansen att verkligen skriva ut och förklara mina
        projekt på en djupare nivå, ta med system strukturen och liknande.
      </h2>

      <p className="text-lg text-gray-300 leading-relaxed">
        In addition to my studies, I really enjoy exploring new technologies and
        building things—especially when it’s not just theoretical, but something
        I can try out and experiment with in practice. I spend a lot of time
        working on personal projects and have also completed several online
        courses, including in full-stack development. This has helped me
        understand how frontend and backend interact and communicate.
      </p>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-white">
          Mini-JobQueue (Go)
        </h2>
        <p className="text-gray-300 mt-2">
          My current project is a distributed job system. The system consists of
          a central server that receives jobs via a REST API and distributes
          them in real-time to workers through WebSocket. The workers are
          independent Go programs that connect to the server, receive a job,
          execute it, and send back the result.
        </p>
        <Link
          to="/projects/jobqueue"
          className="text-blue-400 hover:underline ml-1"
        >
          Read more →
        </Link>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-white">
          Padel Tournament System (Java + Vue)
        </h2>

        <p className="text-gray-300 mt-2">
          A web-based tournament manager built with a Java Spring Boot backend
          and a Vue 3 frontend. This project focuses on real-world application
          structure, efficient scheduling logic, and writing code that is clear,
          modular, and easy to extend or maintain.
        </p>
        <Link
          to="/projects/padel"
          className="text-blue-400 hover:underline ml-1"
        >
          Read more →
        </Link>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-white">
          Garbage Collector in C
        </h2>
        <p className="text-gray-300 mt-2">
          A memory management library that automatically cleans up unused memory
          during allocation. The user initializes a heap and allocates memory
          via the library’s own functions. The project is based on Bartlett’s
          algorithm and organizes memory using pages.
        </p>
        <Link to="/projects/gc" className="text-blue-400 hover:underline ml-1">
          Read more →
        </Link>
      </div>

      <p className="text-lg text-gray-300 leading-relaxed mt-8">
        These projects have taught me a lot—both technically and
        methodologically—from planning and structuring code to debugging complex
        problems. Most importantly, I’ve learned how to work independently,
        build systems from the ground up, and combine different technologies in
        meaningful ways.
      </p>
    </section>
  );
}
