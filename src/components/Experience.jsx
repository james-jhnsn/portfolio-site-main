import React from 'react'

import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import reactImage from '../assets/reactImage.png';
import github from '../assets/github.png';
import tailwind from '../assets/tailwind.png';
import django from '../assets/django.png'
import python from '../assets/python.png'
import bootstrap from '../assets/bootstrap.png'
import cSharp from '../assets/c#.png';

const Experience = () => {
    const techs = [
        {
            id: 1,
            src: html,
            title: "HTML",
        },
        {
            id: 2,
            src: css,
            title: "CSS",
        },
        {
            id: 3,
            src: javascript,
            title: "JavaScript",
        },
        {
            id: 4,
            src: reactImage,
            title: "React",
        },
        {
            id: 5,
            src: tailwind,
            title: "Tailwind",
        },
        {
            id: 8,
            src: github,
            title: "GitHub",
        },
        {
            id: 9,
            src: django,
            title: "Django",
        },
        {
            id: 10,
            src: python,
            title: "Python",
        },
        {
            id: 11,
            src: bootstrap,
            title: "Bootstrap",
        },
        {
            id: 12,
            src: cSharp,
            title: "C#",
        },
    ];

    return (
        <div name='EXPERIENCE' className='w-full h-screen px-32'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
                <div className=' text-center'>
                    <p className='text-4xl font-bold p-2 inline text-blue-600' data-aos="fade-up" data-aos-delay="300">Experience</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0' data-aos="fade-up" data-aos-delay="400">

                    {
                        techs.map(({ id, src, title, style }) => (
                            <div key={id} className='hover:scale-125 duration-500 py-2'>
                                <img src={src} alt="" className='w-20 mx-auto' />
                                <p className='mt-4'>{title}</p>
                            </div>

                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Experience