import styled, { css } from "styled-components";
import { fluidScale, respond } from "@/styles/mixins";
import NavMenuButton from "@/global/Nav/NavMenuButton";

export const NavButton = styled(NavMenuButton)`
  display: none;

  .closeMenu {
    position: fixed;
    top: 27px;
    right: calc(17px + var(--l-content-padding));
    display: flex;
  }

  ${respond(`display: inline-block;`)}
`;

export const Nav = styled.div`
  /* all nav items */
  span {
    font-family: var(--font-face-headers-compact);
    letter-spacing: 2px;
    font-size: ${fluidScale("16px", "12px")};
    color: var(--header-menu-text-color);
    font-weight: var(--font-weight-regular);

    &:hover,
    &.active {
      color: var(--header-menu-text-color-active);
    }

    ${respond(
      css`
        font-size: 17px;
        line-height: 35px;
      `
    )}
  }

  /* nav items with link styling */
  .list-item-link {
    &::after {
      content: "";
      display: block;
      border-bottom: 1px solid var(--header-menu-text-color-active);
      width: 0;
      margin: 2px auto 0;
      transition: width 0.2s ease-in;
    }

    &.active::after,
    &:hover:not(.toggle)::after {
      width: 100%;
    }

    .footer {
      &::after {
        margin: 1px auto 7px;
      }
    }
  }

  ${respond(`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    display: ${({ ...listProps }) => {
      return listProps["aria-hidden"] ? "none" : "flex";
    }};
    li { margin: 26px;}
  `)}
  /* mobile menu in the header */
  &.mobile-menu {
    ${respond(
      css`
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
          rgba(0, 0, 0, 1) 0%,
          rgba(0, 0, 0, 0.9) 100%
        );
        transition: max-height 300ms cubic-bezier(0.33, 1, 0.68, 1);
        max-height: 0;
        overflow: hidden;
        grid-auto-flow: row;
        row-gap: 25px;

        span {
          margin: 0 auto;
        }
      `
    )}
  }

  &.mobile-menu[data-open="true"] {
    max-height: 100vh;
    padding: var(--menu-padding-x) var(--menu-padding-y);

    .list-item-link a {
      padding: 1em;
    }
  }

  display: grid;
  grid-auto-flow: column;
  gap: ${fluidScale("60px", "10px")};
  place-items: center;
  place-content: center;

  /* nav in the footer */
  .footer & {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0;
    justify-items: start;

    span {
      margin: 0;
    }
  }
`;
