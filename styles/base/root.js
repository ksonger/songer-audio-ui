import { fluidScale } from "@/styles/mixins"

// Root CSS variables
// --------------------

export default `
  :root {
    /* colors */
    --white: #ffffff;
    --black: #000000;

    --background-cream: #fafaf7;
    --background-offwhite: #f6f6ef;
    --background-beige: #f0f0e7;

    --neutral20: #e6e6e6;
    --neutral30: #c3c3c3;
    --neutral40: #9a9a9a;
    --neutral50: #696969;
    --neutral70: #212121;
    --neutral80: #424242;

    --color-primary: var(--color-green);
    --color-primary-dark: var(--color-green-dark);
    --color-primary-light: var(--color-green-light);
    --color-blue: #6897a2;
    --color-blue-dark: #507F91;
    --color-blue-light: #9bc4ce;
    --color-olive: #8a9651;
    --color-olive-dark: #778343;
    --color-olive-light: #BBC97F;
    --color-green: #609c7d;
    --color-green-dark: #437459;
    --color-green-light: #a1c9b3;
    --color-orange: #c48147;
    --color-orange-dark: #A0622F;
    --color-orange-light: #deab7d;
    --color-red: #BA7D84;
    --color-red-dark: #A06562;
    --color-red-light: #d4a5a5;
    --color-purple: #8A8DB9;
    --color-purple-dark: #7578A6;
    --color-purple-light: #abafcb;

    --text-color: #222222;
    --header-color: #222222;

    /* fonts */
    --font-face-base: "Municipal", serif;
    --font-face-headers: "Knockout", sans-serif;
    --font-face-headers-compact: "Knockout Compact", sans-serif;
    --font-face-monospace: "American Typewriter", "Courier New", Courier, monospace;
    --font-size-sm: 16px;
    --font-size-xs: 14px;
    --font-size-xxs: 12px;
    --font-size-base: 15px;
    --font-size-h1: 24px;
    --font-size-h2: 22px;
    --font-size-h3: 18px;
    --font-size-h4: 1em;
    --font-size-h5: 1em;
    --font-size-h6: 1em;
    --font-weight-regular: 400;

    /* spacing */
    --padding-button: 8px 10px;

    /* z-stack */
    --z-index-header: 20;
    --z-index-footer: 19;

    /* borders */
    --border-radius-lg: 20px;
    --border-radius: 16px;
    --border-radius-sm: 8px;

    /* common responsive widths */
    --gap-base: ${fluidScale("70px", "40px")};

    /* layout */
    --l-container-full: 100vw;
    --l-content-max: 920px;
    --l-content-padding: ${fluidScale("200px", "20px")};
    --l-header-height-standard: 330px;
    --l-header-height-compact: 84px;
  }
`
