import Box from "@mui/material/Box";
import styled from "@emotion/styled";

const NavTab = styled(Box)(({ theme }) => (
    {
        position: 'relative',
        cursor: 'pointer',
        transition: 'all 0.2s ease-in',
        "&:hover": {
            "&::before": {
                width: '75%',
            }
        },
        "&::before": {
            borderBottom: `3px solid ${theme.palette.secondary.main}`,
            content: '""',
            transition: 'width 0.2s ease-in',
            position: 'absolute',
            left: 0,
            bottom: 0,
            width: '0%',
        }
    }
));

export default NavTab;