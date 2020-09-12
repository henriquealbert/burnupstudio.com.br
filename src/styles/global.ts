import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* ubuntu-300 - latin */
  @font-face {
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local('Ubuntu Light'), local('Ubuntu-Light'),
        url('/fonts/ubuntu-v14-latin-300.woff2') format('woff2');
  }
  /* ubuntu-regular - latin */
  @font-face {
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Ubuntu Regular'), local('Ubuntu-Regular'),
        url('/fonts/ubuntu-v14-latin-regular.woff2') format('woff2');
  }
  /* ubuntu-700 - latin */
  @font-face {
    font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local('Ubuntu Bold'), local('Ubuntu-Bold'),
        url('/fonts/ubuntu-v14-latin-700.woff2') format('woff2');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

    html,
    body,
    #__next {
      height: 100%;
    }

  .ant-btn {
    white-space: normal;
    height: auto;
  }
`;

export default GlobalStyles;
