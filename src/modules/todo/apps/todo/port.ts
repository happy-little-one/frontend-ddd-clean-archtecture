import { Todo } from 'todo/models/todo'

export interface Store {
  todos: Todo[]
}

export interface API {
  find(): Promise<Todo[]>
  del(id: ID): Promise<void>
  add(todo: Todo): Promise<void>
  toggle(id: ID): Promise<void>
}
