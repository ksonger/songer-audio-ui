import { focusDefault } from "@/styles/mixins"

export default `
  a,
  button,
  input,
  select,
  textarea,
  [tabindex] {
    ${focusDefault}
  }
`
