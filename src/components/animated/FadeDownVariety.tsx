"use client"

import { motion, useInView } from "framer-motion";
import React from "react";

export function FadeDownVariety({font}:{font:String}) {
  const ref = React.useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.div
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      viewport={{ once: true }}
      className={`sectionTitle`}
    >
      <motion.p
        className={`  ${font}`}
        variants={ {
          hidden: { opacity: 0, y: -15 },
          show: { opacity: 1, y: 0, transition: { type: "spring" , duration:1.2 } },
        }}
      >
        Variety of fashion
      </motion.p>
      <motion.p ref={ref}></motion.p>

    </motion.div>
  );
}

