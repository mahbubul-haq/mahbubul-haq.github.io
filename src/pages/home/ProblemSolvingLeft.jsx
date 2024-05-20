import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import useTheme from "@mui/material/styles/useTheme";
import { TbWorldCode } from "react-icons/tb";
import { SiCodeforces, SiLeetcode } from "react-icons/si";
import FlexBetween from "../../components/FlexBetween";
import { useEffect } from "react";
import { LuExternalLink } from "react-icons/lu";


const ProblemSolvingLeft = () => {
    const isMobileScreens = useMediaQuery("(max-width: 600px)");
    const minWidth1500 = useMediaQuery("(min-width: 1500px)");
    const maxWidth1100 = useMediaQuery("(max-width: 1100px)");
    const maxWidth950 = useMediaQuery("(max-width: 950px)");
    const maxWidth450 = useMediaQuery("(max-width: 450px)");
    const maxWidth300 = useMediaQuery("(max-width: 300px)");
    const theme = useTheme();

    useEffect(() => {

        const observerTotalSolvedCount = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                let el = entry.target;
                if (entry.isIntersecting) {
                    let count = Number(el.getAttribute("data-count"));
                    setInterval(() => {
                        if (count < 1000) {
                            count += 10;
                            el.innerHTML = count;
                            el.setAttribute("data-count", count);
                        }
                        else if (count < 1600) {
                            count += 25;
                            el.innerHTML = count;
                            el.setAttribute("data-count", count);
                        }
                        else {
                            el.innerHTML = 1600 + "+";
                            clearInterval();
                        }
                    }, 8);
                }
            });
        }, {
            threshold: 1,
        });

        let totalSolvedCount = document.querySelector(".total-solved-count");
        observerTotalSolvedCount.observe(totalSolvedCount);

        let observerCodeforcesLeetcodeCount = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                let el = entry.target;
                if (entry.isIntersecting) {
                    let count = Number(el.getAttribute("data-count"));
                    let target = Number(el.getAttribute("data-target"));
                    setInterval(() => {
                        if (count < target) {
                            if (target > 800) count += 5;
                            else count += 1;
                            el.innerHTML = count;
                            el.setAttribute("data-count", count);
                        }
                        else {
                            el.innerHTML = target + "+";
                            clearInterval();
                        }
                    }, 10);
                }
            });
        }, {
            threshold: 1,
        });

        let codeforcesCount = document.querySelector(".codeforces-count");
        let leetcodeCount = document.querySelector(".leetcode-count");

        observerCodeforcesLeetcodeCount.observe(codeforcesCount);
        observerCodeforcesLeetcodeCount.observe(leetcodeCount);


        return () => {
            observerTotalSolvedCount.unobserve(totalSolvedCount);
            observerCodeforcesLeetcodeCount.unobserve(codeforcesCount);
            observerCodeforcesLeetcodeCount.unobserve(leetcodeCount);
        };
    }, []);


    return (
        <Box
            sx={{
                position: "relative",
                background: `linear-gradient(to bottom, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
                color: theme.palette.common.black,
                width: maxWidth950 ? "100%" : "50%",
                padding: maxWidth950
                    ? "2rem 0 4rem 0"
                    : "3rem 3rem 4rem 0rem",

                paddingBottom: maxWidth950 ? "6rem" : "3rem",
                display: "flex",
                flexDirection: "column",
                gap: "3rem",
                alignItems: "center",
                borderRadius: "1.25rem",
            }}
        >

            <Typography
                variant="h4"
                sx={{
                    fontSize: maxWidth450 ? "1.2rem" : "1.5rem",
                    fontWeight: 500,
                }}
            >
                Problems Solved
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0rem",
                }}
            >
                <Typography
                    variant="h1"
                    sx={{
                        fontSize: maxWidth450 ? "3rem" : "5rem",
                        fontWeight: 600,
                        textAlign: "center",
                        lineHeight: "0.8",
                    }}
                    className="total-solved-count"
                    data-count="0"
                >
                    0
                </Typography>
                <FlexBetween
                    sx={{
                        gap: "0.5rem",
                        width: "fit-content",
                        mx: "auto",
                    }}
                >
                    <TbWorldCode
                        size={maxWidth450 ? 20 : isMobileScreens ? 30 : 40}
                    />
                    <Typography
                        variant="h5"
                        sx={{
                            fontSize: maxWidth450 ? "1rem" : "1.2rem",
                            fontWeight: 500,
                        }}
                    >
                        Across different{" "}
                        {maxWidth450 ? "OJs" : "Online Judges"}
                    </Typography>
                </FlexBetween>
            </Box>

            <FlexBetween
                sx={{
                    width: "100%",
                    // pl: "2rem",
                    gap: minWidth1500
                        ? "12rem"
                        : maxWidth450
                            ? "2rem"
                            : isMobileScreens
                                ? "8rem"
                                : maxWidth950
                                    ? "12rem"
                                    : maxWidth1100
                                        ? "5rem"
                                        : "8rem",
                    "&&": {
                        justifyContent: "center",
                        flexDirection: maxWidth300 ? "column" : "row",
                    },
                }}
            >
                <FlexBetween
                    sx={{
                        flexDirection: "column",
                    }}
                >
                    <Typography
                        variant="h3"
                        sx={{
                            fontSize: maxWidth450 ? "2rem" : "3rem",
                            fontWeight: 600,
                        }}
                        className="codeforces-count"
                        data-count="0"
                        data-target="880"
                    >
                        0
                    </Typography>
                    <FlexBetween
                        sx={{
                            gap: "0.5rem",
                        }}
                    >
                        <SiCodeforces size={isMobileScreens ? 20 : 20} />
                        <Typography
                            variant="h5"
                            sx={{
                                fontSize: maxWidth450 ? "1rem" : "1.1rem",
                                fontWeight: 500,
                            }}
                        >
                            Codeforces
                        </Typography>
                    </FlexBetween>
                </FlexBetween>

                <FlexBetween
                    sx={{
                        flexDirection: "column",
                    }}
                >
                    <Typography
                        variant="h3"
                        sx={{
                            fontSize: maxWidth450 ? "2rem" : "3rem",
                            fontWeight: 600,
                        }}
                        className="leetcode-count"
                        data-count="0"
                        data-target="190"
                    >
                        0
                    </Typography>
                    <FlexBetween
                        sx={{
                            gap: "0.5rem",
                        }}
                    >
                        <SiLeetcode size={isMobileScreens ? 20 : 20} />
                        <Typography
                            variant="h5"
                            sx={{
                                fontSize: maxWidth450 ? "1rem" : "1.1rem",
                                fontWeight: 500,
                            }}
                        >
                            LeetCode
                        </Typography>
                    </FlexBetween>
                </FlexBetween>
            </FlexBetween>

            <Box
                
             sx={{
                // border: "1px solid",
                borderRadius: "0.25rem",
                px: "0.5rem",
                // mt: "2rem",
                cursor: "pointer",
                transition: "all 0.3s",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                fontWeight: 500,
                
                "&:hover": {
                    outline: "1px solid",
                    
                },
                color: "#0A4900"
                
            }}
            onClick={() => {
                window.open("https://github.com/mahbubul-haq/MySolvedProblems", "_blank");
            }}
            >
                View Problem solving stats
                <LuExternalLink />
            </Box>

        </Box>
    )
}

export default ProblemSolvingLeft