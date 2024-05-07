import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import Button from "@mui/material/Button";


const BtnPrimary = styled(Button)(({ theme }) => (
    {
        background: `linear-gradient(to bottom, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
        color: theme.palette.text.btnPrimary,
        padding: "0.8rem 1.2rem",
        borderRadius: 9999,
        textTransform: "none",
        transition: "all 0.3s",
        "&:hover": {
            backgroundColor: theme.palette.primary.dark,
        },
        fontWeight: 500,
        boxShadow: `0 4px 4px ${theme.palette.shadow.btnPrimary}`,
        "&:hover": {
            background: `linear-gradient(to bottom, ${theme.palette.primary.light} 0%, ${theme.palette.primary.dark} 100%)`,
        },
        height: 48,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }
));


export default BtnPrimary;