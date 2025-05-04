"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import proshop from "../../assets/proshop.png";

export function Project() {
    const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
        null
    );
    const ref = useRef<HTMLDivElement>(null);
    const id = useId();

    useEffect(() => {
        function onKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setActive(false);
            }
        }

        if (active && typeof active === "object") {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [active]);

    useOutsideClick(ref, () => setActive(null));

    return (
        <motion.div className="bg-[#0b071e] flex flex-col pb-44  items-center justify-center pb-8 w-full max-w-screen overflow-hidden">
            <motion.div className="flex flex-col items-center justify-center py-20 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12">
                <motion.h1 initial={{opacity:0,x:-50}} transition={{duration:1}} whileInView={{opacity:1,x:0}} viewport={{once:false,amount:0.3}} className="text-[50px] text-[#7551fb]">Projects</motion.h1>
                <motion.p initial={{opacity:0,y:50}} transition={{duration:1}} whileInView={{opacity:1,y:0}} className="text-neutral-600 dark:text-neutral-400 text-center max-w-[500px] mt-2">
                    Here are some of my projects that I have worked on. Click on any card
                    to view more details.
                </motion.p>
            </motion.div>

            <AnimatePresence>
                {active && typeof active === "object" && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/20 h-full w-full z-10"
                    />
                )}
            </AnimatePresence>
            <AnimatePresence>
                {active && typeof active === "object" ? (
                    <div className="fixed inset-0  grid place-items-center z-[100]">
                        <motion.button
                            key={`button-${active.title}-${id}`}
                            layout
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            exit={{
                                opacity: 0,
                                transition: {
                                    duration: 0.05,
                                },
                            }}
                            className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
                            onClick={() => setActive(null)}
                        >
                            <CloseIcon />
                        </motion.button>
                        <motion.div
                            layoutId={`card-${active.title}-${id}`}
                            ref={ref}
                            className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-[#0b071e] sm:rounded-3xl overflow-hidden"
                        >
                            <motion.div layoutId={`image-${active.title}-${id}`}>
                                <img
                                    width={200}
                                    height={200}
                                    src={active.src}
                                    alt={active.title}
                                    className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                                />
                            </motion.div>

                            <div>
                                <div className="flex justify-between items-start p-4">
                                    <div className="">
                                        <motion.h3
                                            layoutId={`title-${active.title}-${id}`}
                                            className="font-bold text-neutral-700 dark:text-neutral-200"
                                        >
                                            {active.title}
                                        </motion.h3>
                                        <motion.p
                                            layoutId={`description-${active.description}-${id}`}
                                            className="text-neutral-600 dark:text-neutral-400"
                                        >
                                            {active.description}
                                        </motion.p>
                                    </div>

                                    <motion.a
                                        layoutId={`button-${active.title}-${id}`}
                                        href={active.ctaLink}
                                        target="_blank"
                                        className="px-4 py-3 text-sm rounded-full font-bold bg-[#7551fb] text-white"
                                    >
                                        {active.ctaText1}
                                    </motion.a>
                                </div>
                                <div className="pt-4 relative px-4">
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                                    >
                                        {typeof active.content === "function"
                                            ? active.content()
                                            : active.content}
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                ) : null}
            </AnimatePresence>
            <motion.ul className="grid grid-cols-3 mx-auto max-w-[90%] gap-4">
                {cards.map((card, index) => (
                    <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.5 }}
                    viewport={{ once: false, amount: 0.3 }}
                        layoutId={`card-${card.title}-${id}`}
                        key={`card-${card.title}-${id}`}
                        onClick={() => setActive(card)}
                        className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
                    >
                        <div className="flex gap-4 flex-col md:flex-row ">
                            <motion.div layoutId={`image-${card.title}-${id}`}>
                                <img
                                    width={100}
                                    height={100}
                                    src={card.src}
                                    alt={card.title}
                                    className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                                />
                            </motion.div>
                            <div className="">
                                <motion.h3
                                    layoutId={`title-${card.title}-${id}`}
                                    className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                                >
                                    {card.title}
                                </motion.h3>
                                <motion.p
                                    layoutId={`description-${card.description}-${id}`}
                                    className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                                >
                                    {card.description}
                                </motion.p>
                            </div>
                        </div>
                        <motion.button
                            layoutId={`button-${card.title}-${id}`}
                            className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-[#7551fb] hover:text-white text-black mt-4 md:mt-0"
                        >
                            {card.ctaText}
                        </motion.button>
                    </motion.div>
                ))}
            </motion.ul>
        </motion.div>
    );
}

export const CloseIcon = () => {
    return (
        <motion.svg
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            exit={{
                opacity: 0,
                transition: {
                    duration: 0.05,
                },
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 text-black"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
        </motion.svg>
    );
};

const cards = [
    {
      description: "React JS, Node JS, MongoDB, Express JS, Vite, TailwindCSS",
      title: "ProShop",
      src: "https://res.cloudinary.com/dmr86c1jv/image/upload/v1746199706/proshop_ceijjk.png", // Replace with actual image
      ctaText: "Details",
      ctaText1: "Github",
      ctaLink: "https://github.com/anunadhu1234/ProShop",
      content: () => {
        return (
          <p>
            • Built a responsive e-commerce website using the MERN stack.<br />
            • Implemented JWT-based authentication and bcrypt password hashing for secure user login.<br />
            • Developed an efficient admin panel using Vite to manage products, users, and orders.<br />
            • Integrated PayPal for secure payments with multiple payment options.
          </p>
        );
      },
    },
    {
      description: "Python, TensorFlow, Keras, CNN, Data Visualization",
      title: "Fashion MNIST",
      src: "https://complex-valued-neural-networks.readthedocs.io/en/latest/_images/code_examples_fashion_mnist_22_0.png", // Replace with actual image
      ctaText: "Details",
        ctaText1: "Github",
      ctaLink: "https://github.com/anunadhu1234/Fashion_MNIST_image_classifier",
      content: () => {
        return (
          <p>
            • Designed and implemented a CNN using TensorFlow/Keras for fashion item classification.<br />
            • Achieved over 90% accuracy on the test set using evaluation metrics like accuracy, precision, and recall.<br />
            • Created visualizations for predictions, misclassifications, and feature maps to interpret the model's behavior.
          </p>
        );
      },
    },
    {
      description: "SQL, DBMS, ER Diagrams, Normalization",
      title: "CourseCrafter",
      src: "https://res.cloudinary.com/dmr86c1jv/image/upload/v1746200011/Screenshot_2025-05-02_210304_diswvz.png", // Replace with actual image
      ctaText: "Details",
        ctaText1: "Github",
      ctaLink: "https://drive.google.com/file/d/1BGj2fdNW9ibEHiHJX75Lir6zs-HyRtVT/view?usp=sharing",
      content: () => {
        return (
          <p>
            • Built an online learning platform demonstrating DBMS and SQL concepts.<br />
            • Used advanced normalization to ensure data integrity across entities like users and courses.<br />
            • Designed an ER diagram and relational schema for a structured database design.<br />
            • Wrote optimized SQL queries to extract meaningful data from the database.
          </p>
        );
      },
    },
    {
        description: "React JS, Node JS, MongoDB, Express JS, TailwindCSS",
        title: "Vistaraft",
        src: "https://res.cloudinary.com/dmr86c1jv/image/upload/v1746200291/Screenshot_2025-05-02_210759_xglola.png", // Replace with an actual screenshot of your site
        ctaText: "Details",
        ctaText1: "Github",
        ctaLink: "https://github.com/itsadit/vistaraft",
        content: () => {
          return (
            <p>
              • Developed a full-stack travel and experience booking platform using the MERN stack.<br />
              • Designed a responsive and modern user interface with TailwindCSS.<br />
              • Integrated dynamic components and APIs to handle user interactions, bookings, and listings.<br />
              • Ensured seamless data flow and secure backend connectivity for real-time updates and reliability.
            </p>
          );
        },
      },
      {
        description: "React JS, Node JS, MongoDB, TailwindCSS, Socket.IO",
        title: "Snapgram",
        src: "https://res.cloudinary.com/dmr86c1jv/image/upload/v1746200480/Screenshot_2025-05-02_211056_whzz5a.png", // Replace with actual screenshot
        ctaText: "Details",
        ctaText1: "Github",
        ctaLink: "https://github.com/anunadhu1234/FullStack-SocialMediaApp-main", // Replace with actual GitHub or live demo link if available
        content: () => {
          return (
            <p>
              • Developed a dynamic social media website using the MERN stack.<br />
              • Implemented real-time messaging and notifications using Socket.IO for instant communication.<br />
              • Created interactive features like posts, comments, likes, and user profiles to increase engagement.<br />
              • Integrated secure user authentication and authorization using JWT and bcrypt.
            </p>
          );
        },
      }
  ];
  
