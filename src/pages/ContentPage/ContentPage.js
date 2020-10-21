import React, { useState } from "react";
import { makeStyles, Slide } from "@material-ui/core";
import Gallery from "./Gallery";
import SideBar from "./SideBar";

const useStyles = makeStyles(() => ({
  contentPage: {
    display: "flex",
    overflowX: "hidden",
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
      <Slide
        direction={"left"}
        in={selectedContent === sections.music}
        mountOnEnter
        unmountOnExit
      >
        <div>Coming soon</div>
      </Slide>
    </div>
  );
}

export default ContentPage;
