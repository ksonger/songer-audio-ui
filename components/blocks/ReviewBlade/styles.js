import styled, { css } from "styled-components";
import { fluidScale, respond } from "@/styles/mixins";

export const ReviewBlade = styled.div`

`;

export const ReviewsHeader = styled.div`
    text-transform: uppercase;
    font-size: ${fluidScale("22px", "18px")};
    text-align: center;
    margin: 40px auto;
`

export const Review = styled.div`

`;

export const Image = styled.div`
  width: 154px;
  height: 170px;
  margin: 0 auto;
  padding: 24px 12px;
  justify-self: center;
`;

export const Message = styled.div`
`;
