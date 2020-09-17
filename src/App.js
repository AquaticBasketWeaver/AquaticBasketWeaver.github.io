import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Welcome from "./Welcome";
import About from "./About";
import WorkExperience from "./WorkExperience";
import Photography from "./Photography";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Welcome />
      <About />
      <WorkExperience />
      <Photography />
    </div>
  );
}

export default App;
