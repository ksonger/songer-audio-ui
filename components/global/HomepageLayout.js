import { useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Header from "@/global/Header/Header"
import Footer from "@/components/global/Footer"
import { useRouter } from "next/router"
import useGlobalContext from "@/hooks/useGlobalContext"
import { useOnResize } from "@/hooks/listeners"
import { getActiveNavItem } from "@/helpers/"
import {
  mobileBreakpoint,
  getStandardLayout,
  getMainColor,
  respond,
} from "@/styles/mixins"

const HomepageLayout = ({ children }) => {
  const { asPath } = useRouter()
  const { navItems } = useGlobalContext()
  const [mobile, setMobile] = useState(false)
  const standard = getStandardLayout(asPath)
  const activeNavItem = getActiveNavItem(navItems, asPath)
  const activeHref = activeNavItem?.href
  const mainColor = getMainColor(navItems, asPath)

  useOnResize(mobileBreakpoint, (isMobile) => {
    setMobile(isMobile)
  })

  return (
    <Wrapper
      style={{
        "--color-primary": `var(--color-${mainColor})`,
        "--color-primary-dark": `var(--color-${mainColor}-dark)`,
        "--color-primary-light": `var(--color-${mainColor}-light)`,
      }}
    >
      <Header activeHref={activeHref} mobile={mobile} standard={standard} />
      <Main>
        <Article>{children}</Article>
      </Main>
      <Footer activeHref={activeHref} mobile={mobile} standard={standard} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  background-color: var(--background-cream);

  > * {
    padding-left: var(--l-content-padding);
    padding-right: var(--l-content-padding);
  }
`

const Main = styled.main`
  position: relative;
  width: 100%;

  &::before {
    display: block;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(100vh - var(--header-height));
    /* fallback using JPEG rather than WEBP */
    background: linear-gradient(
        to top,
        var(--background-cream),
        transparent 50%
      ),
      linear-gradient(to bottom, var(--color-primary-light), transparent 60%),
      center / cover no-repeat url("/img/hp-hero-image.jpg"),
      linear-gradient(
        to bottom,
        var(--color-primary-light),
        var(--background-cream)
      );
    background: linear-gradient(
        to top,
        var(--background-cream),
        transparent 50%
      ),
      linear-gradient(to bottom, var(--color-primary-light), transparent 60%),
      center / cover no-repeat url("/img/hp-hero-image.webp"),
      linear-gradient(
        to bottom,
        var(--color-primary-light),
        var(--background-cream)
      );
    background-blend-mode: normal, normal, multiply, normal;
  }
`

const Article = styled.article`
  position: relative;
  width: 100%;
  padding-top: 38px;
  padding-bottom: 180px;
  min-height: 60vh;
  margin: auto;
  top: 0;

  section:not(.hero):not(.wide) {
    width: 100%;
    max-width: var(--l-content-max);
    margin-left: auto;
    margin-right: auto;
  }

  section.hero {
    width: 100%;
  }
  ${respond(`section:not(.hero) {max-width: 90%;}`)}
`

HomepageLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.object,
    PropTypes.array,
  ]),
}

export default HomepageLayout
