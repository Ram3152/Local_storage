import React, { useState } from "react";
const Input=()=>{
    const [input,setinput]=useState('');
    const sub=()=>{
       if(input.trim()!== ' '){ 
        const key=`inputData-${Date.now()}`;
        localStorage.setItem(key, input.trim());
        setinput('');
        
       }
    }
    return(<> 
    <div className="in">
        <input type="text"  value={input} placeholder="Type Here....." onChange={(event)=>{
        setinput(event.target.value);
        }}/>
        <button onClick={sub}>Submit</button>
    </div>
    </>);
}
export default Input;