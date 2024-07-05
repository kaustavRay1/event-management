import { Box, Card, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"
const ClubTemplate = () => {
  return (
    <>
    <Box className="clubs-margin">
    <Box className="clubs-box">
    <Stack direction={"column"} spacing={3} paddingTop={3}>
    <Typography variant="h4">Clubs</Typography>
    <Box className="clubs-card-row" display={"flex"} gap={2} >
    <Box className="clubs-block">
    <Stack p={4} spacing={1}>
        <Card sx={{height:"10.375em", width:"10.375em", borderRadius:"100%",}}>
        </Card>
        <Link to={"/club"} style={{ textDecoration:"none", color:"black" }}><Typography variant='h4'>Google Developer Student Club-MSIT</Typography></Link>
        <Typography variant='body'>Tech Club</Typography>
        <Typography variant='body'>Perform activity around</Typography>
        <Stack direction={"row"} spacing={2}>
        <Card sx={{ backgroundColor: "aliceblue", minHeight: "1em", width: "4em", justifyContent: "center", alignContent: "center", display: "flex", alignItems: "center",}}>
                <Typography fontSize={"0.5em"}>Suggested</Typography>
              </Card>
              <Card sx={{ backgroundColor: "aliceblue", minHeight: "1em", width: "4em", justifyContent: "center", alignContent: "center", display: "flex", alignItems: "center",}}>
                <Typography fontSize={"0.5em"}>Tech Club</Typography>
              </Card>
              <Card sx={{ backgroundColor: "aliceblue", minHeight: "1em", width: "4em", justifyContent: "center", alignContent: "center", display: "flex", alignItems: "center", }}>
                <Typography fontSize={"0.5em"}>GDSC</Typography>
              </Card>
        </Stack>
    </Stack>
   </Box>
    <Box className="clubs-block">
    <Stack p={4} spacing={1}>
        <Card sx={{height:"10.375em", width:"10.375em", borderRadius:"100%",}}>
        </Card>
        <Typography variant='h4'>Google Developer Student Club-MSIT</Typography>
        <Typography variant='body'>Tech Club</Typography>
        <Typography variant='body'>Perform activity around</Typography>
        <Stack direction={"row"} spacing={2}>
        <Card sx={{ backgroundColor: "aliceblue", minHeight: "1em", width: "4em", justifyContent: "center", alignContent: "center", display: "flex", alignItems: "center",}}>
                <Typography fontSize={"0.5em"}>Suggested</Typography>
              </Card>
              <Card sx={{ backgroundColor: "aliceblue", minHeight: "1em", width: "4em", justifyContent: "center", alignContent: "center", display: "flex", alignItems: "center", }}>
                <Typography fontSize={"0.5em"}>Tech Club</Typography>
              </Card>
              <Card sx={{ backgroundColor: "aliceblue", minHeight: "1em", width: "4em", justifyContent: "center", alignContent: "center", display: "flex", alignItems: "center", }}>
                <Typography fontSize={"0.5em"}>GDSC</Typography>
              </Card>
        </Stack>
    </Stack>
    </Box>
    </Box>
    <Box className="clubs-card-row" display={"flex"} gap={2}>
    <Box className="clubs-block">
    <Stack p={4} spacing={1}>
        <Card sx={{height:"10.375em", width:"10.375em", borderRadius:"100%",}}>
        </Card>
        <Typography variant='h4'>Google Developer Student Club-MSIT</Typography>
        <Typography variant='body'>Tech Club</Typography>
        <Typography variant='body'>Perform activity around</Typography>
        <Stack direction={"row"} spacing={2}>
        <Card sx={{ backgroundColor: "aliceblue", minHeight: "1em", width: "4em", justifyContent: "center", alignContent: "center", display: "flex", alignItems: "center", }}>
                <Typography fontSize={"0.5em"}>Suggested</Typography>
              </Card>
              <Card sx={{ backgroundColor: "aliceblue", minHeight: "1em", width: "4em", justifyContent: "center", alignContent: "center", display: "flex", alignItems: "center", }}>
                <Typography fontSize={"0.5em"}>Tech Club</Typography>
              </Card>
              <Card sx={{ backgroundColor: "aliceblue", minHeight: "1em", width: "4em", justifyContent: "center", alignContent: "center", display: "flex", alignItems: "center", }}>
                <Typography fontSize={"0.5em"}>GDSC</Typography>
              </Card>
        </Stack>
    </Stack>
    </Box>
    <Box className="clubs-block">
    <Stack p={4} spacing={1}>
        <Card sx={{height:"10.375em", width:"10.375em", borderRadius:"100%", }}>
        </Card>
        <Typography variant='h4'>Google Developer Student Club-MSIT</Typography>
        <Typography variant='body'>Tech Club</Typography>
        <Typography variant='body'>Perform activity around</Typography>
        <Stack direction={"row"} spacing={2}>
        <Card sx={{ backgroundColor: "aliceblue", minHeight: "1em", width: "4em", justifyContent: "center", alignContent: "center", display: "flex", alignItems: "center",}}>
                <Typography fontSize={"0.5em"}>Suggested</Typography>
              </Card>
              <Card sx={{ backgroundColor: "aliceblue", minHeight: "1em", width: "4em", justifyContent: "center", alignContent: "center", display: "flex", alignItems: "center", }}>
                <Typography fontSize={"0.5em"}>Tech Club</Typography>
              </Card>
              <Card sx={{ backgroundColor: "aliceblue", minHeight: "1em", width: "4em", justifyContent: "center", alignContent: "center", display: "flex", alignItems: "center",}}>
                <Typography fontSize={"0.5em"}>GDSC</Typography>
              </Card>
        </Stack>
    </Stack>
    </Box>
    </Box>
   <Box  sx={{ justifyContent: "center", display: "flex", alignItems: "center",}} paddingBottom={3} paddingTop={2}> 
    <Card sx={{ backgroundColor: "#D9D9D9", minHeight: "2em", width: "8em", justifyContent: "center", alignContent: "center", display: "flex", alignItems: "center",}}>
                <Typography fontSize={"1em"}>Load More</Typography>
              </Card>
    </Box>
    </Stack>
   
    </Box>
    
    </Box>
    </>
  )
}

export default ClubTemplate