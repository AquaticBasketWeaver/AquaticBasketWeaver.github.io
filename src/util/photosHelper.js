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
import hk_harbor from "../img/photos/hk_harbor-min.jpg";

import axios from "axios";
import constants from "./constants";
import config from "../config.json";

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
const createGalleryPhotoArray = () => {
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
  ];
  return photoArray;
};

const getPhotoList = async (setImageList, setNumberOfPages) => {
  const { data } = await axios.get(
    `${constants.apiUrl}/photos/image-list`
  );
  setNumberOfPages(Math.ceil(data.length / constants.galleryPageItems));
  setImageList(data);
  return data;
};

const getS3Image = async (key) => {
  const { data } = await axios.get(
    `${constants.apiUrl}/photos/image?key=${key}`
  );
  return data;
};

export const getPhotosFromS3 = async (
  setNumberOfPages,
  setPaginatedPhotoArray,
  paginatedPhotoArray,
  imageList,
  setImageList,
  page = 1
) => {
  const pageKey = `page_${page}`;

  // When running locally, we're going to not call s3 because s3 costs money.
  // Instead, we just have an aritificial delay to simulate the time it takes
  // to get something from s3.
  // Local will also populate all the pages with the same images for now
  if (config.env === "dev") {
    const artificalDelay = async (ms) => {
      return new Promise((resolve) => setTimeout(resolve, ms));
    };
    if (!paginatedPhotoArray[pageKey]) {
      // delay for getting the list of items
      await artificalDelay(200);

      const updatedPhotoArray = {
        [pageKey]: [...Array(constants.galleryPageItems)]
      };

      // Get photo items and put them into state while simulating time of http request
      const photoGalleryArray = createGalleryPhotoArray();
      photoGalleryArray.forEach(async (photoObj, i) => {
        await artificalDelay(Math.floor(Math.random() * 5000) + 2000);
        updatedPhotoArray[pageKey][i] = photoObj;
        setPaginatedPhotoArray((ppa) => {
          return {
            ...ppa,
            ...updatedPhotoArray,
          };
        });
      });
    }
  } else if (config.env === "local") {
    if (!paginatedPhotoArray[pageKey]) {
      const updatedPhotoArray = {
        [pageKey]: [...Array(constants.galleryPageItems)]
      };

      // Get photo items and put them into state while simulating time of http request
      const photoGalleryArray = createGalleryPhotoArray();
      photoGalleryArray.forEach(async (photoObj, i) => {
        updatedPhotoArray[pageKey][i] = photoObj;
        setPaginatedPhotoArray((ppa) => {
          return {
            ...ppa,
            ...updatedPhotoArray,
          };
        });
      });
    }
  } else if (config.env === "prod") {
    try {
      if (!paginatedPhotoArray[pageKey]) {
        let receivedImageList;
        if (!imageList) {
          receivedImageList = await getPhotoList(setImageList, setNumberOfPages);
        }
        const updatedPhotoArray = {
          [pageKey]: [...Array(constants.galleryPageItems)]
        };
        (imageList ? imageList : receivedImageList).filter(({ Key }) => {
          return Key.split("/")[0] === `page_${page}`
        }).forEach(async ({ Key }) => {
          const rawImageObject = await getS3Image(Key);
          const formattedSrc = `data:${rawImageObject.ContentType};base64,${rawImageObject.Body}`;
          updatedPhotoArray[pageKey][rawImageObject.Index] = createPhotoObj(
            formattedSrc,
            formattedSrc
          );
          setPaginatedPhotoArray((prevState) => {
            return {
              ...prevState,
              ...updatedPhotoArray,
            };
          });
        });
      }
    } catch (e) {
      console.error(e);
      return [];
    }
  }
};
