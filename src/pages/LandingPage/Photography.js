import React, { useState } from "react";
import { Element } from "react-scroll";
import {
  Box,
  makeStyles,
  Modal,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { PhotoLibraryOutlined } from "@material-ui/icons";
import Banner from "../../components/Banner";
import PhotoGrid from "../../components/PhotoGrid";
import { createPreviewPhotoArray } from "../../util/photosHelper";

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
  linkStyle: {
    textDecoration: "none",
    color: "white",
  },
}));

function Photography({ id }) {
  const classes = useStyles();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState();
  const photoArray = createPreviewPhotoArray();

  const onThumbnailClick = (image) => {
    setModalImg(image);
    setModalOpen(true);
  };

  const generateGalleryButton = () => {
    return (
      <Link className={classes.linkStyle} to="/content">
        <div className={`${classes.tint} ${classes.moreButton}`}>
          <PhotoLibraryOutlined className={classes.galleryIcon} />
          <Typography variant="h6">More</Typography>
        </div>
      </Link>
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
        <PhotoGrid photoArray={photoArray} onThumbnailClick={onThumbnailClick}>
          {generateGalleryButton()}
        </PhotoGrid>
        {generateModal()}
      </Box>
    </Element>
  );
}

export default Photography;
