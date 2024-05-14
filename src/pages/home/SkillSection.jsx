import {useEffect} from 'react'
import { Box, Divider, Typography } from '@mui/material'

import { skillsData, proficiencies } from '../../data/data'

import useMediaQuery from '@mui/material/useMediaQuery'
import useTheme from '@mui/material/styles/useTheme'
import icons from '../../data/skillicons'



const SkillSection = () => {

    const isMobileScreens = useMediaQuery("(max-width: 600px)");
    const isNonMobileScreens = useMediaQuery('(min-width: 1000px)');
    const theme = useTheme();

    useEffect(() => {

        let observer1 = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                let el = entry.target;
                if (entry.isIntersecting) {
                    el.style.opacity = 1;
                    el.style.transform = "translateY(0) translateX(0)";
                }
            });
        }, {
            threshold: 0
        });


        let observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                let el = entry.target;
                if (entry.isIntersecting) {
                    el.style.opacity = 1;
                    el.style.transform = "translateY(0)";
                }
            });
        }, {
            threshold: 0
        });

        let els = document.querySelector(".skills-container");
        els.childNodes.forEach(el => {
            observer.observe(el);
        });

        let els1 = document.querySelector(".proficiencies-container");
        observer1.observe(els1);

        return () => {
            els.childNodes.forEach(el => {
                observer.unobserve(el);
            });

            observer1.unobserve(els1);
        }   

    }, []);

    return (
        <Box sx={{
            width: "100%",
        }}>

            <Typography variant="h4" sx={{
                fontSize: isNonMobileScreens ? "2rem" : isMobileScreens ? "1.5rem" : "1.8rem",
                mb: isNonMobileScreens ? "4rem" : "3rem",
            }}>
                My Skills
            </Typography>
            <Box sx={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: isMobileScreens ? "column" : "row",
                gap: "1rem",

            }}>
                <Box
                    className="skills-container"
                 sx={{
                    display: "flex", flexDirection: "column", gap: "3rem",
                    width: isMobileScreens ? "100%" : "80%",
                }}>

                    {skillsData.map((skill, index) => (

                        <Box key={skill.skillType + index}
                            className={skill.skillType}
                            sx={{
                                opacity: 0,
                                transform: "translateY(4rem)",
                                transition: "all 0.5s ease-out",
                            }}
                        >
                            <Typography sx={{
                                fontWeight: 600,
                                fontSize: "1rem",
                                letterSpacing: "0.5px",
                                mb: "1rem",
                            }}>
                                {skill.skillType}
                            </Typography>
                            <Box sx={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: isMobileScreens ? "0.5rem" : "0.8rem",
                            }}>
                                {skill.list.map((item, index1) => (
                                    <Box key={index1} sx={{
                                        display: "flex",
                                        gap: "0.6rem",
                                        alignItems: "center",
                                        p: isMobileScreens ? "0.5rem 0.7rem" : "0.7rem 1rem",
                                        backgroundColor: "rgba(0,0,0,0.1)",
                                        width: "fit-content",
                                        borderRadius: "0.3rem",
                                        background: theme.palette.background.skillChip,
                                    }}>
                                        {!isMobileScreens && <Box sx={{
                                            color: icons[item.name]?.color,
                                            fontSize: "1.5rem",

                                            display: "flex",
                                            alignItems: "center",
                                        }}>
                                            {icons[item.name]?.icon}
                                        </Box>}
                                        <Typography sx={{
                                            fontSize: "1rem",
                                            opacity: 0.9,
                                        }}>
                                            {item.name}
                                        </Typography>
                                    </Box>
                                ))}

                            </Box>
                        </Box>

                    ))}

                </Box>
                
                <Box sx={{
                    width: isMobileScreens ? "100%" : "20%",
                    marginTop: isMobileScreens ? "2rem" : isNonMobileScreens ? "-6rem" : "-4rem",
                    display: isMobileScreens ? "block" : "block",
                    opacity: 0,
                    transform: isMobileScreens ? "translateY(6rem)" : "translateX(4rem)",
                    transition: isMobileScreens ? "all 0.5s ease-out" : "all 0.5s ease-out 0.5s",
                }}
                className="proficiencies-container"
                >
                    <Typography sx={{
                        fontWeight: 600,
                        fontSize: "1rem",
                        letterSpacing: "0.5px",

                    }}>
                        Proficient In


                    </Typography>
                    <Box sx={{
                        position: "relative",
                        opacity: 0.7
                    }}>
                        <Divider orientation='vertical' sx={{
                            // height: "500px",
                            width: "0.5px",
                            ml: "0.2rem",
                            backgroundColor: theme.palette.primary.light,
                            position: "absolute",
                            top: "0",
                            height: "100%"
                        }} />

                        <Box sx={{
                            pt: "1.5rem",
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.2rem",
                        
                        }}>
                            {proficiencies.map((skillName, index2) => 
                            <Box
                                key={index2}
                             sx={{
                                display: "flex",
                                alignItems: "center",
                               
                            }}>
                                <Divider sx={{
                                    // my: "1rem",
                                    width: "2rem",
                                    backgroundColor: theme.palette.primary.light,
                                    ml: "0.2rem",
                                    borderBottom: `1px solid ${theme.palette.primary.light}`
                                }} />
                                <Typography sx={{
                                    fontSize: "1rem",
                                    // fontWeight: 600,
                                    letterSpacing: "0.25px",
                                    
                                    // mb: "1rem",
                                }}>
                                    {skillName}
                                </Typography>
                            </Box>
                            )}
                        </Box>
                    </Box>
                </Box>
            </Box>

        </Box>
    )
}

export default SkillSection