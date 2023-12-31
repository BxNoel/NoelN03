import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Navbar from './componets/navbar';
import Footer from './componets/Footer';
import ProjectDisplay from './componets/ProjectDisplay';


function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />
      <Routes>
        <Route path="/NoelN03" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="project/:id" element={<ProjectDisplay />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
