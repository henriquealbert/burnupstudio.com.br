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
        source: '/',
        destination: '/producao/matriculas-abertas/',
        permanent: true
      },
      {
        source: '/producao/workshop/aula-01/',
        destination: '/producao/matriculas-abertas/',
        permanent: true
      },
      {
        source: '/producao/workshop/ws-aula-02/',
        destination: '/producao/matriculas-abertas/',
        permanent: true
      },
      {
        source: '/producao/workshop/aula-de-encerramento/',
        destination: '/producao/matriculas-abertas/',
        permanent: true
      },
      {
        source: '/producao/workshop/pre-inscricao/',
        destination: '/producao/matriculas-abertas/',
        permanent: true
      },
      {
        source: '/producao/workshop/pre-inscricao-confirmada/',
        destination: '/producao/matriculas-abertas/',
        permanent: true
      },
      {
        source: '/producao/lp/',
        destination: '/producao/matriculas-abertas/',
        permanent: true
      },
      {
        source: '/producao/lp/confirmado/',
        destination: '/producao/matriculas-abertas/',
        permanent: true
      },
      {
        source: '/producao/lista-de-espera/confirmado/',
        destination: '/producao/matriculas-abertas/',
        permanent: true
      }
    ];
  }
});
