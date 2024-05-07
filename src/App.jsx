import { useEffect, useState } from 'react'
import './App.css'
import Box from "@mui/material/Box";
import useTheme from "@mui/material/styles/useTheme";

import { MainState } from './context/MainContext.jsx';
import Navbar from './components/navbar/index.jsx';
import HeroImage from './pages/home/HeroImage.jsx';
import Hamburger from './components/navbar/Hamburger.jsx';


const App = () => {

  const theme = useTheme();

  


  return (
    <MainState>
      <Box className="app-container" sx={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflowY: "auto",
        background: `linear-gradient(to bottom, ${theme.palette.background.default} 0%, ${theme.palette.background.alt} 100%)`,
      }}>
        
        <Navbar />
        {/* <HeroImage /> */}
        
        <Box sx={{
          background: theme.palette.primary.main,
          height: '100vh',
          width: '10%',
          mt: '5rem',
          mx: 'auto'

        }}
        ></Box>

      </Box>
    </MainState>
  );
}


export default App
