import './App.css';
import Navbar from './Components/Navbar';
import { Box, Stack } from '@mui/material';
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EventTemplate from './Components/EventTemplate';
import LoginPage from './Components/LoginPage';
import SignupPage from './Components/SignupPage';
import ClubTemplate from './Components/ClubTemplate';
import MyTickets from './Components/MyTickets';
import ClubProfileTemplate from './Components/ClubProfileTemplate';
import UserProfileTemplate from './Components/UserProfileTemplate';
import ClubEventForm from './Components/ClubEventForm';
import ClubEventFormAddSpeakers from './Components/ClubEventFormAddSpeakers';
import ClubEventFormAdditionalDetails from './Components/ClubEventFormAdditionalDetails';
import ScrollToTop from './Components/ScrollToTop';
function App() {
  
  return (
    <>
    
  <Router>
 
<Box  height={"100vh"} width={"100vw"} position={'absolute'} overflow={"hidden"}>

  <Stack>

<Box maxHeight={"4em"}>
<Navbar/>
</Box>
</Stack>


<Box   sx={{width:"100%",height:"90%",overflow:"scroll",overflowX:"hidden","&::-webkit-scrollbar":{width:4,height:9},"&::-webkit-scrollbar-thumb":{background:"grey",borderRadius:4,},"&::-webkit-scrollbar-thumb:hover":{background:"black",borderRadius:4,}}}>
<ScrollToTop/> 
  <Stack id="main-content">

  <Routes>
 <Route path= "/" element={<Home/>}/>
 <Route path= "/event" element={<EventTemplate />}/>
 <Route path= "/login" element={<LoginPage />}/>
 <Route path= "/signup" element={<SignupPage />}/>
 <Route path= "/clubs" element={<ClubTemplate />}/>
 <Route path= "/tickets" element={<MyTickets />}/>
 <Route path="/club" element={<ClubProfileTemplate/>}/>
 <Route path="/user" element={<UserProfileTemplate/>}/>
 <Route path="/clubeventform" element={<ClubEventForm/>}/>
 <Route path="/clubeventformaddspeaker" element={<ClubEventFormAddSpeakers/>}/>
 <Route path="/clubeventformadditionaldetails" element={<ClubEventFormAdditionalDetails/>}/>
 </Routes>
 </Stack>
</Box>

</Box>
</Router>
   </>
  );
}

export default App;
