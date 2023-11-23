import axios from "axios";
import { useEffect, useState } from "react";

function AxiosGet(){
    const[employees,setEmployees]=useState([]);
    useEffect(()=>{
        axios
        .get('http://localhost:3003/users')
        .then((res)=>{
            setEmployees(res.data)
        })
        .catch((err)=>{
            console.log(err);
        });
    },[]);
    return(
        <div>
            <h1> AxiosGet
           </h1>
            <ul>
                {employees.map((employee)=>(
                    <li key={employee.id}>{employee.name}</li>

                ))}
            </ul>
        </div>
    );
}
export default AxiosGet;