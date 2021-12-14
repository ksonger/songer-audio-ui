import styled from "styled-components";
import { fluidScale } from "@/styles/mixins";

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
  font-size: ${fluidScale("26px", "16px")};
  text-align: center;
  color: var(--neutral60);
  font-weight: bold;
  width: 100%;
`;

export const Description = styled.p`
  text-align: center;
  color: var(--neutral50);
  font-style: italic;
  font-size: ${fluidScale("20px", "13px")};
  line-height: 24px;
`;
