import { LocalStorege } from 'auth/apps/ports'

export const setToken: LocalStorege['setToken'] = (token: string) => {
  localStorage.setItem('token', token)
}

export const getToken: LocalStorege['getToken'] = () => {
  return localStorage.getItem('token')
}
