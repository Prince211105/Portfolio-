import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { FaFacebookF, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";
import Resume from '../../assets/images/Resume.pdf'
export const Leftbanner = () => {

    const [text] = useTypewriter({
        words: ['MERN stack', 'MERN stack'],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
    })
    return (
        <div className='w-full lgl:w-1/2 flex flex-col gap-20'>
            <div className='flex flex-col gap-5'>
                <h4 className='text-lg font-normal'>WELCOME TO MY WORLD</h4>
                <h1 className='text-5xl font-bold text-white'>Hi, I'm {" "}
                    <span className='text-designColor capitalize'>Prince Patel</span>
                </h1>
                <h2 className='text-3xl font-bold text-white'>a <span>{text}</span>
                    <Cursor
                        cursorBlinking="false"
                        cursorStyle="|"
                        cursorColor='#ff014f'
                    />
                </h2>
                <p className='text-base font-bodyFont leading-6 tracking-wide'>
                    I use animation as a third dimension by which to simplify experiences and kuiding
                    thro each and every interaction. I'm not adding motion just to spruce things
                    up, but doing it in ways that.
                </p>
                <a href={Resume} download="Resume">
                    <button
                        className="bg-gradient-to-r from-black to-white hover:from-white hover:to-black text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline w-1/2"
                    >
                        Download CV
                    </button>
                </a>




            </div>
            <div className='flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between'>
                <div>
                    <h2 className='text-base uppercase font-titleFont mb-4'>
                        Find me in
                    </h2>
                    <div className="flex gap-4">
                        <span className="bannerIcon">
                            <FaFacebookF />
                        </span>
                        <span className="bannerIcon">
                            <FaLinkedinIn />
                        </span>
                    </div>
                </div>
                <div>
                    <h2 className="text-base uppercase font-titleFont mb-4">
                        BEST SKILL ON
                    </h2>
                    <div className="flex gap-4">
                        <span className="bannerIcon">
                            <FaReact />
                        </span>
                        <span className="bannerIcon">
                            <SiMongodb />
                        </span>
                        <span className="bannerIcon">
                            <SiTailwindcss />
                        </span>
                        <span className="bannerIcon">
                            <SiExpress />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
