import { useState } from "react";
function StateProps(){
    //state creating
 const[name,setName]=useState('Ayshu');
 const[num,setNum]=useState(18);
 const[student,setStudent]=useState({name:"Ayshu",age:"17"});
 const nameHandler=()=>{
    setName("Tanesha");
 };
 const numHandler=()=>{
    let value=num;
    setNum(++value);
 };
 //change object
 const studentHandler=()=>
 {
   setStudent({name:" Vidhya",age:15});
 };
 return(
    <div>
        <h1>State and Props</h1>
        <hr></hr>
        <h2>Hi {name}</h2>
        <h2>Number is {num}</h2>
        <h2>Student Name is {student.name} and age is {student.age}</h2>
    <button onClick={nameHandler}>Change Name</button><br></br>
    <button onClick={numHandler}>Increment Number</button><br></br>
    <button onClick={studentHandler}>Change Student detils</button><br></br>
    </div>
 );
 }
 export default StateProps;