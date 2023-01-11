import Script from "next/script";
import PropTypes from "prop-types";
import DefaultLayout from "@/components/global/DefaultLayout";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "@/styles/globalStyles";
import theme from "@/styles/theme";
import { GlobalDataProvider } from "@/contexts/GlobalData";
import { GLOBAL_DATA } from "@/constants/globalData";
import "focus-visible";

function App({ Component, pageProps }) {
  const { Layout } = Component;

  const SiteLayout = Layout || DefaultLayout;

  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag() {dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-0BLMQCGDXT', {
                        page_path: window.location.pathname,
                        });
                    `,
        }}
      />
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <GlobalDataProvider data={GLOBAL_DATA}>
          <SiteLayout>
            <Component {...pageProps} />
          </SiteLayout>
        </GlobalDataProvider>
      </ThemeProvider>
    </>
  );
}

App.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
};

export default App;
