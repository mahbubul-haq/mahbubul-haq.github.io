import Box from "@mui/material/Box";
import CustomDrawer from "./CustomDrawer";
import useTheme from "@mui/material/styles/useTheme";
import { Typography, useMediaQuery } from "@mui/material";
import FlexBetween from "../FlexBetween";
import { useContext } from "react";
import { MainContext } from "../../context/MainContext";
import BtnPrimary from "../BtnPrimary";
import { LuDownload } from "react-icons/lu";

import { LiaToggleOnSolid } from "react-icons/lia";
import { LiaToggleOffSolid } from "react-icons/lia";


const MobileNav = ({ open, setOpen }) => {
    const theme = useTheme();
    const isMobileScreens = useMediaQuery("(max-width: 600px)");
    const { page, setPage, mode, setMode } = useContext(MainContext);
    // const isNonMobileScreens = useMediaQuery('(min-width: 1000px)');

    return (
        <CustomDrawer open={open} setOpen={setOpen}>
            <Box sx={{
                height: "100%",
                padding: isMobileScreens ? "24px" : "32px",
                background: theme.palette.background.default,
                minWidth: "300px",
            }}>
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
                    <Box sx={{
                        flexGrow: 1,
                    }}>
                    

                        <Box
                            sx={{
                                marginTop: "3rem",
                                display: "flex",
                                flexDirection: "column",
                                gap: "0.5rem",
                            }}
                        >
                            <Typography
                                onClick={() => setPage("home-page")}
                                variant="menu"
                                sx={{
                                    cursor: "pointer",
                                    "&:hover": {
                                        background: "rgba(0,0,0,0.2)",
                                    },
                                    background:
                                        page === "home-page"
                                            ? "rgba(0,0,0,0.2)"
                                            : "transparent",

                                    borderRadius: "50px",
                                    padding: "0.8rem 1.2rem",
                                }}
                            >
                                Home Page
                            </Typography>
                            <Typography
                                onClick={() => setPage("about-me")}
                                variant="menu"
                                sx={{
                                    cursor: "pointer",
                                    "&:hover": {
                                        background: "rgba(0,0,0,0.2)",
                                    },
                                    background:
                                        page === "about-me"
                                            ? "rgba(0,0,0,0.2)"
                                            : "transparent",
                                    borderRadius: "50px",
                                    padding: "0.8rem 1.2rem",
                                }}
                            >
                                About Me
                            </Typography>
                            <Typography
                                onClick={() => setPage("projects")}
                                variant="menu"
                                sx={{
                                    cursor: "pointer",
                                    "&:hover": {
                                        background: "rgba(0,0,0,0.2)",
                                    },
                                    background:
                                        page === "projects"
                                            ? "rgba(0,0,0,0.2)"
                                            : "transparent",
                                    borderRadius: "50px",
                                    padding: "0.8rem 1.2rem",
                                }}
                            >
                                Projects
                            </Typography>

                            <Typography
                                component="a"
                                href="#contact-me"
                                variant="menu"
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
                                }
                            }}
                        >
                            <LuDownload/>
                            <Typography variant="button">Resume</Typography>
                        </BtnPrimary>
                    </Box>
                    <FlexBetween
                        sx={{
                            paddingBottom: "0rem",
                            
                        }}
                    >
                        <Typography variant="menu">Dark Mode</Typography>

                        <Box
                            sx={{
                                cursor: "pointer",
                                position: "relative",
                                padding: "1rem",
                            }}
                            onClick={() => setMode(mode === "light" ? "dark" : "light")}
                        >
                            {mode === "light" ? (
                                <LiaToggleOffSolid style={{
                                    color: theme.palette.text.secondary,
                                }} fontSize="3rem" />
                            ) : (
                                
                                <LiaToggleOnSolid style={{
                                    color: theme.palette.secondary.main,
                                    position: "relative",
                                }} fontSize="3rem">
                                    
                                </LiaToggleOnSolid>
                            )}
                        <Typography
                            variant="menu"
                            sx={{
                                position: "absolute",
                                top: `calc(50% - 0.14rem)`, // `calc(50% - 0.5rem)
                                left: `calc(50% + ${mode == 'light' ? '-0.68rem' : '0.68rem'})`, // `calc(50% - 0.5rem)
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
