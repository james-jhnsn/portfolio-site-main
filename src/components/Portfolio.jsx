import React from 'react'
import weather from '../assets/portfolio/weather.PNG';

const Portfolio = () => {

  const portfolios = [
    {
      id: 1,
      src: weather,
      href: 'https://localweatherwatch.netlify.app/',
      repo: 'https://github.com/Jamesjr95/localweatherwatch'
    },
    {
      id: 1,
      src: weather,
      href: 'https://localweatherwatch.netlify.app/',
      repo: 'https://github.com/Jamesjr95/localweatherwatch'
    },
    {
      id: 1,
      src: weather,
      href: 'https://localweatherwatch.netlify.app/',
      repo: 'https://github.com/Jamesjr95/localweatherwatch'
    },
  ]

  return (
    // <div name='portfolio' className='w-full text-white md:h-screen'>
    //   <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-center'>
    //     <div className='pb-12'>
    //       <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
    //     </div>


    //     <div className='grid sm:grid-cols-2 md:grid-cols-3 px-12 sm:px-0'>
    //       {
    //         portfolios.map(({ id, src, href, repo }) => (
    //           <div id={id} className='shadow-md shadow-gray-600'>
    //             <img src={src} alt="" className='' />
    //             <div className='flex items-center justify-center'>
    //               <a href={href}><button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
    //               </a>
    //               <a href={repo}>
    //               <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
    //               </a>
    //             </div>
    //           </div>
    //         ))
    //       }

    //     </div>
    //   </div>
    // </div>

    <div name='WORK' className="px-32 pt-32 h-screen">
      <h3 className="font-bold text-blue-600 text-2xl text-center" data-aos="fade-up">PORTFOLIO</h3>
      <h4 className="text-white font-bold text-3xl mt-2 text-center" data-aos="fade-up">LATEST PROJECTS</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-8">
        {
          portfolios.map(({ id, src, href, repo }) => (
            <div id={id} className="flex flex-col bg-slate-800/80 rounded-md overflow-hidden" data-aos="zoom-in" data-aos-delay="400">
              <img src={src} alt="" className='' />
              <div className='py-4 flex items-center justify-center'>
                <a href={href}><button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-white'>Demo</button>
                </a>
                <a href={repo}>
                  <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-white'>Code</button>
                </a>
              </div>
            </div>
          ))
        }

      </div>

    </div>

  )
}

export default Portfolio