import "./index.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Header from "./components/Header";
// import Hero from "./components/Hero";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Homepage from "./pages/Homepage";

// import Footer from "./components//Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Homepage />
        <Routes>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/contact" component={Contact} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;

// return (
//   <Router>
//     <Switch>
//       <Route exact
//       <Route exact path="/contact" component={Contact} />
//     </Switch>
//   </Router>
// );
