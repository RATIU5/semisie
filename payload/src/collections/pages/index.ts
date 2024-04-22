import { hasAdminOrEditorAccess } from '@/lib/payload/access'
import type { CollectionConfig } from 'payload/types'

export const Pages: CollectionConfig = {
  slug: 'pages',
  versions: {
    drafts: true,
  },
  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt'],
    useAsTitle: 'title',
  },
  access: {
    create: hasAdminOrEditorAccess,
    delete: hasAdminOrEditorAccess,
    update: hasAdminOrEditorAccess,
    read: () => true,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Details',
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'slug',
                  type: 'text',
                  required: true,
                },
              ],
            },
            {
              type: 'textarea',
              name: 'description',
              label: 'Description',
            },
          ],
        },
        {
          label: 'Content',
          fields: [
            {
              name: 'layout',
              type: 'blocks',
              required: true,
              // Add blocks in the below array
              blocks: [],
            },
          ],
        },
      ],
    },
  ],
}
