import React from 'react';
import "./Home.css";
import { Box, Input, NativeSelect, Select, Stack, Typography, Card } from '@mui/material';
import { Link } from 'react-router-dom';
const ClubEventForm = () => {
  return (
    <Box className= "event-margin" >
    <Box className= "content-block">
        
        <Box paddingTop={5}>
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
                <option>Fun</option>
                <option>Torture</option>
                <option>Kuch krenge</option>
                <option>Torture++</option>
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