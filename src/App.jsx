import { useRef, useState } from 'react'
import styled from './style.module.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import seriesdata from "./api/seriesData.json"
import Seriescard from './Seriescard'
import Cssmodule from './Cssmodule'
import Toggleswitch from './Toggleswitch'

function App() {
  const[isOn,setIson]=useState(false)

function handleParentClick() {
  setIson(!isOn);
  console.log("grandParent clicked!");
}

function handleChildClick(e) {
    setIson(!isOn);
    
  }
      
  return (
    <>
      <div className={`g-div ${isOn?" bg-green-400":" bg-gray-300"}`} onClick={handleParentClick}>
        <div className={`p-div ${isOn?"on":"off"}`}>
          <h1>{isOn?"ON":"OFF"}</h1>
        </div>
      </div>
    </> 
  )
}

export default App
