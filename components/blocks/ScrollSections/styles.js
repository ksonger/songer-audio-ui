import styled, { css } from "styled-components";

export const BlockWrapper = styled.main`
  margin: 0 auto;
  padding: 40px 0;
  max-width: var(--l-content-max);

  p {
    width: 100%;
    max-width: 1000px;
    padding: 10px 30px;
    background: #eee;
    margin: 0 auto;
    color: #666;
    border-left: 1px solid #bbb;
    border-right: 1px solid #bbb;

    &.first {
      border-top: 1px solid #bbb;
    }

    &.last {
      border-bottom: 1px solid #bbb;
    }

    &.section {
      font-weight: bold;
      text-align: center;
      text-transform: uppercase;
      padding: 30px;
      font-size: 18px;
      letter-spacing: 2px;
      color: #333;
    }

    &.subsection {
      font-style: italic;
      font-weight: bold;
      font-size: 18px;
      padding-top: 36px;
    }
  }

  & .banner {
    width: 100vw;
    height: 32.5vmin;
    min-height: 15em;
    background: linear-gradient(#000, transparent, #000), var(--img) 50% / cover;
    background-attachment: fixed;
    background-blend-mode: multiply;
    margin: 60px 0 60px calc(50% - 50vw);

    &:nth-of-type(1) {
      --img: url(/cone_and_vc.png);
    }

    &:nth-of-type(2) {
      --img: url(/polished_motors.png);
    }

    &:nth-of-type(3) {
      --img: url(/voice_coils_and_surrounds.png);
    }

    &:nth-of-type(4) {
      --img: url(/suspension.png);
    }

    &:nth-of-type(5) {
      --img: url(/s1_port_sepia.png);
    }
  }
`;
