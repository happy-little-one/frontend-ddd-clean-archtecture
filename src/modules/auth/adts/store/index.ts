import { proxy } from 'valtio'
import { Store } from 'auth/apps/ports'

export default proxy<Store>({
  currentUser: undefined,
})
