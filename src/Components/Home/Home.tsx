import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';

function Home() {
  // const [txt,setTxt] = useState('');
  const [typewriter, setTypewriter] = useState(false);
  const s = "I'm a Software Developer skilled in MERN Stack, Python, Machine Learning, and Cloud Computing (AWS). I love building scalable web applications, optimizing backend performance, and working with cutting-edge technologies to solve real-world problems.";
  // useEffect(()=>{
  //   let i =0;
  //   const inter = setInterval(()=>{
  //     if(i<s.length){
  //       setTxt(prev=> prev+s.charAt(i)+);
  //       i++;
  //     }else{
  //       clearInterval(inter)
  //     }
  //   },50);
  //   return ()=>{
  //     clearInterval(inter);
  //   }
  // },[s,50]);

  useEffect(() => {
    setTimeout(() => {
      setTypewriter(true);
    }, 3000);
  })
  return (
    <div className="absolute z-8 bg-[#7551fb] top-[0px] h-screen w-screen">
      <div className="">
        <div className="absolute border border-[2px] rounded-[100%] top-[22vh] left-[45vw] border-[#7551fb] w-100 h-100 z-4"></div>
      </div>
      <motion.img initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1,delay:2}} src='https://res.cloudinary.com/dmr86c1jv/image/upload/v1743312129/aj-removebg-preview_tq3zq8.png' className="absolute ml-[59vw] z-20" alt=".." />
      <div className="absolute z-24 h-[100vh] w-[40vw] bg-[#0b071e] text-white">
        <div className="relative top-[35vh] left-[10%]">
          <div className="flex text-[28px] font-medium"><motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>Hello,</motion.div><motion.span initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 1 }}> I am</motion.span></div>
          <motion.p initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 2 }} className="text-[40px] font-bold">Anurag Ghosh</motion.p>
          <div className="w-4/5" >
            {typewriter && (<Typewriter
              words={[s]}
              loop={Infinity}
              cursor
              cursorBlinking
              cursorStyle='|'
              delaySpeed={1000}
              deleteSpeed={1}
            />)}
          </div>
        </div>
      </div>
      <div className="absolute z-2 border-t-[50vh] left-[40vw] top-[0px] w-0 h-0 border-r-[50vh] border-l-[50vh] border-b-[50vh] border-transparent border-l-[#0b071e]" >

      </div>

    </div>
  )
}

export default Home