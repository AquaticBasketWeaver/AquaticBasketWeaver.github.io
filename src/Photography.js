import React from "react";
import { Box, Grid } from "@material-ui/core";
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

function Photography() {

  const generatePhotoGrid = () => {
    return (<Grid container>
      <Grid item xs={4}>
      </Grid>
    </Grid>)
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
    </Box>
  );
}

export default Photography;
