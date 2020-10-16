import React, { useState, useEffect } from "react";
import { Element } from "react-scroll";
import { Box, Grid, makeStyles, Modal, Hidden } from "@material-ui/core";
import Banner from "./Banner";
import axios from "axios";

const photoApiUrl = "http://ec2-18-216-182-107.us-east-2.compute.amazonaws.com/photos/photography"

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
  const [photoArray, setPhotoArray] = useState([]);

  const onThumbnailClick = (image) => {
    setModalImg(image);
    setModalOpen(true);
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
              src={`data:${photoObj.ContentType};base64,${photoObj.Body}`}
              alt={""}
            />
            <Hidden xsDown>
              <div
                className={classes.tint}
                onClick={() => onThumbnailClick(photoObj)}
              ></div>
            </Hidden>
          </Grid>
        ))}
      </Grid>
    );
  };

  // TODO: add descriptions and such to your photos
  // will probably have to add something to photoObj
  const generateModal = () => {
    return (
      <Modal
        className={classes.modalContainer}
        open={modalOpen}
        onClose={() => {
          setModalOpen(false);
        }}
      >
        {modalImg ? (
          <img
            className={classes.modalImg}
            src={`data:${modalImg.ContentType};base64,${modalImg.Body}`}
            alt={""}
          />
        ) : (
          <div></div>
        )}
      </Modal>
    );
  };

  useEffect(() => {
    axios.get(photoApiUrl).then((res) => {
      const receivedPhotos = res.data;
      setPhotoArray(receivedPhotos);
    }).catch(err => {
      console.log(err);
    });
  }, []);

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
