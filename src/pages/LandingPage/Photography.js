import React, { useState } from "react";
import { Element } from "react-scroll";
import { Box, makeStyles, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { PhotoLibraryOutlined } from "@material-ui/icons";
import Banner from "../../components/Banner";
import PhotoGrid from "../../components/PhotoGrid";
import PhotoModal from "../../components/PhotoModal";
import { createWelcomePhotoArray } from "../../util/photosHelper";

const useStyles = makeStyles(() => ({
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
  const photoArray = createWelcomePhotoArray();

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
        <PhotoModal
          modalImg={modalImg}
          modalOpen={modalOpen}
          onClose={() => {
            setModalOpen(false);
          }}
        />
      </Box>
    </Element>
  );
}

export default Photography;
