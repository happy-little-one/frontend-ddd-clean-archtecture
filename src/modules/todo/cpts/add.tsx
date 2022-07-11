import { KeyboardEvent } from 'react'
import add from 'todo/apps/todo/add'

export default function Add() {
  return (
    <input
      placeholder="what need to be done ?"
      onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
          const title = e.currentTarget.value.trim()
          if (title) {
            add(title)
            e.currentTarget.value = ''
          }
        }
      }}
    />
  )
}
