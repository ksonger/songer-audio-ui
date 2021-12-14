import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Header from "@/global/Header";
import Footer from "@/global/Footer/Footer";
import { useRouter } from "next/router";
import useGlobalContext from "@/hooks/useGlobalContext";

const HomepageLayout = ({ children }) => {
  const { asPath } = useRouter();
  const { navItems } = useGlobalContext();
  const activeNavItem = getActiveNavItem(navItems, asPath);
  const activeHref = activeNavItem?.href;
  const mainColor = getMainColor(navItems, asPath);

  return (
    <Wrapper
      style={{
        "--color-primary": `var(--color-${mainColor})`,
        "--color-primary-dark": `var(--color-${mainColor}-dark)`,
        "--color-primary-light": `var(--color-${mainColor}-light)`,
      }}
    >
      <Header activeHref={activeHref} />
      <Main>
        <Article>{children}</Article>
      </Main>
      <Footer activeHref={activeHref} />
    </Wrapper>
  );
};

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
`;

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
  }
`;

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
`;

HomepageLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.object,
    PropTypes.array,
  ]),
};

export default HomepageLayout;
