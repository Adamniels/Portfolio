// src/pages/Experience.tsx
export default function Experience() {
  return (
    <section className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-white mb-10">Experience</h1>

      {/* EDUCATION */}
      <h2 className="text-2xl font-semibold text-white mb-6 border-b border-gray-600 pb-1">
        Education
      </h2>
      <div className="mb-12 space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-white">
            Master of Science in Information Technology (Computer Science)
          </h3>
          <p className="text-sm text-gray-400 mb-2">
            Uppsala University · 2023 – present
          </p>

          <p className="text-gray-300 font-medium mt-4">Courses completed:</p>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Introduction to Information Technology (Python)</li>
            <li>Programming and Data Structures (TypeScript)</li>
            <li>Imperative and Object-Oriented Programming (C, Java)</li>
            <li>Computer Architecture (MIPS assembly)</li>
            <li>Algebra 1</li>
            <li>Linear Algebra and Geometry</li>
            <li>Linear Algebra 2</li>
            <li>Single Variable Calculus</li>
          </ul>

          <p className="text-gray-300 font-medium mt-4">
            Current spring term (2025):
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Systems Design from a User Perspective</li>
            <li>Probability & Statistics</li>
            <li>Computer Systems with Project Work (Go + Vue)</li>
          </ul>

          <p className="text-gray-300 font-medium mt-4">
            Additional courses taken:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Computer and Programming (C++)</li>
            <li>Introductory Programming with Java</li>
            <li>Multivariable Calculus (ongoing)</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mt-6">
            Upper Secondary Education – Economics
          </h3>
          <p className="text-sm text-gray-400">
            Thorildsplans Gymnasium · 2016 – 2019
          </p>
        </div>
      </div>

      {/* WORK */}
      <h2 className="text-2xl font-semibold text-white mb-6 border-b border-gray-600 pb-1">
        Work
      </h2>
      <div className="mb-12 space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-white">
            Carpenter · Cerves AB
          </h3>
          <p className="text-sm text-gray-400 mb-2">2019 – 2023</p>
          <p className="font-bold text-red-400">TODO: Skriva om</p>

          <div className="mt-4 space-y-3 text-gray-300 leading-relaxed">
            <p>
              During my time working as a carpenter, I often found myself in
              situations without ready-made solutions, which meant I had to
              think creatively and come up with my own ways to solve problems.
            </p>
            <p>
              It could involve adjusting a construction to fit better, or
              finding a more efficient way to approach a task. I learned how to
              work flexibly and practically — to adapt to the situation with
              ease.
            </p>
            <p>
              I often worked independently and took on responsibilities to keep
              the work progressing. It helped me develop strong decision-making
              skills, solve problems on my own, and trust my own judgment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
