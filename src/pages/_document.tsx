import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext
} from 'next/document';
import React from 'react';
import { ServerStyleSheet } from 'styled-components';
import { ServerStyleSheets } from '@material-ui/core/styles';
import { materialTheme } from 'styles/materialTheme';
import FacebookPixel from 'utils/Pixel/facebook';
import GoogleAnalyticsPixel from 'utils/Pixel/ga';
import TawkToScript from '../utils/Pixel/tawkto';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />)
        });
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheets.collect(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [
          ...React.Children.toArray(initialProps.styles),
          sheets.getStyleElement(),
          sheet.getStyleElement()
        ]
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <FacebookPixel />
          <GoogleAnalyticsPixel />
          <meta
            name="theme-color"
            content={materialTheme.palette.primary.main}
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        </Head>
        <body>
          <Main />

          <NextScript />
          <TawkToScript />
        </body>
      </Html>
    );
  }
}
