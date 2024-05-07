import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { themeSettings } from './theme.js'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import {createTheme} from '@mui/material/styles'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    

    <ThemeProvider theme={createTheme(themeSettings('light'))}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
