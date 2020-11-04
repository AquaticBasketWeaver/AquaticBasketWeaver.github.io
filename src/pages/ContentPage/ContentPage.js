import React, { useEffect, useState } from "react";
import { makeStyles, Slide } from "@material-ui/core";
import Gallery from "./Gallery";
import SideBar from "./SideBar";
import Music from "./Music";
import { getPhotosFromS3 } from "../../util/photosHelper";

const useStyles = makeStyles(() => ({
  contentPage: {
    display: "flex",
  },
  musicSlider: {
    display: "flex",
    width: "100%",
    height: "100vh",
    justifyContent: "center",
  },
  photoSlider: {
    height: "100vh",
    width: "100%",
  },
}));

function ContentPage({ galleryPage, setGalleryPage }) {
  const classes = useStyles();
  const sections = {
    photos: "Photos",
    music: "Music",
  };
  const [selectedContent, setSelectedContent] = useState(sections.photos);
  const [imageList, setImageList] = useState();
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [paginatedPhotoArray, setpaginatedPhotoArray] = useState({});

  useEffect(() => {
    if (!galleryPage) {
      setGalleryPage(1);
    }

    // TODO: this one function seems extremely overloaded
    getPhotosFromS3(
      setNumberOfPages,
      setpaginatedPhotoArray,
      paginatedPhotoArray,
      imageList,
      setImageList,
      galleryPage
    );

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
        <div className={classes.photoSlider}>
          <Gallery
            paginatedPhotoArray={paginatedPhotoArray}
            galleryPage={galleryPage}
            setGalleryPage={setGalleryPage}
            numberOfPages={numberOfPages}
          />
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
