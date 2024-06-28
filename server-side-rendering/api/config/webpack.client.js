const path = require('path');
const { merge } = require('webpack-merge');
const sharedWebpackConfig = require('./webpack.shared');
const moduleFederationPlugin = require('./module-federation');


module.exports = merge(sharedWebpackConfig, {
  output: {
    path: path.resolve(__dirname, '../dist/client'),
    publicPath: 'http://localhost:3008/client/',
  },
  plugins: [
    moduleFederationPlugin.client,
  ],
});
