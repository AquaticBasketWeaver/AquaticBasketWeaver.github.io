import React, { useState } from "react";
import { Element } from "react-scroll";
import { Box, Grid, makeStyles, Modal, Hidden } from "@material-ui/core";
import Banner from "./Banner";

// TODO: remove this when you move photos onto s3
import carousel from "./img/photos/carousel.jpg";
import closeUpBee from "./img/photos/close_up_bee.jpg";
import DSC_0006 from "./img/photos/DSC_0006.jpg";
import DSC_0025 from "./img/photos/DSC_0025.jpg";
import DSC_0028 from "./img/photos/DSC_0028.jpg";
import DSC_0035 from "./img/photos/DSC_0035-2.jpg";
import DSC_0063 from "./img/photos/DSC_0063.jpg";
import DSC_0078 from "./img/photos/DSC_0078.jpg";
import greenForestry from "./img/photos/green_forestry.jpg";
import purpleFlower from "./img/photos/Purple_Flower.jpg";
import riverwood from "./img/photos/Riverwood.jpg";
import torontoOnTrees from "./img/photos/Toronto_on_Trees.jpg";

// TODO: also remove this when you move photos onto s3
import t_carousel from "./img/thumbnails/carousel-min.jpg";
import t_closeUpBee from "./img/thumbnails/close_up_bee-min.jpg";
import t_DSC_0006 from "./img/thumbnails/DSC_0006-min.jpg";
import t_DSC_0025 from "./img/thumbnails/DSC_0025-min.jpg";
import t_DSC_0028 from "./img/thumbnails/DSC_0028-min.jpg";
import t_DSC_0035 from "./img/thumbnails/DSC_0035-2-min.jpg";
import t_DSC_0063 from "./img/thumbnails/DSC_0063-min.jpg";
import t_DSC_0078 from "./img/thumbnails/DSC_0078-min.jpg";
import t_greenForestry from "./img/thumbnails/green_forestry-min.jpg";
import t_purpleFlower from "./img/thumbnails/Purple_Flower-min.jpg";
import t_riverwood from "./img/thumbnails/Riverwood-min.jpg";
import t_torontoOnTrees from "./img/thumbnails/Toronto_on_Trees-min.jpg";

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
}));

function Photography({ id }) {
  const classes = useStyles();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState();

  // TODO: replace this when you move your photos onto s3 or something
  const createPhotoObj = (thumbnail, image) => ({ thumbnail, image });
  const photoArray = [
    createPhotoObj(t_carousel, carousel),
    createPhotoObj(t_closeUpBee, closeUpBee),
    createPhotoObj(t_DSC_0006, DSC_0006),
    createPhotoObj(t_DSC_0025, DSC_0025),
    createPhotoObj(t_DSC_0028, DSC_0028),
    createPhotoObj(t_DSC_0035, DSC_0035),
    createPhotoObj(t_DSC_0063, DSC_0063),
    createPhotoObj(t_torontoOnTrees, torontoOnTrees),
    createPhotoObj(t_greenForestry, greenForestry),
    createPhotoObj(t_riverwood, riverwood),
    createPhotoObj(t_purpleFlower, purpleFlower),
    createPhotoObj(t_DSC_0078, DSC_0078),
  ];

  const onThumbnailClick = (image) => {
    setModalImg(image);
    setModalOpen(true);
  };

  const generatePhotoGrid = () => {
    return (
      <Grid container spacing={0}>
        {photoArray.map((photoObj) => (
          <Grid
            className={classes.thumbnailContainer}
            item
            md={4}
            sm={6}
            xs={12}
          >
            <img className={classes.thumbnail} src={photoObj.thumbnail} />
            <Hidden xsDown>
              <div
                className={classes.tint}
                onClick={() => onThumbnailClick(photoObj.image)}
              ></div>
            </Hidden>
          </Grid>
        ))}
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
      <img className={classes.modalImg} src={modalImg} />
    </Modal>
  );

  return (
    <Element name={id}>
      <Box>
        <Banner
          title={"Photography"}
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
