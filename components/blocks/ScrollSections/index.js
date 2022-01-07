import React from "react";
import * as Styled from "./styles";

const ScrollSections = ({ heading, cards }) => {
  let cardContent = ``;
  return (
    <Styled.BlockWrapper>
      <Styled.BlockMain dangerouslySetInnerHTML={{ __html: cards[0].body }} />
    </Styled.BlockWrapper>
  );
};

export default ScrollSections;
