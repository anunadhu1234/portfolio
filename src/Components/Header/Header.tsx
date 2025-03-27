import { Link } from "react-router-dom"
import {motion} from 'framer-motion'
import { useState } from "react"

function Header() {
  const navBtn= [
    "Home",
    "About",
    "Skill",
    "Projects",
    "Contact"
  ]
  const [hovered,setHovered] = useState(Array(navBtn.length).fill(false));
  const func1 = (i)=>{
    const upd = [...hovered];
    upd[i]=!upd[i];
    setHovered(upd);
  }

  
  return (
    <div className="relative lg:flex lg:justify-around bg-red-500 z-20 ">
        <h1 className="text-[28px] text-[#523ab9] font-bold lg:mx-0 mx-20 py-3">Portfolio</h1>
        <div className="lg:flex hidden justify-between py-4 gap-12 text-[20px] mx-24">
            {navBtn.map((btn,i)=>(
              <div><Link to="/" onMouseEnter={()=>{func1(i)}}  onMouseLeave={()=>{func1(i)}} key={i}>{btn}</Link><motion.div animate={{width:hovered[i]?"100%":"0%", transition:{duration:0.2}}} className="bg-black h-1" ></motion.div></div>
            ))}
        </div>
    </div>
  )
}

export default Header