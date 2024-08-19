import React from 'react'
import ControlledCarouselEvent from './ControlledCarouselEvent'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Avatar, Button, CardActionArea, Divider } from '@mui/material';
import { Box, Stack, Typography, Card } from '@mui/material'
import { ArrowBendDoubleUpLeft, CalendarCheck, DotsThree, HeartStraight, MapPin, PaperPlaneRight, ShareNetwork, Users } from "phosphor-react";
import { Link } from 'react-router-dom';
import "./Home.css"
const UserProfileTemplate = () => {
    return (
        <>
            <Box className="event-margin">
                <Box className="content-block" paddingTop={4}>
                    <Box width={"100%"}>
                        <Stack width={"100%"} justifyContent={"center"} spacing={"-3em"}>
                            <Box className="club-profile-banner">
                            </Box>
                            <Box className="club-profile-title-row" width={"100%"} paddingLeft={"2%"} gap={"1em"}>
                                <Box className="club-profile-img">

                                </Box>
                                <Stack>
                                    <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}><Typography variant='h4'>User Name</Typography>
                                    <Box display={"flex"} gap={2}>
                                    <Card sx={{width:"6em", height:"2em", alignItems:"center", justifyContent:"center", display:"flex", backgroundColor:"aliceblue", borderRadius:"10px"}}> <Typography variant='p'>Share</Typography></Card>
                                    <Link to={"/"} style={{ textDecoration:"none" }}><Card sx={{width:"6em", height:"2em", alignItems:"center", justifyContent:"center", display:"flex", backgroundColor:"aliceblue", borderRadius:"10px"}}> <Typography variant='p'>Edit Profile</Typography></Card></Link>
                                    </Box>
                                    </Stack>
                                    <Typography variant='body'>@username</Typography>
                                    <Typography variant='body'>CSE</Typography>
                                    <Typography variant='body'>CSE</Typography>
                                </Stack>
                            </Box>
                        </Stack>
                        <Stack direction={"column"} p={2} paddingTop={2}>
                            <Typography fontSize={"2em"} >Attended Events</Typography>
                            <Stack direction={"row"} spacing={3} paddingTop={2} sx={{ overflowX: "scroll", "&::-webkit-scrollbar": { width: 4, height: 6 }, "&::-webkit-scrollbar-thumb": { background: "white", borderRadius: 4, }, "&::-webkit-scrollbar-thumb:hover": { background: "black", borderRadius: 4, }, paddingBottom: 1 }}>
                                <Card className="user-attended-event-card" sx={{ backgroundColor: "#D9D9D9", borderRadius: "15px" }}>
                                    <Stack sx={{ justifyContent: "center", alignItems: "center", width: "100%" }} spacing={2} p={2}>
                                        <Card sx={{ height: "10.37em", width: "10.37em", borderRadius: "100%" }} >
                                        </Card>
                                        <Stack sx={{ justifyContent: "center", alignItems: "center", width: "80%" }} spacing={1}>
                                            <Typography variant="h6">Workshop on No Coding Platform-Framer</Typography>
                                            <Typography variant='body2'>By Google Developer Student Club</Typography>
                                            <Typography variant='body'>Friday, 12 Jan 2024</Typography>
                                        </Stack>
                                    </Stack>
                                </Card>
                            </Stack>
                            <Box  paddingTop={4}>
                            <Typography fontSize={"2em"}>Clubs</Typography>
                            <Stack direction={"row"} spacing={3}>
                            <Stack sx={{ justifyContent: "center", alignItems: "center",}}>
                            <Card sx={{ height: "8.37em", width: "8.37em", borderRadius: "100%" }}>                                         
                            <img src="favicon.ico" alt='' class="circle-cards"/>
                            </Card>
                            <Typography variant="body">Google Developer Student Club</Typography>
                            <Typography variant='body2'>Member</Typography>
                            </Stack>
                            <Stack sx={{ justifyContent: "center", alignItems: "center",}}>
                            <Card sx={{ height: "8.37em", width: "8.37em", borderRadius: "100%",}}>
                            <img src="favicon.ico" alt='' class="circle-cards"/>                                      
                             </Card>
                            <Typography variant="body">Google Developer Student Club</Typography>
                            <Typography variant='body2'>Member</Typography>
                            </Stack>
                            </Stack>
                            </Box>
                        </Stack>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default UserProfileTemplate