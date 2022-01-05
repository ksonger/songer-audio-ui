import React, { useLayoutEffect, useState } from "react";
import * as Styled from "./styles";
import { Gallery } from "@/components/atomic/Gallery";
import { useOnResize } from "@/hooks/listeners";
import { mobileBreakpoint } from "@/styles/mixins";

const Product = ({
  heading,
  description,
  specs = [],
  price,
  galleryId,
  gallery,
  measurements,
}) => {
  const [galleryScroll, setGalleryScroll] = useState();
  const [containerObj, setContainerObj] = useState();
  const [windowWidth, setWindowWidth] = useState();
  const [hasData, setHasData] = useState(false);

  useOnResize(mobileBreakpoint, (isMobile) => {
    const w = window.innerWidth;
    setWindowWidth(w);
  });

  useLayoutEffect(() => {
    setWindowWidth(window?.innerWidth);
    setGalleryScroll(document.querySelector(`#${galleryId}`));
    setHasData(galleryScroll !== undefined);
    setContainerObj({
      width: galleryScroll?.clientWidth,
      height: 600,
    });
  }, [windowWidth, hasData]);
  return (
    <Styled.ProductWrapper>
      <Styled.ProductContent>
        <Styled.ProductHeading dangerouslySetInnerHTML={{ __html: heading }} />
        <Styled.ProductDescription
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </Styled.ProductContent>
      <Styled.ProductSpecsImages>
        <Styled.Images id={galleryId}>
          {gallery.length > 0 && hasData && (
            <Gallery
              layout={3}
              scrollingEl={galleryScroll}
              containerObj={containerObj}
              gallery={gallery}
              galleryId={galleryId}
            />
          )}
        </Styled.Images>
        <Styled.Specs>
          {specs.map((spec, i) => (
            <Styled.SpecRow key={`spec_${galleryId}_${i}`}>
              <Styled.SpecLabel>{spec.label}</Styled.SpecLabel>
              <Styled.SpecValue>{spec.value}</Styled.SpecValue>
            </Styled.SpecRow>
          ))}
        </Styled.Specs>
      </Styled.ProductSpecsImages>
    </Styled.ProductWrapper>
  );
};

export default Product;
