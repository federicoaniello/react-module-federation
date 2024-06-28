const deps = require("../package.json").dependencies;
const { ModuleFederationPlugin } = require("webpack").container;
const { UniversalFederationPlugin } = require("@module-federation/node");

module.exports = {
  client: new ModuleFederationPlugin({
    name: "header",
    filename: "remoteEntry.js",
    remotes: {
      cart: "cart@http://localhost:3007/client/remoteEntry.js",
    },
    exposes: {
      "./Header": "./src/components/Header",
    },
    shared: {
      ...deps,
      react: {
        singleton: true,
        requiredVersion: deps.react,
      },
      "react-dom": {
        singleton: true,
        requiredVersion: deps["react-dom"],
      },
      "react-router-dom": {
        singleton: true,
        requiredVersion: deps["react-router-dom"],
      },
      rxjs: {
        singleton: true,
        requiredVersion: "auto",
      },
    },
  }),
  server: [
    new UniversalFederationPlugin({
      name: "header",
      filename: "remoteEntry.js",
      remoteType: "script",
      library: { type: "commonjs-module" },
      isServer: true,
      remotes: {
        cart: "cart@http://localhost:3007/client/remoteEntry.js",
      },
      exposes: {
        "./Header": "./src/components/Header",
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
        "react-router-dom": {
          singleton: true,
          requiredVersion: deps["react-router-dom"],
        },
        rxjs: {
          singleton: true,
          requiredVersion: "auto",
        },
      },
    }),
  ],
};
