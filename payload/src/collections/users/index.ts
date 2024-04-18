import type { CollectionConfig } from 'payload/types'
import { hasAdminAccess, hasAdminAccessButNotFirstUser } from '@/lib/access'
import { ensureFirstUserIsAdmin } from '@/collections/users/hooks/ensure-first-user-is-admin'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    defaultColumns: ['name', 'email', 'role'],
    useAsTitle: 'email',
  },
  access: {
    create: hasAdminAccess,
  },
  auth: true,
  fields: [
    {
      type: 'text',
      name: 'name',
      label: 'Full Name',
    },
    {
      name: 'role',
      access: {
        create: hasAdminAccess,
        update: hasAdminAccessButNotFirstUser,
      },
      required: true,
      defaultValue: ['editor'],
      hasMany: false,
      hooks: {
        beforeChange: [ensureFirstUserIsAdmin],
      },
      options: [
        {
          label: 'Admin',
          value: 'admin',
        },
        {
          label: 'Editor',
          value: 'editor',
        },
        {
          label: 'Viewer',
          value: 'viewer',
        },
      ],
      type: 'select',
    },
  ],
}
