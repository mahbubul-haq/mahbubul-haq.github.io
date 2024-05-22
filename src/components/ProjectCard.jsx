import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useTheme from "@mui/material/styles/useTheme";
import FlexBetween from './FlexBetween';
import { LuExternalLink } from 'react-icons/lu';
import useMediaQuery from '@mui/material/useMediaQuery';

const ProjectCard = ({
    projectInfo,
    projectsPage = false,
    embed = false,
}) => {
    const theme = useTheme();
    const isMobileScreens = useMediaQuery("(max-width: 600px)");
    const isNonMobileScreens = useMediaQuery('(min-width: 1000px)');
    const maxwidth900 = useMediaQuery('(max-width: 900px)');
    const minWidth1400 = useMediaQuery('(min-width: 1400px)');

    // console.log(projectInfo);

    return (
        <Box sx={{
            width: "100%",
            height: "100%",
            padding: projectsPage && isNonMobileScreens ? "2rem" : isMobileScreens ? "0.5rem" : "1rem",
            display: "flex",
            flexDirection: projectsPage ? isNonMobileScreens? "row" : "column" : "column",
            background: theme.palette.background.dark,
            borderRadius: "0.6rem",
            gap: isMobileScreens ? "0.1rem" : maxwidth900 ? "0.5rem" : "1rem",
            transition: "all 0.3s ease-out",
            position: "relative",
            overflow: "hidden",
        }}>
            <Box sx={{
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
                
                color: theme.palette.common.white,
                zIndex: 1000,
                pb: "0.05rem",
            }}>
                <Typography variant="h6" sx={{
                    fontWeight: 600,
                   
                }}>
                    {projectInfo.year}
                </Typography>

            </Box>
            <Box sx={{
                width: projectsPage && isNonMobileScreens? "50%" : "100%",
                // height: projectsPage ? "100%" : "auto",
                // border: "2px solid #000",
                // textAlign: reverse ? "right" : "left",
                my: projectsPage ? "auto" : "0",
            }}>
                {embed && projectInfo.embedLink ? (
                    <iframe
                        src={projectInfo.embedLink}
                        title={projectInfo.title}
                        style={{
                            width: projectsPage && isNonMobileScreens ? "90%" : "100%",
                            height: "100%",
                            border: "none",
                            borderRadius: "0.6rem",
                            aspectRatio: "16/9",
                        }}
                        loading="lazy"
                    />

                ) : (
                <img src={`images/${projectInfo.imageFileName}`} alt="random" style={{
                    // width: "100%", height: "auto",
                    width: projectsPage && isNonMobileScreens ? "90%" : "100%",
                    aspectRatio: "16/9",
                    objectFit: "cover",
                    opacity: 0.7,


                }}
                    loading="lazy"
                />
                )}
            </Box>
            <FlexBetween sx={{

                flexDirection: "column",
                // height: "100%",
                gap: "2.6rem",
                width: projectsPage && isNonMobileScreens? "50%" : "100%",
                "&&": {
                    alignItems: "flex-start",
                }
            }}>
                <FlexBetween sx={{
                    flexDirection: "column",
                    // gap: "2.6rem",
                    "&&": {
                        alignItems: "flex-start",
                    }
                }}>
                    <Typography variant="h5" sx={{
                        fontSize: "1.1rem",
                        // letterSpacing: "0.2px",
                        color: theme.palette.text.primary,
                        fontWeight: 600,
                        minHeight: maxwidth900 ? "auto" : minWidth1400 ? "3rem" : "3rem",
                    }}>
                        {projectInfo.title}
                         {/* <span style={{
                            verticalAlign: "middle",
                            fontSize: isMobileScreens ? "0.8rem" : "0.9rem",
                            // textAlign: "right",
                            // display: "inline-block",
                            opacity: 1,
                            // mt: projectsPage ? "3rem" : "0",
                            // display: "inline-block",
                            color: theme.palette.primary.light,
                        }}>  &mdash; {projectInfo.year}</span> */}
                    </Typography>
                    {projectsPage &&
                        <Typography variant="body1" sx={{
                            fontSize: "0.9rem",
                            color: theme.palette.text.secondary,
                            // fontWeight: 400,
                            lineHeight: "1.5",
                            opacity: 0.8,
                            letterSpacing: "0.2px",
                            mt: "1.5rem",
                        }}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, sed assumenda vero blanditiis perferendis quae laborum vitae minima iusto at optio ullam voluptatum tempora alias excepturi. Repudiandae tenetur dolor pariatur iste repellendus quae sapiente. Ut aspernatur excepturi, eos maxime dicta sunt, aliquam distinctio laudantium cumque ipsum doloribus nisi numquam aut!
                        </Typography>
                    }
                    <Box sx={{
                        display: "flex",
                        gap: "2rem",
                        flexWrap: "wrap",
                        minHeight: "4rem",
                        alignItems: "flex-end",
                    }}>
                        {projectInfo.links.map((link, index) => (
                            <Box key={index} sx={{
                                color: theme.palette.secondary.link,
                                display: "flex",
                                alignItems: "center",
                                gap: "0.5rem",
                                cursor: "pointer",
                            }}
                                onClick={() => {
                                    window.open(link.link, "_blank")
                                }}
                            >
                                <Typography variant="body1" sx={{
                                    fontWeight: 500,
                                }}>


                                    {link.text}
                                </Typography>
                                <LuExternalLink />

                            </Box>
                        ))}
                    </Box>
                </FlexBetween>
                <Box sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.5rem",

                }}>
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
                                border: `1px solid ${theme.palette.grey[500]}`
                            }}>
                            <Typography variant="body1" sx={{
                                fontSize: "0.9rem",
                                color: theme.palette.text.primary,
                            }}>
                                {tech}
                            </Typography>
                        </Box>
                    ))}
                </Box>

            </FlexBetween>

        </Box>
    )
}

export default ProjectCard