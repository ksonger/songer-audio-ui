import styled, { css } from "styled-components";

export const BlockWrapper = styled.main`
  margin: 0 auto;
  padding: 30px 0;
  max-width: var(--l-content-max);

  * + * {
    margin-top: 1.375em;
  }

  & .banner {
    margin-left: calc(50% - 50vw);
    width: 100vw;
    height: 37.5vmin;
    min-height: 15em;
    background: linear-gradient(#000, transparent, #000), var(--img) 50% / cover;
    background-attachment: fixed;
    background-blend-mode: multiply;

    &:nth-of-type(1) {
      --img: url(/voice_coils_and_surrounds.png);
    }

    &:nth-of-type(2) {
      --img: url(/cone_and_vc.png);
    }

    &:nth-of-type(3) {
      --img: url(/rims.png);
    }

    &:nth-of-type(4) {
      --img: url(/cone_mold.png);
    }

    &:nth-of-type(5) {
      --img: url(/polished_motors.png);
    }
  }
`;
