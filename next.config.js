/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const withLess = require('@zeit/next-less');
// fix: prevents error when .less files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.less'] = (file) => {};
}
module.exports = withLess({
  lessLoaderOptions: {
    javascriptEnabled: true
  },
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: '/producao/workshop/aula-01/',
        destination: '/',
        permanent: true
      },
      {
        source: '/producao/workshop/ws-aula-02/',
        destination: '/',
        permanent: true
      },
      {
        source: '/producao/workshop/aula-de-encerramento/',
        destination: '/',
        permanent: true
      },
      {
        source: '/producao/workshop/pre-inscricao/',
        destination: '/',
        permanent: true
      },
      {
        source: '/producao/workshop/pre-inscricao-confirmada/',
        destination: '/',
        permanent: true
      },
      {
        source: '/producao/lp/',
        destination: '/',
        permanent: true
      },
      {
        source: '/producao/lp/confirmado/',
        destination: '/',
        permanent: true
      },
      {
        source: '/producao/lista-de-espera/confirmado/',
        destination: '/',
        permanent: true
      },
      {
        source: '/producao/matriculas-abertas/',
        destination: '/',
        permanent: true
      },
      {
        source: '/404/',
        destination: '/',
        permanent: true
      }
    ];
  }
});
