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
