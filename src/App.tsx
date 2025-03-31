
import './App.css'
import Header from './Components/Header/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import Imagediv from './Components/Imagediv/Imagediv'
import About from './Components/About/About'

function App() {
  

  return (
    <>
    <Router>
     <Header/>
     <Imagediv/>
     <Home/>
     <About/>
     </Router>
    </>
  )
}

export default App
