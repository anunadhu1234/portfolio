"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence, useMotionValue, animate } from "motion/react";

import { useEffect, useState } from "react";

type Testimonial = {
  name: string;
  designation: string;
  src: string;
  progress1: number;
  progress2: number;
};
export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };
  const radius = 50;
  const stroke = 10;
  const normalizedRadius = radius - stroke / 2;
  const circumference = 2 * Math.PI * normalizedRadius;
  const strokeDashoffset = circumference - (testimonials[active].progress1 / 100) * circumference;
  const strokeDashoffset2 = circumference - (testimonials[active].progress2 / 100) * circumference;
  const count = useMotionValue(0);

 
  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };
  const isMobile = window.innerWidth < 600;
  return (
    <div className="mx-auto max-w-sm px-4 py-20 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12">
      <div className="relative grid grid-cols-1 gap-20 md:grid-cols-2">
        <div>
          <div className="relative h-80 w-full">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.5,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 40
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <img
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex flex-col justify-between py-4">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 className="text-2xl font-bold text-[#7551fb] dark:text-white">
              {testimonials[active].name}
            </h3>
            <p className="text-sm text-[#7551fb] dark:text-neutral-500">
              {testimonials[active].designation}
            </p>
            <div className="grid grid-cols-2 items-center gap-x-4  pt-8 text-[#7551fb]">
              <motion.svg className="h-32 w-32"><circle stroke="black" fill="none" strokeWidth={stroke} r={normalizedRadius} cx={60} cy={60} />
                <motion.circle stroke="#7551fb" fill="transparent" strokeWidth={stroke} r={normalizedRadius} cx={60} cy={60} strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={circumference}  animate={{ strokeDashoffset }} transition={{ duration: 1 }} transform="rotate(-90 60 60)"/></motion.svg>
      <motion.svg className="h-32 w-32"><circle stroke="black" fill="none" strokeWidth={stroke} r={normalizedRadius} cx={60} cy={60} />
                <motion.circle stroke="#7551fb" fill="transparent" strokeWidth={stroke} r={normalizedRadius} cx={60} cy={60} strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={circumference}  animate={{ strokeDashoffset:strokeDashoffset2 }} transition={{ duration: 1 }} transform="rotate(-90 60 60)"/></motion.svg>
                
              <h1 className="text-center font-bold">Knowledge Depth</h1>
              <h1 className="text-center font-bold">Practical Experience</h1>
              <div
        style={{
          position: "absolute",
          top: isMobile?"73%":"44%",
          left: isMobile?"13%":"61.3%",
         color: "#7551fb",
          fontSize: "24px",
          fontWeight: "bold",
          zIndex: 20,
          
        }}
      >
        {testimonials[active].progress1}%
      </div>
      <div
        style={{
          position: "absolute",
          top: isMobile?"73%":"44%",
          left: isMobile?"65%":"84.5%",
         color: "#7551fb",
          fontSize: "24px",
          fontWeight: "bold",
          zIndex: 20,
          
          
        }}
      >
        {testimonials[active].progress2}%
      </div>
            </div>
          </motion.div>
          <div className="flex gap-4 pt-12 md:pt-0">
            <button
              onClick={handlePrev}
              className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
            >
              <IconArrowLeft className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400" />
            </button>
            <button
              onClick={handleNext}
              className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
            >
              <IconArrowRight className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
