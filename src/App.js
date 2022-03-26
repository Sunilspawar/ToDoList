import React from 'react';
import './App.css';
import Navbar from './componants/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import Category from "./pages/Category";
// import Schedule from "./pages/Schedule";
import Addcategory from './pages/Addcategory';
import Editcategory from './pages/Editcategory';
import Schedule from './pages/Schedule';
import Addschedule from './pages/Addschedule';
// import AddSchedule from './pages/AddScheule';


function App() {
  return (
  
  <>
  <BrowserRouter>
     
    
    <Navbar />
    
     <Routes>
       
     <Route path="/" element ={<Home />} />
       <Route path ="/Addcategory" element = {<Addcategory />} />
      
       <Route path="/edit-user/:userId" element={<Editcategory /> } />
       <Route path="/Category" element ={<Category />} />
       <Route path="/Schedule" element ={<Schedule />} />
       <Route path="/AddSchedule" element ={<Addschedule />} />
       
     </Routes>
 </BrowserRouter>
 
    </>
  );
  
}


export default App;


