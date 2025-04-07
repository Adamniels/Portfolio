import { Link } from "react-router-dom";

export default function GarbageCollector() {
    return (
      <section className="max-w-3xl mx-auto px-4 py-8 text-gray-300">
        <h1 className="text-3xl font-bold text-white mb-4">Garbage Collector in C</h1>
        <Link to="/projects" className="text-blue-400 hover:underline ml-1">
          ← Go back
        </Link>
        <p className="mb-4">
          A memory management library written in C that automatically reclaims unused memory at allocation time.
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>User allocates memory via the library's own interface</li>
          <li>Internally tracks allocations and cleans up unreachable data</li>
          <li>Implements a version of Bartlett’s compacting algorithm</li>
        </ul>
        <p className="mb-4 font-semibold">Challenges and takeaways:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Pointer safety and debugging segmentation faults</li>
          <li>Understanding how memory is structured and aligned</li>
          <li>Testing GC correctness under load</li>
        </ul>
        <p className="text-sm text-gray-400">TODO: Add diagram of heap/pages or benchmarking info</p>
      </section>
    );
  }
  