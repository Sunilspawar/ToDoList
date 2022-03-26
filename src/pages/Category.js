import React,{useState, useEffect} from 'react'
import "./Category.css";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import TableRow2 from '../componants/TableRow2';

function Category() {

  const[UserData, setUserData] = useState([]);

  console.log(UserData);
  useEffect(()=>{
    axios.get("http://localhost:5000/user")
    .then(res =>{
      setUserData(res.data);
    }).catch(err => alert(err));
  },[]);
  return (
    <>
    
     
    <div className ="second">
    <div className="first">
    <h2>CATEGORY
     </h2>
     <div>
     <Link to={"/Addcategory"} className="btn">
          <FaIcons.FaPlus />
        </Link>
     </div>
     
     </div>
      <table>
      <tbody>
     {
       UserData.map((user) => {
         return(
         <TableRow2  key={user._id} user={user} />
         )
       })
     }
     
     </tbody>    
      </table>
      
    </div>
   
    </>
  )
}

export default Category