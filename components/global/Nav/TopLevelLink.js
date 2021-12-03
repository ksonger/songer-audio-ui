import Link from "next/link"
import PropTypes from "prop-types"

function TopLevelLink({ role, label, href, subitems, context }) {
  const { footer, mobile, activeHref } = context

  const navClassName = (role) => {
    return footer && mobile ? "list-item-link" : `list-item-${role}`
  }

  if (subitems?.length && !footer && !mobile) return null

  return (
    <span
      className={`${navClassName(role)} ${
        href === activeHref
          ? `active ${label.toLowerCase()}`
          : label.toLowerCase()
      }`}
    >
      <Link href={href}>
        <a aria-current={href === activeHref ? "page" : null}>{label}</a>
      </Link>
    </span>
  )
}

TopLevelLink.displayName = "Global.NavList.TopLevelLink"

TopLevelLink.propTypes = {
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

export default TopLevelLink
