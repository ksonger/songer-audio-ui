import styled, { css } from "styled-components";
import { fluidScale, respond } from "@/styles/mixins";

export const TestimonialWrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 24px auto;
`;

export const TestimonialMain = styled.div``;

export const Testimonial = styled.div`
  display: flex;
  flex-flow: row;
  padding: 14px 16px;
  align-items: center;
  background: #000;
  border-bottom: 1px solid #444;
  box-shadow: 0 15px 100px rgba(0, 0, 0, 0.3);
`;

export const Subscribe = styled.div`
  opacity: 0.8;
  ${respond(css`
    width: 0;
    display: none;
  `)}
`;

export const Message = styled.div`
  flex-grow: 1;
  text-align: center;
  font-size: ${fluidScale("18px", "15px")};
  font-weight: bold;
  letter-spacing: 1px;
  line-height: ${fluidScale("25px", "20px")};
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 24px;

  q {
    quotes: initial;
    font-style: italic;
  }

  a {
    color: var(--button-background-color);
    cursor: pointer;
    margin: 0 4px;
  }
`;

export const Contact = styled.div`
  color: #fff;
  opacity: 0.8;
  ${respond(css`
    width: 0;
    display: none;
  `)}
`;
