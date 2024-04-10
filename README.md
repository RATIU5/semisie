## Install

### Prerequisites

- [Node.js](https://nodejs.org/en/) v18.2.1 or higher
- [pnpm](https://pnpm.io/) v8.14.0 or higher

### Create a new project

Run the following command to start the installation process:

```bash
pnpm dlx create-medusa-app@latest --skip-db
```

You will be asked:

1. The name of your project: **backend**
2. Create the Next.js storefront: **No**

Once that completes, `cd` into the project directory:

```bash
cd backend
```

Then copy the `.env.template` file to `.env`:

```bash
cp .env.template .env
```

Then work on filling out the `.env` file with the necessary environment variables. Use [RandomKeyGen](https://randomkeygen.com/) to help you generate secure keys.

- NODE_ENV=development
- JWT_SECRET=\<codeigniter encryption key from RandomKeyGen>
- COOKIE_SECRET=\<codeigniter encryption key from RandomKeyGen>
- DATABASE_URL=\<your database url>
- DATABASE_TYPE=postgres
- REDIS_URL=\<your redis url> (optional)
- NODE_TLS_REJECT_UNAUTHORIZED=0

[Why we need NODE_TLS_REJECT_UNAUTHORIZED](https://stackoverflow.com/a/45088585).

#### Changes to `package.json`

Change the `start` script in `package.json` to the following:

```json
"start": "medusa migrations run && medusa start"
```

#### Changes to `medusa-config.js`

Modify the `medusa-config.js` and add locate the line that says `const DATABASE_URL = process.env.DATABASE_URL`.

Change `const` to `let` and add the follwoing code block below it:

```javascript
if (process.env.NODE_ENV === "production") {
  const DB_USERNAME = process.env.DB_USERNAME;
  const DB_PASSWORD = process.env.DB_PASSWORD;
  const DB_HOST = process.env.DB_HOST;
  const DB_PORT = process.env.DB_PORT;
  const DB_DATABASE = process.env.DB_DATABASE;
  DATABASE_URL =
    `postgres://${DB_USERNAME}:${DB_PASSWORD}` +
    `@${DB_HOST}:${DB_PORT}/${DB_DATABASE}`;
}
```

We do this so DigitalOcean can inject the database credentials into the environment variables. [See more details here](https://docs.medusajs.com/deployments/server/deploying-on-digital-ocean#changes-to-medusa-configjs)

Add the follwing line to your `projectConfig` object within the same file:

```js
database_extra: { ssl: { rejectUnauthorized: false } },
```

#### Changes to `.gitignore`

Your .gitignore may have `yarn.lock` and `package-lock.json` in it. If so, remove both or one of them to ensure they're committed with your code. Otherwise, you may face build errors after deployment.

### Setting Up Medusa Backend

Run the following command to setup the database migrations:

```bash
pnpm dlx medusa migrations run
```

Create the first admin user:

```bash
pnpm dlx medusa user --email <your work email> --password <your password>
```

Finally, you can start the server:

```bash
pnpm dev
```

## Deploying to DigitalOcean

Follow [Medusa's official guide](https://docs.medusajs.com/deployments/server/deploying-on-digital-ocean#deploy-to-digitalocean-app) to deploy your app to DigitalOcean.
