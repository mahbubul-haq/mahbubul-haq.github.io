import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import BtnPrimary from '../components/BtnPrimary'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const NotFound = () => {
    const isMobileScreens = useMediaQuery("(max-width: 600px)");
    const navigate = useNavigate();

    useEffect(() => {
        document.querySelector(".app-container").scrollTo(0, 0);
    }, []);

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            height: '100vh',
            gap: '2rem',
            width: '100%',
            padding: '0 1rem',
        }}>
            <Typography variant={isMobileScreens ? "h3" : "h2"} sx={{
                textAlign: 'center',
            }}> Error 404: Page Not Found</Typography>
            <BtnPrimary
                onClick={() => navigate("/")}
            >Go to Home Page</BtnPrimary>
        </Box>
    )
}

export default NotFound