const deps = require('../package.json').dependencies;
const { ModuleFederationPlugin } = require('webpack').container;
const { NodeFederationPlugin, StreamingTargetPlugin } = require('@module-federation/node');

module.exports = {
  client: new ModuleFederationPlugin({
    name: 'styleguide',
    filename: 'remoteEntry.js',
    // remotes: {
    //   remote2: 'remote2@http://localhost:3002/client/remoteEntry.js',
    // },
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
    new NodeFederationPlugin({
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
    }),
    new StreamingTargetPlugin({
      name: 'styleguide',
      library: { type: 'commonjs-module' },
      exposes: {
        './styles': './src/bootstrap',
      }
    //   remotes: {
    //     remote2: 'header@http://localhost:3003/server/remoteEntry.js',
    //   },
    }),
  ],
};
