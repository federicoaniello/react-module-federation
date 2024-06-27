const deps = require('../package.json').dependencies;
const { ModuleFederationPlugin } = require('webpack').container;
const { NodeFederationPlugin, StreamingTargetPlugin } = require('@module-federation/node');

module.exports = {
  client: new ModuleFederationPlugin({
    name: 'header',
    filename: 'remoteEntry.js',
    // remotes: {
    //   remote2: 'remote2@http://localhost:3002/client/remoteEntry.js',
    // },
    exposes: {
      './Header': './src/components/Header',
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
    new NodeFederationPlugin({
      name: 'header',
      filename: 'remoteEntry.js',
      library: { type: 'commonjs-module' },
    //   remotes: {
    //     remote2: 'remote2@http://localhost:3002/server/remoteEntry.js',
    //   },
    exposes: {
        './Header': './src/components/Header',
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
    new StreamingTargetPlugin({
      name: 'header',
      library: { type: 'commonjs-module' },
    //   remotes: {
    //     remote2: 'header@http://localhost:3003/server/remoteEntry.js',
    //   },
    }),
  ],
};
