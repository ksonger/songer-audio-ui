import { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { mobileBreakpoint } from "@/styles/mixins"
import NavList from "./NavList"
import NavMenuButton from "./NavMenuButton"
import { useOnResize } from "@/hooks/listeners"
import useGlobalContext from "@/hooks/useGlobalContext"

const Nav = ({ activeHref, className, mobile }) => {
  const [showMobileNav, setShowMobileNav] = useState(false)
  const [windowWidth, setWindowWidth] = useState()
  const footerNav = className === "footer"
  const { navItems } = useGlobalContext()

  useEffect(() => {
    setWindowWidth(window.innerWidth)
    const method = showMobileNav ? "add" : "remove"
    document.body.classList[method]("has-scroll-lock")
  }, [showMobileNav])

  useOnResize(mobileBreakpoint, (isMobile, e) => {
    const w = window.innerWidth
    isMobile && windowWidth !== w && setShowMobileNav(false)
    setWindowWidth(w)
  })

  /**
   * Close the mobile nav on click
   */
  const handleClick = () => {
    setShowMobileNav(false)
  }

  return (
    <nav className={className}>
      <NavList
        activeHref={activeHref}
        className={mobile && !footerNav ? "mobile-menu" : ""}
        onClick={handleClick}
        aria-hidden={!showMobileNav && !footerNav}
        data-open={showMobileNav ? "true" : "false"}
        mobile={mobile}
        footer={footerNav}
        navItems={navItems}
      />
      {mobile && !footerNav && (
        <NavMenuButton
          open={showMobileNav}
          onClick={() => setShowMobileNav(!showMobileNav)}
          aria-controls="mobileMenu"
          aria-pressed={showMobileNav ? "open" : "closed"}
        />
      )}
    </nav>
  )
}

Nav.displayName = "Global.Nav"

Nav.propTypes = {
  activeHref: PropTypes.string,
  className: PropTypes.string,
  mobile: PropTypes.bool,
}

export default Nav
