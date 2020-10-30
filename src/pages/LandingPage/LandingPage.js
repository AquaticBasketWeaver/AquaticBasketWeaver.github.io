import React from "react";
import { makeStyles } from "@material-ui/core";
import Navbar from "./Navbar";
import Welcome from "./Welcome";
import About from "./About";
import WorkExperience from "./WorkExperience";
import Photography from "./Photography";
import ContactMe from "./ContactMe";

const useStyles = makeStyles(() => ({
  landingPage: {
    overflowX: "hidden",
  },
}));


function LandingPage({ galleryPage, setGalleryPage }) {
  const classes = useStyles();

  const sections = {
    about: "About",
    work: "Work",
    photography: "Photography",
    contact: "Contact",
  };
  return (
    <div className={classes.landingPage}>
      <Navbar sections={sections} galleryPage={galleryPage} setGalleryPage={setGalleryPage} />
      <Welcome />
      <About id={sections.about} />
      <WorkExperience id={sections.work} />
      <Photography id={sections.photography} galleryPage={galleryPage} setGalleryPage={setGalleryPage} />
      <ContactMe id={sections.contact} />
    </div>
  );
}

export default LandingPage;
