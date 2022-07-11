export interface API {
  detectLoginStatus(token: string): Promise<boolean | User>
  login(
    userName: string,
    password: string,
  ): Promise<{ token: string; user: User }>
}

export interface Router {
  goToHome(): void
  goToLogin(): void
}

export interface LocalStorege {
  setToken(token: string): void
  getToken(): string | null
}

export interface Store {
  currentUser?: User
}
