import PropTypes from "prop-types"
import styled from "styled-components"
import Nav from "./Nav"
import Image from "components/atomic/Image"

import useResizeObserver from "use-resize-observer"


const Header = ({ activeHref, mobile, standard }) => {
  function setHeaderHeightVar(height) {
    document.documentElement.style.setProperty("--header-height", `${height}px`)
  }

  const { ref: resizeRef } = useResizeObserver({
    onResize: ({ height }) => {
      setHeaderHeightVar(height)
    },
  })

  return (
    <Wrapper ref={resizeRef}>
      <StyledHeader
        role="banner"
        style={{
          "--align": mobile || !standard ? "left" : "center",
          "--height":
            mobile || !standard
              ? "var(--l-header-height-compact)"
              : "var(--l-header-height-standard)",
          "--justify-content": mobile || !standard ? "start" : "center",
          "--columns":
            standard && !mobile ? "1fr" : mobile ? "200px 1fr" : "1fr auto",
          "--mobile-button": mobile && "end",
        }}
      >
          <Image
              image={{"url": "/home_background.png", "width": 2000, "height": 1491}}
              layout="fill"
              objectFit="cover"
              sizes={`(max-width: "960px") 100vw, 50vw`}
              priority
          />
          <Nav standard={standard} mobile={mobile} activeHref={activeHref} />

      </StyledHeader>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  transition: background-color 200ms;
  background-color: var(--color-primary-light);
`

const StyledHeader = styled.header`
  max-width: var(--l-content-max);
  margin: auto;
  z-index: var(--z-index-header);
  transition: background-color 200ms, height 200ms;
  background-color: var(--color-primary-light);
  height: var(--height);
  display: grid;
  grid-template-columns: var(--columns);
  gap: 2em;
  justify-content: var(--justify-content);
  align-content: center;
  align-items: center;
  text-align: var(--align);
  nav {
    justify-self: var(--mobile-button);
    z-index: var(--z-index-header);
  }
`

Header.propTypes = {
  activeHref: PropTypes.string,
  mobile: PropTypes.bool,
  standard: PropTypes.bool,
}

export default Header
