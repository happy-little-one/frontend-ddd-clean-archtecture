import { Todo } from 'todo/models/todo'
import { API } from 'todo/apps/todo/port'

let todos: Todo[] = [
  {
    id: 1,
    title: 'this is a todo',
    belongTo: 2,
    done: false,
  },
]

export const find: API['find'] = async () => todos

export const add: API['add'] = async todo => {
  todos = todos.concat(todo)
}

export const del: API['del'] = async id => {
  todos = todos.filter(todo => todo.id !== id)
}

export const toggle: API['toggle'] = async id => {
  todos = todos.map(todo =>
    todo.id === id ? { ...todo, done: !todo.done } : todo,
  )
}
