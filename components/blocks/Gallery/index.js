import React, { useLayoutEffect, useState } from "react";
import * as Styled from "./styles";
import { Gallery } from "@/components/atomic/Gallery";
import { useOnResize } from "@/hooks/listeners";
import { mobileBreakpoint } from "@/styles/mixins";

const PageGallery = ({ images }) => {
  const [galleryScroll, setGalleryScroll] = useState();
  const [containerObj, setContainerObj] = useState();
  const [windowWidth, setWindowWidth] = useState();
  const [hasData, setHasData] = useState(false);

  useOnResize(mobileBreakpoint, (isMobile) => {
    const w = window.innerWidth;
  });

  useLayoutEffect(() => {
    setWindowWidth(window?.innerWidth);
    setGalleryScroll(window);
    setHasData(galleryScroll !== undefined);
    setContainerObj({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, [windowWidth, hasData]);
  return (
    <Styled.BlockWrapper>
      <Styled.BlockMain>
        {images.length > 0 && hasData && (
          <Gallery
            layout={0}
            scrollingEl={galleryScroll}
            containerObj={containerObj}
            gallery={images}
            galleryId={`galleryPageGallery`}
          />
        )}
      </Styled.BlockMain>
    </Styled.BlockWrapper>
  );
};

export default PageGallery;
