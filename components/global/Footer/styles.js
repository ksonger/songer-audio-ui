import styled, { css } from "styled-components";
import { respond } from "@/styles/mixins";

export const Wrapper = styled.div`
  width: 100%;
  background-color: var(--footer-background);
`;

export const Footer = styled.footer`
  width: 100%;
  max-width: var(--l-content-max);
  max-width: calc(100% - 17px);
  margin: 0;
  z-index: var(--z-index-footer);
  display: flex;
  flex-flow: column;
  grid-template-rows: auto;
  gap: 20px;
  justify-content: start;
  align-content: center;
  align-items: center;
  padding: 55px var(--l-content-padding) 40px var(--l-content-padding);

  .footer {
    align-self: start;
  }

  ${respond(
    css`
      padding: 25px var(--l-content-padding) 40px var(--l-content-padding);
      gap: 10px;
    `
  )}
`;

export const LogoSocial = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "logo social";
  width: 100%;
  ${respond(css`
    grid-auto-flow: row;
    grid-template-rows: auto;
    grid-template-areas:
      "social"
      "logo";
    grid-template-columns: 1fr;
    gap: 1.7em;
  `)}
`;

export const LogoIcon = styled.div`
  width: 110px;
  grid-area: logo;
  ${respond(css`
    justify-self: center;
  `)}
`;

export const Social = styled.div`
  grid-area: social;
  display: grid;
  grid-auto-flow: column;
  justify-self: end;
  align-self: center;
  ${respond(css`
    padding: 17px 0;
    justify-self: center;
    width: 100%;
  `)}
`;

export const ContactDescription = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr 2fr;
  width: 100%;
  font-size: var(--font-size-xs);
  align-self: start;
  padding-bottom: 1em;
  line-height: 1.8em;
  a {
    text-decoration: underline;
  }
  ${respond(css`
    grid-auto-flow: row;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  `)}
`;

export const Contact = styled.div`
  display: grid;
  grid-auto-flow: row;
  gap: 1.7em;
`;
export const Address = styled.div`
  color: #666;
  ${respond(css`
    justify-self: center;
    text-align: center;
  `)}
`;

export const ContactButton = styled.div`
  ${respond(css`
    justify-self: center;
    margin-bottom: 32px;
  `)}
`;

export const AboutButton = styled.div`
  margin-top: 0.5em;
  cursor: pointer;
  display: inline-block;
  > button {
    background-color: #999;
  }
  ${respond(css`
    justify-self: center;
    margin-bottom: 32px;
  `)}
`;

export const Description = styled.div`
  color: #888;
  text-align: right;
  ${respond(
    css`
      margin: 12px 0;
      text-align: center;
    `
  )}
`;

export const Copyright = styled.div`
  align-self: end;
  font-size: var(--font-size-xxs);
  font-style: italic;
  color: #999;
  margin-top: -44px;
  ${respond(css`
    margin-top: 0;
    align-self: center;
  `)}
`;
