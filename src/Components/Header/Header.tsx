import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { useState, useEffect } from "react";


function Header() {
  const navBtn = [
    "Home",
    "About",
    "Skill",
    "Projects",
    "Contact"
  ];
  
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
    <div id="aa" className={`fixed top-0 flex justify-around ${scrolled?'bg-[#0b071e] w-4/5 ml-48 rounded-[25px]':'bg-transparent w-full'} z-50 `}>
      <h1 className="text-[28px] text-[#523ab9] font-bold py-3">Portfolio</h1>
      <div className="lg:flex hidden text-white justify-between py-4 gap-12 text-[20px]">
        {navBtn.map((btn, i) => (
          <div key={i}>
            <Link to={`/${btn.toLowerCase()}`} 
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
    </div>
  );
}

export default Header;
