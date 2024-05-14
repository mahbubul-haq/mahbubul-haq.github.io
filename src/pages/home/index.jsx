import Box from "@mui/material/Box";
import { Typography, useMediaQuery } from "@mui/material";
import BtnPrimary from "../../components/BtnPrimary";
import useTheme from "@mui/material/styles/useTheme";
import FlexBetween from "../../components/FlexBetween";

import { LuDownload } from "react-icons/lu";
import "./Home.css";
import HeroImage from "./HeroImage";
import HeroSection from "./HeroSection";
import SkillSection from "./SkillSection";


const HomePage = () => {

    const isMobileScreens = useMediaQuery("(max-width: 600px)");
    const isNonMobileScreens = useMediaQuery('(min-width: 1000px)');

    const theme = useTheme();

    return (
        <Box sx={{
            width: "100%",
            
        }}>
            <Box sx={{
                maxWidth: 2000,
                px: isNonMobileScreens ? "64px" : isMobileScreens ? "16px" : "32px",

                mx: "auto",
                pb: "5rem",
                // height: 'calc(100vh - 5rem)',
            }}>

                <HeroSection />
            </Box>
            <Box sx={{
                width: "100%",
                background: theme.palette.background.dark,
                py: isNonMobileScreens ? "5rem" : "3rem",
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

        </Box>
    )
}

export default HomePage