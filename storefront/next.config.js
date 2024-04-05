import { withPayload } from "@payloadcms/next";
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
  eslint: {
    // Disabling on production builds because we're running checks on PRs via GitHub Actions.
    ignoreDuringBuilds: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.BIGCOMMERCE_CDN_HOSTNAME ?? "*.bigcommerce.com",
        port: "",
        pathname: "/**/*",
      },
      // TODO: Remove images from Unsplash
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/*",
      },
    ],
  },
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
export default withPayload(config);
