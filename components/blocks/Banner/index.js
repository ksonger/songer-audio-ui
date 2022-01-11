import React from "react";
import Button from "@/components/atomic/Button";
import Modal from "@/components/atomic/Modal";
import ModalForm from "@/composed/Form";
import * as Styled from "./styles";

const Banner = ({ message }) => {
  return (
    <Styled.BannerWrapper>
      <Styled.BannerMain>
        <Styled.Banner>
          <Styled.Subscribe>
            <Modal
              disclosureContent={<Button>Subscribe</Button>}
              content={
                <ModalForm title="Subscribe for Updates" type="subscribe" />
              }
            />
          </Styled.Subscribe>
          <Styled.Message dangerouslySetInnerHTML={{ __html: message }} />
          <Styled.Contact>
            <Modal
              disclosureContent={<Button>Contact</Button>}
              content={<ModalForm title="Contact Us" type="contact" />}
            />
          </Styled.Contact>
        </Styled.Banner>
      </Styled.BannerMain>
    </Styled.BannerWrapper>
  );
};

export default Banner;
