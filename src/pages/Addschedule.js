import React, { useState} from 'react'
import "./Addschedule.css";
import axios from 'axios';
import {useNavigate} from "react-router-dom"




function Addschedule() {
    const navigate= useNavigate();
      
    const[title, settitle]=useState("");
    const[categoryName, setcategoryName]= useState("");
    
    const submitFormHandler =(e)=>{
      e.preventDefault();
    
      const data ={
          title:title,
        categoryName:categoryName,
      }
      console.log(data);
      axios.post("http://localhost:5000/schedule",data)
      .then(res =>{
        alert("user Added Successfully")
        navigate("/")
      })
      .catch(err => alert(err));
    }
    return (
        <>
        <div id="form">
        <form onSubmit={submitFormHandler}>
        <h1><i><u><b>ADD Task</b></u></i></h1>
        <input type="text" id="ind" placeholder="Enter Target" required value={title} onChange={(e) => settitle(e.target.value)} /><br />
        <br />
        
        <select  placeholder="Enter category" required value={categoryName} onChange={(e) => setcategoryName(e.target.value)}>
        <option>
          Select      
       </option>
        <option>
          personal       
       </option>
       <option>
          sports       
       </option>
       <option>
          Music      
       </option> 
      
      </select>
        <span>
        <button>ADD</button><br />
       
        
        </span>
    </form>
    
    </div>
    
    
    
    
    </>
      )
    }
  
export default Addschedule