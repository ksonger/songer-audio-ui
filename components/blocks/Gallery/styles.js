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
  display: flex;
  flex-basis: 100%;
  width: 100%;
  max-width: 1100px;
  margin: 40px auto;
  height: 100%;

  & img {
    cursor: pointer;
  }

  ${respond(
    css`
      margin: 0;
      width: 100%;
      border: none;
    `,
    "700px"
  )}
`;
