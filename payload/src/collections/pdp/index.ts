import { getAllProducts } from '@/lib/medusa/get-all-products'
import { hasAdminOrEditorAccess } from '@/lib/payload/access'
import type { CollectionConfig } from 'payload/types'

export const PDP: CollectionConfig = {
  slug: 'pdp',
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
              type: 'select',
              required: true,
              // Add blocks in the below array
              // options: ['test'],
              options: [...(await getAllProducts())],
            },
          ],
        },
      ],
    },
  ],
}
