import PropTypes from "prop-types"
import styled from "styled-components"
import Link from "next/link"

const HomeLink = ({ mobile, standard, footer }) => {
  return (
    <Link href={"/"} passHref>
      <StyledHomeLink className="homeLink">
        <div>logo</div>
      </StyledHomeLink>
    </Link>
  )
}

HomeLink.displayName = "Global.HomeLink"

const StyledHomeLink = styled.a`
  outline: none;

  button {
    outline: 0;
  }
`

HomeLink.propTypes = {
  mobile: PropTypes.bool,
  standard: PropTypes.bool,
  footer: PropTypes.bool,
}

export default HomeLink
