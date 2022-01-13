import React from "react";
import Button from "@/components/atomic/Button";
import Modal from "@/components/atomic/Modal";
import ModalForm from "@/composed/Form";
import * as Styled from "./styles";
import { useRouter } from "next/router";

const Banner = ({ message }) => {
  const router = useRouter();
  return (
    <Styled.BannerWrapper>
      <Styled.BannerMain>
        <Styled.Banner>
          <Styled.Subscribe>
            {router.asPath === "/" && (
              <Modal
                disclosureContent={<Button>Subscribe</Button>}
                content={
                  <ModalForm title="Subscribe for Updates" type="subscribe" />
                }
              />
            )}
          </Styled.Subscribe>
          <Styled.Message dangerouslySetInnerHTML={{ __html: message }} />
          <Styled.Contact>
            {router.asPath === "/" && (
              <Modal
                disclosureContent={<Button>Contact</Button>}
                content={<ModalForm title="Contact Us" type="contact" />}
              />
            )}
          </Styled.Contact>
        </Styled.Banner>
      </Styled.BannerMain>
    </Styled.BannerWrapper>
  );
};

export default Banner;
