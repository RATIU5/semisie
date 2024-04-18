import { hasAdminOrEditorAccess, isAnyoneOrPublished } from '@/lib/access'
import type { CollectionConfig } from 'payload/types'

export const Pages: CollectionConfig = {
  slug: 'pages',
  versions: {
    drafts: true,
  },
  admin: {
    defaultColumns: ['name', 'email', 'role'],
    useAsTitle: 'email',
  },
  access: {
    create: hasAdminOrEditorAccess,
    delete: hasAdminOrEditorAccess,
    update: hasAdminOrEditorAccess,
    read: isAnyoneOrPublished,
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
