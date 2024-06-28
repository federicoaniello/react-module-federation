# Server Side Rendering Example

Module Federation Server Side Rendering example using React Suspense and SSR routing via React-Router. Example taken from module-federation examples.

This example demonstrates a basic shell application loading remote components and rendering them server side.

- `shell` is the host application which includes the SSR server.
- `remote1` standalone application which exposes `Content` component and consumes `Image` from `remote2`
- `remote2` standalone application which exposes `Image` component.
- `landingpage` exposes `landingpage` which is a simple component with some styles.
- `header` standalone application which exposes `Header` component and consumes `Cart` remote, being able to switch between routes and display the items in the basket.
- `contact` standalone component which exposes `Contact` component, to display a contact form.
- `api` exposes `Api`, which is an util module for the basket and manages adding/removing items via the RXJS BehaviorSubject.
- `cart` is a standalone component which exposes `Cart` and consumes `Api`, it's a dropdown to show the items in the basket.
- `catalog` is a standalone component which exposes `Catalog` and consumes `Api` to show a list of items with details.


## Running Demo

Run `yarn` to install the dependencies.

Run `yarn build` to build the packages.

Run `yarn serve` in the shell and remote1 and remote2, styleguide and header folders to start the servers. or you can run `pnpm build` and then `pnpm serve` in the root folder.

This will build the packages and and serve them on ports 3000/1/2/3/4/5/6/7/8/9 respectively.

- [localhost:3000](http://localhost:3000/) (SHELL)
- [localhost:3001](http://localhost:3001/) (STANDALONE REMOTE1)
- [localhost:3002](http://localhost:3002/) (STANDALONE REMOTE2)
- [localhost:3003](http://localhost:3003/) (STANDALONE HEADER)
- [localhost:3004](http://localhost:3004/) (STANDALONE STYLEGUIDE)
- [localhost:3005](http://localhost:3005/) (STANDALONE CONTACT)
- [localhost:3006](http://localhost:3006/) (STANDALONE LANDINGPAGE)
- [localhost:3007](http://localhost:3007/) (STANDALONE CART)
- [localhost:3008](http://localhost:3008/) (STANDALONE API)
- [localhost:3009](http://localhost:3009/) (STANDALONE CATALOG)

