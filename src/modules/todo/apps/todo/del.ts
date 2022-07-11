import { Mock } from 'vitest'

import * as api from 'todo/adts/api/todo'
import * as message from 'todo/adts/message'
import { Todo } from 'todo/models/todo'
import { delable } from 'todo/models/todo'
import authStore from 'auth/adts/store'

import find from './find'

export default async function del(todo: Todo) {
  const user = authStore.currentUser as User

  if (!delable(user, todo)) {
    return message.error('you have no access to delete this todo')
  }

  await api.del(todo.id)
  find()
}

if (import.meta.vitest) {
  const { describe, it, vi, afterEach, expect } = import.meta.vitest

  afterEach(() => {
    vi.resetAllMocks()
  })

  vi.mock('todo/adts/api/todo')
  vi.mock('todo/adts/message')
  vi.mock('todo/models/todo')
  vi.mock('./find')

  describe('add', () => {
    it('should message error if todo is not belong to current user', async () => {
      ;(delable as Mock).mockReturnValue(false)
      await del({} as Todo)
      expect(message.error).toBeCalled()
    })

    it('should del the todo and then fetch todos', async () => {
      ;(delable as Mock).mockReturnValue(true)
      await del({ id: 1 } as Todo)

      expect(api.del).toBeCalledWith(1)
      expect(find).toBeCalled()
    })
  })
}
