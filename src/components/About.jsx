import React from 'react'
import aboutImage from '../assets/about-image.png'

import { BiTachometer } from 'react-icons/bi'

const About = () => {


    return (
        // <div name='about' className='w-full bg-gradient-to-b from-gray-800 to-black text-white'>
        //     <div className='max-w-screen-lg p-4 mx-auto flex-col justify-center w-full h-full'>
        //         <div className='pb-8'>
        //             <p className=' text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        //         </div>
        //         <p className='text-xl mt-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nemo saepe fuga inventore in quibusdam porro recusandae distinctio iste. Expedita repellendus totam eos consequatur voluptatem. Voluptatum, ratione repellat, illo quidem tempore quas recusandae non dolore minima odit nisi. Animi exercitationem inventore officia. Vel natus reiciendis laudantium animi nulla quidem pariatur.</p>

        //         <br />
        //         <p className='text-xl'>
        //             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos magnam quo aliquid et ipsa. Quis adipisci libero cum pariatur sunt!
        //         </p>
        //     </div>
        // </div>


          <div name='ABOUT' className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 py-16 px-32 h-screen max-w-screen-lg">
             <img src={aboutImage} alt="" data-aos="fade-up" data-aos-delay="400" />
             <div data-aos="fade-down" data-aos-delay="600">
                <h3 className="font-bold text-blue-600 text-2xl">ABOUT ME</h3>
                <h4 className="text-white font-bold text-3xl mt-2">I'm James Johnson</h4>
                <p className="text-lg text-slate-500 mt-8">
                   I'm a Full-Stack Developer from Oregon. I have a passion for UI effects, animations, and creating intuitive user experiences.
                </p>

             </div>
          </div>
    )
}

export default About