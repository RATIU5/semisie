import { env } from "@/env";
import Pages from "@/payload/collections/pages";
import Users from "@/payload/collections/users";
import Header from "@/payload/globals/header";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload/config";
import { fileURLToPath } from "url";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  editor: lexicalEditor(),
  collections: [Users, Pages],
  globals: [Header],
  secret: env.PAYLOAD_SECRET,
  typescript: {
    outputFile: path.resolve(dirname, "src/payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: env.POSTGRES_URI,
    },
  }),
});
