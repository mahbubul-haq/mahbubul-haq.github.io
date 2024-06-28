import { useEffect } from "react";
import "./App.css";
import Box from "@mui/material/Box";

import Navbar from "./components/navbar/index.jsx";
import HomePage from "./pages/home/index.jsx";
import { themeSettings } from "./theme.js";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme } from "@mui/material/styles";
import { useContext } from "react";
import { MainContext } from "./context/MainContext.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutMe from "./pages/aboutme/index.jsx";
import Projects from "./pages/projects/index.jsx";
import { Fab } from "@mui/material";
import { BiArrowToTop } from "react-icons/bi";
import useMediaQuery from "@mui/material/useMediaQuery";
import Contact from "./components/contact/index.jsx";
import NotFound from "./pages/NotFound.jsx";

const App = () => {
  const isMobileScreens = useMediaQuery("(max-width: 600px)");
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const maxWidth700 = useMediaQuery("(max-width: 700px)");


  const { mode } = useContext(MainContext);

  useEffect(() => {
    let el = document.querySelector(".app-container");

    let event = el.addEventListener("scroll", () => {
      let toTop = document.querySelector(".to-top");
      if (isMobileScreens && el.scrollTop > 800 || isNonMobileScreens && el.scrollTop > 1000) {
        toTop.style.transform = "translateY(0)";
      }
      else {
        toTop.style.transform = "translateY(10rem)";
      }
    }
    );

    return () => {
      el.removeEventListener("scroll", event);
    }
  }, []);


  const toTop = () => {
    document.querySelector(".app-container").scrollTo(0, 0);
  };

  return (
    <ThemeProvider theme={createTheme(themeSettings(mode))}>
      <CssBaseline />
      <Box
        className="app-container"
        sx={{
          position: "relative",
          width: "100%",
          height: "100%",
          overflowY: "auto",
          overflowX: "hidden",
          scrollBehavior: "smooth",
          background: `linear-gradient(to bottom, ${theme => theme.palette.background.default} 0%, ${theme => theme.palette.background.alt} 100%)`,
        }}
      >

        <Router>
          <Navbar />
          <Routes basename="/">
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

          {/* Routes end here */}

          <Box
            id="contact"
            sx={{
              width: "100%",
              background: theme => theme.palette.background.dark,
              py: isNonMobileScreens ? "3rem" : "3rem",
              // pb: isNonMobileScreens ? "10rem" : "5rem",
              borderTopLeftRadius: maxWidth700 ? "2rem" : "4rem",
              borderTopRightRadius: maxWidth700 ? "2rem" : "4rem",
            }}>
            <Box sx={{
              mx: "auto",
              maxWidth: 2000,
              px: isNonMobileScreens ? "64px" : isMobileScreens ? "16px" : "32px",
            }}
            >

              <Contact />
            </Box>
          </Box>

          {/* To top button */}

          <Box className="to-top"
            sx={{
              cursor: "pointer",
              position: "fixed",
              right: isMobileScreens ? "1rem" : "3rem",
              bottom: "2rem",
              transform: "translateY(10rem)",
              background: "transparent",
              transition: "all 0.3s ease",
            }}

          >
            <Fab
              sx={{
                background: (theme) => theme.palette.secondary.main,
                color: (theme) => theme.palette.common.black,
                "&:hover": {
                  background: (theme) =>
                    theme.palette.secondary.dark,
                },
              }}
              onClick={toTop}
            >
              <BiArrowToTop fontSize={isMobileScreens ? 25 : 30} />
            </Fab>
          </Box>
        </Router>
      </Box>
    </ThemeProvider>
  );
};

export default App;
