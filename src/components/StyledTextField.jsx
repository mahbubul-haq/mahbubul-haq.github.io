import styled from "@emotion/styled";
import { TextField } from "@mui/material";


const StyledTextField = styled(TextField)(({ theme }) => {

    return {
        variant: "standard",
      
        // no background color
        "& .MuiTextField-root": {
            background: "transparent",
            
        },

        "& .MuiFormControl-root": {
            background: "transparent",
        },
        "& .MuiOutlinedInput-root": {
            background: "transparent",
        },

        "& .MuiInputBase-root": {
            background: "transparent",
            boxShadow: `0 1px 3px ${theme.palette.secondary.main70}`,

        },

        // not outline mui focused
        "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
        },

        "& .MuiOutlinedInput-input": {
            color: theme.palette.grey[300],
        },

        // no background while filled

        

        // add hover box shadow
        "& .MuiOutlinedInput-root:hover": {
            boxShadow: `0 1px 3px ${theme.palette.secondary.main}`,

        },

        "& .MuiOutlinedInput-root.Mui-focused": {
            outline: `1px solid ${theme.palette.secondary.main70}`,
            boxShadow: "none",

        },

        // remove webkit autofill background color
        "& .MuiOutlinedInput-input:-webkit-autofill": {
            WebkitBoxShadow: `0 0 0 100px ${theme.palette.background.dark} inset`,
            WebkitTextFillColor: theme.palette.grey[300],
        },
    
        
       
        
    };
});

export default StyledTextField;
