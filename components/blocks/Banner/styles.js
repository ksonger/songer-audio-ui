import styled, { css } from "styled-components";
import { fluidScale, lSetAspectRatio, respond } from "@/styles/mixins";

export const BannerWrapper = styled.div``;

export const BannerMain = styled.div``;

export const Banner = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: max-content 1fr max-content;
  padding: 12px 16px;
  background: rgba(81, 175, 205, 1);
  justify-content: center;
  justify-items: center;

  & button {
    background-color: #fff;
    span {
      color: var(--button-background-color);
    }
  }
`;

export const Subscribe = styled.div``;

export const Message = styled.div`
  text-align: center;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 1px;
  padding: 8px;

  a {
    color: #fff;
    cursor: pointer;
    margin: 0 4px;
  }
`;

export const Contact = styled.div`
  color: #fff;
`;
