import type { CollectionConfig } from "payload/types";
import { admins } from "../../access";
import { ensureFirstUserIsAdmin } from "./hooks/ensure-first-user-is-admin";

export const Users: CollectionConfig = {
  slug: "users",
  admin: {
    defaultColumns: ["name", "email", "role"],
    useAsTitle: "email",
  },
  auth: true,
  fields: [
    {
      type: "text",
      name: "name",
      label: "Full Name",
    },
    {
      name: "role",
      access: {
        create: admins,
        update: admins,
      },
      defaultValue: ["editor"],
      hasMany: false,
      hooks: {
        beforeChange: [ensureFirstUserIsAdmin],
      },
      options: [
        {
          label: "admin",
          value: "admin",
        },
        {
          label: "editor",
          value: "editor",
        },
        {
          label: "viewer",
          value: "viewer",
        },
      ],
      type: "select",
    },
  ],
};
