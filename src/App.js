import './App.css';
import Navbar from './Components/Navbar';
import { Box, Stack } from '@mui/material';
import Home from './Components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EventTemplate from './Components/EventTemplate';
import LoginPage from './Components/LoginPage';
import SignupPage from './Components/SignupPage';
import ClubTemplate from './Components/ClubTemplate';
function App() {
  return (
    <>
  <BrowserRouter>
<Box height={"100vh"} width={"100vw"} position={'absolute'} overflow={"hidden"}>
  <Stack>
<Box height={"10%"}>
<Navbar/>
</Box>
</Stack>

<Box sx={{width:"100%",height:"90%",overflow:"scroll",overflowX:"hidden","&::-webkit-scrollbar":{width:4,height:9},"&::-webkit-scrollbar-thumb":{background:"black",borderRadius:4,},"&::-webkit-scrollbar-thumb:hover":{background:"red",borderRadius:4,}}}>
  <Stack>
  <Routes>
 <Route path= "/" element={<Home/>}/>
 <Route path= "/event" element={<EventTemplate />}/>
 <Route path= "/login" element={<LoginPage />}/>
 <Route path= "/signup" element={<SignupPage />}/>
 <Route path= "/clubs" element={<ClubTemplate />}/>
 </Routes>
 </Stack>
</Box>

</Box>
</BrowserRouter>
   </>
  );
}

export default App;
