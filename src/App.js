import "./index.css";
import React from "react";
// import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components//Footer";

function App() {
  return (
    <div>
      <div className="Navbar">
        <Header></Header>
      </div>
      <div>
        <Hero></Hero>
      </div>
      <div className="homepage">
        <li>brand statement</li>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
