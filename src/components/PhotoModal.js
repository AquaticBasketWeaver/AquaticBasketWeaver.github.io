import React from "react";
import { Modal, makeStyles } from "@material-ui/core";

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
}));

function PhotoModal({ modalImg, modalOpen, onClose }) {
  const classes = useStyles();
  return (
    <Modal
      className={classes.modalContainer}
      open={modalOpen}
      onClose={onClose}
    >
      <img className={classes.modalImg} src={modalImg} alt={""} />
    </Modal>
  );
}

export default PhotoModal;
