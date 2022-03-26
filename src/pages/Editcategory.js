
import axios from "axios";
import {useEffect, useState } from "react";
import { useNavigate,useParams } from "react-router-dom";


const Editcategory = () =>{
 
  
    const navigate = useNavigate();
    const {userId} = useParams();
  

    const[categoryName, setcategoryName]=useState("");
    

    useEffect(() =>{

        axios.get(`http://localhost:5000/user/${userId}`)
        .then(res =>{
            
           setcategoryName(res.data[0].categoryName);

          

        }).catch(err => alert("error"))
    },[]);
  // to updated the user data............... 
const updateUserHandler =(e) =>{

  e.preventDefault();

  
  const data ={
    categoryName: categoryName,
    

}
console.log(data);
 axios.put(`http://localhost:5000/user/${userId}`,data)
 .then(res => {alert("user Details updated Successfully")
   navigate("/");
})
 .catch(err => alert(err));


   
}

    return (
        
           <div id="form">
    <form onSubmit={updateUserHandler}>
    <h1><i><u><b>Edit CATEGORY</b></u></i></h1>
    <input type="text" id="ind"  className="form-control"placeholder="Enter category" required value={categoryName} onChange={(e) => setcategoryName(e.target.value)} /><br />
    
  <input type="submit" value="Save Changes" 
  className="btn btn-success" />

</form>
        </div>
    )
}
export default Editcategory;