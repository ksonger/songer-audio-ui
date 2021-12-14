import React from "react";
import * as Styled from "./styles";

const Mission = ({ heading, description }) => {
  return (
    <Styled.BlockWrapper>
      <Styled.BlockMain>
        <Styled.Heading>{heading}</Styled.Heading>
        <Styled.Description>{description}</Styled.Description>
      </Styled.BlockMain>
    </Styled.BlockWrapper>
  );
};

export default Mission;
