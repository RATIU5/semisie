import type { FieldHook } from "payload/types";

import type { User } from "@/payload-types";

// ensure the first user created is a super
// 1. lookup a single user on create as succinctly as possible
// 2. if there are no users found, change the value to `super`
// access control is already handled by this fields `access` property
// it ensures that only supers can create and update the `role` field
export const ensureFirstUserIsSuper: FieldHook<User> = async ({
  operation,
  req,
  value,
}) => {
  if (operation === "create") {
    const users = await req.payload.find({
      collection: "users",
      depth: 0,
      limit: 0,
    });
    if (users.totalDocs === 0) {
      // if `super` is not the value, change it
      if (value !== "super") {
        return "super";
      }
    }
  }

  return value;
};
