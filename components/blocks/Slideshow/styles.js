import styled, { css } from "styled-components";
import { fluidScale, respond } from "@/styles/mixins";

export const EachSlide = styled.div`
  background: #000;
`;

export const Background = styled.div`
  ${(p) =>
    css`
      background-image: url(${p.$background});
    `}
  display: flex;
  justify-content: center;
  background-size: cover;
  background-position: center;
  height: 400px;
  opacity: 0.5;

  ${respond(
    css`
      opacity: 0.5;
    `,
    "700px"
  )}
`;

export const Span = styled.span`
  font-size: ${fluidScale("19px", "15px")};
  color: #f1d9a9;
  display: grid;
  grid-auto-flow: row;
  background-color: rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 6px;
  padding: 24px;
  text-align: start;
  position: absolute;
  top: 50%;
  width: 100%;
  max-width: 600px;
  transform: translate(-50%, -50%);
  left: 50%;
  color: rgba(255, 255, 255, 0.8);

  ${respond(
    css`
      padding: 24px 40px;
    `,
    "700px"
  )}
  quote {
    color: rgba(250, 231, 188, 0.85);
    quotes: "“" "”";
    font-style: italic;

    &::before {
      content: "“";
    }

    &::after {
      content: "”";
    }

    ${(p) => {
      switch (p.$tAlign) {
        case "right":
          return css``;
      }
    }}
  }

  attribution {
    font-size: ${fluidScale("15px", "14px")};
    margin-top: 30px;
    text-align: right;
    color: rgba(255, 255, 255, 0.6);
  }
`;
