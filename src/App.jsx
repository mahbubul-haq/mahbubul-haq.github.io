import { } from 'react'
import './App.css'
import Box from "@mui/material/Box";
import useTheme from "@mui/material/styles/useTheme";

import Navbar from './components/navbar/index.jsx';
import HomePage from './pages/home/index.jsx';
import { themeSettings } from './theme.js'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme } from '@mui/material/styles'
import { useContext } from 'react'
import { MainContext } from './context/MainContext.jsx'

const App = () => {

  const theme = useTheme();

  const { mode } = useContext(MainContext);
  console.log(mode);


  return (

    <ThemeProvider theme={createTheme(themeSettings(mode))}>
      <CssBaseline />
      <Box className="app-container" sx={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflowY: "auto",
        overflowX: "hidden",
        background: `linear-gradient(to bottom, ${theme.palette.background.default} 0%, ${theme.palette.background.alt} 100%)`,
      }}>

        <Navbar />
        <HomePage />

      </Box>
    </ThemeProvider>


  );
}


export default App
