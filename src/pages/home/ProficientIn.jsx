import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';
import useTheme from '@mui/material/styles/useTheme';
import useMediaQuery from '@mui/material/useMediaQuery';
import { proficiencies } from '../../data/data';

const ProficientIn = () => {

    const theme = useTheme();
    const isMobileScreens = useMediaQuery("(max-width: 600px)");
    const extraSmallScreens = useMediaQuery('(max-width: 300px)');
    const minWidth800 = useMediaQuery('(min-width: 800px)');
    const maxWidth400 = useMediaQuery('(max-width: 400px)');

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

        let els1 = document.querySelector(".proficiencies-container");
        observer1.observe(els1);

        return () => {
            observer1.unobserve(els1);
        }
    }
        , []);

        const processSkills = (skills) => {
            if (extraSmallScreens) return skills;
            if (isMobileScreens) {
                let result = new Array(skills.length).fill(null), i = 0, j = 0, start = 0;
                while (j < skills.length && start < 2) {
                    result[i] = skills[j];
                    i += 2;
                    j++;
                    if (i >= skills.length) {
                        i = start + 1;
                        start++;
                    }
                }
                return result;
            }
            
            let result = new Array(skills.length).fill(null), i = 0, j = 0, start = 0;
            while (j < skills.length && start < 4) {
                result[i] = skills[j];
                i += 4;
                j++;
                if (i >= skills.length) {
                    i = start + 1;
                    start++;
                } 
            }
            return result;
        }


  return (
    <Box sx={{
        width: isMobileScreens ? "100%" : "100%",
        // marginTop: isMobileScreens ? "1rem" : isNonMobileScreens ? "1rem" : "1rem",
        display: isMobileScreens ? "block" : "block",
        // display: "none",
        opacity: 1,
        transform: isMobileScreens ? "translateY(6rem) " : "translateY(6rem) ",
        transition: isMobileScreens ? "all 0.5s ease-out" : "all 0.5s ease-out",

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


            {!extraSmallScreens &&
                <Divider orientation='vertical' sx={{
                    // height: "500px",
                    width: "0.5px",
                    ml: "0.2rem",
                    mt: "0.5rem",
                    backgroundColor: theme.palette.primary.light,
                    position: "absolute",
                    top: "0",
                    height: `calc(100% - 0.5rem)`,
                    left: "50%"
                }} />
            }
            {!isMobileScreens && <>


                <Divider orientation='vertical' sx={{
                    // height: "500px",
                    width: "0.5px",
                    ml: "0.2rem",
                    mt: "0.5rem",
                    backgroundColor: theme.palette.primary.light,
                    position: "absolute",
                    top: "0",
                    height: `calc(100% - 0.5rem)`,
                    left: "25%"
                }} />

                <Divider orientation='vertical' sx={{
                    // height: "500px",
                    width: "0.5px",
                    ml: "0.2rem",
                    mt: "0.5rem",
                    backgroundColor: theme.palette.primary.light,
                    position: "absolute",
                    top: "0",
                    height: `calc(100% - 0.5rem)`,
                    left: "75%"
                }} />
            </>}
            {!extraSmallScreens &&
                <Divider sx={{
                    width: !isMobileScreens ? "75%": "50%",
                    position: "absolute",
                    backgroundColor: theme.palette.primary.light,
                    borderBottom: `1px solid ${theme.palette.primary.light}`,
                    mt: "0.5rem",
                    ml: "0.2rem",
                }} />
            }

            <Box sx={{
                pt: extraSmallScreens ? "1rem": "2rem",
                display: "grid",
                gridTemplateColumns: extraSmallScreens ? "repeat(1, fr)" : isMobileScreens ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
                // gap: "0.2rem",

            }}>
                {processSkills(proficiencies).map((skillName, index2) =>
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

                           
                            whiteSpace: "nowrap",
                            // truncate text with ellipsis
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            width: minWidth800 ? "100%" : isMobileScreens ? (maxWidth400 ? "10ch" : "100%") : "9ch",
                        }}>
                            {skillName}
                        </Typography>
                    </Box>
                )}
            </Box>
        </Box>
    </Box>
  )
}

export default ProficientIn