import React from "react";
import PhotoGrid from "../../components/PhotoGrid";
import { createPreviewPhotoArray } from "../../util/photosHelper";

function Gallery() {
    const photoArray = createPreviewPhotoArray();
    return(
        <PhotoGrid photoArray={photoArray}/>
    );
}

export default Gallery;