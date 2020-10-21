import React from "react";
import { Grid, makeStyles, Hidden} from "@material-ui/core";

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

function PhotoGrid({children, photoArray, onThumbnailClick}) {
  const classes = useStyles();
  return (
    <Grid container spacing={0}>
      {photoArray.map((photoObj, index) => (
        <Grid
          key={index}
          item
          md={4}
          sm={6}
          xs={12}
        >
          <img
            src={photoObj.thumbnail}
            className={classes.thumbnail}
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
      {children && (<Grid
        key={"More"}
        item
        md={4}
        sm={6}
        xs={12}
      >
        {children}
      </Grid>)}
    </Grid>
  );
}

export default PhotoGrid;
