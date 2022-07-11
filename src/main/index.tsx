import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './app'

const container = document.getElementById('root') as HTMLElement

createRoot(container).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
