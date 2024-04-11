import type { Access, AccessArgs } from "payload/config";

import type { User } from "../payload-types";

import { checkRole } from "./collections/users/check-role";

type IsRole = (args: AccessArgs<unknown, User>) => boolean;

export const admins: IsRole = ({ req: { user } }) => {
  return checkRole("admin", user);
};

export const editors: IsRole = ({ req: { user } }) => {
  return checkRole("editor", user);
};

export const viewers: IsRole = ({ req: { user } }) => {
  return checkRole("viewer", user);
};

export const editorsOrAdmins: Access = ({ req: { user } }) => {
  return checkRole("admin", user) || checkRole("editor", user);
};

export const anyone: Access = ({ req: { user } }) => {
  return !!user;
};

export const anyoneOrPublished: Access = ({ req: { user } }) => {
  if (user) {
    return true;
  }

  return {
    _status: {
      equals: "published",
    },
  };
};
