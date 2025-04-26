
import './App.css'
import Header from './Components/Header/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import {Skill} from './Components/Skill/Skill'


function App() {
  

  return (
    <>
    <Router>
     <Header/>
     <Home/>
     <About/>
     <Skill/>
     </Router>
    </>
  )
}

export default App
