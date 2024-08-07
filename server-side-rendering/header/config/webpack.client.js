const path = require('path');
const { merge } = require('webpack-merge');
const sharedWebpackConfig = require('./webpack.shared');
const moduleFederationPlugin = require('./module-federation');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = merge(sharedWebpackConfig, {
  mode:"development",

  output: {
    path: path.resolve(__dirname, '../dist/client'),
    publicPath: 'http://localhost:3003/client/',
    globalObject: 'this'

  },
  plugins: [
    moduleFederationPlugin.client,
    new HtmlWebPackPlugin({
      template: './src/index.html',
    }),
  ],
});
