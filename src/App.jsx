import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'

function App() {
  

  return (
    <>
      <div>
      <NavBar/>
      <h1 className='font-bold m-4 text-6xl text-blue-400'>Hello react</h1>
      </div>    
    </>
  )
}

export default App
