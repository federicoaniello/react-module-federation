const deps = require('../package.json').dependencies;
const { ModuleFederationPlugin } = require('webpack').container;
const { UniversalFederationPlugin } = require('@module-federation/node');

module.exports = {
  client: new ModuleFederationPlugin({
    name: 'catalog',
    filename: 'remoteEntry.js',
    remotes: {
      api: 'api@http://localhost:3008/client/remoteEntry.js',

    },
    exposes: {
        './Catalog': './src/Catalog',
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
      'react-router-dom': {
          singleton: true,
          requiredVersion: deps['react-router-dom'],
        },
    },
  }),
  server: [
    new UniversalFederationPlugin({
      name: 'catalog',
      filename: 'remoteEntry.js',
      isServer: true,
      remoteType: 'script',
      library: { type: 'commonjs-module' },
      remotes: {
        api: 'api@http://localhost:3008/server/remoteEntry.js',

      },
      exposes: {
        './Catalog': './src/Catalog',
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
        'react-router-dom': {
          singleton: true,
          requiredVersion: deps['react-router-dom'],
        },
      },
    })
  ],
};
