import React, {useState} from 'react';
import "./Home.css";
import { Box, Input, NativeSelect, Select, Stack, Typography, Card, Divider } from '@mui/material';
import { Link } from 'react-router-dom';

const ClubEventFormAdditionalDetails = () => {
    const [inputs, setInputs] = useState([{ value: '' }]);

  // Handle input change
  const handleInputChange = (index, event) => {
    const newInputs = inputs.map((input, i) => {
      if (i === index) {
        return { value: event.target.value };
      }
      return input;
    });
    setInputs(newInputs);
  };

  // Handle adding a new input field
  const handleAddInput = () => {
    setInputs([...inputs, { value: '' }]);
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted Inputs:', inputs);
  };
  return (
    <Box className= "event-margin" >
    <Box className= "content-block">
        
        <Box paddingTop={5}>
        <form className="event-form-block" onSubmit={handleSubmit}>
            <Box paddingTop={2} gap={2} p={2} >
                <Box className="eventmcq-form-block">
      {inputs.map((input, index) => (
        <div key={index}>
            <Box display={"flex"} gap={2}  p={2} className="form-flex-dir">
          <input
            type="text"
            value={input.value}
            onChange={(event) => handleInputChange(index, event)}
            placeholder="Untitled Question"
            style={{ minWidth:"35vw", borderRadius:"6px", height:"2em",}}
          /> <Box><NativeSelect type="dropdown" sx={{height:"2em", width:"9em",}}>
          <option>Multiple Choice</option>
         </NativeSelect></Box>
          </Box>
          <Box p={2}>
            <input type='radio' value={"option1"} name="n1"/>option1 <br/>
            <input type='radio' value={"option2"} name="n1"/>option2 <br/>
            <input type='radio' value={"option3"} name="n1"/>option3
          </Box>
        </div>
      ))}
      </Box>
      <Box paddingTop={2}>
      <button type="button" onClick={handleAddInput}  style={{ backgroundColor: "#1C1B1F", height: "2em", width: "6em", justifyContent: "center", alignItems:"center", display: "flex", borderRadius: "10px", color:"#ffff" }}>
        Add Input
      </button> </Box>
     
                           <Box display={"flex"} alignItems={"center"} paddingTop={3} justifyContent={"space-between"} className="form-flex-dir">
                                <Input type="reset" value={"Skip"} />
                            <Box  sx={{display:"flex", justifyContent:"flex-end"}} gap={2} >
                                <Link to={""} style={{ textDecoration: 'none' }}><Card sx={{ backgroundColor: "#1C1B1F", height: "2em", width: "10em", justifyContent: "center", alignItems:"center", display: "flex", borderRadius: "10px", color:"#ffff" }} >
                                <Typography fontSize={"1em"}>Save as draft</Typography>
                            </Card></Link>
                            
                           
                            <button type="submit" style={{ backgroundColor: "#1C1B1F", height: "2em", width: "6em", justifyContent: "center", alignItems:"center", display: "flex", borderRadius: "10px", color:"#ffff" }}>Submit</button>
                            
                            </Box>
                            </Box>
                           
                     </Box>
           </form>
        </Box>
        </Box>
    </Box>
  )
}

export default ClubEventFormAdditionalDetails