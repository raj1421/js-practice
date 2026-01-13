import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const increase=()=>{
    if(count<=20)setCount(count+1);
    else alert("value cannot be increased further");
  }
const decrease=()=>{
  if(count>=1)setCount(count-1);
  else alert("value cannot be decreased further");}
  return (
    <>
      <div> <h1>this is counter {count}</h1>
      <button onClick={increase}>ADD VALUE</button>
      <button onClick={decrease}>Decrease value </button></div>
    </>
  )
}

export default App
