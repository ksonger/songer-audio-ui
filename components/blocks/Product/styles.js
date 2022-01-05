import styled, { css } from "styled-components";
import { fluidScale, respond } from "@/styles/mixins";

export const ProductWrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 40px auto;
  padding: 30px;
  border: 1px solid #bbb;
  background: #eee;
  p {
    margin: ${fluidScale("20px", "10px")} 0;
  }

  ${respond(
    css`
      padding: 30px 0 0 0;
      border: none;
      border-top: 1px solid #bbb;
    `,
    "800px"
  )}
`;

export const ProductContent = styled.div`
  display: grid;
  grid-template-rows: max-content 1fr;
  ${respond(
    css`
      padding: 0 37px 0 20px;
    `,
    "800px"
  )}
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
  width: 100%;
  display: flex;
  gap: 10px;
  flex-flow: row;
  flex-basis: 100%;
  padding: 12px;

  ${respond(
    css`
      flex-flow: column;
      padding: 0;
      gap: 24px;
    `,
    "800px"
  )}
`;

export const Specs = styled.div`
  flex-basis: 50%;
  display: grid;
  grid-auto-flow: row;
  border-top: 1px solid #bbb;
  border-left: 1px solid #bbb;
  border-right: 1px solid #bbb;

  ${respond(
    css`
      flex-basis: 100%;
      border-left: none;
      border-right: none;
    `
  )}
`;

export const Images = styled.div`
  flex-basis: 50%;
  ${respond(
    css`
      flex-basis: 100%;
      text-align: center;
    `
  )}
`;

export const SpecRow = styled.div`
  display: grid;
  grid-auto-flow: row;
  border-bottom: 1px solid #bbb;
  grid-template-rows: max-content;
  padding: 10px 17px 10px 10px;
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
