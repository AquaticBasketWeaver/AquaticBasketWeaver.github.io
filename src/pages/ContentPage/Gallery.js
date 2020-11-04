import React, { useCallback, useEffect, useState, useRef } from "react";
import { makeStyles, useTheme } from "@material-ui/core";
import PhotoGrid from "../../components/PhotoGrid";
import PhotoModal from "../../components/PhotoModal";
import { Pagination } from "@material-ui/lab";

/*
  If you have time, find a better way of getting this content from out under
  the mobile navbar in this component
*/

// TODO: This isn't great for getting things from out under the toolbar
const mdToolbarPadding = 64;
const smToolbarPadding = 56;

const useStyles = makeStyles(() => ({
  photoGridContainer: { paddingTop: `0px` },
  photoGridContainerMd: {
    paddingTop: `${mdToolbarPadding}px`,
  },
  photoGridContainerSm: {
    paddingTop: `${smToolbarPadding}px`,
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "2em 0",
    width: "100%",
  },
}));

function Gallery({ paginatedPhotoArray, galleryPage, setGalleryPage, numberOfPages }) {
  const classes = useStyles();
  const theme = useTheme();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState();
  const [containerClass, setContainerClass] = useState(
    classes.photoGridContainer
  );
  const isMountedRef = useRef(null); // for memory leak prevention purposes

  // TODO: This isn't great for getting things from out under the toolbar
  const getToolbarPadding = useCallback(() => {
    if (window.innerWidth < theme.breakpoints.values.sm) {
      setContainerClass(classes.photoGridContainerSm);
    } else if (window.innerWidth < theme.breakpoints.values.md) {
      setContainerClass(classes.photoGridContainerMd);
    } else {
      setContainerClass(classes.photoGridContainer);
    }
  }, [
    theme.breakpoints.values.sm,
    theme.breakpoints.values.md,
    classes.photoGridContainerSm,
    classes.photoGridContainerMd,
    classes.photoGridContainer,
  ]);

  // Only runs once and determines the initial window size
  useEffect(() => {
    isMountedRef.current = true;
    if (isMountedRef.current) {
      getToolbarPadding();
    }
    return () => {
      isMountedRef.current = false;
    };
  });

  useEffect(() => {
    isMountedRef.current = true;
    const mobileSizeListener = window.addEventListener("resize", (e) => {
      if (isMountedRef.current) {
        getToolbarPadding();
      }
    });
    return () => {
      isMountedRef.current = false;
      document.removeEventListener("resize", mobileSizeListener);
    };
  }, [getToolbarPadding]);

  const onThumbnailClick = (image) => {
    setModalImg(image);
    setModalOpen(true);
  };

  const handlePageChange = (event, value) => {
    setGalleryPage(value);
  };

  return (
    <div className={containerClass}>
      <PhotoGrid
        photoArray={paginatedPhotoArray[`page_${galleryPage}`]}
        onThumbnailClick={onThumbnailClick}
      />
      <PhotoModal
        modalImg={modalImg}
        modalOpen={modalOpen}
        onClose={() => {
          setModalOpen(false);
        }}
      />
      {numberOfPages > 1 && (
          <div className={classes.paginationContainer}>
            <Pagination
              size={"medium"}
              count={numberOfPages}
              page={galleryPage}
              onChange={handlePageChange}
            />
          </div>
        )}
    </div>
  );
}

export default Gallery;
