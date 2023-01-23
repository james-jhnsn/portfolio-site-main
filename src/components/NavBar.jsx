import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../assets/initial.png';
import {Link} from 'react-scroll';

const NavBar = () => {

    const [nav, setNav] = useState(false)

    const links = [
        {
            id: 1,
            link: 'ABOUT'
        },
        {
            id: 2,
            link: 'WORK'
        },
        {
            id: 3,
            link: 'EXPERIENCE'
        },
        {
            id: 4,
            link: 'CONTACT'
        },
    ]

    return (

        <div className="flex items-center justify-between bg-slate-800 px-32 fixed w-full z-10">
            <a >
                {/* <img src='./src/assets/initial.png' alt="" className='bg-white'/> */}
                <Link to={'HOME'} smooth duration={500}><img src={logo} alt="" className='flex bg-transparent ml-3 scale-50 flex-shrink-0 cursor-pointer' /></Link>
            </a>
            <input type="checkbox" class="peer hidden" name="hamburger" id="hamburger" />
            <label className="peer-checked:hamburger block cursor-pointer p-2 md:hidden" for="hamburger">
                <div className="m-auto h-0.5 w-6 rounded bg-white transition duration-300"></div>
                <div className="m-auto mt-2 h-0.5 w-6 rounded bg-white transition duration-300"></div>
            </label>
            <ul
                className="absolute inset-x-0 top-14 flex -translate-x-full flex-col items-center gap-8 bg-slate-800 py-8 opacity-0 transition duration-100 peer-checked:translate-x-0 peer-checked:opacity-100 md:relative md:top-0 md:translate-x-0 md:flex-row md:bg-transparent md:py-0 md:opacity-100">
                    {links.map(({id, link}) =>(
                    <li key={id} className='text-white hover:border-b hover:border-white hover:pb-2 transition-all duration-300 cursor-pointer'><Link to={link} smooth duration={500}>{link}</Link></li>
                ))}
            </ul>
        </div>

    )
}

export default NavBar