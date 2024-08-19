import { Avatar, Box, Stack, Typography,IconButton } from '@mui/material'
import React ,{useState}from 'react'
import "./Navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
      setIsOpen(!isOpen);
  };
  return (
   <>
   <Stack direction={"row"} className="tabs" p={2} spacing={"10%"}>
    <Stack>

    </Stack>
   <Stack direction={"row"} spacing={3}>
   <Link to={"/"} style={{ textDecoration:"none" }}><Box><Typography sx={{color:"black"}}>Home</Typography></Box></Link>
   <Link to={"/"} style={{ textDecoration:"none" }}><Box><Typography sx={{color:"black"}}>Discover</Typography></Box></Link>
   <Link to={"/tickets"} style={{ textDecoration:"none" }}><Box><Typography sx={{color:"black"}}>Tickets</Typography></Box></Link>
   <Link to={"/clubs"} style={{ textDecoration:"none" }}><Box><Typography sx={{color:"black"}}>Clubs</Typography></Box></Link>
   </Stack>
   <Stack direction={"row"}>
   <Box><Avatar src='favicon.ico' onClick={toggleDropdown} alt='K' className='profile'/>
  
      </Box>
     
   </Stack>
   
   </Stack>
   <Box alignItems={"center"} paddingLeft={"95%"}>
   {isOpen && (
        <div className="dropdown">
         <Stack>
            <IconButton sx={{fontSize:"1em"}} href='/signup' > Sign Up
            </IconButton>
            <IconButton sx={{fontSize:"1em"}} href='/login' > Login
            </IconButton>
            </Stack>
        </div>
        
      )}
      </Box>
   </>
  )
}

export default Navbar