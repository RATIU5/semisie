import type { Access } from 'payload/config'

import type { User } from '@/payload-types'
import { FieldAccess } from 'payload/types'
import isFirstUser from '@/lib/payload/is-first-user'

export const admins: Access<any, User> = ({ req: { user } }) => {
  return Boolean(user?.role === 'admin')
}

export const hasAdminAccess: FieldAccess<{ id: string }, unknown, User> = ({ req: { user } }) => {
  return Boolean(user?.role === 'admin')
}

export const editors: Access<any, User> = ({ req: { user } }) => {
  return Boolean(user?.role === 'editor')
}

export const hasAdminOrEditorAccess: FieldAccess<{ id: string }, unknown, User> = ({
  req: { user },
}) => {
  return Boolean(user?.role === 'admin' || user?.role === 'editor')
}

export const hasEditorAccess: FieldAccess<{ id: string }, unknown, User> = ({ req: { user } }) => {
  return Boolean(user?.role === 'editor')
}

export const viewers: Access<any, User> = ({ req: { user } }) => {
  return Boolean(user?.role === 'viewer')
}

export const hasViewerAccess: FieldAccess<{ id: string }, unknown, User> = ({ req: { user } }) => {
  return Boolean(user?.role === 'viewer')
}

export const editorsOrAdmins: Access<any, User> = ({ req: { user } }) => {
  return Boolean(user?.role === 'editor' || user?.role === 'admin')
}

export const anyone: Access<any, User> = ({ req: { user } }) => {
  return Boolean(user)
}

export const isAdminNotFirstUser: FieldAccess<{ id: string }, unknown, User> = async ({
  req: { user },
}) => {
  const firstUser = await isFirstUser(user?.id)
  if (user?.role === 'admin') {
    if (firstUser) {
      return false
    }
    return true
  }
  return false
}

export const anyoneOrPublished: Access<any, User> = ({ req: { user } }) => {
  if (user) {
    return true
  }

  return {
    _status: {
      equals: 'published',
    },
  }
}
