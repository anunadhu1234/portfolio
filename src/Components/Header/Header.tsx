import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { useState, useEffect } from "react";
import {Menu, X} from "lucide-react";

function Header({onHomeClick, onAboutClick, onSkillClick, onProjectClick, onEducationClick}) {
  const navBtn = [
    "Home",
    "About",
    "Skills",
    "Education",
    "Projects",
  ];
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!open);
  const [hovered, setHovered] = useState(Array(navBtn.length).fill(false));
  const [scrolled,setScrolled] = useState(false);
  const func1 = (i:number) => {
    const upd = [...hovered];
    upd[i] = !upd[i];
    setHovered(upd);
  };

  useEffect(()=>{
    const handleScroll = () =>{
      if(window.scrollY>50){
        setScrolled(true);
      }else{
        setScrolled(false);
      }
    }
    window.addEventListener("scroll",handleScroll);
    return ()=> window.removeEventListener("scroll",handleScroll);
  },[])

  return (
    <div id="aa" className={`fixed  top-0 lg:flex grid grid-cols-5 justify-around ${scrolled?'bg-[#0b071e] w-4/5 ml-[12%] rounded-[25px] border border-[#523ab9]':'bg-transparent w-full'} z-50 `}>
      <h1 className="text-[28px] text-[#523ab9] col-span-4 lg:px-4 md:px-24 px-4 font-bold py-3">Portfolio</h1>
      <div className="lg:flex hidden text-white justify-between py-4 gap-12 text-[20px]">
        {navBtn.map((btn, i) => (
          <div key={i} onClick={() => {
            if (btn === "Home") onHomeClick();
            else if (btn === "About") onAboutClick();
            else if (btn === "Skills") onSkillClick();
            else if (btn === "Projects") onProjectClick();
            else if (btn === "Education") onEducationClick();}}>
            <Link to={`/`} 
              onMouseEnter={() => func1(i)} 
              onMouseLeave={() => func1(i)}
            >
              {btn}
            </Link>
            <motion.div 
              animate={{ width: hovered[i] ? "100%" : "0%", transition: { duration: 0.2 } }} 
              className="bg-white h-1"
            />
          </div>
        ))}
      </div>
     
        <button className="lg:hidden block text-white" onClick={toggleOpen}>{!open? <Menu size={28}/>:<X size={28}/>}</button>
        {open && (
          <div className="top-16 w-full" >
            <ul>
              {navBtn.map((btn,i)=>{
                return(
                  <li key={i} className="text-white  text-[20px] py-2 px-4 hover:bg-[#523ab9] hover:rounded-lg" onClick={() => {
                    if (btn === "Home") onHomeClick();
                    else if (btn === "About") onAboutClick();
                    else if (btn === "Skills") onSkillClick();
                    else if (btn === "Projects") onProjectClick();
                    else if (btn === "Education") onEducationClick();}}>
                    <Link to={`/`}>{btn}</Link>
                  </li>
                )
              })}
            </ul>
          </div>)
            }
    </div>
  );
}

export default Header;
