
import './App.css'
import { useRef } from 'react'
import Header from './Components/Header/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import {Skill} from './Components/Skill/Skill'
import {Project} from './Components/Project/Project'


function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const projectRef = useRef(null);
  const scrollToSec= (ref)=>{
    if(ref.current){
      ref.current.scrollIntoView({behavior:"smooth"});
    }
  }

  return (
    <>
    <Router>
     <Header onHomeClick={()=>{scrollToSec(homeRef)}} onAboutClick={()=>{scrollToSec(aboutRef)}}  onSkillClick={()=>{scrollToSec(skillRef)}} onProjectClick={()=>{scrollToSec(projectRef)}}/>
     <div ref={homeRef}> <Home/></div>
     <div ref={aboutRef}><About/></div>
    <div ref={skillRef}> <Skill/></div>
     <div ref={projectRef}> <Project/></div>
     </Router>
    </>
  )
}

export default App
