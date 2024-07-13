import React from 'react';
import "./Home.css";
import { Box, Input, NativeSelect, Select, Stack, Typography, Card, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
const ClubEventForm = () => {
  return (
    <Box className= "event-margin" >
    <Box className= "content-block">
        <Box paddingTop={5}>
        <Box paddingTop={2} paddingBottom={2} display={"flex"} gap={2} width={"100%"} overflow={"hidden"}>
        <Stack width={"33%"}>
        <Divider orientation="horizontal" style={{ backgroundColor: "#1C1B1F", height: "3px", width:"100%", borderRadius:"15px" }}/>
        <Typography sx={{color:"#1C1B1F"}}>Details</Typography>
        </Stack>
        <Stack width={"33%"}>
        <Divider orientation="horizontal" style={{ backgroundColor: "#D9D9D9", height: "3px", width:"100%", borderRadius:"15px" }}/>
        <Typography sx={{color:"#D9D9D9"}}>Add Speaker</Typography>
        </Stack>
        <Stack width={"33%"}>
        
        <Divider orientation="horizontal" style={{ backgroundColor: "#D9D9D9", height: "3px", width:"100%", borderRadius:"15px" }}/>
        <Typography sx={{color:"#D9D9D9"}}>Additional Form</Typography>
        </Stack></Box>
        <form className="event-form-block">
            <Box  p={2} paddingTop={2}>
            <Box gap={4} width={"100%"} display={"flex"} className="form-flex-dir" justifyContent={"space-between"}>
            <Box>
            <Typography >Event Name</Typography>
            <input type='text' required style={{ minWidth:"60vw", borderRadius:"6px", height:"2em",}}/>
            </Box>
            <Box>
            <Typography>Event Category</Typography>
            <NativeSelect sx={{height:"2em", width:"10em"}}>
                <option>Choose Category</option>
                <option>Tech</option>
                <option>Cultural</option>
                <option>Sports</option>
                <option>Art</option>
                <option>All in One</option>
                </NativeSelect>
            </Box>
            </Box>
            <Box gap={"10%"} width={"60vw"} display={"flex"} paddingTop={2} alignContent={"center"} className="form-flex-dir">
            <Box>
            <Typography >Date</Typography>
            <input type='date' required style={{borderRadius:"6px", height:"2em"}}/>
            </Box>
            <Box>
            <Typography>Time</Typography>
            <input type="time" style={{height:"2em", width:"6em", borderRadius:"6px",}} defaultValue={"13:00"}/> To <input type="time" style={{height:"2em", width:"6em", borderRadius:"6px",}} defaultValue={"16:00"}/>
            </Box>
            </Box>
            <Box paddingTop={2}>
            <Typography >Event Description</Typography>
            <textarea  style={{width:"100%", borderRadius:"6px",height:"10em"}} placeholder='Event Description'/>
            </Box>
            <Box>
            <Typography >Mode of Event :</Typography>
            <input type="radio" name='w' id='n1'/> Offline <br/>
            <input type="radio" name='w' id='n2'/> Online
            </Box>
            <Box paddingTop={2} >
            <Typography >Upload Image</Typography>
            <Box paddingTop={1}  alignItems={"center"} justifyContent={"center"} display={"flex"}>
              <img src="uploadimg.svg" alt='s' width={"80%"} height={"100%"} />
              </Box>
            </Box>
            <Box paddingTop={2} gap={2} p={2} sx={{display:"flex", justifyContent:"flex-end"}}>
                            <Box>
                                <Link to={""} style={{ textDecoration: 'none' }}><Card sx={{ backgroundColor: "#1C1B1F", height: "2em", width: "10em", justifyContent: "center", alignItems:"center", display: "flex", borderRadius: "10px", color:"#ffff" }}>
                                <Typography fontSize={"1em"}>Save as draft</Typography>
                            </Card></Link>
                            </Box>
                            <Box>
                                <Link to={"/clubeventformaddspeaker"} style={{ textDecoration: 'none' }}><Card sx={{ backgroundColor: "#1C1B1F", height: "2em", width: "6em", justifyContent: "center", alignItems:"center", display: "flex", borderRadius: "10px", color:"#ffff" }}>
                                <Typography fontSize={"1em"}>Continue</Typography>
                            </Card></Link>
                            </Box>
                        </Box>
            </Box>
        </form>
    </Box>
        
    </Box>
    </Box>
  )
}

export default ClubEventForm