import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useTheme from "@mui/material/styles/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useContext } from "react";
import { BiSolidRightArrow } from "react-icons/bi";
import { LuExternalLink } from "react-icons/lu";
import { MainContext } from "../context/MainContext";
import FlexBetween from "./FlexBetween";

const ProjectCard = ({ projectInfo, projectsPage = false, embed = false }) => {
    const theme = useTheme();
    const isMobileScreens = useMediaQuery("(max-width: 600px)");
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
    const minWidth1500 = useMediaQuery("(min-width: 1700px)");
    const maxwidth900 = useMediaQuery("(max-width: 900px)");
    const minWidth1400 = useMediaQuery("(min-width: 1400px)");
    const { mode } = useContext(MainContext);

    // console.log(projectInfo);

    return (
        <Box
            sx={{
                width: "100%",
                height: "100%",
                padding:
                    projectsPage && isNonMobileScreens
                        ? "2rem"
                        : isMobileScreens
                            ? "0.5rem"
                            : "1rem",
                display: "flex",
                flexDirection: projectsPage
                    ? isNonMobileScreens
                        ? "row"
                        : "column"
                    : "column",
                background: theme.palette.background.dark,
                borderRadius: "0.6rem",
                gap: isMobileScreens
                    ? "0.1rem"
                    : maxwidth900
                        ? "0.5rem"
                        : "1rem",
                transition: "all 0.3s ease-out",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* <Box
                sx={{
                    position: "absolute",
                    width: "100px",
                    height: "100px",
                    top: "-60px",
                    left: "-60px",
                    transform: "rotate(-45deg)",
                    background: theme.palette.secondary.dark,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-end",

                    color: theme.palette.common.black,
                    zIndex: 1000,
                    pb: "0.05rem",
                }}
            >
                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: 600,
                    }}
                >
                    {projectInfo.year}
                </Typography>
            </Box> */}
            <Box
                sx={{
                    width: projectsPage && isNonMobileScreens ? "50%" : "100%",
                    my: projectsPage ? "auto" : "0",
                    mx: minWidth1500 ? "auto" : "0",
                    textAlign: minWidth1500 ? "center" : "left"
                }}
            >
                {embed && projectInfo.embedLink ? (
                    <iframe
                        src={projectInfo.embedLink}
                        
                        title={projectInfo.title}
                        style={{
                            width: projectsPage && minWidth1500 ? "75%" : 
                                projectsPage && isNonMobileScreens
                                    ? "90%"
                                    : "100%",
                            height: "100%",
                            border: "none",
                            borderRadius: "0.5rem",
                            aspectRatio: "16/9",
                            backgroundColor: theme.palette.common.black,
                            opacity: mode == "dark" ? 0.8 : 0.9,
                        }}
                        loading="lazy"
                        // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        // allowfullscreen
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;fullscreen;"
                    />
                ) : (
                    <img
                        src={`images/${projectInfo.imageFileName}`}
                        alt="random"
                        style={{
                            // width: "100%", height: "auto",
                            width: projectsPage && minWidth1500 ? "75%" : 
                                projectsPage && isNonMobileScreens
                                    ? "90%"
                                    : "100%",
                            aspectRatio: "16/9",
                            objectFit: "cover",
                            opacity: mode == "dark" ? 0.6 : 0.8,
                            borderRadius: "0.5rem",
                        }}
                        loading="lazy"
                    />
                )}
            </Box>
            <FlexBetween
                sx={{
                    flexDirection: "column",
                    // height: "100%",
                    gap: "2rem",
                    width: projectsPage && isNonMobileScreens ? "50%" : "100%",
                    "&&": {
                        alignItems: "flex-start",
                    },
                }}
            >
                <FlexBetween
                    sx={{
                        flexDirection: "column",
                        // gap: "2.6rem",
                        "&&": {
                            alignItems: "flex-start",
                        },
                    }}
                >
                    <Typography
                        variant="h5"
                        sx={{
                            fontSize: "1.1rem",
                            // letterSpacing: "0.2px",
                            color: theme.palette.text.primary,
                            fontWeight: 600,
                            minHeight: maxwidth900
                                ? "auto"
                                : projectsPage? "auto":  minWidth1400
                                    ? "6rem"
                                    : "6rem",
                        }}
                    >
                        {projectInfo.title} <span style={{
                        fontWeight: "600",
                        fontSize: "0.9rem",
                        color: theme.palette.primary.main,
                        marginTop: "1rem",
                        display: "block",
                    }}>{projectInfo.year}</span>
                    </Typography>
                    
                    {projectsPage && (
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "1rem",
                                ml: isNonMobileScreens ? "0.5rem" : "0.5rem",
                                mt: "2rem",
                                mb: "2rem",
                                color: theme.palette.text.secondary,
                            }}
                        >
                            {projectInfo.descriptionList.map((description, index) => (
                                <Box
                                    sx={{
                                        display: "flex",
                                        gap: "1rem",
                                        alignItems: "center",
                                    }}
                                    key={index}
                                >
                                    <Box
                                        sx={{
                                            opacity: 0.6,
                                        }}
                                    >
                                        <BiSolidRightArrow />

                                    </Box>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            fontSize: "1rem",
                                            color: theme.palette.text.secondary,
                                            // fontWeight: 400,
                                            lineHeight: "1.5",
                                            opacity: 0.8,
                                            letterSpacing: "0.2px",
                                        }}
                                    >
                                        {description}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    )}
                    <Box
                        sx={{
                            display: "flex",
                            gap: "2rem",
                            flexWrap: "wrap",
                            minHeight: "3rem",
                            alignItems: "flex-end",
                        }}
                    >
                        {projectInfo.links.map((link, index) => (
                            <Box
                                key={index}
                                component="a"
                                href={link.link}
                                target="_blank"
                                sx={{
                                    color: theme.palette.secondary.link,
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.5rem",
                                    cursor: "pointer",
                                    textDecoration: "none",
                                }}
                                onClick={(e) => {
                                    e.preventDefault();
                                    window.open(link.link, "_blank");
                                }}
                            >
                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontWeight: 500,
                                    }}
                                >
                                    {link.text}
                                </Typography>
                                <LuExternalLink />
                            </Box>
                        ))}
                    </Box>
                </FlexBetween>
                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "0.5rem",
                    }}
                >
                    {projectInfo.technologies.map((tech, index) => (
                        <Box
                            key={index}
                            sx={{
                                height: "2rem",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                px: "0.8rem",
                                borderRadius: "0.5rem",
                                border: `1px solid ${theme.palette.grey[500]}`,
                            }}
                        >
                            <Typography
                                variant="body1"
                                sx={{
                                    fontSize: "0.9rem",
                                    color: theme.palette.text.tertiary,
                                }}
                            >
                                {tech}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </FlexBetween>
        </Box>
    );
};

export default ProjectCard;
