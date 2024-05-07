
import Box from "@mui/material/Box";
import "./CustomDrawer.css";

const CustomDrawer = ({
    open,
    setOpen,
    children
}) => {
  return (
    <Box className={`custom-drawer ${open ? 'custom-drawer-open' : ''}`}>
        <Box className="drawer-content">
            {children}
        </Box>
        <Box className="drawer-backdrop" onClick={() => setOpen(false)}></Box>
    </Box>
  )
}

export default CustomDrawer