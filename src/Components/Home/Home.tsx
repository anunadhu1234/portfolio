import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { FaInstagram, FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';
import { Button, IconButton } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import DownloadDoneIcon from '@mui/icons-material/DownloadDone';
import { Link } from 'react-router-dom';
function Home() {
  const [typewriter, setTypewriter] = useState(false);
  
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
  const set =[
    {image: "https://files.logomakr.com/1GDuks-LogoMakr.png",},
    {image: "https://files.logomakr.com/6gEXU4-LogoMakr.png",},
    {image: "https://files.logomakr.com/9nyMT2-LogoMakr.png",},
    {image: "https://files.logomakr.com/5YdHed-LogoMakr.png",},

  ]
  return (
    <>
    <div className="hidden lg:block relative max-w-screen min-h-screen">
      {/* Home Section */}
      <section className="relative bg-[#7551fb] min-h-screen max-w-screen">
        
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          src='https://res.cloudinary.com/dmr86c1jv/image/upload/v1743312129/aj-removebg-preview_tq3zq8.png'
          className="absolute ml-[58.5vw] z-20"
          alt="Anurag"
        />
        <div className="absolute z-24 h-full w-[40vw] bg-[#0b071e] text-white">
          <div className="relative top-[35vh] left-[10%]">
            <motion.p initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-[40px] font-bold">Anurag Ghosh</motion.p>
            <motion.div className="w-4/5"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1 }}
            > I am a {' '}
              {typewriter && (
                <span className="text-[25px] font-bold text-[#7551fb]">
                <Typewriter
                  words={["Software Developer", "MERN Stack Developer", "Machine Learning Enthusiast", "Cloud Computing Enthusiast"]}
                  loop={Infinity}
                  cursor
                  cursorBlinking
                  cursorStyle='|'
                  typeSpeed={50}
                  deleteSpeed={10}
                  
                />
                </span>
              )}
            </motion.div>
            <motion.button  initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 2.3 }} className={`m-3 ${btn ? 'z-4' : ''} cursor-pointer`}><Link target='_blank' to="https://www.linkedin.com/in/anurag-ghosh-b6307b220?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B521wWzu6Ta6s07uH%2BM5GhA%3D%3D"><FaLinkedin className="text-white hover:text-[#7551fb] transition-colors duration-300" onMouseEnter={() => setBtn(true)} onMouseLeave={() => setBtn(false)} size={30} /></Link></motion.button>
            <motion.button initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 2.8 }} className='m-3 cursor-pointer'><Link target='_blank' to="https://www.instagram.com/i_am_anurag_ghosh/"><FaInstagram size={30} className="text-white hover:text-[#7551fb] transition-colors duration-300" /></Link></motion.button>
            <motion.button initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 3.3 }} className='m-3 cursor-pointer'><Link target='_blank' to="https://wa.me/8175808205"><FaWhatsapp size={30} className="text-white hover:text-[#7551fb] transition-colors duration-300" /></Link></motion.button>
            <motion.button initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 3.8 }} className='m-3 cursor-pointer'><Link target='_blank' to="https://github.com/anunadhu1234/"><FaGithub size={30} className="text-white hover:text-[#7551fb] transition-colors duration-300" /></Link></motion.button>
            <motion.div className="ml-8" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5,delay:4.3}}  >
              <Button
                variant="outlined"
                size="small"
                className={`border-[#7551fb] text-[#7551fb] hover:bg-[#7551fb] hover:text-white ${loading==="end"?"hidden":""}`}
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
    <div className="lg:hidden relative max-w-screen max-h-screen items-center  min-h-screen bg-[#0b071e] py-[25%]  overflow-hidden">
      <div className='w-full items-center flex justify-center '>
    <motion.div initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }} className="h-48 w-48 rounded-full border border-white border-[3px]  bg-[#7551fb] mb-8 overflow-hidden ">
    <motion.img
          
          src='https://res.cloudinary.com/dmr86c1jv/image/upload/v1743312129/aj-removebg-preview_tq3zq8.png'
          className=""
          alt="Anurag"
        />
        
    </motion.div>
    </div>
    <div>
        <motion.p initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-[30px] text-center w-full text-white font-bold">Anurag Ghosh</motion.p>
        <motion.div className="w-full text-white mt-6  text-center"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1 }}
            > <span className='text-[20px]'>I am a</span> <br  />
              {typewriter && (
                <span className="text-[25px] font-bold text-[#7551fb]">
                <Typewriter
                  words={["Software Developer", "MERN Stack Developer", "Machine Learning Enthusiast", "Cloud Computing Enthusiast", "Data Engineer"]}
                  loop={Infinity}
                  cursor
                  cursorBlinking
                  cursorStyle='|'
                  typeSpeed={50}
                  deleteSpeed={10}
                  
                />
                </span>
              )}
            </motion.div>
            <div className="flex flex-col items-center mt-6 p-4">
              <div className='flex'>
            <motion.button  initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 2.3 }} className={`m-3 ${btn ? 'z-4' : ''} cursor-pointer`}><Link target='_blank' to="https://www.linkedin.com/in/anurag-ghosh-b6307b220?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B521wWzu6Ta6s07uH%2BM5GhA%3D%3D"><FaLinkedin className="text-white hover:text-[#7551fb] transition-colors duration-300" onMouseEnter={() => setBtn(true)} onMouseLeave={() => setBtn(false)} size={30} /></Link></motion.button>
            <motion.button initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 2.8 }} className='m-3 cursor-pointer'><Link target='_blank' to="https://www.instagram.com/i_am_anurag_ghosh/"><FaInstagram size={30} className="text-white hover:text-[#7551fb] transition-colors duration-300" /></Link></motion.button>
            </div>
            <div className='flex'>
            <motion.button initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 3.3 }} className='m-3 cursor-pointer'><Link target='_blank' to="https://wa.me/8175808205"><FaWhatsapp size={30} className="text-white hover:text-[#7551fb] transition-colors duration-300" /></Link></motion.button>
            <motion.button initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 3.8 }} className='m-3 cursor-pointer'><Link target='_blank' to="https://github.com/anunadhu1234/"><FaGithub size={30} className="text-white hover:text-[#7551fb] transition-colors duration-300" /></Link></motion.button>
            </div>
            <motion.div className="" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5,delay:4.3}}  >
              <Button
                variant="outlined"
                size="small"
                className={`border-[#7551fb] text-[#7551fb] hover:bg-[#7551fb] hover:text-white ${loading==="end"?"hidden":""}`}
                onClick={() => {if(loading==='start'){setLoading("pause")}}}
              >
                Download CV
                {loading==="end" ? <DownloadDoneIcon color="primary" />:loading==="start"? <DownloadIcon color="primary" />:""}
              </Button>
              </motion.div>
              </div>
        </div>
    </div>
    </>
  );
}

export default Home;
