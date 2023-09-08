import styled, { css } from "styled-components";
import { fluidScale, respond } from "@/styles/mixins";

export const AwardBlade = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 2em;
  padding: 0 16px;
  margin: 0 auto 40px auto;
  text-align: center;
  cursor: pointer;
  align-items: center;
  justify-content: center;
`;

export const Award = styled.div`
  width: 250px;
  flex: 0 0 25em;
`;

export const Image = styled.div`
  width: 220px;
  height: 230px;
  margin: 0 auto;
  padding: 20px 12px;
  justify-self: center;
`;

export const Message = styled.div`
  flex-grow: 1;
  font-size: ${fluidScale("18px", "16px")};
  color: rgb(42, 143, 161);
  font-style: italic;
  letter-spacing: 0.5px;
  height: 75px;
  justify-self: center;

  ${respond(
    css`
      margin-bottom: 40px;
    `,
    "700px"
  )}
`;
