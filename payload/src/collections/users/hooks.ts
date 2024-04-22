import type { FieldHook } from 'payload/types'

import type { User } from '@/payload-types'

// ensure the first user created is a super
// 1. lookup a single user on create as succinctly as possible
// 2. if there are no users found, append `super` to the roles array
// access control is already handled by this fields `access` property
// it ensures that only supers can create and update the `roles` field
export const ensureFirstUserIsAdmin: FieldHook<User> = async (data) => {
  if (data.operation === 'create') {
    const users = await data.req.payload.find({
      collection: 'users',
      depth: 0,
      limit: 0,
    })
    if (users.totalDocs === 0) {
      if (data.value === undefined || data.value !== 'admin') {
        return 'admin'
      }
    }
  }

  return data.value
}
