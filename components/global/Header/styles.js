import styled, {css} from "styled-components"
import {respond} from "@/styles/mixins";

export const Header = styled.div`
  width: 100%;
  transition: background-color 200ms;
  background-color: #000;
  overflow-y: hidden;
`

export const HeaderContent = styled.header`
  max-width: var(--l-content-max);
  margin: auto;
  z-index: var(--z-index-header);
  transition: background-color 200ms, height 200ms;
  background-color: #000;
  gap: 2em;
  align-content: center;
  align-items: center;
  justify-content: center;

  height: ${(p) => {
    return p.standard
            ? "var(--l-header-height-standard)"
            : "var(--l-header-height-compact)"
  }};
  text-align: ${(p) => {
    return p.standard
            ? "center"
            : "left"
  }};
  display: grid;
  grid-template-columns: ${(p) => {
    return p.standard ? "1fr" : "1fr auto"
  }};

  ${respond(
          `
          height: var(--l-header-height-compact);
          grid-template-columns: 200px 1fr;
          justify-content: start;
          `,
          '600px'
  )}




`

export const Background = styled.div`
  z-index: 0;
  opacity: 0.4;
`

export const Nav = styled.div`
  z-index: 1;
`
