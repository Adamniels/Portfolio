import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import TechnicalExperience from "./pages/TechnicalExp";
import MiniJobQueue from "./pages/projects/MiniJobQueue";
import PadelTournament from "./pages/projects/PadelTournament";
import GarbageCollector from "./pages/projects/GarbageCollector";



function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/technicalExperience" element={<TechnicalExperience />} />
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects/jobqueue" element={<MiniJobQueue />} />
        <Route path="/projects/padel" element={<PadelTournament />} />
        <Route path="/projects/gc" element={<GarbageCollector />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}

export default App;
