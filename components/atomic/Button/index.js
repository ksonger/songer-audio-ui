/* eslint-disable react/prop-types */
import styled from "styled-components";
import Button, { QuietButton, StyledArrowButton } from "./Button";

// Regular beige button
export const MainButton = styled(Button)`
  --button-border-radius: 5px;
  --button-background-color: var(--background-beige);
  --button-height: 36px;
  border: 1px solid transparent;
  font-family: var(--font-face-headers-compact);
  font-size: var(--font-size-sm);
  letter-spacing: 1px;
  text-transform: uppercase;
`;

export const CloseButton = ({ children, ...props }) => (
  <MainButton
    icon="closeMenu"
    iconProps={{ size: 12 }}
    iconAlign="right"
    {...props}
  >
    {children}
  </MainButton>
);

export const DetailButton = ({ children, ...props }) => (
  <MainButton icon="detailArrow" iconAlign="right" {...props}>
    {children}
  </MainButton>
);

export const DownloadButton = ({ children, ...props }) => (
  <MainButton
    style={{
      border: "1px solid var(--neutral70)",
      padding: "5px 8px 2px",
      height: "32px",
      textTransform: "uppercase",
    }}
    icon="downloadArrow"
    iconAlign="right"
    {...props}
  >
    {children}
  </MainButton>
);

export const UpDownButton = styled(Button)`
  width: 36px;
  height: 36px;
  padding: 0;
  margin: 0;

  :disabled {
    opacity: 0.5;
  }
`;

export { QuietButton, StyledArrowButton };
export default Button;
