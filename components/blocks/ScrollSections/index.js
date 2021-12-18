import React from "react";
import * as Styled from "./styles";

const ScrollSections = ({ heading, cards }) => {
  let cardContent = ``;
  return (
    <Styled.BlockWrapper dangerouslySetInnerHTML={{ __html: cards[0].body }} />
  );
};

export default ScrollSections;
