import type { User } from "@/payload-types";

export const checkRole = (
  role: User["role"] = "viewer",
  user?: User,
): boolean => {
  if (user && user.role === role) {
    return true;
  }
  return false;
};
