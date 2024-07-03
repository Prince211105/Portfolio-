import React, { useState } from 'react'
import Title from '../layouts/Title'
import { Education } from './Education'
import { Skills } from './Skills'
import Achievement from './Achievement'
import Experience from './Experience'


export const Resume = () => {
    const [educationData, setEducationData] = useState(true)
    const [skillsData, setSkillsData] = useState(false)
    const [experienceData, setExperienceData] = useState(false)
    const [achievementData, setAchievementData] = useState(false)
    return (
        <section id='resume' className="w-full py-20 border-b-[1px] border-b-black">

            <div className='flex justify-center items-center text-center'>
                <Title
                    title="1 YEARS OF EXPERIENCE"
                    des='My Resume'
                />
            </div>
            <div>
                <ul className='w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4'>
                    <li onClick={() => setEducationData(true) & setSkillsData(false) & setExperienceData(false) & setAchievementData(false)} className={`${educationData ? "border-designColor rounded-lg" : "border-transparent"} resumeLi`}>Education</li>
                    <li onClick={() => setEducationData(false) & setSkillsData(true) & setExperienceData(false) & setAchievementData(false)} className={`${skillsData ? "border-designColor rounded-lg" : "border-transparent"} resumeLi`}>Professional Skills</li>
                    <li onClick={() => setEducationData(false) & setSkillsData(false) & setExperienceData(true) & setAchievementData(false)} className={`${experienceData ? "border-designColor rounded-lg" : "border-transparent"} resumeLi`}>Experience</li>
                    <li onClick={() => setEducationData(false) & setSkillsData(false) & setExperienceData(false) & setAchievementData(true)} className={`${achievementData ? "border-designColor rounded-lg" : "border-transparent"} resumeLi`}>Achievements</li>
                </ul>
            </div>
            {educationData && <Education />}
            {
                skillsData && <Skills />
            }
            {
                achievementData && <Achievement />
            }
            {
                experienceData && <Experience />
            }

        </section>
    )
}
