// import React from 'react'
// import { logo } from '../../assets/index'
// import { navLinksdata } from '../../Constants'
// import { Link } from 'react-scroll'
// export const Navbar = () => {
//     return (
//         <div className='w-full sticky top-0 z-50 bg-bodyColor h-24 mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600'>
//             <div>
//                 <img src={logo} alt='logo' />
//             </div>
//             <div>
//                 <ul className='flex items-center gap-10'>
//                     {
//                         navLinksdata.map(({ _id, title, link }) => (
//                             <li className='text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300 ' key={_id}>
//                                 <Link activeClass='active' spy={true} smooth={true} offset={-70} duration={500} to={link}>{title}</Link>
//                             </li>
//                         ))
//                     }
//                 </ul>
//             </div>
//         </div>
//     )
// }


import React, { useState } from 'react'
import { logo } from '../../assets/index'
import { Link } from 'react-scroll'
import { NavLink } from 'react-router-dom'
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
export const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <div className='w-full sticky top-0 z-50 bg-bodyColor h-24 mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600'>
            <div>
                <img src={logo} alt='logo' />
            </div>
            <div>
                <ul className='hidden mdl:inline-flex items-center gap-6 lg:gap-10'>
                    <li className='text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300 ' >
                        <NavLink to='/home'>Home</NavLink>
                    </li>
                    <li className='text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300 ' >
                        <NavLink to='/projects'>Projects</NavLink>
                    </li>
                    <li className='text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300 ' >
                        <NavLink to='/resume'>Resume</NavLink>
                    </li>
                    <li className='text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300 ' >
                        <NavLink to='/contact'>Contact</NavLink>
                    </li>
                </ul>
                <span
                    onClick={() => setShowMenu(!showMenu)}
                    className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
                >
                    <FiMenu />
                </span>
                {showMenu && (
                    <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
                        <div className="flex flex-col gap-8 py-2 relative">
                            <div>
                                <img className="w-32" src={logo} alt="logo" />
                            </div>
                            <ul className="flex flex-col gap-4">
                                <li className='text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300 ' >
                                    <NavLink to='/home'>Home</NavLink>
                                </li>
                                <li className='text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300 ' >
                                    <NavLink to='/projects'>Projects</NavLink>
                                </li>
                                <li className='text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300 ' >
                                    <NavLink to='/resume'>Resume</NavLink>
                                </li>
                                <li className='text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300 ' >
                                    <NavLink to='/contact'>Contact</NavLink>
                                </li>
                            </ul>
                            <div className="flex flex-col gap-4">
                                <h2 className="text-base uppercase font-titleFont mb-4">
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
                            <span
                                onClick={() => setShowMenu(false)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
                            >
                                <MdClose />
                            </span>
                        </div>
                    </div>
                )}



            </div>
        </div>
    )
}
