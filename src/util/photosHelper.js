import carousel from "../img/photos/carousel-min.jpg";
import closeUpBee from "../img/photos/close_up_bee-min.jpg";
import dark_dock from "../img/photos/dark_dock-min.jpg";
import dock_view from "../img/photos/dock_view-min.jpg";
import ferry from "../img/photos/ferry-min.jpg";
import hk_at_night from "../img/photos/hk_at_night-min.jpg";
import hk_harbor_with_ferry from "../img/photos/hk_harbor_with_ferry-min.jpg";
import greenForestry from "../img/photos/green_forestry-min.jpg";
import purpleFlower from "../img/photos/Purple_Flower-min.jpg";
import riverwood from "../img/photos/Riverwood-min.jpg";
import torontoOnTrees from "../img/photos/Toronto_on_Trees-min.jpg";

// You might want to replace this photo with a better one
import hk_harbor from "../img/photos/hk_harbor-min.jpg"

const createPhotoObj = (thumbnail, image) => ({ thumbnail, image });

export const createWelcomePhotoArray = () => {
  const photoArray = [
    createPhotoObj(carousel, carousel),
    createPhotoObj(closeUpBee, closeUpBee),
    createPhotoObj(dark_dock, dark_dock),
    createPhotoObj(dock_view, dock_view),
    createPhotoObj(ferry, ferry),
    createPhotoObj(hk_at_night, hk_at_night),
    createPhotoObj(torontoOnTrees, torontoOnTrees),
    createPhotoObj(greenForestry, greenForestry),
    createPhotoObj(riverwood, riverwood),
    createPhotoObj(purpleFlower, purpleFlower),
    createPhotoObj(hk_harbor_with_ferry, hk_harbor_with_ferry),
  ];
  return photoArray;
};

// This may be temporary for now. We may want to pull photos from 
// s3 instead of just having the photos in the web page directly
export const createGalleryPhotoArray = () => {
  const photoArray = [
    createPhotoObj(carousel, carousel),
    createPhotoObj(closeUpBee, closeUpBee),
    createPhotoObj(dark_dock, dark_dock),
    // You might want to replace this photo with a better one
    createPhotoObj(hk_harbor, hk_harbor),
    createPhotoObj(dock_view, dock_view),
    createPhotoObj(ferry, ferry),
    createPhotoObj(hk_at_night, hk_at_night),
    createPhotoObj(torontoOnTrees, torontoOnTrees),
    createPhotoObj(greenForestry, greenForestry),
    createPhotoObj(riverwood, riverwood),
    createPhotoObj(purpleFlower, purpleFlower),
    createPhotoObj(hk_harbor_with_ferry, hk_harbor_with_ferry),
  ]
  return photoArray;
}
