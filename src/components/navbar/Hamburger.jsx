import Box from "@mui/material/Box";


import "./Hamburger.css";

const Hamburger = (
    { multiplier = 1 }
) => {

    let root = document.documentElement;

    root.style.setProperty('--multiplier', multiplier);


    const handleClick = () => {
        document.querySelector(".hamburger").classList.toggle("is-active");
    }

    return (
        <Box className="hamburger" component="button" sx={{
            zIndex: 2000,
        }}
            onClick={handleClick}
        >
            <Box className="ham-bar"></Box>
        </Box>
    )

}

export default Hamburger;