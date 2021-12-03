import { Fragment } from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import { fluidScale, respond } from "@/styles/mixins"
import Link from "next/link"
import TopLevelLink from "./TopLevelLink"
import ToggleWithSubmenu from "./ToggleWithSubmenu"

const NavList = ({
  activeHref,
  className,
  onClick,
  footer,
  mobile,
  navItems,
  ...listProps
}) => {
  const navClassName = (role) => {
    return footer && mobile ? "list-item-link" : `list-item-${role}`
  }
  const context = {
    footer,
    mobile,
    activeHref,
  }

  return (
    <StyledNavList
      className={className}
      footer={footer}
      mobile={mobile}
      {...listProps}
      onClick={() => mobile && onClick()}
    >
      {footer && (
        <span
          className={`${navClassName("link")} ${
            !activeHref ? "active home" : "home"
          }`}
        >
          <Link href="/">HOME</Link>
        </span>
      )}
      {navItems.map((item, i) => (
        <Fragment key={i}>
          <TopLevelLink context={context} {...item} />
          <ToggleWithSubmenu context={context} {...item} />
        </Fragment>
      ))}
    </StyledNavList>
  )
}

NavList.displayName = "Global.NavList"

const StyledNavList = styled.div`
  // all nav items
  span {
    font-family: var(--font-face-headers-compact);
    letter-spacing: 1px;
    font-size: var(--font-size-sm);
  }

  // nav items with link styling
  .list-item-link {
    &::after {
      content: "";
      display: block;
      border-bottom: 2px solid var(--text-color);
      width: 0;
      margin: 2px auto 0;
      transition: width 0.2s ease-in;
    }

    &.active::after,
    &:hover:not(.toggle)::after {
      width: 100%;
    }

    .footer &::after {
      margin: 1px auto 7px;
    }
  }

  ${respond(`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    display: ${({ ...listProps }) => {
      return listProps["aria-hidden"] ? "none" : "flex"
    }};
    li { margin: 26px;}
  `)}

  // mobile menu in the header
  &.mobile-menu {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--color-primary-light);
    transition: max-height 500ms cubic-bezier(0.33, 1, 0.68, 1);
    max-height: 0;
    overflow: hidden;
    grid-auto-flow: row;
    row-gap: 25px;

    span {
      margin: 0 auto;
    }
  }
  &.mobile-menu[data-open="true"] {
    max-height: 100vh;
    padding: var(--menu-padding-x) var(--menu-padding-y);
    .list-item-link a {
      padding: 1em;
    }
  }

  // standard or compact, and in the header
  ${({ footer, mobile }) =>
    (!footer || !mobile) &&
    css`
      display: grid;
      grid-auto-flow: column;
      gap: ${fluidScale("40px", "10px")};
      place-items: center;
      place-content: center;
    `}

  // nav in the footer
  .footer & {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0px;
    justify-items: start;
    span {
      margin: 0;
    }
    grid-template-areas:
      "home"
      "topics"
      "surveys"
      "learn"
      "read"
      "about"
      "search";

    .home {
      grid-area: home;
    }
    .topics {
      grid-area: topics;
    }
    .surveys {
      grid-area: surveys;
    }
    .learn {
      grid-area: learn;
    }
    .read {
      grid-area: read;
    }
    .about {
      grid-area: about;
    }
    .search {
      grid-area: search;
    }

    // nav in the mobile footer
    ${respond(css`
      grid-template-columns: max-content 1fr;
      gap: 10px 40px;
      grid-template-areas:
        "home read"
        "topics about"
        "surveys search"
        "learn .";
    `)}
  }
`

NavList.propTypes = {
  activeHref: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  footer: PropTypes.bool,
  mobile: PropTypes.bool,
  navItems: PropTypes.array,
}

export default NavList
