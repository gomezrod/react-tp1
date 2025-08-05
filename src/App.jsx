import { useState } from 'react'
import Button from './Button'
import Navbar from './Navbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const clickUp = () => {
    setCount(count + 1)
  }

  const clickDown = () => {
    setCount(count<=0? 0 : count - 1)
  }

  return (
    <>
    <Navbar className={'navegacion'}/>
    <h1>Contador: {count}</h1>
    <Button onClick={clickUp}
      children="+"
    />
    <Button onClick={clickDown}
      children="-"
    />
    </>
  )
}

export default App
