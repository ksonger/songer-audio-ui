import React, { useEffect, useState } from "react";
import * as Styled from "./styles";
import { Gallery } from "@/components/atomic/Gallery";
import { useOnResize } from "@/hooks/listeners";
import { mobileBreakpoint } from "@/styles/mixins";
import { shuffle } from "@/helpers";

const PageGallery = ({ images }) => {
  const [galleryScroll, setGalleryScroll] = useState();
  const [containerObj, setContainerObj] = useState();
  const [windowWidth, setWindowWidth] = useState();
  const [hasData, setHasData] = useState(false);

  useOnResize(mobileBreakpoint, (isMobile) => {
    const w = window.innerWidth;
    setWindowWidth(window?.innerWidth);
    setContainerObj({
      width: galleryScroll?.clientWidth,
      height: galleryScroll?.clientHeight,
    });
  });

  useEffect(() => {
    setWindowWidth(window?.innerWidth);
    setGalleryScroll(document.querySelector(`#__next`));
    setHasData(galleryScroll !== undefined);
    setContainerObj({
      width: galleryScroll?.clientWidth,
      height: galleryScroll?.clientHeight,
    });
  }, [windowWidth, hasData]);
  return (
    <Styled.BlockWrapper id="gallery_page">
      {images.length > 0 && hasData && (
        <Gallery
          layout={0}
          scrollingEl={galleryScroll}
          containerObj={containerObj}
          gallery={shuffle(images)}
          galleryId={`galleryPageGallery`}
        />
      )}
    </Styled.BlockWrapper>
  );
};

export default PageGallery;
