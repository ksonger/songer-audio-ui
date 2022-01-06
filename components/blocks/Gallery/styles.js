import styled, { css } from "styled-components";
import { fluidScale, respond } from "@/styles/mixins";

export const BlockWrapper = styled.div`
  display: flex;
  flex-basis: 100%;
  width: 100%;
  max-width: 1000px;
  margin: 40px auto;
  height: 100%;
  border: 1px solid #bbb;

  ${respond(
    css`
      margin: 0;
      width: 100%;
      border: none;
    `,
    "700px"
  )}
`;
