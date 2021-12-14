import React from "react";
import * as Styled from "./styles";

const ScrollSections = ({ heading, cards }) => {
  return (
    <Styled.BlockWrapper>
      TECHNOLOGY
      {cards.map((card, i) => {
        return (
          <>
            <div dangerouslySetInnerHTML={{ __html: card.body }} />
            {i < cards.length - 1 && <div className="banner" />}
          </>
        );
      })}
    </Styled.BlockWrapper>
  );
};

export default ScrollSections;
