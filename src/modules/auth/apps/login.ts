import { Mock } from 'vitest'

import * as router from 'auth/adts/router'
import * as localStorage from 'auth/adts/local_storge'
import * as api from 'auth/adts/api'
import store from 'auth/adts/store'

export default async function login(username: string, password: string) {
  const { token, user } = await api.login(username, password)

  localStorage.setToken(token)
  store.currentUser = user
  router.goToHome()
}

if (import.meta.vitest) {
  const { describe, it, vi, afterEach, expect } = import.meta.vitest

  vi.mock('auth/adts/router')
  vi.mock('auth/adts/local_storge')
  vi.mock('auth/adts/api')
  const setCurrentUser = vi.spyOn(store, 'currentUser', 'set')

  describe('login', () => {
    afterEach(() => {
      vi.resetAllMocks()
    })

    it('should set the current user and goto home', async () => {
      ;(api.login as Mock).mockReturnValue({
        token: 'token',
        user: { name: 'tom' },
      })

      await login('tom', 'pasword')

      expect(setCurrentUser).toBeCalledWith({ name: 'tom' })
      expect(localStorage.setToken).toBeCalledWith('token')
      expect(router.goToHome).toBeCalled()
    })
  })
}
