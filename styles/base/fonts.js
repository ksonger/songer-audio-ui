export const fontList = [
  {
    name: "Trade Gothic",
    filename: "TradeGothicLTStd-Extended",
    style: "normal",
    weight: 400,
    local: true,
  },
]
const embedFonts = (list) => {
  let fonts = ""
  list.forEach(({ name, filename, style, weight, local }) => {
    fonts += `
      @font-face {
        font-family: ${name};
        font-style: ${style};
        font-weight: ${weight};
        font-display: fallback;
        src: ${
          local ? `local("${name}"),` : ""
        } url("/fonts/${filename}.woff2") format("woff2");
      }
    `
  })

  return fonts
}

export default embedFonts(fontList)
