import styled, { css } from "styled-components";
import { respond } from "@/styles/mixins";

export const BannerWrapper = styled.div``;

export const BannerMain = styled.div``;

export const Banner = styled.div`
  display: flex;
  flex-flow: row;
  padding: 14px 16px;
  align-items: center;
  background: #000;
  border-top: 1px solid #444;
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
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 1px;
  color: rgba(255, 255, 255, 0.8);

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
