import React from "react";
import { ResumeCard } from "./ResumeCard";
import { motion } from "framer-motion";
const Achievement = () => {
  return (
    <motion.div
    initial={{opacity:0}} animate={{opacity:1,transition:{duration:.5}}}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
       <h2>Comming soon</h2>
      </div>
    </motion.div>
  );
};

export default Achievement;
