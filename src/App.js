import React from "react";
import Navbar from "./Navbar";
import Welcome from "./Welcome";
import About from "./About";
import WorkExperience from "./WorkExperience";
import Photography from "./Photography";
import ContactMe from "./ContactMe";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  app: {
    overflowX: "hidden",
  }
}));

function App() {
  const classes = useStyles();
  const sections = {
    about: "About",
    work: "Work",
    photography: "Photography",
    contact: "Contact",
  };
  return (
    <div className={classes.app}>
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
