

import { AnimatedTestimonials } from "../ui/animated-testimonials";
import { motion } from "framer-motion";
import { useState } from "react";



export function Skill() {
  const testimonials = [
    // Cloud Computing
    {
      quote: "",
      name: "Amazon Web Services",
      designation: "Cloud",
      src: "https://res.cloudinary.com/dmr86c1jv/image/upload/v1745687814/aws_eif0j1.png",
    },

    // Core Concepts
    {
      quote: "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Computer Networks",
      designation: "Core Concepts",
      src: "https://res.cloudinary.com/dmr86c1jv/image/upload/v1745687814/cn_ioitpr.png",
    },
    {
      quote: "The analytics features have provided us with insights we never had before. Truly a powerful platform.",
      name: "Deep Learning",
      designation: "Core Concepts",
      src: "https://res.cloudinary.com/dmr86c1jv/image/upload/v1745687815/dl_xhkm0d.png",
    },
    {
      quote: "The onboarding process was smooth and the support team was incredibly helpful. We couldn't be happier with our choice.",
      name: "Data Structures and Algorithms",
      designation: "Core Concepts",
      src: "https://res.cloudinary.com/dmr86c1jv/image/upload/v1745687816/dsa_tgeazu.png",
    },
    {
      quote: "The performance metrics have helped us identify areas for improvement. This is a game-changer for our team.",
      name: "Machine Learning",
      designation: "Core Concepts",
      src: "https://res.cloudinary.com/dmr86c1jv/image/upload/v1745687816/ml_whykpq.png",
    },
    {
      quote: "We appreciate the regular updates and new features being added. It shows a commitment to continuous improvement.",
      name: "Structured Query Language",
      designation: "Core Concepts",
      src: "https://res.cloudinary.com/dmr86c1jv/image/upload/v1745687818/sql_i3irgc.png",
    },
    {
      quote: "The performance and reliability of this product are unmatched. It's become an essential part of our toolkit.",
      name: "Operating Systems",
      designation: "Core Concepts",
      src: "https://res.cloudinary.com/dmr86c1jv/image/upload/v1745687819/os_tse9fp.png",
    },

    // Programming Languages
    {
      quote: "Hello",
      name: "C++",
      designation: "Programming Languages",
      src: "https://res.cloudinary.com/dmr86c1jv/image/upload/v1745687814/c_egroxl.png",
    },
    {
      quote: "This solution has made a significant impact on our efficiency. The results speak for themselves.",
      name: "JavaScript",
      designation: "Programming Languages",
      src: "https://res.cloudinary.com/dmr86c1jv/image/upload/v1745687816/js_bx8bra.png",
    },
    {
      quote: "The feedback from our team has been overwhelmingly positive. This product has truly made a difference.",
      name: "Python",
      designation: "Programming Languages",
      src: "https://res.cloudinary.com/dmr86c1jv/image/upload/v1745687818/python_zye07c.png",
    },

    // Web Development
    {
      quote: "This product has streamlined our processes and improved collaboration across teams. A true asset to our operations.",
      name: "Cascading Style Sheets",
      designation: "Web Development",
      src: "https://res.cloudinary.com/dmr86c1jv/image/upload/v1745687815/css_ehwpxb.png",
    },
    {
      quote: "The level of customization available is impressive. We've tailored it to fit our unique needs perfectly.",
      name: "Hyper Text Markup Language",
      designation: "Web Development",
      src: "https://res.cloudinary.com/dmr86c1jv/image/upload/v1745687816/html_csmkwr.png",
    },
    {
      quote: "The user interface is clean and easy to navigate. It's a pleasure to use this product every day.",
      name: "Express.js",
      designation: "Web Development",
      src: "https://res.cloudinary.com/dmr86c1jv/image/upload/v1745687816/express_cybd5y.png",
    },
    {
      quote: "The integration with our existing systems was seamless. We were up and running in no time.",
      name: "Node.js",
      designation: "Web Development",
      src: "https://res.cloudinary.com/dmr86c1jv/image/upload/v1745687817/node_dv15zc.png",
    },
    {
      quote: "The training materials provided were comprehensive and easy to follow. We felt supported throughout the entire process.",
      name: "React.js",
      designation: "Web Development",
      src: "https://res.cloudinary.com/dmr86c1jv/image/upload/v1745687817/react_kyeoju.png",
    },
    {
      quote: "The collaboration features have transformed the way we work together. It's made remote work so much easier.",
      name: "Tailwind CSS",
      designation: "Web Development",
      src: "https://res.cloudinary.com/dmr86c1jv/image/upload/v1745687819/tcss_oc5jl1.png",
    },
    {
      quote: "The level of support we've received has been outstanding. It's clear that customer satisfaction is a priority.",
      name: "Vite.js",
      designation: "Web Development",
      src: "https://res.cloudinary.com/dmr86c1jv/image/upload/v1745687819/vite_at1lf0.png",
    },

    // Developer Tools
    {
      quote: "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Github",
      designation: "Developer Tools",
      src: "https://res.cloudinary.com/dmr86c1jv/image/upload/v1745687814/github_u1d9gg.png",
    },
    {
      quote: "A must-have tool for any developer. The integration capabilities are top-notch and the user experience is fantastic.",
      name: "GitLab",
      designation: "Developer Tools",
      src: "https://res.cloudinary.com/dmr86c1jv/image/upload/v1745687815/gitlab_hfhvis.png",
    },

    // Databases
    {
      quote: "The community support is fantastic. We've learned so much from the resources available.",
      name: "MySQL",
      designation: "Databases",
      src: "https://res.cloudinary.com/dmr86c1jv/image/upload/v1745687817/mysql_kuvkgp.png",
    },
    {
      quote: "This product has exceeded our expectations in every way. The ROI has been incredible.",
      name: "MongoDB",
      designation: "Databases",
      src: "https://res.cloudinary.com/dmr86c1jv/image/upload/v1745687817/mongo_brclfa.png",
    },

    // Problem Solving
    {
      quote: "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "Competitive Programming",
      designation: "Problem Solving",
      src: "https://res.cloudinary.com/dmr86c1jv/image/upload/v1745687814/cp_rkk8br.png",
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

  return <div className="w-[100%] flex flex-col items-center bg-[#0b071e]">
    <motion.h1 initial={{ x: -50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duraion: 1 }} viewport={{ once: false, amount: 0.3 }} className="text-[50px] text-[#7551fb]">Skills</motion.h1> 
    <motion.div  className="flex flex-wrap justify-center mt-3 mb-1">
      {btn.map((item, index) => (
        <motion.button initial={{y:50, opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration: 0.5, delay:index*0.5+1}} viewport={{once:false, amount:0.3}} key={index} onClick={()=>{setI(index); console.log(i);
if(item!=="All"){
  setTest(testimonials.filter((test) => test.designation === item));
        }else setTest(testimonials)}} className={`border shadow-lg font-bold text-white ${i===index?'bg-[#7551fb]':''} cursor-pointer hover:bg-[#7551fb] hover:!text-opacity-0 py-1 border-[#7551fb] px-4 border-[2px] first:rounded-l-lg last:rounded-r-lg`}>{item}</motion.button>
        ))}
    </motion.div>
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 1, delay:5 }}><AnimatedTestimonials testimonials={test} /></motion.div> 
    </div>;
}
