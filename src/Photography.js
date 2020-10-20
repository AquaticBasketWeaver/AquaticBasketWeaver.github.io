import React, { useState } from "react";
import { Element } from "react-scroll";
import {
  Box,
  Grid,
  makeStyles,
  Modal,
  Hidden,
} from "@material-ui/core";
import { PhotoLibraryOutlined } from "@material-ui/icons";
import Banner from "./Banner";

import carousel from "./img/photos/carousel-min.jpg";
import closeUpBee from "./img/photos/close_up_bee-min.jpg";
import dark_dock from "./img/photos/dark_dock-min.jpg";
import dock_view from "./img/photos/dock_view-min.jpg";
import ferry from "./img/photos/ferry-min.jpg";
import hk_at_night from "./img/photos/hk_at_night-min.jpg";
import hk_harbor_with_ferry from "./img/photos/hk_harbor_with_ferry-min.jpg";
import greenForestry from "./img/photos/green_forestry-min.jpg";
import purpleFlower from "./img/photos/Purple_Flower-min.jpg";
import riverwood from "./img/photos/Riverwood-min.jpg";
import torontoOnTrees from "./img/photos/Toronto_on_Trees-min.jpg";

const useStyles = makeStyles(() => ({
  modalImg: {
    maxHeight: "90%",
    maxWidth: "90%",
  },
  modalContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "1500 !important",
  },
  thumbnail: {
    maxWidth: "100%",
    height: "auto",
    display: "block",
    position: "relative",
  },
  card: {
    width: "95%",
    maxWidth: "85em",
    margin: "auto",
  },
  cardImage: {
    width: "100%",
  },
  tint: {
    height: "100%",
    width: "100%",
    position: "relative",
    transition: "0.5s",
    zIndex: "1",
    cursor: "pointer",
    top: "-100%",
    "&:hover": {
      backgroundColor: "rgba(38,149,235,.3)",
    },
  },
  moreButton: {
    top: "0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#2695eb",
  },
  galleryIcon: {
    height: "3em",
    width: "3em",
    fill: "white",
  },
}));

function Photography({ id }) {
  const classes = useStyles();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState();

  const createPhotoObj = (thumbnail, image) => ({ thumbnail, image });
  const photoArray = [
    createPhotoObj(carousel, carousel),
    createPhotoObj(closeUpBee, closeUpBee),
    createPhotoObj(dark_dock, dark_dock),
    createPhotoObj(dock_view, dock_view),
    createPhotoObj(ferry, ferry),
    createPhotoObj(hk_at_night, hk_at_night),
    createPhotoObj(torontoOnTrees, torontoOnTrees),
    createPhotoObj(greenForestry, greenForestry),
    createPhotoObj(riverwood, riverwood),
    createPhotoObj(purpleFlower, purpleFlower),
    createPhotoObj(hk_harbor_with_ferry, hk_harbor_with_ferry),
  ];

  const onThumbnailClick = (image) => {
    setModalImg(image);
    setModalOpen(true);
  };

  const generateGalleryButton = () => {
    return (
      <Grid
        key={"More"}
        className={classes.thumbnail}
        item
        md={4}
        sm={6}
        xs={12}
      >
        <div
          className={`${classes.tint} ${classes.moreButton}`}
          onClick={() => {}}
        >
          <PhotoLibraryOutlined className={classes.galleryIcon}/>
        </div>
      </Grid>
    );
  };

  const generatePhotoGrid = () => {
    return (
      <Grid container spacing={0}>
        {photoArray.map((photoObj, index) => (
          <Grid
            key={index}
            className={classes.thumbnailContainer}
            item
            md={4}
            sm={6}
            xs={12}
          >
            <img
              className={classes.thumbnail}
              src={photoObj.thumbnail}
              alt={""}
            />
            <Hidden xsDown>
              <div
                className={classes.tint}
                onClick={() => onThumbnailClick(photoObj.image)}
              ></div>
            </Hidden>
          </Grid>
        ))}
        {generateGalleryButton()}
      </Grid>
    );
  };

  // TODO: add descriptions and such to your photos
  // will probably have to add something to photoObj
  const generateModal = () => (
    <Modal
      className={classes.modalContainer}
      open={modalOpen}
      onClose={() => {
        setModalOpen(false);
      }}
    >
      <img className={classes.modalImg} src={modalImg} alt={""} />
    </Modal>
  );

  return (
    <Element name={id}>
      <Box>
        <Banner
          title={"Photography"}
          caption={""}
          style={{
            container: {
              backgroundColor: "#1e7ad6",
            },
          }}
        />
        {generatePhotoGrid()}
        {generateModal()}
      </Box>
    </Element>
  );
}

export default Photography;
