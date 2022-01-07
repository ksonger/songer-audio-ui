import styled, { css } from "styled-components";
import { fluidScale, respond } from "@/styles/mixins";

export const BlockWrapper = styled.div`
  width: calc(100% - 80px);
  margin: 0 auto;

  ${respond(
    css`
      margin: 40px 0;
      width: 100%;
    `,
    "700px"
  )}
`;

export const BlockMain = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-rows: auto;
  gap: 1em;
  width: 100%;
  max-width: 1100px;
  margin: 40px auto;
  align-content: center;
  p {
    margin-bottom: 12px;
  }

  a {
    color: var(--button-background-color);
  }
`;
