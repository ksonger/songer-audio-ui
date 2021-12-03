import { createGlobalStyle } from "styled-components"
import baseRoot from "./base/root"
import baseResets from "./base/resets"
import baseFonts from "./base/fonts"
import baseAppearance from "./base/appearance"
import baseTypography from "./base/typography"

// Define global styles
const GlobalStyles = createGlobalStyle`
  ${baseRoot}
  ${baseResets}
  ${baseFonts}
  ${baseAppearance}
  ${baseTypography}
`

export default GlobalStyles
