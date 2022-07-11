export interface Todo {
  id: ID
  title: string
  done: boolean
  belongTo: ID
}

export function create(user: User, title: string): Todo {
  return {
    id: Math.random(),
    title,
    done: false,
    belongTo: user.id,
  }
}

export function delable(user: User, todo: Todo) {
  return user.role === 'admin' || user.id === todo.belongTo
}
