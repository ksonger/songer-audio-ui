import React from "react";
import * as Styled from "./styles";

const Mission = ({ heading, description, style = "home" }) => {
  return (
    <Styled.BlockWrapper>
      <Styled.BlockMain>
        {heading && (
          <Styled.Heading $missionStyle={style}>{heading}</Styled.Heading>
        )}
        <Styled.Description
          $missionType={style}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </Styled.BlockMain>
    </Styled.BlockWrapper>
  );
};

export default Mission;
