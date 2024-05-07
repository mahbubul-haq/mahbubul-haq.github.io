import Box from "@mui/material/Box";
import CustomDrawer from "./CustomDrawer";
import useTheme from "@mui/material/styles/useTheme";
import Drawer from "@mui/material/Drawer";
import { Divider, IconButton, Typography, useMediaQuery } from "@mui/material";
import FlexBetween from "../FlexBetween";
import { useContext } from "react";
import { MainContext } from "../../context/MainContext";
import BtnPrimary from "../BtnPrimary";
import { BsMoonStars } from "react-icons/bs";
import { LiaToggleOnSolid } from "react-icons/lia";
import { LiaToggleOffSolid } from "react-icons/lia";
import { Calculate } from "@mui/icons-material";

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
                        maxHeight: "1200px",
                        minHeight: "500px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        
                    }}
                >
                    <Box>
                        {/* <Box sx={{
            display: 'flex',
            flexDirection: isMobileScreens ? 'column' : 'row',
            alignItems: isMobileScreens ? 'center' : 'flex-start',
            gap: isMobileScreens ? '0.5rem' : '1rem',
            paddingRight: isMobileScreens ? '0' : '5rem',
            paddingTop: isMobileScreens ? '1rem' : '0',
        }
        }>
            <img src="https://source.unsplash.com/random/100x100" alt="profile" style={{ borderRadius: '50%', width: '50px', height: '50px' }} loading="lazy"/>
            <FlexBetween sx={{
                "&&": {
                    flexDirection: 'column',
                    alignItems: isMobileScreens ? 'center' : 'flex-start',

                }
            }}>
                <Typography sx={{
                    fontSize: '1.2rem',
                    
                }}>Mahbubul Haque</Typography>
                <Typography sx={{
                    fontSize: '0.8rem',
                    letterSpacing: '0.3px',
                    color: theme.palette.text.secondary
                
                }}>Web Developer</Typography>

            </FlexBetween>
        </Box> */}

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
                        </Box>
                        <Divider
                            sx={{
                                width: "100%",
                                color: theme.palette.text.primary,
                                backgroundColor: theme.palette.text.primary,
                                mt: "3rem",
                                opacity: 0.4,
                            }}
                        />

                        <BtnPrimary
                            sx={{
                                width: "100%",
                                mt: "3rem",
                            }}
                        >
                            <Typography variant="button">Contact Me</Typography>
                        </BtnPrimary>
                    </Box>
                    <FlexBetween
                        sx={{
                            paddingBottom: "1rem",
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
