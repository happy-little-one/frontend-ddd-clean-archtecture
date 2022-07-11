import { useEffect } from 'react'
import { useSnapshot } from 'valtio'

import authStore from 'auth/adts/store'
import todoStore from 'todo/adts/store/todo'

import Add from 'todo/cpts/add'
import Item from 'todo/cpts/item'
import find from 'todo/apps/todo/find'

export default () => {
  const { currentUser } = useSnapshot(authStore)
  const { todos } = useSnapshot(todoStore)

  useEffect(() => {
    find()
  })

  return (
    <div>
      <h2>hello, {currentUser?.name}</h2>
      <Add />
      <ol>
        {todos.map(todo => (
          <Item key={todo.id} todo={todo} />
        ))}
      </ol>
    </div>
  )
}
