import React from "react";
import Navbar from "./Navbar";
import Welcome from "./Welcome";
import About from "./About";
import WorkExperience from "./WorkExperience";
import Photography from "./Photography";
import ContactMe from "./ContactMe";

function App() {
  const scrollAnchors = {
    welcome: "welcome",
    about: "about",
    work: "work",
    photography: "photography",
    contact: "contact",
  }
  return (
    <div className="App">
      <Navbar scrollAnchors={scrollAnchors} />
      <Welcome id={scrollAnchors.welcome} />
      <About id={scrollAnchors.about} />
      <WorkExperience id={scrollAnchors.work} />
      <Photography id={scrollAnchors.photography} />
      <ContactMe id={scrollAnchors.contact} />
    </div>
  );
}

export default App;
