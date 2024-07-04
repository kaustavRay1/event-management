import { Avatar, Box, Stack, Typography } from '@mui/material'
import React from 'react'
import "./Navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
   <>
   <Stack direction={"row"} className="tabs" p={2} spacing={"10%"}>
    <Stack>

    </Stack>
   <Stack direction={"row"} spacing={3}>
   <Link to={"/"} style={{ textDecoration:"none" }}><Box><Typography sx={{color:"black"}}>Home</Typography></Box></Link>
   <Link to={"/"} style={{ textDecoration:"none" }}><Box><Typography sx={{color:"black"}}>Discover</Typography></Box></Link>
   <Link to={"/"} style={{ textDecoration:"none" }}><Box><Typography sx={{color:"black"}}>Tickets</Typography></Box></Link>
   <Link to={"/clubs"} style={{ textDecoration:"none" }}><Box><Typography sx={{color:"black"}}>Clubs</Typography></Box></Link>
   </Stack>
   <Stack direction={"row"}>
   <Box><Avatar src='favicon.ico' alt='K' className='profile'/></Box>
   </Stack>
   </Stack>
   </>
  )
}

export default Navbar