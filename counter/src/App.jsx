import React from 'react'  
import "./App.css"
import {useState} from "react" 
  


export default function App(){
  const [count,setcounter]=useState(0) 

  const increase=()=>{
    setcounter(count+1) 
  }
  const decrease=()=>{
    setcounter(count-1)
  }

  return(
    <>
    <h1>{count}</h1> 
    <button onClick={increase}>Increase</button>
    <button onClick={decrease}>Decrease</button>
    </>
  )
} 

