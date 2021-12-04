import PropTypes from "prop-types"
import styled from "styled-components"

const Heading = ({ as, children, style, weight }) => {
  return (
    <Wrapper
      as={as}
      style={{
        "--weight": weight,
        ...style,
      }}
    >
      {children}
    </Wrapper>
  )
}

// The `h2` down here doesn't matter,
// since it'll always get overwritten
const Wrapper = styled.h2`
  font-weight: var(--weight, var(--font-weight-regular));
`

Heading.displayName = "Atomic.Heading"

Heading.propTypes = {
  as: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.object,
    PropTypes.array,
  ]),
  style: PropTypes.object,
  weight: PropTypes.oneOf(["regular", "medium", "semi-bold"]),
}

export default Heading
