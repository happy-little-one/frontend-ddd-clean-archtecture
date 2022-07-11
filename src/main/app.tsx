import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import { detectLoginStatus } from 'auth/apps/detect_login_status'

import Home from 'pages/home'
import Login from 'pages/login'

export default () => {
  useEffect(() => {
    detectLoginStatus()
  }, [])

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}
