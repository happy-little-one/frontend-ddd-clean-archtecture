import { Mock } from 'vitest'

import * as api from 'todo/adts/api/todo'
import store from 'todo/adts/store/todo'

export default async function find() {
  const todos = await api.find()
  store.todos = todos
}

if (import.meta.vitest) {
  const { it, vi, expect } = import.meta.vitest

  vi.mock('todo/adts/api/todo')
  const setTodo = vi.spyOn(store, 'todos', 'set')

  it('should fetch the todo list', async () => {
    const todos = [{ title: 'todo' }]
    ;(api.find as Mock).mockReturnValue(todos)
    await find()
    expect(setTodo).toBeCalledWith(todos)
  })
}
