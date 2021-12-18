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

const themes = {
  default: () => {
    return css`
      .__heading {
        color: rgba(68, 68, 68, 1);
      }
      .__description {
        color: rgba(40, 40, 40, 0.6);
      }
    `;
  },
  blue: () => {
    return css`
      .__heading {
        color: rgba(68, 68, 68, 1);
      }
      .__description {
        color: rgba(40, 40, 40, 0.6);
      }
    `;
  },
};

export const CardWrapper = styled.div`
  ${(p) => (p.$type ? themes[p.$type]() : themes[type])};
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
  background-color: var(--callout-bg-color, var(--bg-color));
  margin-bottom: 20px;

  > * {
    flex-basis: 50%;
  }

  ${respond(
    css`
      flex-direction: column;
      border: 1px solid rgba(131, 184, 201, 0.6);

      > * {
        flex-basis: 100%;
      }
    `,
    "700px"
  )}
`;

export const CardImage = styled.div`
  position: relative;
  background-color: #444;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
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
  margin: ${fluidScale("40px", "20px")};
  margin-left: ${(p) => {
    return p.$orientation === "left" ? "0" : fluidScale("-40px", "-20px");
  }};
  margin-right: ${(p) => {
    return p.$orientation === "right" ? "0" : fluidScale("-40px", "-20px");
  }};
  border: 1px solid rgba(131, 184, 201, 0.35);
  box-shadow: rgba(0, 0, 0, 0.45) 0 5px 15px;

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
  font-size: ${fluidScale("18px", "13px")};
  font-style: italic;
  letter-spacing: 1px;
`;

export const CTA = styled.div`
  z-index: 100;
`;
