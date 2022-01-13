import styled, { css } from "styled-components";
import { respond } from "@/styles/mixins";
import { Dialog, DialogBackdrop, DialogDisclosure } from "reakit/Dialog";

export const Disclosure = styled(DialogDisclosure)`
  font-weight: bold;
  text-decoration: underline;
`;

export const Backdrop = styled(DialogBackdrop)`
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
`;

export const ModalDialog = styled(Dialog)`
  position: absolute;
  top: 50%;
  left: 50%;
  max-height: none;
  width: calc(100vw - 72px);
  max-width: 700px;
  transform: translate(-50%, -50%);
  overflow: auto;
  padding: 0;
  border: none;
  z-index: 1000;
  border-radius: ${(p) => {
    return p.$type === "gallery" ? "0;" : "8px;";
  }};

  ${respond(
    css`
      border-radius: 0;
      width: 100%;
    `,
    "800px"
  )}
`;

export const DialogInner = styled.div``;

export const Close = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 20px;
  height: 20px;
  margin: 15px;
  cursor: pointer;
  z-index: 2000;

  & svg {
    width: 100%;
    height: 100%;
  }
`;

export const FooterClose = styled.button`
  margin-top: 1.625em;
  font-weight: bold;
  text-decoration: underline;
`;

export const DialogContent = styled.div`
  padding: ${(p) => {
    return p.$type === "gallery" ? "0;" : "30px;";
  }};
  background: #fff;
  border-radius: ${(p) => {
    return p.$type === "gallery" ? "0;" : "8px;";
  }};
  height: 100%;
`;
