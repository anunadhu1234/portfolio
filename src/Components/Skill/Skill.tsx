

import { AnimatedTestimonials } from "../ui/animated-testimonials";
import { motion } from "framer-motion";
import { useState } from "react";



export function Skill() {
  const testimonials = [
    // Cloud Computing
    {
      name: "Amazon Web Services",
      designation: "Cloud",
      src: "https://res.cloudinary.com/dmr86c1jv/image/upload/v1745687814/aws_eif0j1.png",
      progress1: 75,
      progress2: 55
    },

    // Core Concepts
    {
      
      name: "Computer Networks",
      designation: "Core Concepts",
      src: "https://res.cloudinary.com/dmr86c1jv/image/upload/v1745687814/cn_ioitpr.png",
      progress1: 90,
      progress2: 40
    },
    {
      
      name: "Deep Learning",
      designation: "Core Concepts",
      src: "https://res.cloudinary.com/dmr86c1jv/image/upload/v1745687815/dl_xhkm0d.png",
      progress1: 70,
      progress2: 70
    },
    {
      
      name: "Data Structures and Algorithms",
      designation: "Core Concepts",
      src: "https://res.cloudinary.com/dmr86c1jv/image/upload/v1745687816/dsa_tgeazu.png",
      progress1: 90,
      progress2: 75
    },
    {
      name: "Machine Learning",
      designation: "Core Concepts",
      src: "https://res.cloudinary.com/dmr86c1jv/image/upload/v1745687816/ml_whykpq.png",
      progress1: 80,
      progress2: 70
    },
    {
      name: "Structured Query Language",
      designation: "Core Concepts",
      src: "https://res.cloudinary.com/dmr86c1jv/image/upload/v1745687818/sql_i3irgc.png",
      progress1: 95,
      progress2: 90
    },
    {
      name: "Operating Systems",
      designation: "Core Concepts",
      src: "https://res.cloudinary.com/dmr86c1jv/image/upload/v1745687819/os_tse9fp.png",
      progress1: 95,
      progress2: 65
    },

    // Programming Languages
    {
      name: "C++",
      designation: "Programming Languages",
      src: "https://res.cloudinary.com/dmr86c1jv/image/upload/v1745687814/c_egroxl.png",
      progress1: 90,
      progress2: 90
    },
    {
      name: "JavaScript",
      designation: "Programming Languages",
      src: "https://res.cloudinary.com/dmr86c1jv/image/upload/v1745687816/js_bx8bra.png",
      progress1: 95,
      progress2: 95
    },
    {
      name: "Python",
      designation: "Programming Languages",
      src: "https://res.cloudinary.com/dmr86c1jv/image/upload/v1745687818/python_zye07c.png",
      progress1: 85,
      progress2: 80
    },

    // Web Development
    {
      name: "Cascading Style Sheets",
      designation: "Web Development",
      src: "https://res.cloudinary.com/dmr86c1jv/image/upload/v1745687815/css_ehwpxb.png",
      progress1: 85,
      progress2: 85
    },
    {
      name: "Hyper Text Markup Language",
      designation: "Web Development",
      src: "https://res.cloudinary.com/dmr86c1jv/image/upload/v1745687816/html_csmkwr.png",
      progress1: 85,
      progress2: 78
    },
    {
      name: "Express.js",
      designation: "Web Development",
      src: "https://res.cloudinary.com/dmr86c1jv/image/upload/v1745687816/express_cybd5y.png",
      progress1: 80,
      progress2: 80
    },
    {
      name: "Node.js",
      designation: "Web Development",
      src: "https://res.cloudinary.com/dmr86c1jv/image/upload/v1745687817/node_dv15zc.png",
      progress1: 80,
      progress2: 80
    },
    {
      name: "React.js",
      designation: "Web Development",
      src: "https://res.cloudinary.com/dmr86c1jv/image/upload/v1745687817/react_kyeoju.png",
      progress1: 90,
      progress2: 85
    },
    {
      name: "Tailwind CSS",
      designation: "Web Development",
      src: "https://res.cloudinary.com/dmr86c1jv/image/upload/v1745687819/tcss_oc5jl1.png",
      progress1: 95,
      progress2: 95
    },
    {
      name: "Vite.js",
      designation: "Web Development",
      src: "https://res.cloudinary.com/dmr86c1jv/image/upload/v1745687819/vite_at1lf0.png",
      progress1: 65,
      progress2: 50
    },

    // Developer Tools
    {
      name: "Github",
      designation: "Developer Tools",
      src: "https://res.cloudinary.com/dmr86c1jv/image/upload/v1745687814/github_u1d9gg.png",
      progress1: 60,
      progress2: 60
    },
    {
      name: "GitLab",
      designation: "Developer Tools",
      src: "https://res.cloudinary.com/dmr86c1jv/image/upload/v1745687815/gitlab_hfhvis.png",
      progress1: 40,
      progress2: 40
    },

    // Databases
    {
      name: "MySQL",
      designation: "Databases",
      src: "https://res.cloudinary.com/dmr86c1jv/image/upload/v1745687817/mysql_kuvkgp.png",
      progress1: 95,
      progress2: 90
    },
    {
      name: "MongoDB",
      designation: "Databases",
      src: "https://res.cloudinary.com/dmr86c1jv/image/upload/v1745687817/mongo_brclfa.png",
      progress1: 90,
      progress2: 90
    },

    // Problem Solving
    {
      name: "Competitive Programming",
      designation: "Problem Solving",
      src: "https://res.cloudinary.com/dmr86c1jv/image/upload/v1745687814/cp_rkk8br.png",
      progress1: 70,
      progress2: 70
    },
  ];
  const btn = [
    "All",
    "Core Concepts",
    "Cloud",
    "Programming Languages",
    "Web Development",
    "Developer Tools",
    "Databases",
    "Problem Solving",
  ]
  const [test,setTest] = useState(testimonials);
  const [i,setI] = useState(0);

  return <div className="w-[100%] flex flex-col pt-12 items-center bg-[#0b071e] overflow-x-hidden">
    <motion.h1 initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duraion: 1 }} viewport={{ once: false, amount: 0.1 }} className="text-[50px] text-[#7551fb]">Skills</motion.h1> 
    <motion.div  className="flex lg:flex-row flex-col justify-center mt-3 mb-1">
      {btn.map((item, index) => (
        <motion.button initial={{y:50, opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration: 0.5, delay:index*0.4}} viewport={{once:false, amount:0.1}} key={index} onClick={()=>{setI(index); console.log(i);
if(item!=="All"){
  setTest(testimonials.filter((test) => test.designation === item));
        }else setTest(testimonials)}} className={`border shadow-lg font-bold text-white ${i===index?'bg-[#7551fb]':''} cursor-pointer hover:bg-[#7551fb] hover:!text-opacity-0 py-1 border-[#7551fb] px-4 border-[2px] lg:first:rounded-l-lg lg:last:rounded-r-lg`}>{item}</motion.button>
        ))}
    </motion.div>
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false, amount: 0.1 }} transition={{ duration: 1, delay:3.3 }}><AnimatedTestimonials testimonials={test} /></motion.div> 
    </div>;
}
