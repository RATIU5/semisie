import type { CollectionConfig } from 'payload/types'
import { admins, hasAdminAccess } from '@/lib/payload/access'
import { ensureFirstUserIsAdmin } from './hooks'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    defaultColumns: ['name', 'email', 'role'],
    useAsTitle: 'email',
  },
  access: {
    create: admins,
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
        update: hasAdminAccess,
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
