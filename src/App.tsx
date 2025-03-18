import { useState } from 'react'
import './App.css'
import Hello from './Components/Hello/Hello'
import EffectDemo from './Components/EffectDemo/EffectDemo'
import InputDemo from './Components/InputDemo/InputDemo'


function App() {
  const [count, setCount] = useState(0)

  function handleClick(){
      alert("click click")
  }

  return (
    <>
      <Hello name = "Thang" />
      <Hello name = "ngoc" />
        <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Up</button>
      <button onClick={() => setCount(count - 1)}>Down</button>
      <button onClick={()=>handleClick()}>Click me</button>
      <EffectDemo/>
      <InputDemo/>
    </>
  )
}

export default App
