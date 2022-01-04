import styled, { css } from "styled-components";
import { fluidScale, respond } from "@/styles/mixins";

export const ProductWrapper = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 40px auto;
  padding: 30px;
  border: 1px solid #ddd;
  background: #eee;
  p {
    margin: ${fluidScale("40px", "20px")} 0;
  }

  ${respond(
    css`
      padding: 30px 0;
    `,
    "800px"
  )}
`;

export const ProductContent = styled.div`
  display: grid;
  grid-template-rows: max-content 1fr;
`;

export const ProductHeading = styled.h2`
  color: #444;
  text-align: center;
  font-size: 18px;
`;

export const ProductDescription = styled.div`
  font-size: 14px;
  letter-spacing: 1px;
  font-style: italic;
  margin-bottom: 32px;
`;

export const ProductSpecsImages = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 1em;
  grid-template-columns: 1fr 1fr;
  padding: 12px;

  ${respond(
    css`
      grid-auto-flow: row;
      grid-template-rows: auto;
      grid-template-columns: 1fr;
    `,
    "800px"
  )}
`;

export const Specs = styled.div`
  display: grid;
  grid-auto-flow: row;
  border-top: 1px solid #bbb;
  border-left: 1px solid #bbb;
  border-right: 1px solid #bbb;
  width: 100%;
`;

export const Images = styled.div`
  ${respond(
    css`
      text-align: center;
    `
  )}
`;

export const SpecRow = styled.div`
  display: grid;
  grid-auto-flow: row;
  border-bottom: 1px solid #bbb;
  grid-template-rows: max-content;
  padding: 10px;
  align-content: center;
  gap: 0.5em;
`;

export const SpecLabel = styled.div`
  font-weight: bold;
  font-size: 16px;
`;

export const SpecValue = styled.div`
  font-style: italic;
  font-size: 14px;
  color: #888;
`;
