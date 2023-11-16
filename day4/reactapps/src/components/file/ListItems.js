import React, { useState } from "react";
function ListItems(){
    const [students]=useState(
        [
            {
                id:1,
                Name:"John",
                age:22,
            },
            {
                id:2,
                Name:"Mike",
                age:22,
            },
            {
                id:1,
                Name:"Joe",
                age:23,
            },
        ]
    );

    return(
        <div>
        <h1>ListItems</h1>
        <hr></hr>
        <ul style={{listStyleType:"none"}}>
        {students.map((student)=>(
          <li key={student.id}>
            <h2>Id: {student.id}</h2>
            <p>Name: {student.Name}</p>
            <p>Age: {student.age}</p>
          </li>
        )) 
        }
        </ul>
    </div>

)
};
export default ListItems;