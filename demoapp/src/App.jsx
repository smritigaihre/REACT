import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TeacherComponent from './components/TeacherComponent';

function App() {
 

  return (
    <>
     <div className="App">

      <TeacherComponent name="Ram Kumar Thapa"/>
      <TeacherComponent name= "Shyam Kumar Thapa"/>
     </div>
    </>
  )
}

export default App
