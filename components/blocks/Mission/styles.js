import styled, { css } from "styled-components";
import { fluidScale, respond } from "@/styles/mixins";

export const BlockWrapper = styled.div`
  padding: 0 var(--l-content-padding);
`;

export const BlockMain = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-rows: auto;
  gap: 1em;
  width: 100%;
  max-width: var(--l-content-max);
  margin: 0 auto;
  padding: ${fluidScale("60px", "30px")} 0;
  align-content: center;
`;

export const Heading = styled.span`
  font-size: ${fluidScale("22px", "14px")};
  text-align: center;
  font-weight: bold;
  width: 100%;
  text-transform: uppercase;
  padding: 30px;
  letter-spacing: 2px;
  color: var(--neutral60);
  ${respond(
    css`
      font-size: 18px;
    `,
    "700px"
  )}
`;

export const Description = styled.p`
  text-align: center;
  color: var(--neutral40);
  font-style: italic;
  font-size: ${fluidScale("20px", "13px")};
  line-height: 24px;
  letter-spacing: 1px;
  ${respond(
    css`
      font-size: 16px;
    `,
    "700px"
  )}
`;
