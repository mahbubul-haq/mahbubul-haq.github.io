import Box from "@mui/material/Box";


import ProblemSolvingRight from "./ProblemSolvingRight";
import ProblemSolvingLeft from "./ProblemSolvingLeft";

const ProblemSolving = () => {
    
    return (
        <Box
            sx={{
                width: "100%",
                position: "relative",
            }}
        >
            <ProblemSolvingLeft />
            <ProblemSolvingRight />
        </Box>
    );
};

export default ProblemSolving;
