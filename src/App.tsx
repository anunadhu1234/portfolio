
import './App.css'
import Header from './Components/Header/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import {Skill} from './Components/Skill/Skill'
import {Project} from './Components/Project/Project'


function App() {
  

  return (
    <>
    <Router>
     <Header/>
     <Home/>
     <About/>
     <Skill/>
     <Project/>
     </Router>
    </>
  )
}

export default App
