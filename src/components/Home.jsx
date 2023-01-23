import React, { useEffect } from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa';
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
            {
                id: 4,
                child: (
                    <>
                    <BsFillPersonLinesFill size={30}/>
                    </>
                ),
                href: '/resume.pdf',
                download: true,
            },
        ]
    
    return (

        
    <div name='HOME' className="bg-hero-img object-none">
        <div className="flex items-center justify-center flex-col h-screen">
           <h1 className="text-white font-bold text-4xl md:text-6xl"  data-aos="fade-up" data-aos-delay="200">I'm James</h1>
           <h2 className="text-white text-sm sm:text-lg md:text-xl font-bold mt-4"  data-aos="zoom-in" data-aos-delay="200">
              Full-Stack Developer
           </h2>
           <ul className="flex items-center justify-center gap-8 mt-8"  data-aos="zoom-in"  data-aos-delay="400">
           {links.map(({id, child, href, download}) => (
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