
import './App.css'
import Header from './Components/Header/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import About from './Components/About/About'

function App() {
  

  return (
    <>
    <Router>
     <Header/>
     <Home/>
     <About/>
     </Router>
    </>
  )
}

export default App
