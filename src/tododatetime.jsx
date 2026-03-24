import React, { useState } from 'react'

export default function Tododatetime() {
 const [datetime, setDatetime] = useState("");
  setInterval(()=>{
    const obj=new Date();
   
   setDatetime(`${obj.toLocaleDateString()}-${obj.toLocaleTimeString()}`)
   
  },1000) 
  return (
    
    <h2>{datetime}</h2>
    
    
  )
}
