import React, { useEffect, useState } from "react";
import { makeStyles, Slide } from "@material-ui/core";
import Gallery from "./Gallery";
import SideBar from "./SideBar";
import Music from "./Music";
import { getPhotosFromS3 } from "../../util/photosHelper";
import constants from "../../util/constants";

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

function ContentPage({ galleryPage, setGalleryPage }) {
  const classes = useStyles();
  const sections = {
    photos: "Photos",
    music: "Music",
  };
  const [selectedContent, setSelectedContent] = useState(sections.photos);
  const [paginatedPhotoArray, setpaginatedPhotoArray] = useState((() => {
    const photoArrayPagination = {};
    for (let i = 0; i < constants.numberOfPages; i++) {
      photoArrayPagination[`page_${i + 1}`] = [...Array(constants.galleryPageItems)];
    }
    return photoArrayPagination
  })());

  useEffect(() => {
    if (!galleryPage) {
      setGalleryPage(1);
    }
    getPhotosFromS3(setpaginatedPhotoArray, paginatedPhotoArray, galleryPage);

    // todo: this isn't great, if you have time find a way to only have this run once
    //       while including the full dependency array
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [galleryPage]);

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
        style={selectedContent !== sections.photos ? { display: "none" } : {}}
      >
        <div>
          <Gallery paginatedPhotoArray={paginatedPhotoArray} galleryPage={galleryPage} />
        </div>
      </Slide>
      <Slide
        direction={"left"}
        in={selectedContent === sections.music}
        style={selectedContent !== sections.music ? { display: "none" } : {}}
        unmountOnExit
      >
        <div className={classes.musicSlider}>
          <Music />
        </div>
      </Slide>
    </div>
  );
}

export default ContentPage;
