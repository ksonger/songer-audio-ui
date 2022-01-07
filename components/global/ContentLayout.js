import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import Header from "@/global/Header";
import Footer from "@/global/Footer/Footer";
import { useRouter } from "next/router";
import useGlobalContext from "@/hooks/useGlobalContext";
import { getMainColor, respond } from "@/styles/mixins";
import { getActiveNavItem } from "@/helpers";

const ContentLayout = ({ children }) => {
  const { asPath } = useRouter();
  const { navItems } = useGlobalContext();
  const activeNavItem = getActiveNavItem(navItems, asPath);
  const activeHref = activeNavItem?.href;
  const mainColor = getMainColor(navItems, asPath);

  useEffect(() => {
    setTimeout(() => {
      document.querySelector(`#__next`).scrollTop = 0;
    }, 0);
  });

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
  background-color: rgba(230, 204, 142, 0.1);
`;
const Main = styled.main`
  width: 100%;
  max-width: var(--l-content-max);
  margin: 0 auto 40px auto;
`;

const Article = styled.div`
  width: 100%;
  min-height: 60vh;
  margin: auto;
  top: 0;

  ${respond(
    css`
      width: 100%;
      margin: 0;
    `
  )}
`;

ContentLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.object,
    PropTypes.array,
  ]),
};

export default ContentLayout;
