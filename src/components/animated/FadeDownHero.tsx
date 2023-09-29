"use client"

import { motion, useInView } from "framer-motion";
import React from "react";

export function FadeDownHero({font}:{font:String}) {
  const ref = React.useRef(null);
  const isInView = useInView(ref);

  const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };
  
  return (
    <motion.div
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      viewport={{ once: true }}
      variants={{
        hidden: { },
        show: {
          transition: {
            staggerChildren: 0.25,
          },
        },
      }}
      className={`text-white ${font} ssm:text-[30px] text-[35px] sm:text-[50px] md:text-[70px] px-[10px] lg:text-[90px] text-center absolute inset-0 flex flex-col items-center justify-center`}
    >

      <motion.p ref={ref}></motion.p>
      <motion.p
        className={`drop-shadow-sm`}
        variants={FADE_DOWN_ANIMATION_VARIANTS}
      >
        Make  Yourself stylish 
      </motion.p>
      


      <motion.p
        variants={FADE_DOWN_ANIMATION_VARIANTS}
      >
        with our  products
        
      </motion.p>

    </motion.div>
  );
}

