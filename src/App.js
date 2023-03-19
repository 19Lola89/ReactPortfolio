import "./index.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

// import Footer from "./components//Footer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Homepage />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}
export default App;
