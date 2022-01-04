import React, { useEffect, useState } from "react";
import * as Styled from "./styles";
import { Gallery } from "@/components/atomic/Gallery";

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

  useEffect(() => {
    setGalleryScroll(document.querySelector(`#${galleryId}`));
    console.log(galleryScroll);
  });
  return (
    <Styled.ProductWrapper>
      <Styled.ProductContent>
        <Styled.ProductHeading>{heading}</Styled.ProductHeading>
        <Styled.ProductDescription>{description}</Styled.ProductDescription>
      </Styled.ProductContent>
      <Styled.ProductSpecsImages>
        <Styled.Images id={galleryId}>
          {gallery && gallery.length > 0 && (
            <Gallery
              layout={3}
              scrollingEl={galleryScroll}
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
