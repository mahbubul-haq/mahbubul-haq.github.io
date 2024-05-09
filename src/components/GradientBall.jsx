import Box from "@mui/material/Box";

const GradientBall = ({
    width = "100px",
    height = "100px",
    background = "black",
}) => {

    
  return (
    <Box sx={{
        width: width,
        height: height,
        borderRadius: "50%",
        // background: `radial-gradient( circle at 10% 50%, ${theme.palette.background.bubbleTop} 10%, ${theme.palette.background.bubbleBottom} 100%)`,
        background: background,
        transform: "rotate(45deg)",
        
        // animation: "rotate 5s linear infinite",
        }}></Box>

  )
}

export default GradientBall