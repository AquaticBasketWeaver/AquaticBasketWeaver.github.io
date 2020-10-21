import React from "react";
import { makeStyles } from "@material-ui/core";
import Gallery from "./Gallery";
import SideBar from "./SideBar";

const useStyles = makeStyles(() => ({
  contentPage: {
    display: "flex"
  },
}));

function ContentPage() {
  const classes = useStyles();
  const sections = {
    photos: "Photos",
    music: "Music",
  };
  return (
    <div className={classes.contentPage}>
      <SideBar sections={sections} />
      <Gallery/>
    </div>
  );
}

export default ContentPage;
