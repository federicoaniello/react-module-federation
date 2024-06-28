const deps = require('../package.json').dependencies;
const { ModuleFederationPlugin } = require('webpack').container;
const { UniversalFederationPlugin } = require('@module-federation/node');

module.exports = {
  client: new ModuleFederationPlugin({
    name: 'shell',
    filename: 'container.js',
    remotes: {
      remote1: 'remote1@http://localhost:3001/client/remoteEntry.js',
      header:'header@http://localhost:3003/client/remoteEntry.js',
      styleguide:'styleguide@http://localhost:3004/client/remoteEntry.js',
      contact:'contact@http://localhost:3005/client/remoteEntry.js',
    },
    shared: [{ react: deps.react, 'react-dom': deps['react-dom'], 'react-router-dom':deps['react-router-dom'] }],
  }),
  server: [
    new UniversalFederationPlugin({
      name: 'shell',
      library: { type: 'commonjs-module' },
      remoteType: 'script',
      filename: 'remoteEntry.js',
      remotes: {
        remote1: 'remote1@http://localhost:3001/server/remoteEntry.js',
        header: 'header@http://localhost:3003/server/remoteEntry.js',
        styleguide:'styleguide@http://localhost:3004/server/remoteEntry.js',
        contact:'contact@http://localhost:3005/server/remoteEntry.js',

      },
      shared: [{ react: deps.react, 'react-dom': deps['react-dom'],'react-router-dom':deps['react-router-dom'] }],
    })
  ],
};
