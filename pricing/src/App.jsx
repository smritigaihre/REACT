import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pricing from './components/MainFIle'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Headerfile'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Pricing/>
    </>
    
  )
}

export default App
