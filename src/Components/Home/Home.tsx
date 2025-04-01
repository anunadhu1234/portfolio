import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { FaInstagram, FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';
import { Button, IconButton } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import DownloadDoneIcon from '@mui/icons-material/DownloadDone';

function Home() {
  const [typewriter, setTypewriter] = useState(false);
  const s = "I'm a Software Developer skilled in MERN Stack, Python, Machine Learning, and Cloud Computing (AWS). I love building scalable web applications, optimizing backend performance, and working with cutting-edge technologies to solve real-world problems.";
  useEffect(() => {
    setTimeout(() => {
      setTypewriter(true);
    }, 3000);
  }, []);
  const [btn, setBtn] = useState(false);
  const [loading, setLoading] = useState("start");
  const func = async () => {
    const fileId = "11WDOI_sAfD3a1Ft1mhCtcbLodh_pp2TM";  // Your Google Drive File ID
    const url = `https://drive.google.com/uc?export=download&id=${fileId}`;  // Construct the direct download URL
    
    const link = document.createElement("a");
    link.href = url;
    link.download = "CV.pdf";  // Default file name
    link.target = "_blank";  // Open in a new tab to handle download properly
    
    // Trigger the download by simulating a click
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  useEffect(()=>{
    if(loading==="pause"){
      func()
      setLoading("end");
    }
  })
  return (
    <div className="relative w-full">
      {/* Home Section */}
      <section className="relative bg-[#7551fb] h-screen w-full">
        <div className="absolute border border-[2px] rounded-full top-[22vh] left-[45vw] border-[#7551fb] w-100 h-100 z-4"></div>
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          src='https://res.cloudinary.com/dmr86c1jv/image/upload/v1743312129/aj-removebg-preview_tq3zq8.png'
          className="absolute ml-[59vw] z-20"
          alt="Anurag"
        />
        <div className="absolute z-24 h-full w-[40vw] bg-[#0b071e] text-white">
          <div className="relative top-[35vh] left-[10%]">
            <div className="flex text-[28px] font-medium">
              <motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>Hello,</motion.div>
              <motion.span initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 1 }}> I am</motion.span>
            </div>
            <motion.p initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 2 }} className="text-[40px] font-bold">Anurag Ghosh</motion.p>
            <div className="w-4/5">
              {typewriter && (
                <Typewriter
                  words={[s]}
                  loop={1}
                  cursor
                  cursorBlinking
                  cursorStyle='|'
                  typeSpeed={10}
                />
              )}
            </div>
            <motion.button initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 5.8 }} className={`m-3 ${btn ? 'z-4' : ''}`}><FaLinkedin onMouseEnter={() => setBtn(true)} onMouseLeave={() => setBtn(false)} size={30} /></motion.button>
            <motion.button initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 6.3 }} className='m-3'><FaInstagram size={30} /></motion.button>
            <motion.button initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 6.8 }} className='m-3'><FaWhatsapp size={30} /></motion.button>
            <motion.button initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 7.3 }} className='m-3'><FaGithub size={30} /></motion.button>
            <motion.div className="ml-8" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5,delay:7.8}}>
              <Button
                variant="outlined"
                size="small"
                onClick={() => {if(loading==='start'){setLoading("pause")}}}
              >
                Download CV
                {loading==="end" ? <DownloadDoneIcon color="primary" />:loading==="start"? <DownloadIcon color="primary" />:""}
              </Button>
            </motion.div>
          </div>
        </div>
        <div className="absolute z-2 border-t-[50vh] left-[40vw] top-[0px] w-0 h-0 border-r-[50vh] border-l-[50vh] border-b-[50vh] border-transparent border-l-[#0b071e]" />
      </section>
    </div>
  );
}

export default Home;
