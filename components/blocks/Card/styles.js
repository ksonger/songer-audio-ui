import styled, { css } from "styled-components";
import {
  fluidScale,
  lSetAspectRatio,
  lFullBleed,
  respond,
} from "@/styles/mixins";

const type = "default";

function getFlexDirection(layout, imagePosition) {
  if (layout === "stack") return "column-reverse";
  return imagePosition === "left" ? "row-reverse" : "row";
}

export const CardWrapper = styled.p`
  padding: 0;
  p {
    margin: ${fluidScale("40px", "20px")} 0;
  }
`;

export const CardMain = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: ${(p) => getFlexDirection(p.$layout, p.$orientation)};
  margin-bottom: 20px;
  background-color: #ddd;
  max-height: 650px;

  > * {
    flex-basis: 50%;
  }

  ${respond(
    css`
      flex-direction: column;
      max-height: 100%;

      > * {
        flex-basis: 100%;
      }
    `,
    "700px"
  )}
`;

export const CardImage = styled.div`
  position: relative;
  background-color: #cdcdcd;
  margin: 40px;
  flex-basis: ${(p) => {
    return 50 * (p.$image.width / p.$image.height) + "%";
  }};
  ${(p) => {
    return lSetAspectRatio(p.$image.width, p.$image.height);
  }}

  ${respond(css``, "700px")}
`;

export const CardContent = styled.div`
  flex-grow: 1;
  align-content: center;
  z-index: 0;
  padding: ${fluidScale("50px", "25px")};
  background-color: #ddd;

  .__heading {
    font-weight: bold;
    text-transform: uppercase;
    font-size: 18px;
    letter-spacing: 2px;
    color: #333;
  }
  .__description {
    color: rgba(40, 40, 40, 0.6);
  }

  margin-left: ${(p) => {
    return p.$orientation === "left" ? "0" : fluidScale("-40px", "-20px");
  }};
  margin-right: ${(p) => {
    return p.$orientation === "right" ? "0" : fluidScale("-40px", "-20px");
  }};

  ${respond(
    css`
      margin: 0;
      box-shadow: none;
      border: none;
    `,
    "700px"
  )}
`;

export const CardHeading = styled.span`
  font-size: ${fluidScale("26px", "16px")};
  letter-spacing: 1px;
  font-weight: bold;
`;

export const CardDescription = styled.span`
  font-size: ${fluidScale("18px", "11px")};
  font-style: italic;
  letter-spacing: 1px;
  ${respond(
    css`
      font-size: 16px;
    `,
    "700px"
  )}
`;

export const CTA = styled.div`
  z-index: 100;
`;
