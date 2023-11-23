import axios from "axios";
import React, { useState } from "react";
function AxiosPost(){
    const[name,setName]=useState("");
    const handleChange=(event)=>
    {
        setName(event.target.value);
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        axios
        .post('http://localhost:3002/users',{name})
        .then((res)=>
        {
            console.log(res.data);
        })
        .catch((err)=>
        {
            console.log("Error"+err);
        })
    };

return(
    <div>
       <h1>
        
       AxiosPost
        </h1> 
        <ul>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={handleChange}></input>
                <button type="submit">Submit</button>
            </form>
        </ul>
    </div>
)
}
export default AxiosPost;