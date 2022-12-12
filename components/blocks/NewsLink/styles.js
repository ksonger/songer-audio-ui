import styled from "styled-components";
import { fluidScale } from "@/styles/mixins";

export const Newslink = styled.div`
  display: flex;
  flex-flow: row;
  padding: 24px 16px 0 16px;
  align-items: center;
  margin-bottom: 40px;
`;

export const Message = styled.div`
  flex-grow: 1;
  text-align: center;
  font-size: ${fluidScale("20px", "18px")};

  font-style: italic;
  letter-spacing: 0.5px;

  a {
    color: var(--button-background-color);
    cursor: pointer;
    margin: 0 4px;
  }
`;
