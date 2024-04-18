import type { Access } from 'payload/config'

import type { User } from '../payload-types'
import { FieldAccess } from 'payload/types'
import isFirstUser from './is-first-user'

export const hasAdminAccess: FieldAccess<{ id: string }, unknown, User> = ({ req: { user } }) => {
  return Boolean(user?.role === 'admin')
}

export const hasAdminAccessButNotFirstUser: FieldAccess<{ id: string }, unknown, User> = async ({
  req: { user },
}) => {
  return Boolean(user?.role === 'admin') && (await isFirstUser(user?.id))
}

export const hasAdminOrEditorAccess: FieldAccess<{ id: string }, unknown, User> = ({
  req: { user },
}) => {
  return Boolean(user?.role === 'admin' || user?.role === 'editor')
}

export const hasEditorAccess: FieldAccess<{ id: string }, unknown, User> = ({ req: { user } }) => {
  return Boolean(user?.role === 'editor')
}

export const hasViewerAccess: FieldAccess<{ id: string }, unknown, User> = ({ req: { user } }) => {
  return Boolean(user?.role === 'viewer')
}

export const isAnyoneOrPublished: Access<any, User> = ({ req: { user } }) => {
  if (user) {
    return true
  }

  return {
    _status: {
      equals: 'published',
    },
  }
}
