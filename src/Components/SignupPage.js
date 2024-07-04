import { Box, Card, NativeSelect, Select, Stack, Typography } from '@mui/material'
import React from 'react'
import "./Home.css"
import { PaperPlaneRight } from 'phosphor-react'
const SignupPage = () => {
  return (
    <>
    <Stack direction={"row"} p={2} justifyContent={"center"} alignItems={"center"} spacing={2}>
    <Box className="login-img-box">
      <Box className="login-img">
        <img src="group 186.svg" height={"100%"} width={"100%"}/>
        </Box>
    </Box>
    <Box className="login-box">
    <Box paddingTop={2} paddingLeft={3}><h2 >Onboarding</h2></Box>
    <Box className="signup-form">
    <Stack direction={"column"} justifyContent={"center"}>
        <form>
        <Stack direction={"column"}>
            <Box className="" justifyContent={"center"} alignItems={"center"} display={"flex"} paddingTop={5}>
              <form>
                <Typography paddingBottom={1}>Full Name</Typography>
              <input type="text" name="name"  className="login-input-box" placeholder="Full Name"/>
              <Typography paddingBottom={1} paddingTop={0.5}>Student Enrollment ID</Typography>
              <input type="text" name="name"  className="login-input-box" placeholder="Student Enrollment ID"/>
            <Box className="login-form-dropdown">
              <Stack>
            <Typography>Department</Typography>
             <NativeSelect type="dropdown" sx={{height:"2em", width:"6em",}}>
              <option>CSBS</option>
              <option>CSE</option>
              <option>CSBS</option>
              <option>CSE</option>
              <option>CSBS</option>
              <option>CSE</option>
              <option>CSBS</option>
              <option>CSE</option>
             </NativeSelect>
              </Stack>
              <Stack>
                <Typography>Year</Typography>
                <NativeSelect type="dropdown" sx={{height:"2em", width:"4em",}}>
              <option>1st</option>
              <option>2nd</option>
              <option>3rd</option>
              <option>4th</option>
              <option>5th</option>
             </NativeSelect>
              </Stack>
            </Box>
            <Typography paddingBottom={1}>Email</Typography>
              <input type="email" name="name"  className="login-input-box" placeholder="info@example.com"/>
              <Typography paddingBottom={1} paddingTop={0.5}>Password</Typography>
              <input type="password" name="name"  className="login-input-box" placeholder="Password"/>
              <Box paddingTop={2}><input type="submit" value={"Login"} className="login-btn"/></Box>
              
              </form>
              
              </Box>
            </Stack>
        </form>
    </Stack>
    </Box>
    </Box>
    </Stack>
        </>
  )
}

export default SignupPage