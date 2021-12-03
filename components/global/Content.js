import PropTypes from "prop-types"
import styled from "styled-components"

const Content = ({ className, children }) => {
  return (
    <Wrapper>
      <StyledContent className={className}>{children}</StyledContent>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
`

const StyledContent = styled.article`
  max-width: var(--l-content-max);
  margin: auto;
  top: 0;
`

Content.displayName = "Global.Content"

Content.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default Content
