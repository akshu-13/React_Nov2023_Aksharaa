import React from "react";
const Styling=()=>{
    const pstyle={
        backgroundColor:"lightblue",
        color:"darkblue",
        fontSize:"16px",
        border:"1px solid blue",
    }
    const divstyle={
        padding:"10px",
        
        borderRadius:"5px",
    }
    return(
        <div style={divstyle}>
            <h2 style={{color:"green"}}>InlineStyle in JSX Example</h2>
            <p style={pstyle}>This is a paragraph with inline styling</p>
        </div>
    );

}
export default Styling;