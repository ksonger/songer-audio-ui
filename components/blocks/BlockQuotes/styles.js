import styled, { css } from "styled-components";
import { fluidScale, respond } from "@/styles/mixins";

export const BlockQuotes = styled.div`
  display: grid;
  gap: 3em;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  margin: 30px ${fluidScale("100px", "24px")};
  justify-content: center;
`;
