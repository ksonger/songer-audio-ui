import PropTypes from "prop-types";
import Nav from "../Nav";
import Image from "@/components/atomic/Image";
import * as Styled from "./styles";
import IconFactory from "@/factories/IconFactory";
import useGlobalContext from "@/hooks/useGlobalContext";

const Header = ({ activeHref }) => {
  const { headerContent } = useGlobalContext();
  return (
    <Styled.Header>
      <Styled.Background>
        <Image
          image={headerContent.backgroundImage}
          layout="fill"
          objectFit="cover"
          sizes={`(max-width: "960px") 100vw, 50vw`}
          priority
        />
      </Styled.Background>
      <Styled.HeaderContent role="banner">
        <Styled.LogoNav>
          <Styled.Logo>
            <Styled.LogoIcon>
              <IconFactory
                color="var(--header-logo-color)"
                icon="saLogo"
                width="100%"
                height="100%"
              />
            </Styled.LogoIcon>
            <Styled.LogoSpan>songer audio</Styled.LogoSpan>
          </Styled.Logo>
          <Styled.Nav>
            <Nav activeHref={activeHref} />
          </Styled.Nav>
        </Styled.LogoNav>
      </Styled.HeaderContent>
      <Styled.Shadow></Styled.Shadow>
    </Styled.Header>
  );
};

Header.propTypes = {
  activeHref: PropTypes.string,
  mobile: PropTypes.bool,
  standard: PropTypes.bool,
};

export default Header;
