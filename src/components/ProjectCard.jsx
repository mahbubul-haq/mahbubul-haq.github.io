import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useTheme from "@mui/material/styles/useTheme";
import FlexBetween from './FlexBetween';
import { LuExternalLink } from 'react-icons/lu';
import useMediaQuery from '@mui/material/useMediaQuery';

const ProjectCard = ({
    projectInfo
}) => {
    const theme = useTheme();
    const isMobileScreens = useMediaQuery("(max-width: 600px)");
    const maxwidth900 = useMediaQuery('(max-width: 900px)');
    const minWidth1400 = useMediaQuery('(min-width: 1400px)');

    // console.log(projectInfo);

    return (
        <Box sx={{
            width: "100%",
            height: "100%",
            padding: isMobileScreens ? "0.5rem": "1rem",
            display: "flex",
            flexDirection: "column",
            background: theme.palette.background.dark,
            borderRadius: "0.6rem",
            gap: isMobileScreens ? "0.1rem" : maxwidth900 ? "0.5rem" : "1rem",
        }}>
            <Box>
                <img src={`images/${projectInfo.imageFileName}`} alt="random" style={{
                    width: "100%", height: "auto",
                    aspectRatio: "16/9",
                    objectFit: "cover",
                    opacity: 0.8,
                }}
                loading="lazy" 
                />
            </Box>
            <FlexBetween sx={{

                flexDirection: "column",
                // height: "100%",
                gap: "2.6rem",
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
                    </Typography>

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