# Server Side Rendering Example

Module Federation Server Side Rendering example using React Suspense and SSR routing via React-Router. Example taken from module-federation examples.

This example demonstrates a basic shell application loading remote components and rendering them server side.

- `shell` is the host application which includes the SSR server.
- `remote1` standalone application which exposes `Content` component and consumes `Image` from `remote2`
- `remote2` standalone application which exposes `Image` component.
- `header` standalone application which exposes `Header` component, being able to switch between routes / and /About.
- `styleguide` is an utils for sharing styles and utils between modules.


## Running Demo

Run `yarn` to install the dependencies.

Run `yarn build` to build the packages.

Run `yarn serve` in the shell and remote1 and remote2, styleguide and header folders to start the servers. or you can run `pnpm build` and then `pnpm serve` in the root folder.

This will build the packages and and serve them on ports 3000, 3001, 3002, 3003 and 3004 respectively.

- [localhost:3000](http://localhost:3000/) (SHELL)
- [localhost:3001](http://localhost:3001/) (STANDALONE REMOTE1)
- [localhost:3002](http://localhost:3002/) (STANDALONE REMOTE2)
- [localhost:3003](http://localhost:3003/) (STANDALONE HEADER)
- [localhost:3004](http://localhost:3004/) (STANDALONE STYLEGUIDE)
