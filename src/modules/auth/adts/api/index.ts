import { API } from 'auth/apps/ports'

const user: User = { id: 1, name: 'Tom', role: 'user' }

export const detectLoginStatus: API['detectLoginStatus'] = async (
  token: string,
) => {
  return user
}

export const login: API['login'] = async (
  username: string,
  password: string,
) => {
  return {
    token: 'token',
    user,
  }
}
