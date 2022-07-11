import { Todo } from 'todo/models/todo'

import del from 'todo/apps/todo/del'
import toggle from 'todo/apps/todo/toggle'

export default function Item({ todo }: { todo: Todo }) {
  const { title, done } = todo

  return (
    <li>
      <input type="checkbox" checked={done} onChange={() => toggle(todo)} />
      <span>{title}</span>
      <button onClick={() => del(todo)}>del</button>
    </li>
  )
}
