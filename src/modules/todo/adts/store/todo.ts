import { proxy } from 'valtio'

import { Store } from 'todo/apps/port'

export default proxy<Store>({ todos: [] })
