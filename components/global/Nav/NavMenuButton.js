import PropTypes from "prop-types"
import styled from "styled-components"
import IconFactory from "@/factories/IconFactory"

const NavMenuButton = ({ open, ...buttonProps }) => {
  return (
    <StyledNavMenuButton {...buttonProps}>
      <span className="a-hidden">{open} navigation</span>
      {open ? (
        <span className="closeMenu">
          <span>Close</span>
          <IconFactory
            icon="closeMenu"
            style={{ position: "relative", top: 4, width: 12, height: 12 }}
          />
        </span>
      ) : (
        <span className="openMenu">Menu</span>
      )}
    </StyledNavMenuButton>
  )
}

NavMenuButton.displayName = "Global.NavMenuButton"

const StyledNavMenuButton = styled.button`
  outline: none;
  > span {
    font-family: var(--font-face-headers-compact);
    font-size: var(--font-size-sm);
    letter-spacing: 1px;
    text-transform: uppercase;
    background-color: var(--white);
    padding: 5.5px 10.5px;
    border-bottom: 0;
    border-radius: 5px;
  }

  .closeMenu {
    position: absolute;
    top: 23.5px;
    right: 21.5px;
    transform: translateY(2px);
    display: flex;
    gap: 9px;
  }
`

NavMenuButton.propTypes = {
  open: PropTypes.bool,
}

export default NavMenuButton
