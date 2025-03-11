import React, { useEffect, useState } from "react";
import * as Styled from "./styles";
import { Gallery } from "@/components/atomic/Gallery";
import { useOnResize } from "@/hooks/listeners";
import { mobileBreakpoint } from "@/styles/mixins";
import { useRouter } from "next/router";
import { useRef } from "react";

const Product = ({
    id,
  heading,
  description,
  specs = [],
  price,
  galleryId,
  anchorName,
  gallery,
  measurements,
}) => {
  const [galleryScroll, setGalleryScroll] = useState();
  const [containerObj, setContainerObj] = useState();
  const [windowWidth, setWindowWidth] = useState();
  const [hasData, setHasData] = useState(false);
  const [showPrice, setShowPrice] = useState(true);
  const [isActive, setIsActive] = useState(false)
  const [mobile, setMobile] = useState(false)
  const { asPath } = useRouter();
  const galleryElement = useRef();
  const [galleryWidth, setGalleryWidth] = useState(600);
  const router = useRouter();

  useOnResize(mobileBreakpoint, (isMobile) => {
    const w = window.innerWidth;
    setWindowWidth(w);
    setMobile(isMobile)
  });

  useEffect(() => {
    setWindowWidth(window?.innerWidth);
    setGalleryScroll(document.querySelector(`#${galleryId}`));
    setHasData(galleryScroll !== undefined);
    setContainerObj({
      width: galleryWidth,
      height: 600,
    });
    setIsActive(asPath.split("/")[2] === id || mobile)
    if (asPath.indexOf("?") !== -1) {
      router.replace(router.pathname, asPath.split("?")[0]);
    }
    setTimeout(() => {
      if (asPath.indexOf("#") !== -1) {
        const el = document.querySelector(`#${asPath.split("#")[1]}`);
        el.scrollIntoView();
      }
      setGalleryWidth(galleryElement.current.clientWidth)
    }, 10);
  }, [windowWidth, hasData, asPath, galleryWidth]);

  return (
    <Styled.ProductWrapper id={anchorName}
                           className={`${
                               isActive
                                   ? `active`
                                   : `inactive`
                           }`}>
      <Styled.ProductInner>
        <Styled.ProductMain>
          <Styled.ProductContent>
            <Styled.ProductHeading
              dangerouslySetInnerHTML={{ __html: heading }}
            />
            <Styled.ProductDescription
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </Styled.ProductContent>
          <Styled.ProductSpecsImages>
            <Styled.Images id={galleryId} ref={galleryElement}>
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
          {showPrice && <Styled.Price>{price}</Styled.Price>}
        </Styled.ProductMain>
      </Styled.ProductInner>
    </Styled.ProductWrapper>
  );
};

export default Product;
