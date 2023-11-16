import { useState } from "react";
function EmployeeDetails()
{
    const[employee]=useState(
        [
            {
                id:1,
                Name:"Tanesha",
                Age:18,
            },
            {
                id:2,
                Name:"Geethu",
                Age:19,
            },
            {
                id:1,
                Name:"Venki",
                Age:20,
            },
        ]

    );
    return(
        <div>
            <html>
        <h1>Employee Details</h1>
        <hr></hr>
        <table style={{border:"1"}}>
            <tr>
            <th>Emp_ID</th>
            <th>Emp_Name</th>
            <th>Emp_Age</th>
            </tr>
            {employee.map((emp)=>(
                <tr key={emp.id}>
                    <td>{emp.id}</td>
                    <td>{emp.Name}</td>
                    <td>{emp.Age}</td>
                </tr>
            ))}
        </table>
        </html>
    </div>
    )
};

export default  EmployeeDetails;