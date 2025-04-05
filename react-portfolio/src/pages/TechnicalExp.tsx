// src/pages/TechnicalExp.tsx
export default function TechnicalExp() {
  return (
    <section className="max-w-3xl">
      <h1 className="text-4xl font-bold text-white mb-10">
        Technical Experience
      </h1>

      <p className="text-gray-300 mb-8">
        I’ve worked with several different programming languages and tools
        through both courses and personal projects. My focus has been on
        understanding how systems work from the ground up — from low-level
        memory management in C to how web systems connect in full-stack
        development.
      </p>

      {/* Programming languages */}
      <h2 className="text-2xl font-semibold text-white mb-4">
        Programming Languages
      </h2>
      <ul className="list-disc list-inside text-gray-300 space-y-1">
        <li>
          <strong>C</strong> – Extensive experience from several courses and
          projects, including memory management, pointers, and data structures
        </li>
        <li>
          <strong>Java</strong> – Based on both courses and personal projects
          (e.g., padel tournament app), strong focus on data structures and
          logic
        </li>
        <li>
          <strong>Python</strong> – Introductory course, focus on
          problem-solving and fundamentals
        </li>
        <li>
          <strong>C++</strong> – Syntax and concepts from side course,
          object-oriented programming
        </li>
        <li>
          <strong>Go</strong> – Currently working on a personal project, used
          together with Vue
        </li>
        <li>
          <strong>TypeScript/JavaScript</strong> – Course project with
          connection to data structures and web development
        </li>
        <li>
          <strong>MIPS Assembly</strong> – Basic understanding from computer
          architecture course
        </li>
      </ul>

      {/* Web and full-stack */}
      <h2 className="text-2xl font-semibold text-white mt-10 mb-4">
        Web & Full-Stack Development
      </h2>
      <ul className="list-disc list-inside text-gray-300 space-y-1">
        <li>Basic knowledge in HTML/CSS/JavaScript</li>
        <li>Worked in Vue for course project (frontend logic, components)</li>
        <li>
          Understanding of how frontend and backend connect, including API usage
        </li>
        <li>Experience connecting systems using simple databases</li>
      </ul>

      {/* Tools and other */}
      <h2 className="text-2xl font-semibold text-white mt-10 mb-4">
        Tools & Other
      </h2>
      <ul className="list-disc list-inside text-gray-300 space-y-1">
        <li>
          <strong>Git</strong> (version control)
        </li>
        <li>
          <strong>Testing</strong> – experience from writing unit tests,
          especially in C and Java
        </li>
        <li>
          <strong>Terminal & Compilation</strong> – used to working in C
          environments without an IDE
        </li>
        <li>
          <strong>Basic knowledge of networking</strong> and understanding of
          how systems communicate
        </li>
      </ul>
    </section>
  );
}
