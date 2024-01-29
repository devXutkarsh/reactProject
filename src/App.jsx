import { useState } from 'react'
import Background from './components/Background'
import Card from './components/Card'
import Foreground from './components/Foreground'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='relative w-full h-screen bg-zinc-800'>
    <Background />
    <div className='fixed top-0 left-0 z-[2] w-full h-screen '>
   <Foreground />
    </div>
   
    </div>
  )
}

export default App
