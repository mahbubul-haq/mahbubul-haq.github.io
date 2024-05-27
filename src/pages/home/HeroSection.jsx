import { Box, Typography } from "@mui/material";
import { LuDownload } from "react-icons/lu";
import BtnPrimary from "../../components/BtnPrimary";
import FlexBetween from "../../components/FlexBetween";

import { useMediaQuery } from "@mui/material";
import useTheme from "@mui/material/styles/useTheme";
import { useEffect } from "react";
import { MainContext } from "../../context/MainContext";
import { useContext } from "react";

const HeroSection = () => {
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
    const { mode, scrollToContact } = useContext(MainContext);

    const theme = useTheme();

    useEffect(() => {

        let heroImageMobile = document.querySelector(".hero-image-mobile");
        let heroIntroName = document.querySelector(".hero-intro-name");
        let heroIntroDescription = document.querySelector(
            ".hero-intro-description"
        );
        let heroButtons = document.querySelector(".hero-buttons");

        if (heroImageMobile) heroImageMobile.style.transform = "scale(1)";
        heroIntroName.style.opacity = 1;
        heroIntroName.style.transform = "translateY(0)";

        heroIntroDescription.style.opacity = 1;
        heroIntroDescription.style.transform = "translateY(0)";

        heroButtons.style.opacity = 1;
        heroButtons.style.transform = "translateY(0)";

        let event = window.addEventListener("resize", () => {

            let heroImageMobile = document.querySelector(".hero-image-mobile");
            if (heroImageMobile) heroImageMobile.style.transform = "scale(1)";

        });

        return () => {
            window.removeEventListener("resize", event);

        };
    }, []);


    useEffect(() => {
        let heroImageMobile = document.querySelector(".hero-image-mobile");
        let heroImage = document.querySelector(".hero-image");

        if (isNonMobileScreens && heroImage) {
            heroImage.style.transform = "translateX(0px)";
            heroImage.style.opacity = 1;
        }

        if (!isNonMobileScreens && heroImageMobile) {
            heroImageMobile.style.transform = "scale(1)";
        }
    }, [isNonMobileScreens]);

    
    return (
        <Box
            component="section"
            sx={{
                display: "flex",
                flexDirection: isNonMobileScreens ? "row" : "column",
                gap: isNonMobileScreens ? "0" : "1rem",
                justifyContent: "space-between",
                width: "100%",
                mx: "auto",
            }}
        >
            {!isNonMobileScreens && (
                <img
                    loading="lazy"
                    className="hero-image-mobile"
                    src="https://source.unsplash.com/random/800x600"
                    alt="random"
                    style={{
                        width: "8rem",
                        height: "8rem",
                        objectFit: "cover",
                        borderRadius: "50%",
                        boxShadow: "0px 15px 10px rgba(0,0,0,0.10)",
                        marginTop: "1rem",
                        transform: "scale(0)",
                        transition: "transform 0.5s",
                    }}
                />
            )}
            <Box
                sx={{
                    width: isNonMobileScreens ? "50%" : "100%",
                    alignSelf: "center",
                    pb: "5rem",
                }}
            >
                <Typography
                    className="hero-intro-name"
                    variant="h3"
                    sx={{
                        fontSize: isNonMobileScreens ? "2.5rem" : "2rem",
                        fontWeight: 700,
                        mt: isNonMobileScreens ? "4rem" : "1rem",
                        transform: "translateY(2rem)",
                        opacity: 0,
                        transition: "transform 0.5s, opacity 0.5s",
                    }}
                >
                    Hi, I&apos;m Mahbub &mdash; Web Developer
                </Typography>

                <Typography
                    className="hero-intro-description"
                    variant="body1"
                    sx={{
                        fontSize: isNonMobileScreens ? "1.5rem" : "1.3rem",
                        color: "text.secondary",
                        mt: isNonMobileScreens ? "1.5rem" : "1.5rem",
                        fontWeight: 500,
                        opacity: 0,
                        transform: "translateY(2rem)",
                        transition: "transform 0.5s, opacity 0.5s",
                        transitionDelay: "0.2s",
                    }}
                >
                    I am a passionate web developer with a strong problem-solving skill. I want to bring my ideas to life through
                    elegant and user-friendly websites.
                </Typography>
                <FlexBetween
                    className="hero-buttons"
                    sx={{
                        "&&": {
                            justifyContent: isNonMobileScreens
                                ? "flex-start"
                                : "center",
                            gap: isNonMobileScreens ? "4rem" : "2rem",
                            mt: isNonMobileScreens ? "4rem" : "3rem",
                            flexWrap: "wrap",
                            flexDirection: isNonMobileScreens
                                ? "row"
                                : "column",
                            opacity: 0,
                            transform: "translateY(2rem)",
                            transition: "transform 0.5s, opacity 0.5s",
                            transitionDelay: "0.4s",
                        },
                    }}
                >
                    <BtnPrimary
                        sx={{
                            "&&": {
                                background: mode == "dark" ? "#ababab" : theme.palette.common.black,
                                width: isNonMobileScreens ? "auto" : "100%",
                                boxShadow: "none",
                                borderRadius: "0.5rem",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",

                                gap: "0.5rem",
                                color: mode == "dark" ? theme.palette.grey[1000] : "text.secondary",
                                padding: "1.7rem 1.5rem",
                                "&:hover": {

                                    background: mode === "dark" ? "#8f8f8f" : "#2f2f2f",
                                },
                            },
                        }}

                        onClick={() => {
                            if (isNonMobileScreens) {
                                window.open("/files/Resume - Mahbubul Haque.pdf", "_blank");
                            }
                            else {
                                scrollToContact();
                            }
                        }}
                    >
                        {isNonMobileScreens && (
                            <LuDownload
                                style={{
                                    fontSize: "1.3rem",
                                }}
                            />
                        )}
                        <Typography
                            variant="button"
                            sx={{
                                fontSize: "1rem",
                            }}
                        >
                            {isNonMobileScreens ? "Resume" : "Contact Me"}
                        </Typography>
                    </BtnPrimary>

                    <FlexBetween
                        sx={{
                            gap: "1rem",
                        }}
                    >
                        <Box className="pulse-indicator">
                            <Box className="pulse-indicator-inner"></Box>
                        </Box>
                        Available for work
                    </FlexBetween>
                </FlexBetween>
            </Box>
            {isNonMobileScreens && (
                <Box
                    sx={{
                        width: "50%",
                        position: "relative",
                        mt: "2rem",

                        //HEIWHT    = WIDTH

                        "&::after": {
                            content: "''",
                            display: "block",
                            paddingBottom: "100%",
                        },

                    }}
                >
                   
                </Box>
            )}
        </Box>
    );
};

export default HeroSection;
