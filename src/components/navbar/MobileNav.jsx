import { Typography, useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import useTheme from "@mui/material/styles/useTheme";
import { useContext } from "react";
import { LuDownload } from "react-icons/lu";
import { MainContext } from "../../context/MainContext";
import BtnPrimary from "../BtnPrimary";
import FlexBetween from "../FlexBetween";
import CustomDrawer from "./CustomDrawer";

import { LiaToggleOffSolid, LiaToggleOnSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";

const MobileNav = ({ open, setOpen, handleOpen }) => {
    const theme = useTheme();
    const isMobileScreens = useMediaQuery("(max-width: 600px)");
    const { page, setPage, mode, setMode, scrollToContact } =
        useContext(MainContext);
    const navigate = useNavigate();

    return (
        <CustomDrawer open={open} setOpen={setOpen}>
            <Box
                sx={{
                    height: "100%",
                    padding: isMobileScreens ? "24px" : "32px",
                    background:
                        mode == "dark"
                            ? theme.palette.background.dark
                            : theme.palette.background.default,
                    minWidth: "300px",
                    overflowY: "auto",
                }}
            >
                <Box
                    sx={{
                        // maxHeight: "1600px",
                        height: "100%",
                        // maxHeight: "1000px",
                        minHeight: "500px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                    }}
                >
                    <Box
                        sx={{
                            flexGrow: 1,
                        }}
                    >
                        <Box
                            className="mobile-nav-menu"
                            sx={{
                                marginTop: "4rem",
                                display: "flex",
                                flexDirection: "column",
                                gap: "0.5rem",
                            }}
                        >
                            <Typography
                                component="a"
                                href={window.location.origin + "/"}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setPage("home-page");
                                    navigate("/");
                                    setOpen(false);
                                    handleOpen();
                                    document
                                        .querySelector(".app-container")
                                        .scrollTo(0, 0);
                                }}
                                variant="menu"
                                sx={{
                                    cursor: "pointer",
                                    "&:hover": {
                                        background:
                                            mode == "dark"
                                                ? "rgba(0, 0, 0, 0.5)"
                                                : "rgba(0,0,0,0.2)",
                                    },
                                    background:
                                        page === "home-page"
                                            ? mode == "dark"
                                                ? "rgba(0, 0, 0, 0.5)"
                                                : "rgba(0,0,0,0.2)"
                                            : "transparent",

                                    borderRadius: "50px",
                                    padding: "0.8rem 1.2rem",
                                    textDecoration: "none",
                                    color: theme.palette.text.primary,
                                }}
                            >
                                Home Page
                            </Typography>
                            <Typography
                                component="a"
                                href={window.location.origin + "/about"}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setPage("about-me");
                                    navigate("/about");
                                    setOpen(false);
                                    handleOpen();
                                    document
                                        .querySelector(".app-container")
                                        .scrollTo(0, 0);
                                }}
                                variant="menu"
                                sx={{
                                    cursor: "pointer",
                                    "&:hover": {
                                        background:
                                            mode == "dark"
                                                ? "rgba(0, 0, 0, 0.5)"
                                                : "rgba(0,0,0,0.2)",
                                    },
                                    background:
                                        page === "about-me"
                                            ? mode == "dark"
                                                ? "rgba(0, 0, 0, 0.5)"
                                                : "rgba(0,0,0,0.2)"
                                            : "transparent",
                                    borderRadius: "50px",
                                    padding: "0.8rem 1.2rem",

                                    textDecoration: "none",
                                    color: theme.palette.text.primary,
                                }}
                            >
                                About Me
                            </Typography>
                            <Typography
                                component="a"
                                href={window.location.origin + "/projects"}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setPage("projects");
                                    navigate("/projects");
                                    setOpen(false);
                                    handleOpen();
                                    document
                                        .querySelector(".app-container")
                                        .scrollTo(0, 0);
                                }}
                                variant="menu"
                                sx={{
                                    cursor: "pointer",
                                    "&:hover": {
                                        background:
                                            mode == "dark"
                                                ? "rgba(0, 0, 0, 0.5)"
                                                : "rgba(0,0,0,0.2)",
                                    },
                                    background:
                                        page === "projects"
                                            ? mode == "dark"
                                                ? "rgba(0, 0, 0, 0.5)"
                                                : "rgba(0,0,0,0.2)"
                                            : "transparent",
                                    borderRadius: "50px",
                                    padding: "0.8rem 1.2rem",
                                    textDecoration: "none",
                                    color: theme.palette.text.primary,
                                }}
                            >
                                Projects
                            </Typography>

                            <Typography
                                variant="menu"
                                component="a"
                                href=""
                                onClick={(e) => {
                                    e.preventDefault();
                                    setOpen(false);
                                    handleOpen();
                                    scrollToContact();
                                }}
                                sx={{
                                    // overwriting the default anchor tag styles
                                    textDecoration: "none",
                                    color: theme.palette.text.primary,

                                    cursor: "pointer",
                                    "&:hover": {
                                        background: "rgba(0,0,0,0.2)",
                                    },
                                    background:
                                        page === "contact-me"
                                            ? "rgba(0,0,0,0.2)"
                                            : "transparent",
                                    borderRadius: "50px",
                                    padding: "0.8rem 1.2rem",
                                }}
                            >
                                Contact Me
                            </Typography>
                        </Box>
                        {/* <Divider
                            sx={{
                                width: "100%",
                                color: theme.palette.text.primary,
                                backgroundColor: theme.palette.text.primary,
                                mt: "3rem",
                                opacity: 0.4,
                            }}
                        /> */}

                        <BtnPrimary
                            component="a"
                            href={window.location.origin + "/files/Resume - Mahbubul Haque.pdf"}
                            target="_blank"
                            sx={{
                                width: "100%",
                                mt: "3rem",
                                display: "flex",
                                justifyContent: "center",
                                gap: "0.5rem",
                                "&&": {
                                    // background: theme.palette.common.black,
                                    // boxShadow: "none",
                                    // color: theme.palette.text.secondary,
                                    // "&:hover": {
                                    //     background: "#1f1f1f",
                                    // }
                                },
                                textDecoration: "none",
                                color: theme.palette.text.secondary,
                            }}
                            onClick={(e) => {
                                e.preventDefault();
                                window.open(
                                    "files/Resume - Mahbubul Haque.pdf",
                                    "_blank"
                                );
                            }}
                        >
                            <LuDownload />
                            <Typography variant="button">Resume</Typography>
                        </BtnPrimary>
                    </Box>
                    <FlexBetween
                        sx={{
                            paddingBottom: "0rem",
                            cursor: "pointer",
                        }}
                        onClick={() => {
                            // e.preventDefault();
                            // e.target.style.outline = "none";
                            setMode(mode === "light" ? "dark" : "light");
                        }}
                        // onFocus={(e) => {
                        //     e.target.style.outline = "none";
                        //     e.preventDefault();
                        // }}
                    >
                        <Typography variant="menu">Dark Mode</Typography>

                        <Box
                            sx={{
                                position: "relative",
                                padding: "1rem",
                            }}
                        >
                            {mode === "light" ? (
                                <LiaToggleOffSolid
                                    style={{
                                        color: theme.palette.text.secondary,
                                    }}
                                    fontSize="3rem"
                                />
                            ) : (
                                <LiaToggleOnSolid
                                    style={{
                                        color: theme.palette.secondary.main,
                                        position: "relative",
                                    }}
                                    fontSize="3rem"
                                ></LiaToggleOnSolid>
                            )}
                            <Typography
                                variant="menu"
                                sx={{
                                    position: "absolute",
                                    top: `calc(50% - 0.14rem)`, // `calc(50% - 0.5rem)
                                    left: `calc(50% + ${
                                        mode == "light" ? "-0.68rem" : "0.68rem"
                                    })`, // `calc(50% - 0.5rem)
                                    transform: "translate(-50%, -50%)",
                                    fontSize: "0.5rem",
                                }}
                            >
                                {mode === "light" ? "OFF" : "ON"}
                            </Typography>
                        </Box>
                    </FlexBetween>
                </Box>
            </Box>
        </CustomDrawer>
        // <Drawer
        //     anchor='right'
        //     open={open}
        //     onClose={() => setOpen(false)}
        //     sx={{
        //         "& .MuiDrawer-paper": {
        //             background: theme.palette.background.default,
        //             width: '300px',
        //         }
        //     }}
        // >
        //     <Box sx={{
        //         padding: '2rem',
        //     }}>
        //         Mahbubul Haque
        //     </Box>
        // </Drawer>
    );
};

export default MobileNav;
