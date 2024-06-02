import React from "react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { mobileBreakpoint } from "@/styles/mixins";
import NavList from "./NavList";
import { useOnResize } from "@/hooks/listeners";
import useGlobalContext from "@/hooks/useGlobalContext";
import * as Styled from "./styles";

const Nav = ({ activeHref, className, mobile }) => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [windowWidth, setWindowWidth] = useState();
  const footerNav = className === "footer";
  const { navItems } = useGlobalContext();

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const method = showMobileNav ? "add" : "remove";
    document.body.classList[method]("has-scroll-lock");
  }, [showMobileNav]);

  useOnResize(mobileBreakpoint, (isMobile) => {
    const w = window.innerWidth;
    showMobileNav && windowWidth !== w && setShowMobileNav(false);
    setWindowWidth(w);
  });

  /**
   * Close the mobile nav on click
   */
  const handleClick = (toggle) => {
    setShowMobileNav(false);
  };

  return (
    <nav>
      <NavList
        activeHref={activeHref}
        className="mobile-menu"
        onClick={handleClick}
        aria-hidden={!showMobileNav && !footerNav}
        data-open={showMobileNav ? "true" : "false"}
        footer={footerNav}
        mobile={mobile}
        navItems={navItems.filter((item) => item.header === true)}
      />

      <Styled.NavButton
        open={showMobileNav}
        onClick={() => setShowMobileNav(!showMobileNav)}
        aria-controls="mobileMenu"
        aria-pressed={showMobileNav ? "open" : "closed"}
      />
    </nav>
  );
};

Nav.displayName = "Global.Nav";

Nav.propTypes = {
  activeHref: PropTypes.string,
  className: PropTypes.string,
};

export default Nav;
