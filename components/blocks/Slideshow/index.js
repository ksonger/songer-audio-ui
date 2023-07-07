import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import * as Styled from "./styles";
import PropTypes from "prop-types";

const buttonStyle = {
  width: "30px",
  background: "none",
  border: "0px",
  margin: "0 4px",
};

const properties = {
  prevArrow: (
    <button style={{ ...buttonStyle }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 8 12"
        width="20"
        height="30"
        fill="rgba(255,255,255,0.6)"
        aria-hidden
      >
        <path d="M7.5595,10.4165l-4.4-4.416,4.4-4.416L6.2045.2285.4405,6.0005l5.764,5.772Z" />
      </svg>
    </button>
  ),
  nextArrow: (
    <button style={{ ...buttonStyle }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 8 12"
        width="20"
        height="30"
        fill="rgba(255,255,255,0.6)"
        aria-hidden
      >
        <path d="M.4405,1.5845l4.4,4.416-4.4,4.416,1.355,1.356,5.764-5.772L1.7955.2285Z" />
      </svg>
    </button>
  ),
};

const Slideshow = ({ slides = fadeImages }) => {
  if (!slides) return null;

  return (
    <Styled.SlideshowContainer>
      <Fade duration={11000} {...properties}>
        {slides.map((slide, index) => (
          <a
            key={index}
            href={slide.link}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Styled.EachSlide $tAlign={slide.textAlign}>
              <Styled.Background $background={slide.url} />
              <Styled.Span $tAlign={slide.textAlign}>
                <quote $tAlign={slide.textAlign}>{slide.caption}</quote>
                <attribution>{slide.attribution}</attribution>
              </Styled.Span>
            </Styled.EachSlide>
          </a>
        ))}
      </Fade>
    </Styled.SlideshowContainer>
  );
};

Slideshow.displayName = "Blocks.Slideshow";

Slideshow.propTypes = {
  slides: PropTypes.array.isRequired,
};

export default Slideshow;
