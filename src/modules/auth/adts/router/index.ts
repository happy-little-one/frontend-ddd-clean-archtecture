import { Router } from 'auth/apps/ports'

export const goToHome: Router['goToHome'] = () => {
  if (location.pathname !== '/') location.pathname = '/'
}

export const goToLogin: Router['goToLogin'] = () => {
  if (location.pathname !== '/login') location.pathname = '/login'
}
