import styled, { css } from "styled-components";
import { fluidScale, respond } from "@/styles/mixins";

export const AwardBlade = styled.div`
  display: grid;
  grid-auto-flow: column;
  padding: 0 16px;
  align-items: center;
  margin: 0 auto 40px auto;
  text-align: center;
  cursor: pointer;
  width: 100%;
  grid-gap: 2em;
  max-width: 1100px;
  ${respond(
    css`
      grid-auto-flow: row;
    `,
    "700px"
  )}
`;

export const Image = styled.div`
  width: 180px;
  margin: 0 auto;
  padding: 20px 12px;
`;

export const Message = styled.div`
  flex-grow: 1;
  font-size: ${fluidScale("18px", "16px")};
  color: rgb(42, 143, 161);
  font-style: italic;
  letter-spacing: 0.5px;
  ${respond(
    css`
      margin-bottom: 40px;
    `,
    "700px"
  )}
`;
