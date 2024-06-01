import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FlexBetween from "./FlexBetween";
import { FaLinkedinIn, FaGithub, FaRegCopyright } from "react-icons/fa6";
import { SiCodeforces } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import useTheme from "@mui/material/styles/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery";
import StyledTextField from "./StyledTextField";
import BtnPrimary from "./BtnPrimary";
import { BsSend } from "react-icons/bs";
import ReCAPTCHA from "react-google-recaptcha";

import { sendEmail } from "../utilities/SendEmail";
import React, { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";


const profiles = [
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/mahbubul-haque-807311189/",
        icon: <FaLinkedinIn />,
    },
    {
        name: "GitHub",
        link: "https://github.com/mahbubul-haq",
        icon: <FaGithub />,
    }
    ,
    {
        name: "Codeforces",
        link: "https://codeforces.com/profile/F__",
        icon: <SiCodeforces />,
    },
    {
        name: "LeetCode",
        link: "https://leetcode.com/u/mahbubulhaque/",
        icon: <SiLeetcode />,
    },
]




const Contact = () => {

    const theme = useTheme();
    const maxwidth700 = useMediaQuery('(max-width: 700px)');
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("Email sent successfully");
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
    const recaptchaRef = React.createRef();



    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!recaptchaRef.current.getValue()) {
            setMessage("Please verify that you are not a robot!");
            setOpen(true);
            return;
        }

        const res = await sendEmail(e.target);

        if (res.success) {
            setMessage("Email sent successfully");
            setOpen(true);
            e.target.reset();
            recaptchaRef.current.reset();
        }
        else {
            // console.log(res.error);
            setMessage("Failed to send email!");
            setOpen(true);
        }

    }
    const handleFocus = (e) => {
        e.preventDefault();
        if (isNonMobileScreens) return;
        e.target.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "center",
        });


    }

    return (
        <Box sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "4rem",
        }}>

            <Typography variant="h2" sx={{
                textAlign: "center",
                fontFamily: "Inter, sans-serif",
                fontWeight: 700,
                color: theme.palette.grey[400],
                fontSize: maxwidth700 ? "1.5rem" : "2rem",
                display: maxwidth700 ? "none" : "block",
            }}>
                Let&apos;s Work Together
            </Typography>

            <FlexBetween sx={{
                width: "100%",
                flexWrap: "wrap",
                gap: maxwidth700 ? "5rem" : "0",
                "&&": {
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                },
            }}>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",


                    gap: "1rem",
                    width: maxwidth700 ? "100%" : '50%',
                    alignItems: maxwidth700 ? "center" : "flex-start",
                }}>
                    <Typography variant="h3" sx={{
                        // fontSize: "1.1rem",
                        fontWeight: 600,
                        mb: "1rem",
                        color: theme.palette.grey[400],
                    }}>
                        Contacts
                    </Typography>
                    <Box component="a"
                        href="tel:+8801795450357" sx={{
                            // color: "inherit",
                            textDecoration: "none",
                            color: theme.palette.grey[400]
                        }}>
                        +8801795450357
                    </Box>
                    <Box component="a"
                        href="mailto:mahbubul.haque.1048@gmail.com"
                        sx={{
                            color: theme.palette.grey[400],
                            textDecoration: "none",
                            overflowWrap: "anywhere",
                        }}
                    >
                        mahbubul.haque.1048@gmail.com
                    </Box>

                    <Box sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        mt: "2rem",
                        gap: maxwidth700 ? "2rem" : "3rem",


                    }}>
                        {profiles.map((profile, index) => (
                            <Box key={index}
                                title={`Visit ${profile.name} profile`}
                                onClick={() => {
                                    window.open(profile.link, "_blank")
                                }
                                }
                                sx={{
                                    color: "secondary.main",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.5rem",
                                    cursor: "pointer",
                                    fontSize: "1.5rem",
                                    transition: "color 0.3s",
                                    "&:hover": {
                                        color: "secondary.dark",
                                    }
                                }}>
                                {profile.icon}
                            </Box>
                        ))}
                    </Box>
                </Box>

                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{
                        width: maxwidth700 ? "100%" : '50%',
                        display: "flex",
                        flexDirection: "column",

                        gap: "1.5rem",
                        maxWidth: maxwidth700 ? "100%" : "500px",
                    }}>
                    <Typography variant="h6" sx={{

                        fontWeight: 600,
                        opacity: 0.5,
                        fontSize: "1rem",
                    }}>
                        Email me from here
                    </Typography>
                    <input type="hidden" name="to_name" value="Mahbubul Haque" />
                    <StyledTextField placeholder="Name " name="from_name" onFocus={handleFocus} />
                    <StyledTextField placeholder="Email address"
                        type="email" name="from_email"
                        onFocus={handleFocus}
                    />
                    {/* <StyledTextField placeholder="Subject"  name="subject" /> */}
                    <StyledTextField placeholder="Message (required)" multiline rows={4}
                        InputProps={{
                            sx: {
                                color: theme.palette.grey[1000],
                            }
                        }}
                        required
                        name="message"
                        onFocus={handleFocus}

                    />
                    <ReCAPTCHA ref={recaptchaRef} sitekey={import.meta.env.VITE_ReCAPTCHA_SITE_KEY} theme="dark" />
                    <BtnPrimary
                        component="button"
                        type="submit"
                        // onClick={handleSubmit}
                        sx={{
                            "&&": {
                                background: "transparent",
                                color: theme.palette.grey[1000],

                                // border: `1px solid ${theme.palette.secondary.main}`,
                                width: "fit-content",
                                display: "flex",
                                alignItems: "center",
                                alignSelf: maxwidth700 ? "flex-start" : "flex-start",
                                gap: "0.7rem",
                                borderRadius: "0.5rem",
                                mt: "0l5rem",
                                backgroundColor: theme.palette.secondary.main,
                                opacity: 0.8,
                                boxShadow: "none",
                                "&:hover": {
                                    background: theme.palette.secondary.main,
                                    opacity: 1,
                                },
                            }
                        }}>
                        Send <BsSend style={{
                            // marginLeft: "0.5rem",
                            // fontSize: "1.2rem",
                        }} />
                    </BtnPrimary>

                </Box>


            </FlexBetween>

            <FlexBetween sx={{
                gap: "0.3rem",
                width: "fit-content",

                mt: maxwidth700 ? "0rem" : "-3rem",
                color: theme.palette.grey[300],
                opacity: 0.9,

            }}>
                <FaRegCopyright style={{
                    fontSize: "0.9rem",
                }}
                />
                <Typography variant="body1" sx={{
                    fontSize: "0.9rem",
                    fontWeight: 300,
                    letterSpacing: "0.1px",
                }}>
                    2024 Mahbubul Haque
                </Typography>
            </FlexBetween>

            <Snackbar open={open} autoHideDuration={5000} onClose={() => setOpen(false)} sx={{

            }}>
                <Alert onClose={() => setOpen(false)} severity={
                    message === "Email sent successfully" ? "success" : "error"
                }
                    color={message === "Email sent successfully" ? theme.palette.secondary.darker : theme.palette.error.main}
                    sx={{
                        width: '100%',
                        background: message === "Email sent successfully" ? theme.palette.secondary.main : theme.palette.error.background,
                        color: message === "Email sent successfully" ? theme.palette.secondary.darker : theme.palette.error.main,
                    }}>
                    {message}
                </Alert>
            </Snackbar>

        </Box>
    )
}

export default Contact