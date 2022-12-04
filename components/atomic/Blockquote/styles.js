import styled, { css } from "styled-components";
import { fluidScale, respond } from "@/styles/mixins";

export const BlockQuote = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  color: var(--neutral90);
  border: 1px solid #9a9a9a;

  ${respond(
    css`
      border: 0;
      border-top: 1px solid #9a9a9a;
      border-bottom: 1px solid #9a9a9a;
    `,
    "700px"
  )}
  padding: 24px;
`;

export const BlockLink = styled.a`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  cursor: pointer;
`;

export const Quotation = styled.blockquote`
  
  font-size: ${fluidScale("17px", "16px")};
  color: rgb(104,148,157);
  &::before {
    content: normal;
  }
  &::after {
    content: normal;
  }

  span:first-of-type {
    font-style: italic;
    quotes: "“" "”";
    &::before {
      content: "“";
    }
    &::after {
      content: "”";
    }
  `;

export const Attribution = styled.cite`
  color: var(--neutral40);
  margin-top: 16px;
  line-height: 1.357;
  font-size: ${fluidScale("16px", "13px")};
  font-weight: 700;
  font-style: inherit;
  text-align: right;
  padding-right: 10px;
`;
