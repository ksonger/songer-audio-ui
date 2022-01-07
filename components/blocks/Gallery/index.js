import React, { useEffect, useState } from "react";
import * as Styled from "./styles";
import { Gallery } from "@/components/atomic/Gallery";
import { useOnResize } from "@/hooks/listeners";
import { mobileBreakpoint } from "@/styles/mixins";
import { shuffle } from "@/helpers";

const PageGallery = ({ images }) => {
  const [galleryScroll, setGalleryScroll] = useState();
  const [containerObj, setContainerObj] = useState();
  const [hasData, setHasData] = useState(false);

  useEffect(() => {
    if (!galleryScroll) setGalleryScroll(document.querySelector(`#__next`));
    if (!hasData) setHasData(galleryScroll !== undefined);
    setContainerObj({
      width: document.querySelector(`#gallery_page`).clientWidth,
      height: galleryScroll?.clientHeight,
    });
  }, [hasData, galleryScroll, containerObj]);

  return (
    <Styled.BlockWrapper>
      <Styled.BlockMain id="gallery_page">
        {images.length > 0 && hasData && (
          <Gallery
            layout={0}
            scrollingEl={galleryScroll}
            containerObj={containerObj}
            gallery={shuffle(images)}
            galleryId={`galleryPageGallery`}
          />
        )}
      </Styled.BlockMain>
    </Styled.BlockWrapper>
  );
};

export default PageGallery;
