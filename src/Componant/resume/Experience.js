import React from "react";
import { ResumeCard } from "./ResumeCard";
import { motion } from "framer-motion";

const Experience = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: .5 } }}
            className="py-12 font-titleFont flex gap-20"
        >
            <div>
                <div className="flex flex-col gap-4">
                    <p className="text-sm text-designColor tracking-[4px]">2024 - Running</p>
                    <h2 className="text-4xl font-bold">Internship Experience</h2>
                </div>
                <div className='mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
                    <ResumeCard
                        title="Stegowl media labs llp"
                        subTitle="MERN STACK(2024-Running)"
                        result="Ahmedabad"
                        des="I started my second internship at Stegowl Media Labs LLP in January. Initially,
                I began as a MERN stack developer. Currently, I'm working on a project for a company
                based in the USA, and I'm continuing my internship there."
                    />
                </div>
            </div>
            
        </motion.div>
    );
};

export default Experience;
