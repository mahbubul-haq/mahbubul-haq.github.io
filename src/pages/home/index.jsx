import Box from "@mui/material/Box";
import { useMediaQuery } from "@mui/material";

import useTheme from "@mui/material/styles/useTheme";

import "./Home.css";

import HeroSection from "./HeroSection";
import SkillSection from "./SkillSection";
import PortfolioProjects from "./PortfolioProjects";
import ProblemSolving from "./ProblemSolving";
import { useEffect } from "react";
import { MainContext } from "../../context/MainContext";
import { useContext } from "react";

const HomePage = () => {

    const isMobileScreens = useMediaQuery("(max-width: 600px)");
    const isNonMobileScreens = useMediaQuery('(min-width: 1000px)');
    const maxWidht950 = useMediaQuery('(max-width: 950px)');
    const { setPage, mode } = useContext(MainContext);

    const theme = useTheme();

    useEffect(() => {
        setPage("home-page");
        
        let homeHeroImage = document.querySelector(".home-hero-image");
        if (!homeHeroImage) return;
        homeHeroImage.style.transform = "scale(1)";
        homeHeroImage.style.opacity = mode == "dark" ? 0.5 : 1;
    }
        , [mode])

    useEffect(() => {
        let homeHeroImage = document.querySelector(".home-hero-image");
        if (isNonMobileScreens && homeHeroImage) {
            homeHeroImage.style.transform = "scale(1)";
            homeHeroImage.style.opacity = mode == "dark" ? 0.5 : 1;
        }
        else if (homeHeroImage){
            homeHeroImage.style.transform = "scale(0)";
            homeHeroImage.style.opacity = 0;
        }
    }, [isNonMobileScreens, mode]);

    return (

        <Box sx={{
            width: "100%",
        }}>
            <Box sx={{
                maxWidth: 2000,
                px: isNonMobileScreens ? "64px" : isMobileScreens ? "16px" : "32px",

                mx: "auto",
                mt: isNonMobileScreens ? "-5rem" : "0",
                pt: isNonMobileScreens ? "5rem" : "0",
                pb: "0",
                overflow: "hidden",
                position: "relative",
              
            }}>
                
                <HeroSection />
                {isNonMobileScreens &&
                    <Box sx={{
                        position: "absolute",
                        width: "60%",
                        top: 0,
                        bottom: "0rem",
                        right: 0,
                        background: mode === "dark"? 'rgba(0, 0, 0, 0)' : 'rgba(0, 0, 0, 0.1)',
                        // clipPath: 'ellipse(94% 76% at 94% 50%)',
                        clipPath: 'polygon(34% 0, 100% 0%, 100% 100%, 0 100%)',
                        display: "flex",

                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        <img
                            className="home-hero-image"
                            src="images/sample.svg"
                            alt="random"
                            style={{
                                width: "70%",
                                position: "absolute",
                                right: isNonMobileScreens ? "64px" : isMobileScreens ? "16px" : "32px",
                                // height: "70%",
                                objectFit: "cover",
                                // borderRadius: "50%",
                                // aspectRatio: "1 / 1",
                                transform: "scale(0)",
                                opacity: 0,
                                transition: "all 1s ease-in-out",

                            }} />
                    </Box>
                }

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

        </Box>
    )
}

export default HomePage