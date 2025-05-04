import { Boxes } from "../ui/background-boxes";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { motion } from "framer-motion";
import { useState } from "react";

const About = () => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    setMouseX(e.clientX - left);
    setMouseY(e.clientY - top);
  };
  
  return (
    <div className="relative overflow-hidden  lg:w-full max-w-screen w-auto h-screen bg-[#0b071e] lg:pt-64 pt-24 flex lg:flex-row flex-col lg:justify-around lg:overflow-hidden">
      {window.innerWidth>1118?<Boxes/>:null}
      <motion.h1 initial={{opacity:0,x:-100}} whileInView={{opacity:1,x:0}} transition={{duration:1}} viewport={{once:false,amount:0.3}} className="z-28 text-bold text-[#7551fb] mx-auto md:mb-28 text-[50px]">About Me</motion.h1>
      <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1}} viewport={{once:false,amount:0.3}}>
      <HoverBorderGradient containerClassName="rounded-full mx-auto shadow-none border"  className="dark:bg-black mx-auto bg-white text-black dark:text-white">
      <motion.div
        className="rounded-full border-none z-28 lg:w-[300px] lg:h-[300px] w-[200px] h-[200px]"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dmr86c1jv/image/upload/v1743312914/aj_sr6arg.jpg')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></motion.div></HoverBorderGradient>
      </motion.div>
      

      {/* Colored Box */}
      <motion.div initial={{opacity:0,x:100}} whileInView={{opacity:1,x:0}} transition={{duration:1}} viewport={{once:false,amount:0.3}} className="md:w-[500px] lg:my-0  mx-auto my-auto flex flex-col text-[20px] justify-center  px-4 text-justify h-[200px] bg-transparent text-[#7551fb] z-28 rounded-lg">
      <motion.div  className="relative w-full h-60 p-6 text-[#7551fb] font-semibold flex items-center justify-center bg-transparent"
      onMouseMove={(e) => {
        handleMouseMove(e);
        setIsHovered(true);
      }}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: isHovered && window.innerWidth>1118
          ? `radial-gradient(circle 100px at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.3),transparent)`
          : "", // No light when not hovered
      }}><motion.p style={{
        background: "transparent",
        WebkitBackgroundClip: "text",
        color: "#7551fb", // Makes the text take background color
        
      }} className="text-[15px] md:text-[20px]">I'm a Software Developer skilled in MERN Stack, Python, Machine Learning, and Cloud Computing (AWS). I love building scalable web applications, optimizing backend performance, and working with cutting-edge technologies to solve real-world problems.</motion.p></motion.div>
      </motion.div>
    </div>
  );
};

export default About;
