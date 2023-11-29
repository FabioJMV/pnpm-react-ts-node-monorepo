# TypeScript Monorepo Boilerplate

This is a TypeScript monorepo boilerplate using Turborepo and pnpm workspaces. It consists of two apps located in `apps` folder: a "Client" React TypeScript application using Vite and a "Server" app using Fastify. The repository also includes shared TypeScript and ESLint configuration packages located inside the `packages` folder.

## Getting Started

To get started with this boilerplate, follow the steps below:

1. Clone the repository:

   ```bash
   git clone https://github.com/FabioJMV/ts-monorepo-boilerplate.git
   ```

2. Install dependencies:

   ```bash
   cd your-repo
   pnpm install
   ```

3. Start App:

   ```bash
   turbo dev
   ```

## Folder Structure

apps/

- client/
  - package.json
- server/
  - package.json

packages/

- eslint-config-custom/
  - package.json
- ts-config/
  - package.json

package.json
