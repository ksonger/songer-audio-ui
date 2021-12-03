import PropTypes from "prop-types"
import Link from "next/link"
import { usePopoverState, Popover, PopoverDisclosure } from "reakit/Popover"
import styled from "styled-components"
import IconFactory from "@/factories/IconFactory"

function ToggleWithSubmenu({ role, label, href, subitems, context }) {
  const popover = usePopoverState()
  const { footer, mobile, activeHref } = context

  if (!subitems?.length || footer || mobile) return null

  return (
    <span
      className={`list-item-${role} toggle ${
        href === activeHref
          ? `active ${label.toLowerCase()}`
          : label.toLowerCase()
      }`}
    >
      <StyledPopoverDisclosure {...popover}>
        <span>{label}</span>
        <StyledIconFactory icon="caretDown" />
      </StyledPopoverDisclosure>
      <StyledPopover {...popover} aria-label={`Subpages for ${label}`}>
        <Link href={href} passHref>
          <StyledSubitem aria-current={href === activeHref ? "page" : null}>
            Overview
          </StyledSubitem>
        </Link>
        {subitems.map(({ label, href: subitemHref }) => (
          <Link key={subitemHref} href={subitemHref} passHref>
            <StyledSubitem
              aria-current={subitemHref === activeHref ? "page" : null}
            >
              {label}
            </StyledSubitem>
          </Link>
        ))}
      </StyledPopover>
    </span>
  )
}

const StyledPopoverDisclosure = styled(PopoverDisclosure)`
  display: flex;
  align-items: center;
  gap: 6px;
  letter-spacing: inherit;
`

const StyledIconFactory = styled(IconFactory)`
  fill: none;
`

const StyledPopover = styled(Popover)`
  padding: 1.875em;
  background-color: white
  border: 1px solid;
  border-radius: 6px;
  box-shadow: 0 26px 30px -22px rgb(0 0 0 / 18%);
  text-transform: uppercase;
  letter-spacing: 1px;
  text-align: start;
`

const StyledSubitem = styled.a`
  display: block;
  white-space: nowrap;

  & + & {
    margin-top: 1em;
  }

  &:hover {
    color: #427359;
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
