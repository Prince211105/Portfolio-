import React from 'react'
import Title from '../layouts/Title'
import { ProjectCard } from './ProjectCard'
import { projectOne } from '../../assets/index'
import { FaGlobe } from 'react-icons/fa'
import { Link } from 'react-router-dom'
export const Projects = () => {
    return (
        <section id='projects' className="w-full py-20 border-b-[1px] border-b-black">
            <div className='flex justify-center items-center text-center'>
                <Title
                    title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
                    des='My Projects'
                />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14'>
                <ProjectCard
                    title="TOPFLOOR MUSIC APP"
                    des="I developed the music player, search page, notifications, and event pages in a 
                     topfloor music app. This music app belonged to a company based in the USA."
                    src={projectOne}
                    FaGlobe={<Link to='/' target='_blank'><FaGlobe /></Link>}
                />
            </div>

        </section>

    )
}
