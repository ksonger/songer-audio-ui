import { PATHS } from "@/constants/paths"
import { getActiveNavItem, getRootPathFromPathname } from "@/helpers/"

// Appearance mixins
// --------------------

export const aHidden = () => {
  return `
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0 0 0 0);
    `
}

// Media queries maker
// --------------------------------------------------------
export const mobileBreakpoint = 80

export const BREAKPOINTS = {
  130: "1440px",
  120: "1200px",
  100: "1024px",
  80: "768px",
  60: "600px",
  50: "516px",
  30: "320px",
}

// Respond to viewport size
// $size -> viewport size
// $operator -> 'min' or 'max'
// $aspect -> 'width' or 'height'

export const respond = (
  content,
  size = 80,
  operator = "max",
  aspect = "width"
) => {
  const pxSize = BREAKPOINTS[size] || size

  return `
    @media all and (${operator}-${aspect}: ${pxSize}) {
      ${content}
    }
  `
}

// Respond to users with reduced motion turned on
export const reducedMotion = (content) => {
  return `
    @media (prefers-reduced-motion: reduce) {
      ${content}
    }
  `
}

export const focusDefault = `
  outline-offset: 0;

  .js-focus-visible &:focus:not(.focus-visible) {
    outline: none;
  }

  &.focus-visible {
    outline: solid 2px currentColor;
  }
`

// Fluid Elements
// --------------------------------------------------------
// Set min and max sizes and breakpoints and let SCSS fluidly scale different properties in-between

export const fluidScale = (max, min, maxBreak, minBreak) => {
  const maxNum = stripUnit(max)
  const minNum = stripUnit(min)
  const calcString = fluidScaleCalc(max, min, maxBreak, minBreak)

  if (minNum > maxNum) {
    return `clamp(${max}, ${calcString},  ${min})`
  }

  return `clamp(${min}, ${calcString},  ${max})`
}

// return fluid-scale calc value
export const fluidScaleCalc = (
  maxValue,
  minValue,
  maxBreak = 130,
  minBreak = 50
) => {
  const maxVw = BREAKPOINTS[maxBreak]
  const minVw = BREAKPOINTS[minBreak]

  return `calc(${minValue} + ${stripUnit(maxValue) - stripUnit(minValue)} *
    (100vw - ${minVw}) / ${stripUnit(maxVw) - stripUnit(minVw)})`
}

// used by fluid-scale mixin
export const stripUnit = (unit) => {
  return parseInt(unit.toString().replace(/\D/g, ""))
}

export function fluidShrink(max, maxBreak = 100) {
  const maxVw = BREAKPOINTS[maxBreak]
  return `min(${max}, ${((stripUnit(max) / stripUnit(maxVw)) * 100).toFixed(
    3
  )}vw)`
}

// CUSTOM MIXINS FOR SOLDIER
export const tMonoface = `
  font-family: var(--font-face-monospace);
  font-size: ${fluidScale("18px", "16px")};
  line-height: ${fluidScale("26px", "24px")};
  letter-spacing: 0.0278em;
`
export const tQuote = `
  quotes: "“" "”" "‘" "’";
  &:before {
    content: open-quote;
  }
  &:after {
    content: close-quote;
  }
`

/**
 * Set header/footer background color by router asPath
 * @param {Array} navItems
 * @param asPath
 * @returns {string}
 */
export const getMainColor = (navItems, asPath) => {
  const path = getRootPathFromPathname(asPath)
  const item = getActiveNavItem(navItems, asPath)
  const homeColor = "blue"

  return path !== PATHS.home && item ? item.theme : homeColor
}

/**
 * Used to apply a standard or compact layout
 * @param asPath
 * @returns {boolean}
 */
export const getStandardLayout = (asPath) => {
  const path = getRootPathFromPathname(asPath)
  return path !== PATHS.surveys && path !== PATHS.search
}
