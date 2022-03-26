import React, { useState } from 'react'
import "./Addcategory.css";
import axios from 'axios';
import {useNavigate} from "react-router-dom"

const Addcategory =() => {
const navigate= useNavigate();

const[categoryName, setcategoryName]= useState("");

const submitFormHandler =(e)=>{
  e.preventDefault();

  const data ={
    categoryName:categoryName,
  }
  console.log(data);
  axios.post("http://localhost:5000/user",data)
  .then(res =>{
    alert("user Added Successfully")
    navigate("/")
  })
  .catch(err => alert(err));
}

  return (
    <div id="form">
    <form onSubmit={submitFormHandler}>
    <h1><i><u><b>ADD CATEGORY</b></u></i></h1>
    <input type="text" id="ind" placeholder="Enter category" required value={categoryName} onChange={(e) => setcategoryName(e.target.value)} /><br />
    
       
    <span>
    <button>ADD</button><br />
   
    
    </span>
</form>
</div>
  )
}

export default Addcategory