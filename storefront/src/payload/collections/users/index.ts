import type { CollectionConfig } from "payload/types";

import { supers } from "@/payload/access";
import { ensureFirstUserIsSuper } from "./hooks/ensure-first-user-is-admin";
import { loginAfterCreate } from "./hooks/login-after-create";

const Users: CollectionConfig = {
  access: {
    admin: (req) => req.user?.role === "super",
    create: ({ req: { user } }) => user?.role === "super",
    delete: ({ req: { user } }) => user?.role === "super",
  },
  admin: {
    defaultColumns: ["name", "email", "role"],
    useAsTitle: "name",
  },
  auth: true,
  fields: [
    {
      name: "name",
      label: "Full Name",
      type: "text",
      required: false,
    },
    {
      name: "email",
      type: "email",
      validate: (value, _) => {
        if (value?.endsWith("@maloufcompanies.com")) {
          return true;
        }
        return "invalid email address";
      },
    },
    {
      name: "role",
      access: {
        create: supers,
        update: supers,
      },
      type: "select",
      defaultValue: "viewer",
      hasMany: false,
      hooks: {
        beforeChange: [ensureFirstUserIsSuper],
      },
      options: [
        {
          label: "super",
          value: "super",
        },
        {
          label: "admin",
          value: "admin",
        },
        {
          label: "viewer",
          value: "viewer",
        },
      ],
    },
  ],
  hooks: {
    afterChange: [loginAfterCreate],
  },
  slug: "users",
  timestamps: true,
};

export default Users;
