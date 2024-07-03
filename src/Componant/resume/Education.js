import React from 'react'
import { ResumeCard } from './ResumeCard'
import { motion } from 'framer-motion'

export const Education = () => {
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1,transition:{duration:.5}}}  className='w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20'>
            <div>
                <div className='py-6 lgl:py-12 font-titleFont flex flex-col gap-4'>
                    <p className='text-sm text-designColor tracking-[4px]'>2018 - Running</p>
                    <h2 className='text-3xl md:text-4xl font-bold'>Education Quality</h2>
                </div>
                <div className='mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
                    <ResumeCard
                        title="B.Tech in IT"
                        subTitle="Silver Oak university (2021-Running)"
                        result="Running"
                        des="I am currently pursuing a B.Tech in Information Technology from Aditya 
        Silver Oak Institute of Technology. I am currently in my third year of study
        and have been interning at an IT company since my third year began."
                    />
                    <ResumeCard
                        title="11-12th science "
                        subTitle="Gyanda Girls High School(2019-2021)"
                        result="70.33/100"
                        des="I completed my 11th and 12th-grade education at Gyanda Girls High School.
        In my 12th-grade science exams with the Gujarat Board, I scored 70.33 marks. I passed 
        both the Gujarat Board exams and GUJCET in my first attempt."
                    />
                    <ResumeCard
                        title="10th board"
                        subTitle="J. M. Chaudhari Sarvajanik Vidyalaya(2018-2019)"
                        result="72.33/100"
                        des="I completed my 10th grade education at J. M. Chaudhari Sarvajanik Vidyalaya
                school. In my 10th board exams, I scored 72.33 marks. I passed my 10th grade 
                Gujarat Board exams on my first attempt."
                    />
                </div>
            </div>

            <div>
                <div className='py-6 lgl:py-12 font-titleFont flex flex-col gap-4'>
                    <p className='text-sm text-designColor tracking-[4px]'>2024 - Running</p>
                    <h2 className='text-3xl md:text-4xl font-bold'>Internship Experience</h2>
                </div>
                <div className='mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
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
    )
}
