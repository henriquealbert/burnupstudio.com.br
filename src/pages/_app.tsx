import { AppProps } from 'next/app';
import Head from 'next/head';

import 'styles/antd.less';
import GlobalStyles from 'styles/global';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Burn Up Studio</title>
        <link rel="shortcut icon" href="/img/logo-red.png" />
        <link rel="apple-touch-icon" href="/img/logo-red.png" />
        <meta
          name="description"
          content="Melhores Cursos do Brasil de Produção de Música Eletrônica Online"
        />
      </Head>
      <GlobalStyles />

      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
