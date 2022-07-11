import * as api from 'todo/adts/api/todo'
import authStore from 'auth/adts/store'
import { create } from 'todo/models/todo'

import find from './find'

export default async function add(title: string) {
  const user = authStore.currentUser as User
  const todo = create(user, title)

  await api.add(todo)
  find()
}

if (import.meta.vitest) {
  const { it, vi, expect } = import.meta.vitest

  vi.mock('todo/adts/api/todo')
  vi.mock('todo/models/todo')
  vi.mock('./find')

  const getUser = vi.spyOn(authStore, 'currentUser', 'get')

  it('should add a todo and then fetch todos again', async () => {
    const title = 'todo'
    const user: User = { id: 1, name: 'tom', role: 'user' }
    getUser.mockReturnValue(user)

    await add(title)
    expect(create).toBeCalledWith(user, title)
    expect(api.add).toBeCalled()
    expect(find).toBeCalled()
  })
}
