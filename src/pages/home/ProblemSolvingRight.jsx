import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import useTheme from "@mui/material/styles/useTheme";
import { SiCodeforces, SiLeetcode } from "react-icons/si";
import { LuExternalLink } from "react-icons/lu";
import FlexBetween from "../../components/FlexBetween";

import { useEffect } from "react";

const ProblemSolvingRight = () => {
    const isMobileScreens = useMediaQuery("(max-width: 600px)");
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
    const theme = useTheme();
    const maxWidth950 = useMediaQuery("(max-width: 950px)");
    const maxWidth450 = useMediaQuery("(max-width: 450px)");

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                let el = entry.target;
                if (entry.isIntersecting) {
                    el.style.opacity = 1;
                    el.style.transform = "translateX(0) translateY(0)";
                }
            });
        });

        let els = document.querySelector(".home-competitive");
        els.childNodes.forEach((el) => {
            observer.observe(el);
        });

        return () => {
            els.childNodes.forEach((el) => {
                observer.unobserve(el);
            });
        };
    }, []);

    return (
        <Box
            className="home-competitive"
            sx={{
                position: maxWidth950 ? "relative" : "absolute",
                right: 0,
                top: maxWidth950 ? "calc(100% - 3rem)" : "2.5rem",
                width: maxWidth950 ? "100%" : "calc(50% + 4rem)",
                marginTop: maxWidth950 ? "-3rem" : 0,
                height: "100%",
                background: theme.palette.background.homeCompetitive,
                // background: "rgba(0, 0, 0, 0.2)",
                padding: isMobileScreens ? "1rem" : "2rem",
                backdropFilter: "blur(10px)",
                borderRadius: "1.25rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: maxWidth950 ? "2rem" : "0rem",
                // transition: "all 0.5s",
                // transform: maxWidth950 ? "translateY(4rem)" : "translateX(8rem)",
                // opacity: 0,
            }}
        >
            <Typography
                variant="h4"
                sx={{
                    fontSize: "1.5rem",
                    fontWeight: 500,
                    transition: !maxWidth950
                        ? "all 0.5s ease-out 0.5s"
                        : "all 0.5s ease-out 0.1s",
                    transform: "translateY(3rem)",
                    opacity: 0,
                    color: theme.palette.text.tertiary,
                }}
            >
                Competitive Programming & Problem Solving
            </Typography>
            <Typography
                variant="body1"
                sx={{
                    fontSize: "1rem",
                    fontWeight: 400,
                    lineHeight: "1.5",
                    // opacity: 0.9,
                    letterSpacing: "0px",
                    transition: !maxWidth950
                        ? "all 0.7s ease-out 1.4s"
                        : "all 0.7s ease-out 0.4s",
                    transform: "translateY(3rem)",
                    opacity: 0,
                    color: theme.palette.text.secondary,
                    // paragraph spacing
                }}
            >
                I possess extensive experience in Data Structures and Algorithms
                (DSA) and problem-solving. As a competitive programmer, I
                achieved the rank of {" "}
                <a
                    href="https://codeforces.com/profile/F__"
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => {
                        e.preventDefault();
                        window.open(
                            "https://codeforces.com/profile/F__",
                            "_blank"
                        );
                    }}
                    style={{
                        background: theme.palette.background.codeforcesPurple,
                        fontWeight: 600,
                        letterSpacing: "0.2px",
                        cursor: "pointer",
                        textDecoration: "none",
                        color: isNonMobileScreens ? theme.palette.text.primary : theme.palette.text.tertiary,
                    }}
                >
                    Candidate Master (Purple Coder)
                </a>{" "}
                on Codeforces with a peak rating of <b>1914</b>.
                <span
                    style={{
                        display: "block",
                        height: "0.75rem",
                    }}
                />
                I leverage the analytical and problem-solving skills honed
                through competitive programming to tackle real-world problems in
                a more efficient and optimized manner.
            </Typography>
            <Box></Box>

            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "2rem",
                    transition: !maxWidth950
                        ? "all 1s ease-out 1.8s"
                        : "all 1s ease-out 0.8s",
                    transform: "translateY(3rem)",
                    opacity: 0,
                }}
            >
                <FlexBetween
                    component="a"
                    href="https://github.com/mahbubul-haq/Data-Structures-And-Algorithms"
                    target="_blank"
                    sx={{
                        width: "fit-content",
                        gap: "0.5rem",
                        color: theme.palette.secondary.link,
                        cursor: "pointer",
                        textDecoration: "none",
                        "&:hover": {
                            color: theme.palette.secondary.linkHover,
                        },
                    }}
                    onClick={(e) => {
                        e.preventDefault();
                        window.open(
                            "https://github.com/mahbubul-haq/Data-Structures-And-Algorithms",
                            "_blank"
                        );
                    }}
                >
                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: "1rem",
                            fontWeight: 500,
                        }}
                    >
                        {maxWidth450
                            ? "DSA repository"
                            : "Data Structures and Algorithms repository"}
                    </Typography>
                    <LuExternalLink />
                </FlexBetween>
                {/* <Box
                    onClick={() => {
                        window.open("https://github.com/mahbubul-haq/MySolvedProblems", "_blank");
                    }}
                    sx={{

                        display: "flex",
                        gap: "0.5rem",
                        alignItems: "center",
                        color: theme.palette.secondary.link,
                        mb: "0.5rem",
                        cursor: "pointer",
                        width: "fit-content",
                    }}>
                    <Typography sx={{
                        fontSize: "1rem",
                        fontWeight: 500,

                    }}>Problem solving stats</Typography>
                    <LuExternalLink />
                </Box> */}

                <FlexBetween
                    sx={{
                        gap: "2rem",
                        width: "fit-content",
                        flexWrap: "wrap",
                    }}
                >
                    {[
                        {
                            name: "Codeforces",
                            link: "https://codeforces.com/profile/F__",
                            icon: (
                                <SiCodeforces
                                    size={isMobileScreens ? 15 : 20}
                                />
                            ),
                        },
                        {
                            name: "LeetCode",
                            link: "https://leetcode.com/u/mahbubulhaque/",
                            icon: (
                                <SiLeetcode size={isMobileScreens ? 15 : 20} />
                            ),
                        },
                    ].map((profile, index) => (
                        // <Tooltip
                        //     title={`View ${profile.name} profile`}
                        //     key={index}
                        // >
                        <Box
                            key={index}
                            component="a"
                            href={profile.link}
                            target="_blank"
                            onClick={(e) => {
                                e.preventDefault();
                                window.open(profile.link, "_blank");
                            }}
                            sx={{
                                color: theme.palette.secondary.link,
                                cursor: "pointer",
                                "&:hover": {
                                    color: theme.palette.secondary.linkHover,
                                },
                                display: "flex",
                                gap: "0.5rem",
                                alignItems: "center",
                                textDecoration: "none",
                            }}
                            title={`View ${profile.name} profile`}
                        >
                            {profile.icon}
                            {profile.name}
                        </Box>
                        // </Tooltip>
                    ))}
                </FlexBetween>
            </Box>
        </Box>
    );
};

export default ProblemSolvingRight;
