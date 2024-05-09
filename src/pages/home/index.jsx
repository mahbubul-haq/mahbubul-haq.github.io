import Box from "@mui/material/Box";
import { Typography, useMediaQuery } from "@mui/material";
import BtnPrimary from "../../components/BtnPrimary";
import useTheme from "@mui/material/styles/useTheme";
import FlexBetween from "../../components/FlexBetween";

import { LuDownload } from "react-icons/lu";
import "./Home.css";
import HeroImage from "./HeroImage";


const HomePage = () => {

    const isMobileScreens = useMediaQuery("(max-width: 600px)");
    const isNonMobileScreens = useMediaQuery('(min-width: 1000px)');

    const theme = useTheme();

    return (
        <Box sx={{
            width: "100%",
            maxWidth: 2000,
            px: isNonMobileScreens ? "64px" : isMobileScreens ? "16px" : "32px",
            pb: "5rem",
            mx: "auto",
        }}>
            <Box component="section"
                sx={{
                    
                    display: "flex",
                    flexDirection: isNonMobileScreens ? "row" : "column",
                    gap: "1rem",
                    justifyContent: "space-between",
                    width: "100%",
                    // minHeight: "500px",
                
                    mx: "auto",
                }}>

                {!isNonMobileScreens && (
                    <img src="https://source.unsplash.com/random/800x600" alt="random" style={{
                        width: "8rem",
                        height: "8rem",
                        objectFit: "cover",
                        borderRadius: "50%",
                        boxShadow: "0px 15px 10px rgba(0,0,0,0.10)",
                        marginTop: "1rem",
                    }} />
                )}
                <Box sx={{
                    width: isNonMobileScreens ? "50%" : "100%",
                    alignSelf: "center",
                }}>
                    <Typography variant="h3" sx={{
                        fontSize: isNonMobileScreens ? "2.5rem" : "2rem",
                        fontWeight: 700,
                        mt: isNonMobileScreens ? "4rem" : "1rem",
                    }}>Hi, I&apos;m Mahbub - Web Developer
                    </Typography>

                    <Typography variant="body1" sx={{
                        fontSize: isNonMobileScreens ? "1.5rem" : "1.3rem",
                        color: "text.secondary",
                        mt: isNonMobileScreens ? "1.5rem" : "1.5rem",
                        fontWeight: 500,
                    }}>
                        I am a web developer with a passion for creating elegant and user-friendly websites.
                        I believe through web development I can bring my ideas to life and make the web a better place.
                    </Typography>
                    <FlexBetween sx={{
                        "&&": {
                            justifyContent: isNonMobileScreens ? "flex-start" : "center",
                            gap: isNonMobileScreens ? "4rem" : "2rem",
                            mt: isNonMobileScreens ? "4rem" : "3rem",
                            flexWrap: "wrap",
                            flexDirection: isNonMobileScreens ? "row" : "column",


                        }
                    }}>


                        <BtnPrimary sx={{
                            "&&": {
                                background: theme.palette.common.black,
                                width: isNonMobileScreens ? "auto" : "100%",
                                boxShadow: 'none',
                                borderRadius: "0.5rem",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",

                                gap: "0.5rem",
                                color: "text.secondary",
                                padding: "1.7rem 1.5rem",
                                "&:hover": {
                                    // boxShadow: '0 4px 4px rgba(0,0,0,0.25)',

                                    background: "#1f1f1f",
                                }
                            },
                        }}
                        >
                            {isNonMobileScreens && <LuDownload style={{
                                fontSize: "1.3rem",

                            }} />}
                            <Typography variant="button" sx={{
                                fontSize: "1rem",

                            }}>
                                {isNonMobileScreens ? "Resume" : "Contact Me"}
                            </Typography>
                        </BtnPrimary>

                        <FlexBetween sx={{
                            gap: "1rem",
                        }}>

                            <Box className="pulse-indicator">

                            </Box>

                            Available for work
                        </FlexBetween>

                    </FlexBetween>



                </Box>
                {isNonMobileScreens && (
                    <Box sx={{
                        width: "45%",
                        position: "relative",
                        mt: "2rem",
                      
                        //HEIWHT    = WIDTH
                       
                        "&::after": {
                            content: "''",
                            display: "block",
                            paddingBottom: "100%",
                        },

                        //style for anyting inside the box
                        "& > *": {
                            position: "absolute",
                            top: 0,
                            right: 0,
                            width: "90%",
                            height: "90%",
                        }

                    }}>
                        <HeroImage />
                        

                    </Box>
                )}
            </Box>
            
        </Box>
    )
}

export default HomePage