import React from "react";
import Navbar from "./Navbar";
import Welcome from "./Welcome";
import About from "./About";
import WorkExperience from "./WorkExperience";
import Photography from "./Photography";
import ContactMe from "./ContactMe";

function App() {
  const sections = {
    about: "About",
    work: "Work",
    photography: "Photography",
    contact: "Contact",
  }
  return (
    <div className="App">
      <Navbar sections={sections} />
      <Welcome />
      <About id={sections.about} />
      <WorkExperience id={sections.work} />
      <Photography id={sections.photography} />
      <ContactMe id={sections.contact} />
    </div>
  );
}

export default App;
