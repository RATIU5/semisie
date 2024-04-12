import type { Access } from "payload/config";

import type { User } from "../payload-types";
import { FieldAccess } from "payload/types";

export const admins: Access<any, User> = ({ req: { user } }) => {
  return Boolean(user?.role === "admin");
};

export const hasAdminAccess: FieldAccess<{ id: string }, unknown, User> = ({
  req: { user },
}) => {
  return Boolean(user?.role === "admin");
};

export const hasAdminAccessButNotFirstUser: FieldAccess<
  { id: string },
  unknown,
  User
> = ({ req: { user } }) => {
  return Boolean(user?.role === "admin") && user?.id !== 1;
};

export const editors: Access<any, User> = ({ req: { user } }) => {
  return Boolean(user?.role === "editor");
};

export const hasEditorAccess: FieldAccess<{ id: string }, unknown, User> = ({
  req: { user },
}) => {
  return Boolean(user?.role === "editor");
};

export const viewers: Access<any, User> = ({ req: { user } }) => {
  return Boolean(user?.role === "viewer");
};

export const hasViewerAccess: FieldAccess<{ id: string }, unknown, User> = ({
  req: { user },
}) => {
  return Boolean(user?.role === "viewer");
};

export const editorsOrAdmins: Access<any, User> = ({ req: { user } }) => {
  return Boolean(user?.role === "editor" || user?.role === "admin");
};

export const anyone: Access<any, User> = ({ req: { user } }) => {
  return Boolean(user);
};

export const anyoneOrPublished: Access<any, User> = ({ req: { user } }) => {
  if (user) {
    return true;
  }

  return {
    _status: {
      equals: "published",
    },
  };
};
