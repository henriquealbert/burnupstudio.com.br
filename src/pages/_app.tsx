import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';

import 'styles/antd.less';
import GlobalStyles from 'styles/global';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';

import {
  ThemeProvider as ThemeProviderMUI,
  CssBaseline
} from '@material-ui/core';
import { materialTheme } from 'styles/materialTheme';

function App({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.getElementById('jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProviderMUI theme={materialTheme}>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Burn Up Studio</title>
          <link rel="shortcut icon" href="/img/logo-red.png" />
          <link rel="apple-touch-icon" href="/img/logo-red.png" />
          <meta
            name="description"
            content="Melhores Cursos do Brasil de Produção de Música Eletrônica Online"
          />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Head>
        <CssBaseline />

        <GlobalStyles />

        <Component {...pageProps} />
      </ThemeProvider>
    </ThemeProviderMUI>
  );
}

export default App;
