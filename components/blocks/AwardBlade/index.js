import React from "react";
import * as Styled from "./styles";
import { useRouter } from "next/router";

const AwardBlade = ({ awards }) => {
  const router = useRouter();
  return (
    <Styled.AwardBlade>
      {awards.map(function (award, i) {
        return (
          <div key={i}>
            <a target="_blank" href={award.link} rel="noreferrer">
              <Styled.Image>
                <img src={award.logo} />
              </Styled.Image>
              <Styled.Message
                dangerouslySetInnerHTML={{ __html: award.message }}
              ></Styled.Message>
            </a>
          </div>
        );
      })}
    </Styled.AwardBlade>
  );
};

export default AwardBlade;
