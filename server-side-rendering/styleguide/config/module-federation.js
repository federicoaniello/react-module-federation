const deps = require('../package.json').dependencies;
const { ModuleFederationPlugin } = require('webpack').container;
const { UniversalFederationPlugin } = require('@module-federation/node');

module.exports = {
  client: new ModuleFederationPlugin({
    name: 'styleguide',
    filename: 'remoteEntry.js',
    exposes: {
      './styles': './src/bootstrap',
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
      name: 'styleguide',
      filename: 'remoteEntry.js',
      library: { type: 'commonjs-module' },
    //   remotes: {
    //     remote2: 'remote2@http://localhost:3002/server/remoteEntry.js',
    //   },
    exposes: {
        './styles': './src/bootstrap',
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
    })
  ],
};
