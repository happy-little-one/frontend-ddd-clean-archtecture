/// <reference types="vite/client" />

type ID = number

interface User {
  id: ID
  name: string
  role: 'user' | 'admin'
}
