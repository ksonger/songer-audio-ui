import PropTypes from "prop-types"
import Link from "next/link"
import styled from "styled-components"
import IconFactory from "@/factories/IconFactory"
import { fluidScale, respond } from "@/styles/mixins";
import {
  useMenuState,
  Menu,
  MenuItem,
  MenuButton,
  MenuSeparator,
} from "reakit/Menu";

function ToggleWithSubmenu({ onClick, role, label, href, subitems, context }) {
  const { footer, mobile, activeHref } = context
  const menu = useMenuState();

  if (!subitems?.length || footer) return null

  return (
    <span
      className={`list-item-${role} toggle ${
        href === activeHref
          ? `active ${label.toLowerCase()}`
          : label.toLowerCase()
      }`}
    >
      <StyledMenuButton {...menu}>
        <span>{label}</span>

            <StyledIconFactory icon="caretDown" />


      </StyledMenuButton>
      <StyledMenu {...menu} aria-label={`Subpages for ${label}`}>
        {subitems.map(({ label, href: subitemHref }) => (
          <Link key={subitemHref} href={subitemHref} passHref>
            <StyledMenuItem
                {...menu}
                onClick={() => {
                  onClick();
                  menu.hide()
                }}
              aria-current={subitemHref === activeHref ? "page" : null}
            >
              {label}
            </StyledMenuItem>
          </Link>
        ))}
      </StyledMenu>
    </span>
  )
}

const StyledMenuButton = styled(MenuButton)`
  display: flex;
  align-items: center;
  gap: 6px;
  letter-spacing: inherit;
`

const StyledIconFactory = styled(IconFactory)`
  margin-bottom: 5px;
`

const StyledMenu = styled(Menu)`
  margin-top: 11px;
  padding: 1.5em;
  background-color: rgba(10,10,10,0.9);
  border: 1px solid #555;
  border-radius: 0 0 8px 8px;
  box-shadow: 0 26px 30px -22px rgb(0 0 0 / 18%);
  font-size: ${fluidScale("14px", "12px")};
  text-transform: uppercase;
  letter-spacing: 1px;
  text-align: start;
  min-width: 200px;
`

const StyledMenuItem = styled(MenuItem)`
  display: block;
  white-space: nowrap;
  color: #d9d8d8;
  width: 100%;
  text-align: left;
  text-transform: uppercase;

  & + & {
    margin-top: 1em;
  }

  &:hover {
    color: #d9d8d8;
    text-decoration: underline;
  }
`

ToggleWithSubmenu.displayName = "Global.NavList.ToggleWithSubmenu"

ToggleWithSubmenu.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  context: PropTypes.shape({
    footer: PropTypes.bool,
    mobile: PropTypes.bool,
    activeHref: PropTypes.string,
  }).isRequired,
  subitems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ),
  role: PropTypes.string,
}

export default ToggleWithSubmenu
