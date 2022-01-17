import styled, { css } from "styled-components";
import { respond, fluidScale } from "@/styles/mixins";

export const Header = styled.div`
  width: 100%;
  transition: background-color 200ms;
  background-color: #000;
  padding: 0 var(--l-content-padding);
  z-index: var(--z-index-header);
`;

export const HeaderContent = styled.header`
  max-width: var(--l-content-max);
  margin: 0 auto;
  z-index: var(--z-index-header);
  transition: background-color 200ms, height 200ms;
  background-color: #000;
  gap: 2em;
  align-content: center;
  align-items: center;
  justify-content: center;

  height: var(--l-header-height-standard);
  text-align: center;
  display: grid;
  grid-template-columns: 1fr;

  ${respond(
    `
          height: var(--l-header-height-compact);
          grid-template-columns: 1fr;
          justify-content: start;
          `
  )}
`;

export const Background = styled.div`
  z-index: 0;
  opacity: 0.3;

  & span {
    transition: height 200ms;
    height: var(--l-header-height-standard) !important;

    ${respond(`height: var(--l-header-height-compact) !important;`)}
  }
`;

export const LogoNav = styled.div`
  display: grid;
  gap: 3em;
  width: 100%;
  grid-auto-flow: row;
  grid-template-rows: auto auto;
  align-content: center;
  align-items: center;
  justify-content: center;
  z-index: 1;
  margin-top: ${fluidScale("4em", "0em")};
  ${respond(
    `
    grid-auto-flow: column;
    grid-template-columns: 1fr 100px;
    grid-template-rows: auto;
    gap: 0;
    `
  )}
`;

export const Logo = styled.div`
  position: relative;
  display: grid;
  grid-auto-flow: row;
  grid-template-rows: auto;
  justify-self: center;
  cursor: pointer;
  svg {
    margin-left: 6px;
  }
  ${respond(
    css`
      justify-self: start;
      svg {
        margin-left: 0;
      }
    `
  )}
`;

export const LogoIcon = styled.div`
  width: 200px;
  height: 100px;
  ${respond(
    `
    width: 100px;
    height: 50px;
    `
  )}
`;

export const LogoSpan = styled.span`
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: ${fluidScale("5px", "1px")};
  font-size: 22px;
  ${respond(`font-size: 14px;`)}
`;

export const Shadow = styled.div`
  width: 100%;
  position: absolute;
  height: 50px;
  top: 220px;
  left: 0;
  z-index: 0;
  background: linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%);
  ${respond(`display: none;`)}
`;

export const Nav = styled.div`
  margin-top: ${fluidScale("0", "70px")};
  ${respond(
    css`
      margin: 0 17px 0 0;
      justify-self: end;
    `
  )}
`;
