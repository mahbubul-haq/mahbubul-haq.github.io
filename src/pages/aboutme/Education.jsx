import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import useTheme from "@mui/material/styles/useTheme";


const notableCourses = [
    "OOP with C++ and Java",
    "Discrete Mathematics",
    "Numerical Methods",
    "Digital Logic Design",
    "Data Structures",
    "Database",
    "Theory of Computation",
    "Data Structures and Algorithms II",
    "Data Communication",
    "Microprocessors, Microcontrollers and Embedded Systems",

    "Compiler",
    "Software Engineering",
    "Computer Architecture",
    "Information System Design",
    "Operating System",
    "Basic Graph Theory",
    "Software Development",
    "Computer Security",
    "Computer Graphics",
];

const Education = () => {

    const isMobileScreens = useMediaQuery("(max-width: 600px)");
    const theme = useTheme();


    return (
        <Box>

            <Box
                sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    flexDirection: isMobileScreens ? "column" : "row",
                    gap: isMobileScreens ? "1rem" : "1rem",
                    //   mt: "3rem",
                }}
            >
                {true && (
                    <img
                        src="images/buet-logo.png"
                        style={{
                            width: "100px",
                            height: "100px",
                            objectFit: "cover",
                        }}
                        alt="BUET Logo"
                    />
                )}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.5rem",
                    }}
                >
                    <Typography
                        variant="h3"
                        sx={{
                            color: theme.palette.grey[200],
                            fontWeight: 500,
                            fontSize: isMobileScreens ? "1.4rem" : "2rem",
                        }}
                    >
                        Bangladesh University of Engineering and
                        Technology
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            color: theme.palette.grey[300],
                            fontWeight: 500,
                            fontSize: isMobileScreens ? "1.1rem" : "1.3rem",
                        }}
                    >
                        Bachelor of Science in Computer Science and
                        Engineering
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            color: theme.palette.grey[300],
                            fontWeight: 400,
                        }}
                    >
                        2017 - 2024
                    </Typography>
                </Box>
            </Box>
            {!isMobileScreens && (
                <>
                    <Typography
                        variant="body1"
                        sx={{
                            color: theme.palette.text.secondary,
                            fontWeight: 500,
                            fontSize: "1.2rem",
                            mt: "1.5rem",
                            mb: "0.3rem",
                        }}
                    >
                        Notable Courses
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            //variable size elements - variable number of columns
                            flexWrap: "wrap",
                            gap: "0.5rem",
                            //auto flow


                        }}
                    >
                        {notableCourses.map((course, index) => (
                            <Typography
                                key={index}
                                variant="body1"
                                sx={{
                                    color: theme.palette.text.secondary,
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
                </>
            )}
        </Box>
    )
}

export default Education