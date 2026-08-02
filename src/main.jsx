import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CssBaseline, ThemeProvider, useMediaQuery } from '@mui/material'
import { darkTheme, lightTheme } from './themes/default.js'
import './index.css'
import App from './App.jsx'

export function RootApp() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const activeTheme = prefersDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={activeTheme}>
      <CssBaseline />
        <App />
    </ThemeProvider>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RootApp />
  </StrictMode>
)