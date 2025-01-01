import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css';
import { Navbar } from './components/Navbar';
import { Header } from './Header';
import { Thumbnail } from './Thumbnail';
import { Footer } from './Footer';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 
  <Navbar/>
  <Header title={"Album Description"} desc={"This is a dummy example of Album."} />
  <Thumbnail />
  <Footer/>
 
</>

  )
}

export default App
