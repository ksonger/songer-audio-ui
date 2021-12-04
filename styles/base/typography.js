import {tMonoface} from "@/styles/mixins"
// Base Typography
// --------------------

// Typography base styles should be limited to typography-related properties only.
// Examples: font weight, size, style, line-height

export default `
  html {
    font-size: var(--font-size-base);
  }

  body {
    color: var(--text-color);
    font-family: var(--font-face-base);
    font-weight: var(--font-weight-regular);
    line-height: 1.333;
  }

  h1,
  h2 {
    margin-bottom: .916em;
    color: var(--header-text-color);
    font-family: var(--font-face-headers);
    font-weight: var(--font-weight-regular);
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 1em;
    color: var(--header-text-color);
    font-family: var(--font-face-headers-compact);
    font-weight: var(--font-weight-regular);
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  h1 {
    font-size: var(--font-size-h1);
    line-height: 1.5;
    border-bottom: 2px solid var(--header-text-color);
    width: fit-content;
  }

  h2 {
    font-size: var(--font-size-h2);
    line-height: 1.2;
  }

  h3 {
    font-size: var(--font-size-h3);
    line-height: 1.212;
  }

  h4 {
    font-size: var(--font-size-h4);
    line-height: 1.214;
  }

  h5 {
    font-size: var(--font-size-h5);
    line-height: 1.214;
  }

  h6 {
    font-size: var(--font-size-h6);
    font-weight: var(--font-weight-regular);
  }

  code {
    ${tMonoface}
  }
`
