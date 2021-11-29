import PropTypes from "prop-types"
import DefaultLayout from "@/components/global/DefaultLayout"
import { ThemeProvider } from "styled-components"
import GlobalStyles from "@/styles/globalStyles"
import theme from "@/styles/theme"
import { GlobalDataProvider } from "@/contexts/GlobalData"
import { GLOBAL_DATA } from "@/constants/globalData"
import "focus-visible"

function App({ Component, pageProps }) {

  const { Layout } = Component

  const SiteLayout = Layout || DefaultLayout

  return (
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <GlobalDataProvider data={GLOBAL_DATA}>
              <SiteLayout>
                <Component {...pageProps} />
              </SiteLayout>
            </GlobalDataProvider>
          </ThemeProvider>
  )
}

App.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
}

export default App

