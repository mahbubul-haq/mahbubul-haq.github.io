import { useEffect } from 'react'
import { Box, Typography } from '@mui/material'

import { skillsData } from '../../data/data'

import useMediaQuery from '@mui/material/useMediaQuery'
import useTheme from '@mui/material/styles/useTheme'
import icons from '../../data/skillicons'
import ProficientIn from './ProficientIn'
import sample from "../../assets/images/sample.svg"


const SkillSection = () => {

    const isMobileScreens = useMediaQuery("(max-width: 600px)");
    const isNonMobileScreens = useMediaQuery('(min-width: 1000px)');
    const extraLargeScreens = useMediaQuery('(min-width: 1300px)');

    const theme = useTheme();

    useEffect(() => {

        let observer1 = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                let el = entry.target;
                if (entry.isIntersecting) {
                    el.style.opacity = 0.6;
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

        let el1 = document.querySelector(".skills-fill-gap-image");
        if (el1) observer1.observe(el1);

        // let event = window.addEventListener('resize', () => {
        //     let el = document.querySelector(".skills-fill-gap-image");
            
        //     if (window.innerWidth >= 1300) {
        //         if (el) el.style.display = "flex";
        //     }
        //     else {
        //         if (el) el.style.display = "none";
        //     }
        // });

        return () => {
            els.childNodes.forEach(el => {
                observer.unobserve(el);
            });

            if (el1) observer1.unobserve(el1);
            // window.removeEventListener('resize', event);
        }

    }, []);

    // useEffect(() => {
    //     if (extraLargeScreens) {
    //         let el = document.querySelector(".skills-fill-gap-image").style.display = "flex";
    //     }
    // }, [extraLargeScreens, isMobileScreens, isNonMobileScreens]);


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
                flexDirection: isMobileScreens ? "column" : "column",
                gap: "1rem",

            }}> <Box sx={{
                display: "flex",
                gap: "3rem",
            }}>
                    <Box
                        className="skills-container"
                        sx={{
                            display: "flex", flexDirection: "column", gap: "3rem",
                            width: extraLargeScreens ? "60%" : isNonMobileScreens ? "100%" : "100%",
                            
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
                    {/* {extraLargeScreens && */}
                        <Box sx={{
                            width: "40%",
                            // display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            opacity: 0,
                            transform: "translateX(4rem)",
                            transition: "all 0.5s ease-out",
                            display: extraLargeScreens ? "flex" : "none",
                        }}
                        className="skills-fill-gap-image"
                        >

                            <img src={sample} alt="sample" style={{ width: "100%", height: "auto" }} />
                        </Box>
                    {/* } */}
                </Box>

                <ProficientIn />
            </Box>

        </Box>
    )
}

export default SkillSection