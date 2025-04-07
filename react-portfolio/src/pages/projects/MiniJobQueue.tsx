import { Link } from "react-router-dom";

export default function MiniJobQueue() {
    return (
      <section className="max-w-3xl mx-auto px-4 py-8 text-gray-300">
        <h1 className="text-3xl font-bold text-white mb-4">Mini-JobQueue (Go)</h1>
        <Link to="/projects" className="text-blue-400 hover:underline ml-1">
          ← Go back
        </Link>
        <p className="mb-4">
          This project is a distributed job system. It consists of a central server that:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Receives jobs via REST API</li>
          <li>Distributes them in real-time to connected workers using WebSocket</li>
          <li>Tracks job status and responses</li>
        </ul>
        <p className="mb-4">
          The workers are independent Go programs that connect, receive jobs, execute them, and report back results.
        </p>
        <p className="mb-4 font-semibold">Technical decisions & learnings:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Why I used WebSockets for real-time delivery</li>
          <li>Queue logic and handling concurrency</li>
          <li>Error handling and robustness in Go</li>
        </ul>
        <p className="text-sm text-gray-400">TODO: Add architecture sketch or GitHub link</p>
      </section>
    );
  }
  
