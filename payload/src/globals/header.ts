import type { GlobalConfig } from 'payload/types'
import link from '@/fields/link'

export const Header: GlobalConfig = {
  slug: 'main-menu',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'navItems',
      type: 'array',
      maxRows: 8,
      fields: [
        link({
          appearances: false,
        }),
      ],
    },
  ],
}
