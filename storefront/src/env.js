import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  /**
   * Specify your server-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars.
   */
  server: {
    NODE_ENV: z.enum(["development", "test", "production"]),
    POSTGRES_URI: z.string(),
    PAYLOAD_SECRET: z.string(),
    PAYLOAD_ADMIN_EMAIL: z.string(),
    PAYLOAD_ADMIN_PASSWORD: z.string(),
    BIGCOMMERCE_CANONICAL_STORE_DOMAIN: z.string(),
    BIGCOMMERCE_API_URL: z.string(),
    BIGCOMMERCE_CDN_HOSTNAME: z.string(),
    BIGCOMMERCE_STORE_HASH: z.string(),
    BIGCOMMERCE_CHANNEL_ID: z.string(),
    BIGCOMMERCE_ACCESS_TOKEN: z.string(),
    BIGCOMMERCE_CUSTOMER_IMPERSONATION_TOKEN: z.string(),
    PAYLOAD_API_URL: z.string(),
  },

  /**
   * Specify your client-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars. To expose them to the client, prefix them with
   * `NEXT_PUBLIC_`.
   */
  client: {
    NEXT_PUBLIC_VERCEL_URL: z.string(),
    NEXT_PUBLIC_DEFAULT_REVALIDATE_TARGET: z.string(),
  },

  /**
   * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
   * middlewares) or client-side so we need to destruct manually.
   */
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    POSTGRES_URI: process.env.POSTGRES_URI,
    PAYLOAD_SECRET: process.env.PAYLOAD_SECRET,
    PAYLOAD_ADMIN_EMAIL: process.env.PAYLOAD_ADMIN_EMAIL,
    PAYLOAD_ADMIN_PASSWORD: process.env.PAYLOAD_ADMIN_PASSWORD,
    BIGCOMMERCE_CANONICAL_STORE_DOMAIN:
      process.env.BIGCOMMERCE_CANONICAL_STORE_DOMAIN,
    BIGCOMMERCE_API_URL: process.env.BIGCOMMERCE_API_URL,
    BIGCOMMERCE_CDN_HOSTNAME: process.env.BIGCOMMERCE_CDN_HOSTNAME,
    BIGCOMMERCE_STORE_HASH: process.env.BIGCOMMERCE_STORE_HASH,
    BIGCOMMERCE_CHANNEL_ID: process.env.BIGCOMMERCE_CHANNEL_ID,
    BIGCOMMERCE_ACCESS_TOKEN: process.env.BIGCOMMERCE_ACCESS_TOKEN,
    BIGCOMMERCE_CUSTOMER_IMPERSONATION_TOKEN:
      process.env.BIGCOMMERCE_CUSTOMER_IMPERSONATION_TOKEN,
    PAYLOAD_API_URL: process.env.PAYLOAD_API_URL,
    NEXT_PUBLIC_VERCEL_URL: process.env.NEXT_PUBLIC_VERCEL_URL,
    NEXT_PUBLIC_DEFAULT_REVALIDATE_TARGET:
      process.env.NEXT_PUBLIC_DEFAULT_REVALIDATE_TARGET,
  },
  /**
   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially
   * useful for Docker builds.
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  /**
   * Makes it so that empty strings are treated as undefined. `SOME_VAR: z.string()` and
   * `SOME_VAR=''` will throw an error.
   */
  emptyStringAsUndefined: true,
});
