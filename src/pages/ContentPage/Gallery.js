import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import PhotoGrid from "../../components/PhotoGrid";
import PhotoModal from "../../components/PhotoModal";
import { createGalleryPhotoArray } from "../../util/photosHelper";

const useStyles = makeStyles(() => ({
  photoGridContainer: {},
}));

function Gallery() {
  const classes = useStyles();
  const photoArray = createGalleryPhotoArray();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState();

  const onThumbnailClick = (image) => {
    setModalImg(image);
    setModalOpen(true);
  };

  return (
    <div className={classes.photoGridContainer}>
      <PhotoGrid photoArray={photoArray} onThumbnailClick={onThumbnailClick} />
      <PhotoModal
        modalImg={modalImg}
        modalOpen={modalOpen}
        onClose={() => {
          setModalOpen(false);
        }}
      />
    </div>
  );
}

export default Gallery;
