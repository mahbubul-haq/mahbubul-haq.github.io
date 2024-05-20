import Box from "@mui/material/Box";
import {  useMediaQuery } from "@mui/material";

import useTheme from "@mui/material/styles/useTheme";

import "./Home.css";

import HeroSection from "./HeroSection";
import SkillSection from "./SkillSection";
import PortfolioProjects from "./PortfolioProjects";
import ProblemSolving from "./ProblemSolving";
import Contact from "../../components/Contact";


const HomePage = () => {

    const isMobileScreens = useMediaQuery("(max-width: 600px)");
    const isNonMobileScreens = useMediaQuery('(min-width: 1000px)');
    const maxWidth700 = useMediaQuery('(max-width: 700px)');
    const maxWidht950 = useMediaQuery('(max-width: 950px)');

    const theme = useTheme();

    return (
        <Box sx={{
            width: "100%",
            
        }}>
            <Box sx={{
                maxWidth: 2000,
                px: isNonMobileScreens ? "64px" : isMobileScreens ? "16px" : "32px",

                mx: "auto",
                pb: isNonMobileScreens ? "10rem" : "5rem",
                // height: 'calc(100vh - 5rem)',
            }}>

                <HeroSection />
            </Box>
            <Box sx={{
                width: "100%",
                background: theme.palette.background.dark,
                py: isNonMobileScreens ? "5rem" : "3rem",
                pb: isNonMobileScreens ? "10rem" : "5rem",
            }}>
                <Box sx={{
                    mx: "auto",
                    maxWidth: 2000,
                    px: isNonMobileScreens ? "64px" : isMobileScreens ? "16px" : "32px",
                }}
                >

                    <SkillSection />
                </Box>
            </Box>

            <Box sx={{
                mx: "auto",
                py: isNonMobileScreens ? "5rem" : "3rem",
                maxWidth: 2000,
                px: isNonMobileScreens ? "64px" : isMobileScreens ? "16px" : "32px",
                
            }}>
                <PortfolioProjects />
            </Box>

            <Box sx={{
                mx: "auto",
                py: isMobileScreens ? "3rem" : "7rem",
                maxWidth: 2000,
                px: isNonMobileScreens ? "64px" : isMobileScreens ? "16px" : "32px",
                mb: maxWidht950 ? "3rem" : "7rem",
            }}>
                <ProblemSolving />
            </Box>

            <Box sx={{
                width: "100%",
                background: theme.palette.background.dark,
                py: isNonMobileScreens ? "3rem" : "3rem",
                // pb: isNonMobileScreens ? "10rem" : "5rem",
                borderTopLeftRadius: maxWidth700 ? "2rem" : "4rem",
                borderTopRightRadius: maxWidth700 ? "2rem": "4rem",
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
            
        </Box>
    )
}

export default HomePage