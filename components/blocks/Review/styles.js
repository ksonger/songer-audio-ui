import styled, { css } from "styled-components";
import { fluidScale, lSetAspectRatio, respond } from "@/styles/mixins";
import Link from "next/link";

const type = "default";

function getFlexDirection(layout, imagePosition) {
    if (layout === "stack") return "column-reverse";
    return imagePosition === "left" ? "row-reverse" : "row";
}

export const ReviewWrapper = styled.p`
  padding: 0 40px;
  opacity: ${(p) => {
    return p.$current !== null && p.$current === false ? 0.5 : 1;
}};
  p {
    margin: ${fluidScale("20px", "10px")} 0;
  }
  ${respond(
    css`
      padding: 0;
    `,
    "1000px"
)}
`;

export const ReviewMain = styled.div`
  width: 100%;
  max-width: 1400px;
  border: 1px solid #555;
  margin: 30px auto;
  height: 100%;
  display: flex;
  flex-direction: ${(p) => getFlexDirection(p.$layout, p.$orientation)};
  background-color: rgba(63, 63, 63, 0.3);
  max-height: 650px;

  > * {
    flex-basis: 50%;
  }

  ${respond(
    css`
      flex-direction: column;
      max-height: 100%;
      border-left: none;
      border-right: none;
      > * {
        flex-basis: 100%;
      }
    `,
    "1000px"
)}
`;

export const ReviewImage = styled.div`
  position: relative;
  border: 1px solid #333;
  background-color: rgba(30, 30, 30, 1);
  margin: 40px;
    
  flex-basis: ${(p) => {
    return 30 * (p.$image.width / p.$image.height) + "%";
}};
  ${(p) => {
    return lSetAspectRatio(p.$image.width, p.$image.height);
}}

  ${respond(
    css`
        margin: 40px 40px 0 40px;
      flex-basis: ${(p) => {
        return 50 * (p.$image.width / p.$image.height) + "%";
    }};
    `,
    "1000px"
)}
    img {
      object-fit: cover;
      margin: auto;
    }
`;

export const ReviewContent = styled.div`
    display: flex;
    flex-direction: column;
  flex-grow: 1;
  align-content: center;
  z-index: 0;
  padding: ${fluidScale("40px", "30px")};

  .__heading {
    font-weight: bold;
    font-size: ${fluidScale("22px", "16px")};
    letter-spacing: 2px;
    color: rgba(180, 180, 180, 0.9);
  }
  .__description {
    color: rgba(180, 180, 180, 0.6);
  }

  margin-left: ${(p) => {
    return p.$orientation === "left" ? "0" : fluidScale("-40px", "-20px");
}};
  margin-right: ${(p) => {
    return p.$orientation === "right" ? "0" : fluidScale("-40px", "-20px");
}};

  ${respond(
    css`
      margin: 40px;
      box-shadow: none;
      border: none;
        padding: 0;
    `,
    "1000px"
)}
`;

export const ReviewHeading = styled.span`
  font-size: ${fluidScale("22px", "16px")};
  letter-spacing: 1px;
  font-weight: bold;
    margin-bottom: 20px;
`;

export const ReviewDate = styled.span`
  text-transform: none;
  font-style: italic;
  font-size: 18px;
  font-weight: lighter;
  color: var(--button-background-color);
  display: flex;
  margin-top: 6px;
  
`

export const ReviewDescription = styled.span`
    margin-bottom: 20px;
  font-size: ${fluidScale("16px", "10px")};
  font-style: italic;
  letter-spacing: 1px;
  ${respond(
    css`
      font-size: 16px;
    `,
    "1000px"
)}
`;

export const CTA = styled(Link)`
  z-index: 100;
`;
