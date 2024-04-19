import { User } from '@/payload-types'
import payload from 'payload'

export default async function isFirstUser(id: User['id'] | undefined) {
  if (!id) {
    return false
  }
  const result = await payload.find({
    collection: 'users',
    depth: 1,
    page: 1,
    limit: 1,
    pagination: false,
    sort: '+id',
  })
  if (result.docs[0].id === id) {
    return true
  }
  return false
}
