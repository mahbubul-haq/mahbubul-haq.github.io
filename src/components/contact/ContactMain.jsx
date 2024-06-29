import FlexBetween from "../FlexBetween";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import useTheme from "@mui/material/styles/useTheme";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { SiLeetcode, SiCodeforces } from "react-icons/si";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import StyledTextField from "../StyledTextField";
import BtnPrimary from "../BtnPrimary";
import { BsSend } from "react-icons/bs";
import ReCAPTCHA from "react-google-recaptcha";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import { MainContext } from "../../context/MainContext";

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
    },
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
];

const ContactMain = ({ handleSubmit, handleFocus, recaptchaRef }) => {
    const maxwidth850 = useMediaQuery("(max-width: 850px)");
    const theme = useTheme();
    const { mode } = useContext(MainContext);

    return (
        <FlexBetween
            sx={{
                width: "100%",
                flexWrap: "wrap",
                gap: maxwidth850 ? "5rem" : "0",
                mt: maxwidth850 ? "-1rem" : 0,
                "&&": {
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                },
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",

                    gap: "1rem",
                    width: maxwidth850 ? "100%" : "50%",
                    alignItems: maxwidth850 ? "flex-start" : "flex-start",
                }}
            >
                {!maxwidth850 && (
                    <Typography
                        sx={{
                            fontSize: "2rem",
                            fontWeight: "500",
                            color: theme.palette.grey[400],
                            mb: "1rem",
                        }}
                    >
                        &mdash; Contact Me
                    </Typography>
                )}
                <FlexBetween
                    sx={{
                        gap: "1rem",
                    }}
                >
                    <Box
                        sx={{
                            padding: "1rem",
                            borderRadius: "50%",
                            display: "flex",
                            background: theme.palette.text.secondary,
                            color: theme.palette.background.dark,
                            aspectRatio: "1/1",
                        }}
                    >
                        <FaPhoneAlt size={18} />
                    </Box>
                    <Box
                        component="a"
                        href="tel:+8801795450357"
                        sx={{
                            textDecoration: "none",
                            color: theme.palette.text.secondary,
                        }}
                    >
                        +8801795450357
                    </Box>
                </FlexBetween>
                <FlexBetween
                    sx={{
                        gap: "1rem",
                    }}
                >
                    <Box
                        sx={{
                            padding: "1rem",
                            borderRadius: "50%",
                            display: "flex",
                            background: theme.palette.text.secondary,
                            color: theme.palette.background.dark,
                            aspectRatio: "1/1",
                        }}
                    >
                        <IoMdMail size={18} />
                    </Box>
                    <Box
                        component="a"
                        href="mailto:mahbubul.haque.1048@gmail.com"
                        sx={{
                            color: theme.palette.text.secondary,
                            textDecoration: "none",
                            overflowWrap: "anywhere",
                        }}
                    >
                        mahbubul.haque.1048@gmail.com
                    </Box>
                </FlexBetween>

                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        mt: "2rem",
                        gap: maxwidth850 ? "1rem" : "1.5rem",
                    }}
                >
                    {profiles.map((profile, index) => (
                        <Box
                            key={index}
                            title={`Visit ${profile.name} profile`}
                            onClick={() => {
                                window.open(profile.link, "_blank");
                            }}
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                // gap: "0.5rem",
                                cursor: "pointer",
                                fontSize: "1.5rem",
                                transition: "color 0.3s, background 0.3s",
                                "&:hover": {
                                    backgroundColor:
                                        theme.palette.background
                                            .contactLinkHover,
                                },
                                padding: "1rem",
                                backgroundColor:
                                    theme.palette.background.contactLink,

                                borderRadius: "50%",
                                color:
                                    mode === "ligth"
                                        ? theme.palette.text.secondary
                                        : theme.palette.grey[100],
                            }}
                        >
                            {profile.icon}
                        </Box>
                    ))}
                </Box>
            </Box>

            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    width: maxwidth850 ? "100%" : "50%",
                    display: "flex",
                    flexDirection: "column",

                    gap: "1.5rem",
                    maxWidth: maxwidth850 ? "100%" : "500px",
                }}
            >
                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: 600,
                        opacity: 0.5,
                        fontSize: "1rem",
                    }}
                >
                    Email me from here
                </Typography>
                <input type="hidden" name="to_name" value="Mahbubul Haque" />
                <StyledTextField
                    placeholder="Name "
                    name="from_name"
                    onFocus={handleFocus}
                />
                <StyledTextField
                    placeholder="Email address"
                    type="email"
                    name="from_email"
                    onFocus={handleFocus}
                />
                {/* <StyledTextField placeholder="Subject"  name="subject" /> */}
                <StyledTextField
                    placeholder="Message (required)"
                    multiline
                    rows={4}
                    InputProps={{
                        sx: {
                            color: theme.palette.grey[1000],
                        },
                    }}
                    required
                    name="message"
                    onFocus={handleFocus}
                />
                <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={import.meta.env.VITE_ReCAPTCHA_SITE_KEY}
                    theme="dark"
                />
                <BtnPrimary
                    component="button"
                    type="submit"
                    // onClick={handleSubmit}
                    sx={{
                        "&&": {
                            background: "transparent",
                            color: theme.palette.grey[1000],
                            width: "fit-content",
                            display: "flex",
                            alignItems: "center",
                            alignSelf: maxwidth850
                                ? "flex-start"
                                : "flex-start",
                            gap: "0.7rem",
                            borderRadius: "0.5rem",
                            mt: "0rem",
                            backgroundColor: theme.palette.secondary.main,
                            opacity: 0.8,
                            boxShadow: "none",
                            "&:hover": {
                                background: theme.palette.secondary.main,
                                opacity: 1,
                            },
                        },
                    }}
                >
                    Send <BsSend />
                </BtnPrimary>
            </Box>
        </FlexBetween>
    );
};

export default ContactMain;
