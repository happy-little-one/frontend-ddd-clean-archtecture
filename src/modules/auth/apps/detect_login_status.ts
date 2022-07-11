import { Mock } from 'vitest'

import * as router from 'auth/adts/router'
import * as localStorage from 'auth/adts/local_storge'
import * as api from 'auth/adts/api'
import store from 'auth/adts/store'

export async function detectLoginStatus() {
  const token = localStorage.getToken()
  if (!token) return router.goToLogin()

  const res = await api.detectLoginStatus(token)
  if (!res) return router.goToLogin()

  const user = res as User
  store.currentUser = user
  router.goToHome()
}

if (import.meta.vitest) {
  const { describe, it, vi, afterEach, expect } = import.meta.vitest

  vi.mock('auth/adts/router')
  vi.mock('auth/adts/local_storge')
  vi.mock('auth/adts/api')
  const setCurrentUser = vi.spyOn(store, 'currentUser', 'set')

  describe('detectLoginStatus', () => {
    afterEach(() => {
      vi.resetAllMocks()
    })

    it('should redirect to login page if token is null', async () => {
      ;(localStorage.getToken as Mock).mockReturnValue(null)
      await detectLoginStatus()
      expect(router.goToLogin).toBeCalled()
    })

    it('should redirect to login page if token is expired', async () => {
      ;(localStorage.getToken as Mock).mockReturnValue('token')
      ;(api.detectLoginStatus as Mock).mockReturnValue(false)

      await detectLoginStatus()
      expect(api.detectLoginStatus).toBeCalledWith('token')
      expect(router.goToLogin).toBeCalled()
    })

    it('should set the current user and redirect to home page if token is avilable', async () => {
      ;(localStorage.getToken as Mock).mockReturnValue('token')
      ;(api.detectLoginStatus as Mock).mockReturnValue({ user: 'tom' })

      await detectLoginStatus()
      expect(api.detectLoginStatus).toBeCalledWith('token')
      expect(setCurrentUser).toBeCalledWith({ user: 'tom' })
      expect(router.goToHome).toBeCalled()
    })
  })
}
