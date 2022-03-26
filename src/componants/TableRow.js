import axios from "axios"
import {Link} from "react-router-dom";
import * as FaIcons from "react-icons/fa";

const TableRow =({user})=>{
    const deleteUserHandler = ()=>{
        

        axios.delete(`http://localhost:5000/schedule/${user._id}`)
        .then(res =>{
            // alert("user Deleted successfully");
        window.location.reload();
        })
        .catch(err =>alert(err));
      }
    return(
        <tr>
           <td>{user.title} <br />
        {user.categoryName}</td>
       
        <td className="mt-1rem">
           <Link to ={`/edit-user/${user._id}`} className="btn btn-primary mt-1rem "><FaIcons.FaEdit /></Link> 
           </td>
           <td className="mt-1rem">
           <button className="btn btn-danger mt-1rem " onClick={deleteUserHandler}><FaIcons.FaTrashAlt /></button> 
           </td>
      </tr>
    )
}
export default TableRow;