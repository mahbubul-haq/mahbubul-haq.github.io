import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import useTheme from "@mui/material/styles/useTheme";
import Education from "./Education";
import { MainContext } from "../../context/MainContext";
import { useContext, useEffect } from "react";
import Experience from "./Experience";
import Interests from "./Interests";
import Contact from "../../components/Contact";
import { Divider } from "@mui/material";


const AboutMe = () => {
    const isMobileScreens = useMediaQuery("(max-width: 600px)");
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
    const { setPage, mode } = useContext(MainContext);
    const maxWidth700 = useMediaQuery("(max-width: 700px)");
    const theme = useTheme();

    useEffect(() => {
        setPage("about-me");
        

        let observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = "translateY(0)";
                }
            });
        });

        let aboutElements = document.querySelectorAll(".about-element");
        aboutElements.forEach((element) => {
            observer.observe(element);
        });

        return () => {
            aboutElements.forEach((element) => {
                observer.unobserve(element);
            });
        };
    }, []);

    return (
        <Box
            sx={{
                width: "100%",
            }}
        >
            <Box
                sx={{
                    maxWidth: 2000,
                    mx: "auto",
                    mt: isNonMobileScreens ? "5rem" : "2rem",
                    px: isNonMobileScreens
                        ? "64px"
                        : isMobileScreens
                        ? "16px"
                        : "32px",
                }}
            >
                {" "}
                <Box
                    sx={{
                        width: "100%",
                    }}
                >
                    {/* <Typography
                        sx={{
                            color: theme.palette.text.secondary,
                            fontWeight: 500,
                            fontSize: isNonMobileScreens ? "1.4rem" : "1.2rem",
                            border: `1px solid ${theme.palette.grey[450]}`,
                            padding: "0.5rem 1rem",
                            borderRadius: "0.5rem",
                            width: "fit-content",
                            transform: "translateY(2rem)",
                            opacity: 0,
                            transition: "all 0.3s ease-out",
                        }}
                        className="about-element"
                    >
                        Web Developer
                    </Typography> */}

                    <Typography
                        variant="body1"
                        sx={{
                            color: theme.palette.text.secondary,
                            fontSize: "1.1rem",
                            fontWeight: 400,
                            mt: "3rem",
                        }}
                    >
                        <span
                            style={{
                                color: theme.palette.grey[200],
                                fontSize: isMobileScreens ? "1.7rem" : "2rem",
                                fontWeight: 700,
                                display: "block",
                                marginBottom: "0rem",
                                transform: "translateY(2rem)",
                                opacity: 0,
                                transition: "all 0.3s ease-out 0.2s",
                            }}
                            className="about-element"
                        >
                            Hi, I&apos;m Mahbub{" "}
                        </span>
                        <span
                            style={{
                                color: theme.palette.text.secondary,
                                fontSize: isMobileScreens ? "1.2rem" : "1.7rem",
                                fontWeight: 500,
                                display: "block",
                                marginBottom: "1.5rem",
                                lineHeight: "1.3",
                                transform: "translateY(2rem)",
                                opacity: 0,
                                transition: "all 0.3s ease-out 0.3s",
                            }}
                            className="about-element"
                        >
                            A web developer crafting elegant, readable, and performant code
                        </span>{" "}
                    </Typography>

                    <Box
                        sx={{
                            display: "flex",
                            gap: isMobileScreens ? "1rem" : "2rem",
                            pl: isMobileScreens ? "0" : "2rem",
                            mt: "2rem",
                            transform: "translateY(2rem)",
                            opacity: 0,
                            transition: "all 0.3s ease-out 0.4s",
                        }}
                        className="about-element"
                    >
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <Divider
                                orientation="vertical"
                                sx={{
                                    height: isMobileScreens ? "95%" : "30%",
                                    // minHeight: "30%",
                                    backgroundColor: isMobileScreens
                                        ? theme.palette.secondary.main70
                                        : theme.palette.secondary.main,
                                    // color: theme.palette.grey[400],
                                    width: isMobileScreens ? "2px" : "4px",
                                }}
                            />
                        </Box>
                        <Typography
                            sx={{
                                color: theme.palette.text.secondary,
                                fontSize: "1.1rem",
                            }}
                        >
                            I have a natural inclination to{" "}
                            <span className="about-highlight-text">
                                analyze and optimize
                            </span>{" "}
                            the world around me. Whether it&apos;s a piece of
                            code or a real-life problem, I find myself
                            constantly{" "}
                            <span className="about-highlight-text">
                                identifying areas for improvement
                            </span>{" "}
                            and{" "}
                            <span className="about-highlight-text">
                                developing solutions
                            </span>
                            . This drive to optimize extends beyond just tasks;
                            I&apos;m a firm believer in lifelong learning. This
                            learning process doesn&apos;t just enhance my
                            strengths, it allows me to{" "}
                            <span className="about-highlight-text">
                                identify and address my weaknesses
                            </span>
                            . Through this process, I&apos;m constantly{" "}
                            <span className="about-highlight-text">
                                evolving into a better version of myself, both
                                personally and professionally.
                            </span>
                        </Typography>
                    </Box>
                </Box>
                <Typography
                    variant="h1"
                    sx={{
                        color: theme.palette.grey[200],
                        fontSize: isMobileScreens ? "2rem" : "2.5rem",
                        fontWeight: 400,
                        my: isMobileScreens ? "1.5rem" : "3rem",
                        mt: isMobileScreens ? "3rem" : "5rem",
                        transform: "translateY(4rem)",
                        opacity: 0,
                        transition: isNonMobileScreens
                            ? "all 0.3s ease-out 0s"
                            : "all 0.5s ease-out",
                    }}
                    className="about-element"
                >
                    Education
                </Typography>
                <Box
                    sx={{
                        border: `1px solid ${mode== "dark" ? theme.palette.grey[600] : theme.palette.grey[450]}`,
                        borderRadius: "0.5rem",
                        padding: isMobileScreens ? "0.5rem" : "1rem",
                        transform: "translateY(4rem)",
                        opacity: 0,
                        transition: "all 0.5s ease-out 0.2s",
                    }}
                    className="about-element"
                >
                    <Education />
                </Box>
                <Typography
                    variant="h1"
                    sx={{
                        color: theme.palette.grey[200],
                        fontSize: isMobileScreens ? "2rem" : "2.5rem",
                        fontWeight: 400,
                        my: isMobileScreens ? "1.5rem" : "3rem",
                        mt: isMobileScreens ? "3rem" : "5rem",
                        transform: "translateY(4rem)",
                        opacity: 0,
                        transition: "all 0.5s ease-out",
                    }}
                    className="about-element"
                >
                    Experience
                </Typography>
                <Box
                    sx={{
                        width: "100%",
                        transform: "translateY(4rem)",
                        opacity: 0,
                        transition: "all 0.5s ease-out 0.2s",
                    }}
                    className="about-element"
                >
                    <Experience />
                </Box>
                <Typography
                    variant="h1"
                    sx={{
                        color: theme.palette.grey[200],
                        fontSize: isMobileScreens ? "2rem" : "2.5rem",
                        fontWeight: 400,
                        my: isMobileScreens ? "1.5rem" : "3rem",
                        mt: isMobileScreens ? "3rem" : "5rem",
                        transform: "translateY(4rem)",
                        opacity: 0,
                        transition: "all 0.5s ease-out",
                    }}
                    className="about-element"
                >
                    Interests
                </Typography>
                <Box
                    sx={{
                        width: "100%",
                        transform: "translateY(4rem)",
                        opacity: 0,
                        transition: "all 0.5s ease-out 0.2s",
                    }}
                    className="about-element"
                >
                    <Interests />
                </Box>
            </Box>

            <Box
                id="contact"
                sx={{
                    width: "100%",
                    background: theme.palette.background.dark,
                    py: isNonMobileScreens ? "3rem" : "3rem",
                    mt: isNonMobileScreens ? "10rem" : "5rem",
                    // pb: isNonMobileScreens ? "10rem" : "5rem",
                    borderTopLeftRadius: maxWidth700 ? "2rem" : "4rem",
                    borderTopRightRadius: maxWidth700 ? "2rem" : "4rem",
                }}
            >
                <Box
                    sx={{
                        mx: "auto",
                        maxWidth: 2000,
                        px: isNonMobileScreens
                            ? "64px"
                            : isMobileScreens
                            ? "16px"
                            : "32px",
                    }}
                >
                    <Contact />
                </Box>
            </Box>
        </Box>
    );
};

export default AboutMe;
