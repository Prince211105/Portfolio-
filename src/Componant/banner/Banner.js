import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { Leftbanner } from './Leftbanner';
import { Rightbanner } from './Rightbanner';

export const Banner = () => {

    return (
        <section id='home' className='w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black'>
            <Leftbanner />
            <Rightbanner />

        </section>
    )
}
