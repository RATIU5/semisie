import type { Access, AccessArgs } from 'payload/config';

import type { User } from '../payload-types';

import { checkRole } from './collections/users/check-role';

type IsRole = (args: AccessArgs<unknown, User>) => boolean;

export const supers: IsRole = ({ req: { user } }) => {
  return checkRole('super', user ?? undefined);
};

export const admins: IsRole = ({ req: { user } }) => {
  return checkRole('admin', user ?? undefined);
};

export const viewers: IsRole = ({ req: { user } }) => {
  return checkRole('viewer', user ?? undefined);
};

export const supersOrAdmins: Access = ({ req: { user } }) => {
  return checkRole('super', user) || checkRole('admin', user);
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
      equals: 'published',
    },
  };
};
