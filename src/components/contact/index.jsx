import Box from "@mui/material/Box";
import useTheme from "@mui/material/styles/useTheme";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { FaRegCopyright } from "react-icons/fa6";
import FlexBetween from "../FlexBetween";

import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import React, { useContext, useState } from "react";
import { MainContext } from "../../context/MainContext";
import { sendEmail } from "../../utilities/SendEmail";
import ContactMain from "./ContactMain";

const Contact = () => {
    const theme = useTheme();
    const maxwidth850 = useMediaQuery("(max-width: 850px)");
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("Email sent successfully");
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
    const recaptchaRef = React.createRef();
    const { mode } = useContext(MainContext);

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
        } else {
            // console.log(res.error);
            setMessage("Failed to send email!");
            setOpen(true);
        }
    };
    const handleFocus = (e) => {
        e.preventDefault();
        if (isNonMobileScreens) return;

        //e.target.blur();
        // setTimeout(() => {
        //     e.target.scrollIntoView({
        //         behavior: "smooth",
        //         block: "center",
        //         inline: "center",
        //     });
        // }, 300);
    };

    return (
        <Box
            sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "4rem",
                zIndex:500,
            }}
        >
            <Typography
                variant="h2"
                sx={{
                    textAlign: maxwidth850 ? "left" : "center",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 850,
                    color: theme.palette.grey[400],
                    fontSize: maxwidth850 ? "2rem" : "2.5rem",
                    // display: maxwidth850 ? "none" : "block",
                }}
            >
                Let&apos;s{" "}
                <span
                    style={{
                        color:
                            mode === "light"
                                ? theme.palette.secondary.main
                                : theme.palette.grey[400],
                    }}
                >
                    Connect & Collaborate
                </span>
            </Typography>

            <ContactMain
                handleSubmit={handleSubmit}
                handleFocus={handleFocus}
                recaptchaRef={recaptchaRef}
            />

            <FlexBetween
                sx={{
                    gap: "0.3rem",
                    width: "fit-content",

                    mt: maxwidth850 ? "0rem" : "-3rem",
                    color: theme.palette.grey[300],
                    opacity: 0.9,
                }}
            >
                <FaRegCopyright
                    style={{
                        fontSize: "0.9rem",
                    }}
                />
                <Typography
                    variant="body1"
                    sx={{
                        fontSize: "0.9rem",
                        fontWeight: 300,
                        letterSpacing: "0.1px",
                    }}
                >
                    2024 Mahbubul Haque
                </Typography>
            </FlexBetween>

            <Snackbar
                open={open}
                autoHideDuration={5000}
                onClose={() => setOpen(false)}
                sx={{}}
            >
                <Alert
                    onClose={() => setOpen(false)}
                    severity={
                        message === "Email sent successfully"
                            ? "success"
                            : "error"
                    }
                    color={
                        message === "Email sent successfully"
                            ? theme.palette.secondary.darker
                            : theme.palette.error.main
                    }
                    sx={{
                        width: "100%",
                        background:
                            message === "Email sent successfully"
                                ? theme.palette.secondary.main
                                : theme.palette.error.background,
                        color:
                            message === "Email sent successfully"
                                ? theme.palette.secondary.darker
                                : theme.palette.error.main,
                    }}
                >
                    {message}
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default Contact;
