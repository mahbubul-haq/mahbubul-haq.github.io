import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import useTheme from '@mui/material/styles/useTheme'

const tutoredCourses = [
    "Data Structures",
    "Algorithms",
    "Problem-Solving",
    "C",
    "C++",
    "Python",
    "Java",

    "Discrete Mathematics",
    "SQL"
]

const Experience = () => {

    const theme = useTheme()
    const isMobileScreens = useMediaQuery('(max-width: 600px)')

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
        }}>
            <Box sx={{
                border: `1px solid ${theme.palette.grey[450]}`,
                borderRadius: "0.5rem",
                padding: isMobileScreens ? "0.5rem" : "1rem",
            }}>
                <Typography variant="h4" sx={{ fontWeight: 600, color: theme.palette.text.secondary, mb: "1rem" }}>
                    Competitive Programming
                </Typography>
                <Typography variant="body1" sx={{ color: theme.palette.grey[300], fontWeight: 400 }}>
                    Competitive programming gave me the opportunity to solve complex problems and improve my problem-solving skills.
                    In the process, I learned a large number of algorithms and data structures which helped me to solve problems more efficiently.
                    It gave me the confidence in the field of programming.
                </Typography>
            </Box>

            <Box sx={{
                border: `1px solid ${theme.palette.grey[450]}`,
                borderRadius: "0.5rem",
                padding: isMobileScreens ? "0.5rem" : "1rem",
            }}>
                <Typography variant="h4" sx={{ fontWeight: 600, color: theme.palette.grey[300], mb: "1rem" }}>
                    Tutoring CSE Students
                </Typography>
                <Typography variant="body1" sx={{ color: theme.palette.grey[300], fontWeight: 400 }}>
                    I have been tutoring CSE students from the 3rd year of my undergraduate studies.
                    Teaching any topic helped me to understand the topic more deeply. I have experience in tutoring the following topics:

                </Typography>
                <Box sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                    mt: "1rem",
                }}>
                    {tutoredCourses.map((course, index) => (
                        <Typography
                            key={index}
                            variant="body1"
                            sx={{
                                color: theme.palette.grey[300],
                                fontWeight: 400,
                                fontSize: "1rem",
                                border: `1px solid ${theme.palette.grey[450]}`,
                                borderRadius: "0.5rem",
                                padding: "0.25rem 0.5rem",
                                width: "fit-content",
                            }}
                        >
                            {course}

                        </Typography>
                    ))}
                </Box>
            </Box>
        </Box>
    )
}

export default Experience