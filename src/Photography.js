import React from "react";
import {
  Box,
  Grid,
  makeStyles,
  Card,
  CardMedia,
  CardContent,
} from "@material-ui/core";
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
  container: {},
  media: {
    height: 0,
    paddingTop: "66.71%", // since photos are like 4008 x 6008
  },
  thumbnail: {
    maxWidth: "100%",
    height: "auto",
    display: "block",
    position: "relative",
    top: "-100%",
    // transform: "translate(0, -100%)",
  },
  thumbnailContainer: {},
  tint: {
    height: "100%",
    width: "100%",
    position: "relative",
    transition: "0.5s",
    zIndex: "1",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "rgba(38,149,235,.3)",
    },
  },
}));

function Photography() {
  const classes = useStyles();

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
    createPhotoObj(t_DSC_0078, DSC_0078),
    createPhotoObj(t_greenForestry, greenForestry),
    createPhotoObj(t_purpleFlower, purpleFlower),
    createPhotoObj(t_riverwood, riverwood),
    createPhotoObj(t_torontoOnTrees, torontoOnTrees),
  ];

  const generatePhotoGrid = () => {
    return (
      <Grid container spacing={0}>
        {photoArray.map((photoObj) => (
          <Grid className={classes.thumbnailContainer} item xs={4}>
            <div className={classes.tint} onClick={() => alert(photoObj.image)}></div>
            <img className={classes.thumbnail} src={photoObj.thumbnail} />
          </Grid>
        ))}
      </Grid>
    );
  };

  return (
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
      <Banner
        title={"TODO: you need a view more button"}
        style={{
          container: {
            backgroundColor: "#1e7ad6",
          },
        }}
      />
    </Box>
  );
}

export default Photography;
