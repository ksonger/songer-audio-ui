import styled, {css} from "styled-components";
import {fluidScale, respond} from "@/styles/mixins";

export const PressLinksWrapper = styled.div`
    margin: 0 40px;
`

export const PressLink = styled.div`
  width: 100%;
  max-width: 1400px;
  border: 1px solid #555;
  margin: 20px auto;
  display: flex;
  background-color: rgba(63, 63, 63, 0.3);
  justify-content: center;
  padding: 15px;
`;

export const PressLinksHeader = styled.div`
  text-transform: uppercase;
  font-size: ${fluidScale("22px", "18px")};
  text-align: center;
  margin: 40px auto;
`

export const Message = styled.div`
  font-size: ${fluidScale("18px", "16px")};
  color: rgb(42, 143, 161);
  font-style: italic;
  letter-spacing: 0.5px;
    margin-top: 6px;
    text-align: center;

  ${respond(
    css`
    `,
    "700px"
)}
`;

export const Attribution = styled.div`
    font-style: italic;
  text-align: center;
  margin-top: 4px;
  color: #777;
    `