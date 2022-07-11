import * as api from 'todo/adts/api/todo'
import { Todo } from 'todo/models/todo'
import find from './find'

export default async function toggle(todo: Todo) {
  await api.toggle(todo.id)
  find()
}

if (import.meta.vitest) {
  const { it, vi, expect } = import.meta.vitest

  vi.mock('todo/adts/api/todo')
  vi.mock('./find')

  it('toggle', async () => {
    await toggle({ id: 1 } as Todo)
    expect(api.toggle).toBeCalledWith(1)
    expect(find).toBeCalled()
  })
}
