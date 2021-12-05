import styled, {css} from "styled-components"
import {respond} from "@/styles/mixins";
import Image from "@/components/atomic/Image"

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
  opacity: 0.3;

  & span {
    transition: height 200ms;
    height: ${(p) => {
      return p.standard
              ? "var(--l-header-height-standard) !important"
              : "var(--l-header-height-compact) !important"
    }};

    ${respond(
            `
          height: var(--l-header-height-compact) !important;
          `,
            '600px'
    )}
  }
`

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
  margin-top: 4em;
`

export const Logo = styled.div`
  position: relative;
  width: 200px;
  height: 99.4px;
  justify-self: center;

  > span {
    width: 100% !important;
    height: 100% !important;
  }
`

export const Shadow = styled.div`
  width: 100%;
  z-index: 100;
  position: absolute;
  height: 90px;
  top: 240px;
  left: 0;
  background: linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .5) 100%);
`

export const Nav = styled.div`

`
