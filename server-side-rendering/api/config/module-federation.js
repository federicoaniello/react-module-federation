const deps = require('../package.json').dependencies;
const { ModuleFederationPlugin } = require('webpack').container;
const { UniversalFederationPlugin } = require('@module-federation/node');

module.exports = {
  client: new ModuleFederationPlugin({
    name: 'api',
    filename: 'remoteEntry.js',
    remotes: {},
    exposes: {
      './Api': './src/Api',
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
      'rxjs': {
        singleton: true,
        requiredVersion: 'auto'
      }
    },
  }),
  server: [
    new UniversalFederationPlugin({
      name: 'api',
      filename: 'remoteEntry.js',
      isServer: true,
      remoteType: 'script',
      library: { type: 'commonjs-module' },
      remotes: {},
      exposes: {
        './Api': './src/Api',
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
        'rxjs': {
          singleton: true,
          requiredVersion: 'auto'
        }
      },
    })
  ],
};
