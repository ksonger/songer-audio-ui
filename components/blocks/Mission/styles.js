import styled, { css } from "styled-components";
import { fluidScale, respond } from "@/styles/mixins";

export const BlockWrapper = styled.div`
  padding: 0 40px;
  max-width: 1100px;
  margin: 0 auto;
`;

export const BlockMain = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-rows: auto;
  gap: 1em;
  width: 100%;
  max-width: var(--l-content-max);
  margin: 0 auto;
  align-content: center;
`;

export const Heading = styled.span`
  font-size: ${fluidScale("22px", "14px")};
  text-align: center;
  font-weight: bold;
  width: 100%;
  ${(p) =>
    p.$missionType === "home"
      ? css`
          text-transform: uppercase;
          color: var(--neutral60);
        `
      : css`
          text-transform: uppercase;
          color: rgba(200, 200, 200, 0.8);
          font-style: normal;
        `}

  padding: 30px;
  letter-spacing: 2px;

  ${respond(
    css`
      font-size: 18px;
    `,
    "700px"
  )}
`;

export const Description = styled.p`
  text-align: center;
  line-height: 24px;
  letter-spacing: 1px;
  a {
    white-space: nowrap;
    color: var(--button-background-color);
    cursor: pointer;
  }
  ${respond(
    css`
      font-size: 16px;
    `,
    "700px"
  )}

  ${(p) =>
    p.$missionType === "home"
      ? css`
          color: rgba(200, 200, 200, 0.7);
          font-style: italic;
          font-size: ${fluidScale("20px", "13px")};
          margin: 0 auto 30px auto;
        `
      : css`
          color: var(--neutral50);
          font-style: italic;
          font-size: ${fluidScale("18px", "17px")};
          max-width: 800px;
          margin: 60px auto 30px auto;
        `}
`;
