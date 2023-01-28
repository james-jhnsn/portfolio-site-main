import React from 'react'
import weather from '../assets/portfolio/weather.PNG';
import calc from '../assets/portfolio/calc.PNG';
import tictactoe from '../assets/portfolio/tic-tac-toe.PNG'

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
      src: calc,
      href: 'https://calculator-react-jay.netlify.app',
      repo: 'https://github.com/Jamesjr95/calculator-react'
    },
    {
      id: 1,
      src: tictactoe,
      href: 'https://xs-os-react.netlify.app/',
      repo: 'https://github.com/Jamesjr95/tictactoe-react'
    },
  ]

  return (
   
    <div name='WORK' className="px-32 pt-32">
      <h3 className="font-bold text-blue-600 text-2xl text-center" data-aos="fade-up">PORTFOLIO</h3>
      <h4 className="text-white font-bold text-3xl mt-2 text-center" data-aos="fade-up">LATEST PROJECTS</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-8">
        {
          portfolios.map(({ id, src, href, repo }) => (
            <div id={id} className="flex flex-col rounded-sm bg-slate-800/80 overflow-hidden" data-aos="zoom-in" data-aos-delay="400">
              <img src={src} alt="" className='p-image' />
              <div className='py-4 flex items-center justify-evenly'>
                <a className='p-button hover:scale-110 transition duration-200 ease-in-out' href={href}> Demo
                </a>
                <a className='p-button ml-5 hover:scale-110 transition duration-200 ease-in-out' href={repo}> Code
                  
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