import { useState } from "react";
function StatePr() {
    const[name,setName]=useState("Kaioken");
    const[count,setCount]=useState(0);

    const transformationHandler =()=>{
        let value=count;
        setCount(++value);
        if(count===3){
        if(name === "Kaioken")
        setName("SuperSaiyan");
    else
    setName("Kaioken");
setCount(0);
        }
    };
    return(
        <div>
            <h1>Toogle</h1>
            <hr></hr>
            <h1>{name}</h1>
            <button onClick={transformationHandler}>Toogle</button>
        </div>
    );

}
export default StatePr;