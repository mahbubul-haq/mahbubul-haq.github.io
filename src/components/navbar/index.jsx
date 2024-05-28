import { AppBar, IconButton } from "@mui/material"
import { Toolbar } from "@mui/material"
import { Typography } from "@mui/material"
import { Box } from "@mui/material"
import FlexBetween from "../FlexBetween"
import BtnPrimary from "../BtnPrimary"
import { BsMoonStars } from "react-icons/bs"
import { HiMiniSun } from "react-icons/hi2";
import NavTab from "./NavTab"
import { useTheme } from "@mui/material/styles"
import { useEffect } from "react"
import { useContext, useState } from "react"
import { MainContext } from "../../context/MainContext"
import { useMediaQuery } from "@mui/material"
import Hamburger from "./Hamburger"
import MobileNav from "./MobileNav"
import { useNavigate } from "react-router-dom"


const Navbar = () => {

    const { page, setPage, mode, setMode, scrollToContact } = useContext(MainContext);
    const isNonMobileScreens = useMediaQuery('(min-width:1000px)');
    const isMobileScreens = useMediaQuery('(max-width: 600px)');
    const [open, setOpen] = useState(false);

    const theme = useTheme();
    const navigate = useNavigate();

    useEffect(() => {
        let el = document.querySelector('.app-container');
        let el1 = document.querySelector('.myappbar');
        let el2 = document.querySelector('.nav-background');
        let event = el.addEventListener('scroll', () => {
            if (el.scrollTop > 10) {
                el1.style.paddingTop = '0';
                el2.style.background = theme.palette.background.nav;
                el2.style.top = '0';
            }
            else {
                el1.style.paddingTop = isNonMobileScreens ? '1rem' : '0';
                el2.style.background = 'transparent';
                el2.style.top = isNonMobileScreens ? '-5rem' : '-10vh';

            }
        });

        let event1 = window.addEventListener('resize', () => {
            // check if min-left is 1000px
            let ham = document.querySelector('.hamburger');
            if (window.innerWidth >= 1000) {
                setOpen(false);
                ham?.classList.remove('is-active');
            }

        });

        return () => {
            el.removeEventListener('scroll', event);
            window.removeEventListener('resize', event1);
        }
    }, [mode]);

    useEffect(() => {
        let el = document.querySelector('.nav-background');
        el.style.background = theme.palette.background.nav;
    }, [mode]);

    useEffect(() => {
        let el = document.querySelector('.hamburger');

        if (open) {
            el?.classList.add('is-active');
        }
        else {
            el?.classList.remove('is-active');
        }
    }, [open]);

    const handleOpen = () => {
        let el = document.querySelector('.hamburger');

        if (open) {
            el.classList.remove('is-active');
        }
        else {
            el.classList.add('is-active');
        }

        setOpen(!open);
    }


    return (
        <AppBar position='sticky' className="myappbar" sx={{
            boxShadow: 'none',
            //height: isNonMobileScreens ? '5rem' : '10vh',
            height: isNonMobileScreens ? '5rem' : '4rem',
            // minHeight: isNonMobileScreens ? '5rem' : '4rem',


            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            transition: isNonMobileScreens ? 'all 0.3s ease-in' : 'all 0s ease-in',
            background: 'transparent',
            paddingTop: isNonMobileScreens ? '1rem' : '0',

        }}>
            <Box className="nav-background" sx={{
                transition: 'all 0.3s',

                position: 'absolute',
                height: '100%',
                width: '100%',
                top: '-5rem',
                backdropFilter: 'blur(30px)',
            }}></Box>
            <Toolbar disableGutters sx={{
                flexGrow: 1,
                display: 'flex',
                justifyContent: 'center',


            }} >
                <FlexBetween sx={{
                    flexGrow: 1,

                    maxWidth: 2000,
                    px: isNonMobileScreens ? '64px' : isMobileScreens ? '24px' : '32px',
                    paddingRight: isNonMobileScreens ? '64px' : 0,
                    color: theme.palette.text.primary,

                }}>

                    <Typography variant='h3' sx={{
                        fontWeight: 400,
                        fontSize: isNonMobileScreens ? '1.5rem' : '1.2rem',
                        cursor: 'pointer',
                    }}
                        onClick={() => {

                            document.querySelector(".app-container").scrollTo(0, 0);



                            setPage('home-page')
                            navigate('/');

                        }
                        }
                    >
                        {isNonMobileScreens ? 'Mahbubul Haque' : <img
                            src="images/M.svg"
                            alt="MH"
                            style={{
                                height: '2.5rem',
                                width: '2.5rem',
                                marginRight: '0.5rem',
                            }}
                        />}
                    </Typography>
                    {isNonMobileScreens ? (

                        <FlexBetween sx={{
                            gap: '3rem',
                        }}>
                            <NavTab
                                onClick={() => {

                                    document.querySelector(".app-container").scrollTo(0, 0);


                                    setPage('home-page')
                                    navigate('/');
                                }
                                }
                                sx={{
                                    "&&": {
                                        "&::before": {
                                            width: page === 'home-page' ? '75%' : '0%',
                                        },
                                    },
                                }}>


                                <Typography variant='menu'>Home Page</Typography>
                            </NavTab>
                            <NavTab
                                sx={{
                                    "&&": {
                                        "&::before": {
                                            width: page === 'about-me' ? '75%' : '0%',
                                        },
                                    },
                                }}
                                onClick={() => {

                                    document.querySelector(".app-container").scrollTo(0, 0);


                                    setPage('about-me');
                                    navigate('/about');
                                }}
                            >


                                <Typography variant='menu'>About Me</Typography>
                            </NavTab>
                            <NavTab
                                sx={{
                                    "&&": {
                                        "&::before": {
                                            width: page === 'projects' ? '75%' : '0%',
                                        },
                                    },
                                }}
                                onClick={() => {

                                    document.querySelector(".app-container").scrollTo(0, 0);


                                    setPage('projects');
                                    navigate('/projects');
                                }}
                            >

                                <Typography variant='menu'>Projects</Typography>
                            </NavTab>

                            <BtnPrimary
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToContact();

                                }}
                            >
                                <Typography variant='button'>Contact Me</Typography></BtnPrimary>
                            <Box sx={{
                                height: '20px',
                                width: '20px',
                                overflow: 'visible',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <IconButton
                                    onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
                                    sx={{

                                        color: theme.palette.text.primary,
                                        padding: "1rem",
                                    }}>
                                    {mode === 'dark' ? <HiMiniSun fontSize='1.5rem' /> : <BsMoonStars fontSize='1.1rem' />}

                                </IconButton>
                            </Box>

                        </FlexBetween>
                    ) : (

                        <>
                            <MobileNav open={open && !isNonMobileScreens
                            } setOpen={setOpen} handleOpen={() => handleOpen()} />

                            <Typography sx={{
                                fontSize: '1.2rem',
                                fontWeight: 500,
                                color: theme.palette.text.tertiary,

                            }}>
                                {page === 'home-page' ? 'Home' : page === 'about-me' ? 'About' : 'Projects'}
                            </Typography>
                            <Box sx={{
                                height: isNonMobileScreens ? "5rem" : "4rem",
                                pl: "0.5rem",
                                paddingRight: isNonMobileScreens ? '0' : isMobileScreens ? '24px' : '32px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'flex-end',
                                zIndex: 2000,
                            }}
                                onClick={handleOpen}
                            >
                                <Box sx={{
                                    zIndex: 1900,

                                }}>

                                    <Hamburger multiplier={
                                        isMobileScreens ? 0.7 : 1
                                    }


                                    />
                                </Box>
                            </Box>
                        </>
                    )}
                </FlexBetween>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar