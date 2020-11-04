import React from "react";
import { Grid, makeStyles, Hidden } from "@material-ui/core";
import constants from "../util/constants";

const useStyles = makeStyles(() => ({
  thumbnail: {
    maxWidth: "100%",
    height: "auto",
    display: "block",
    position: "relative",
  },
  tint: {
    height: "100%",
    width: "100%",
    position: "absolute",
    transition: "0.5s",
    zIndex: "1",
    cursor: "pointer",
    top: "0%",
    "&:hover": {
      backgroundColor: "rgba(38,149,235,.3)",
    },
  },
  thumbnailContainer: {
    position: "relative",
  },
  emptyImage: {
    width: "100%",
    paddingTop: "66.66%",
    animation: "$pulse 5s ease-in-out 0s infinite",
  },
  "@keyframes pulse": {
    "50%": {
      backgroundColor: "rgba(38,149,235)",
    },
  },
}));

function PhotoGrid({ children, photoArray, onThumbnailClick }) {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={0}>
        {(photoArray ? photoArray : [...Array(constants.galleryPageItems)]).map(
          (photoObj, index) => (
            <Grid key={index} item md={4} sm={6} xs={12}>
              <div className={classes.thumbnailContainer}>
                {photoObj ? (
                  <>
                    <img
                      src={photoObj.thumbnail}
                      className={classes.thumbnail}
                      alt={""}
                    />
                    <Hidden xsDown>
                      <div
                        className={classes.tint}
                        onClick={() =>
                          onThumbnailClick && onThumbnailClick(photoObj.image)
                        }
                      ></div>
                    </Hidden>
                  </>
                ) : (
                  // todo: Right now all loading breaths at same rate, it'd be nice if they breathed randomly
                  <div className={classes.emptyImage}></div>
                )}
              </div>
            </Grid>
          )
        )}
        {children && (
          <Grid key={"More"} item md={4} sm={6} xs={12}>
            {children}
          </Grid>
        )}
      </Grid>
    </>
  );
}

export default PhotoGrid;
