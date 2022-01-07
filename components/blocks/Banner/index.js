import React from "react";
import Button from "@/components/atomic/Button";
import * as Styled from "./styles";

const Banner = ({ message }) => {
  const subscribe = () => {
    console.log("subscribe");
  };
  return (
    <Styled.BannerWrapper>
      <Styled.BannerMain>
        <Styled.Banner>
          <Styled.Subscribe>
            <Button onClick={() => subscribe()}>Subscribe</Button>
          </Styled.Subscribe>
          <Styled.Message dangerouslySetInnerHTML={{ __html: message }} />
          <Styled.Contact>
            <Button onClick={() => subscribe()}>Contact</Button>
          </Styled.Contact>
        </Styled.Banner>
      </Styled.BannerMain>
    </Styled.BannerWrapper>
  );
};

export default Banner;
