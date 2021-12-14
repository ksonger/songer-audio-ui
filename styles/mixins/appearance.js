import { fluidScale } from "@/styles/mixins/index";

export const aPrimaryButton = (size) => `
  padding: 0.25em 0.5em;
  font-size: ${
    size === "small" ? fluidScale("16px", "14px") : fluidScale("20px", "14px")
  };
  font-weight: 600;
  border-radius: 0.2em;
  border: 2px solid var(--bg-color);
`;
