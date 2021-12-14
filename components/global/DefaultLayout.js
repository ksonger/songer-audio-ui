import PropTypes from "prop-types";
import styled from "styled-components";
import Header from "@/global/Header";
import Footer from "@/global/Footer/Footer";
import { useRouter } from "next/router";
import useGlobalContext from "@/hooks/useGlobalContext";
import { getActiveNavItem } from "@/helpers/";
import { getMainColor } from "@/styles/mixins";

const DefaultLayout = ({ children }) => {
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
  width: 100%;
`;

const Article = styled.div`
  width: 100%;
  padding-top: 58px;
  padding-bottom: 180px;
  min-height: 60vh;
  max-width: var(--l-content-max);
  margin: auto;
  top: 0;
`;

DefaultLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.object,
    PropTypes.array,
  ]),
};

export default DefaultLayout;
