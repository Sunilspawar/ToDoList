import React,{useState, useEffect} from 'react'
import "./Schedule.css";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import TableRow from '../componants/TableRow';

function Schedule() {

  const[UserData, setUserData] = useState([]);

  console.log(UserData);
  useEffect(()=>{
    axios.get("http://localhost:5000/schedule")
    .then(res =>{
      setUserData(res.data);
    }).catch(err => alert(err));
  },[]);
  return (
    <>
    
    <div className ="second">
    <div className="first">
    <h2>Task
     </h2>
     <div>
     <Link to={"/Addschedule"} className="btn">
          <FaIcons.FaPlus />
        </Link>
     </div>
     
     </div>
     
      <table>
      <tbody>
     {
       UserData.map((user) => {
         return(
         <TableRow  key={user._id} user={user} />
         )
       })
     }
     
     </tbody>    
      </table>
      
    </div>
   
    </>
  )
}

export default Schedule