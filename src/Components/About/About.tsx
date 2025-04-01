import { Boxes } from "../ui/background-boxes";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="relative overflow-hidden w-full h-screen bg-[#0b071e] pt-64 flex justify-around overflow-hidden">
      <Boxes/>
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}}>
      <HoverBorderGradient containerClassName="rounded-full shadow-none border"  className="dark:bg-black bg-white text-black dark:text-white">
      <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:1}}
        className="rounded-full border-none z-28 w-[300px] h-[300px]"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dmr86c1jv/image/upload/v1743312914/aj_sr6arg.jpg')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></motion.div></HoverBorderGradient>
      </motion.div>

      {/* Colored Box */}
      <div className="w-[500px] h-[500px] bg-transparent text-white mt-14 z-28 rounded-lg shadow-xl">
      I'm a Software Developer skilled in MERN Stack, Python, Machine Learning, and Cloud Computing (AWS). I love building scalable web applications, optimizing backend performance, and working with cutting-edge technologies to solve real-world problems.
      </div>
    </div>
  );
};

export default About;
