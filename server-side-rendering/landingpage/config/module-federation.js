const deps = require('../package.json').dependencies;
const { ModuleFederationPlugin } = require('webpack').container;
const { UniversalFederationPlugin } = require('@module-federation/node');

module.exports = {
  client: new ModuleFederationPlugin({
    name: 'landingpage',
    filename: 'remoteEntry.js',
    exposes: {
      './Landingpage': './src/components/Landingpage',
    },
    shared: {
      ...deps,
      react: {
        singleton: true,
        requiredVersion: deps.react,
      },
      'react-dom': {
        singleton: true,
        requiredVersion: deps['react-dom'],
      },
    },
  }),
  server: [
    new UniversalFederationPlugin({
      name: 'landingpage',
      filename: 'remoteEntry.js',
      remoteType: 'script',
      library: { type: 'commonjs-module' },
      isServer: true,
    exposes: {
        './Landingpage': './src/components/Landingpage',
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: deps['react-dom'],
        },
      },
    }),
  ],
};
