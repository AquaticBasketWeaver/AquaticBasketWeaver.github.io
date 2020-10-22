import React, { useState } from "react";
import { makeStyles, Slide } from "@material-ui/core";
import Gallery from "./Gallery";
import SideBar from "./SideBar";
import Music from "./Music";

const useStyles = makeStyles(() => ({
  contentPage: {
    display: "flex",
    overflowX: "hidden",
  },
  musicSlider: {
    display: "flex",
    width: "100%",
    height: "100vh",
    justifyContent: "center",
  },
}));

function ContentPage() {
  const classes = useStyles();
  const sections = {
    photos: "Photos",
    music: "Music",
  };
  const [selectedContent, setSelectedContent] = useState(sections.photos);
  return (
    <div className={classes.contentPage}>
      <SideBar
        sections={sections}
        selectedContent={selectedContent}
        setSelectedContent={setSelectedContent}
      />
      {selectedContent === sections.photos && (
        <Slide
          direction={"left"}
          in={selectedContent === sections.photos}
          mountOnEnter
          unmountOnExit
        >
          <div>
            <Gallery />
          </div>
        </Slide>
      )}
      {selectedContent === sections.music && (
        <Slide
          direction={"left"}
          in={selectedContent === sections.music}
          mountOnEnter
          unmountOnExit
        >
          <div className={classes.musicSlider}>
            <Music />
          </div>
        </Slide>
      )}
    </div>
  );
}

export default ContentPage;
