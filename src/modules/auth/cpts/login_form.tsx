import { useState, FormEvent } from 'react'

import login from 'auth/apps/login'

export default function LoginForm() {
  const [password, setPassword] = useState<string>('')

  return (
    <div>
      <input type="text" value="tom" readOnly disabled />
      <input
        type="password"
        placeholder="anything"
        value={password}
        onInput={(e: FormEvent<HTMLInputElement>) =>
          setPassword(e.currentTarget.value)
        }
      />
      <button onClick={() => login('tom', password)}>login</button>
    </div>
  )
}
