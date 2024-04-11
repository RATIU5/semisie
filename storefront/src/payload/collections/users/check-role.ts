import type { User } from "@/payload-types";

export const checkRole = (
  role: User["roles"] = "viewer",
  user?: User
): boolean => {
  if (user && user.roles === role) {
    return true;
  }
  return false;
};
