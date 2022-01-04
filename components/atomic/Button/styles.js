import { Button as ReakitButton } from "reakit/Button";
import styled from "styled-components";

export const BaseButton = styled(ReakitButton)`
  padding: var(--button-padding) 16px;
  height: var(--button-height);
  display: inline-block;
  text-align: center;
  position: relative;
  transition: color ease-in 0.2s, background-color ease 0.2s,
    border-color ease-in 0.2s, transform ease-in 0.2s;
  cursor: pointer;
  white-space: nowrap;
  font-size: var(--button-font-size, var(--font-size-sm));
  color: var(--button-color, var(--text-color));
  background-color: var(--button-background-color, transparent);
  border-radius: var(--button-border-radius, var(--border-radius));

  ${({ block }) =>
    block &&
    `
        display: block;
        width: 100%;
      `}

  &:disabled {
    --button-hover-color: var(--neutral50);
    color: var(--neutral50);
    cursor: default;
  }
  &:hover:not(:disabled),
  &[aria-selected="true"]:not(:disabled) {
    color: var(--button-hover-color, var(--text-color));
    background-color: var(
      --button-background-hover-color,
      var(--color-primary-light)
    );
  }
`;

export const ButtonLabel = styled.span``;

export const ButtonContent = styled.div`
  padding-top: 3px;
`;

export const ButtonIcon = styled.span`
  float: ${({ $iconAlign }) => $iconAlign};
  transform: translateY(1px);
  padding: ${({ $iconAlign }) => {
    return $iconAlign === "left" ? "0 .7em 0 0" : "0 0 0 .7em";
  }};
`;
