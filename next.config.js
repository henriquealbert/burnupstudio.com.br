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
  trailingSlash: true
});
