import React from "react";
import PropTypes from "prop-types";
import Button from "@/components/atomic/Button";
import useGlobalContext from "@/hooks/useGlobalContext";
import IconFactory from "@/factories/IconFactory";
import Social from "./Social";
import * as Styled from "@/global/Footer/styles";
import { useRouter } from "next/router";
import ModalForm from "@/composed/Form";
import Modal from "@/components/atomic/Modal";

const Footer = () => {
  const {
    footerContent: { siteDescription, siteCopyright, socialMediaLinks },
  } = useGlobalContext();

  const router = useRouter();

  const clickHandler = (uri) => {
    router.push(uri);
  };

  return (
    <Styled.Wrapper>
      <Styled.Footer role="banner">
        <Styled.LogoSocial>
          <Styled.LogoIcon>
            <IconFactory
              color="var(--footer-logo-color)"
              icon="saLogo"
              width="100%"
              height="100%"
            />
          </Styled.LogoIcon>
          <Styled.Social>
            <Social socialInfo={socialMediaLinks} />
          </Styled.Social>
        </Styled.LogoSocial>
        <Styled.ContactDescription>
          <Styled.Contact>
            <Styled.Address>
              <p>2925 NE Glisan Street</p>
              <p>Portland, OR 97232</p>
              <p>503.709.3865</p>
            </Styled.Address>
            <Styled.ContactButton>
              <Modal
                disclosureContent={<Button>Contact</Button>}
                content={<ModalForm title="Contact Us" type="contact" />}
              />
            </Styled.ContactButton>
          </Styled.Contact>
          <Styled.Description>
            <div dangerouslySetInnerHTML={{ __html: siteDescription }} />
            <Styled.AboutButton>
              <a
                onClick={() => {
                  clickHandler("/about");
                }}
              >
                About Us
              </a>
            </Styled.AboutButton>
          </Styled.Description>
        </Styled.ContactDescription>

        <Styled.Copyright dangerouslySetInnerHTML={{ __html: siteCopyright }} />
      </Styled.Footer>
    </Styled.Wrapper>
  );
};
Footer.propTypes = {
  activeHref: PropTypes.string,
  mobile: PropTypes.bool,
  standard: PropTypes.bool,
};

export default Footer;
