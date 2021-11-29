import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";

class CustomDocument extends Document {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    // eslint-disable-next-line react/display-name
                    enhanceApp: (App) => (props) =>
                        (
                            <StyleSheetManager sheet={sheet.instance}>
                                <App {...props} />
                            </StyleSheetManager>
                        ),
                });

            const initialProps = await Document.getInitialProps(ctx);
            const {
                query: { uriSegments },
            } = ctx;
            return {
                ...initialProps,
                lang: 'en-US',
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }

    render() {
        return (
            <Html lang={this.props.lang} dir="ltr">
                <Head />
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        );
    }
}

export default CustomDocument;
