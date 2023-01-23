import React, { useEffect } from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import AOS from 'aos';
import 'aos/dist/aos.css'

const Home = () => {
    
    useEffect(() => {
        AOS.init();
    }, [])
    

        const links = [
            {
                id: 1,
                child: (
                    <>
                    <FaLinkedin size={30}/>
                    </>
                ),
                href: 'https://www.linkedin.com/in/james-johnson-487228200/',
                style: 'rounded-tr-md'
            },
            {
                id: 2,
                child: (
                    <>
                    <FaGithub size={30}/>
                    </>
                ),
                href: 'https://github.com/Jamesjr95',
            },
            // {
            //     id: 3,
            //     child: (
            //         <>
            //         <HiOutlineMail size={30}/>
            //         </>
            //     ),
            //     href: 'mailto:jamesjhnsn1995@gmail.com',
            // },
            {
                id: 4,
                child: (
                    <>
                    <BsFillPersonLinesFill size={30}/>
                    </>
                ),
                href: '/resume.pdf',
                download: true,
                style: "rounded-br-md",
            },
        ]
    
    return (
        // <div name='home' className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
        //     <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4'>
        //         <div className='flex flex-col justify-center h-full'>
        //             <h2 className='text-4xl sm:text-6xl font-bold text-white'>
        //                 Hello, I'm James.<br></br> I'm a Full Stack <br></br>Developer
        //             </h2>
        //             <div>
        //                 {/* group is a tailwind class that groups content in relation to the parent*/}
        //                 <button className='group w-fit px-6 text-white py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500'>
        //                     Portfolio
        //                     <span className="group-hover:rotate-90 duration-300">
        //                         <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
        //                     </span>
        //                 </button>
        //             </div>
        //         </div>
        //     </div>
        // </div>


        
    <div name='HOME' className="bg-hero-img object-none">
        <div className="flex items-center justify-center flex-col h-screen">
           <h1 className="text-white font-bold text-4xl md:text-6xl"  data-aos="fade-up" data-aos-delay="200">I'm James</h1>
           <h2 className="text-white text-sm sm:text-lg md:text-xl font-bold mt-4"  data-aos="zoom-in" data-aos-delay="200">
              Full-Stack Developer
           </h2>
           <ul className="flex items-center justify-center gap-8 mt-8"  data-aos="zoom-in"  data-aos-delay="400">
           {links.map(({id, child, href, style, download}) => (
            <a key={id}
                href={href}
                className='text-slate-900 hover:text-white hover:bg-slate-900 transition duration-300 ease-out flex items-center justify-center w-12 h-12 bg-white rounded-full'
                download={download}
                target='_blank'
                rel='noreferrer'
                >
                 {child}  
            </a>
            ))}
           </ul>
        </div>
     </div>

    )
}

export default Home