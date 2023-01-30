import React from 'react'
import aboutImage from '../assets/about-image.png'


const About = () => {


    return (

          <div name='ABOUT' className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 py-16 px-32 h-screen">
             <img src={aboutImage} alt="" data-aos="fade-up" data-aos-delay="400" />
             <div data-aos="fade-down" data-aos-delay="600">
                <h3 className="font-bold text-blue-600 text-2xl">ABOUT ME</h3>
                <h4 className="text-white font-bold text-3xl mt-2">I'm James Johnson</h4>
                <p className="text-lg text-slate-500 mt-8">
                   I'm a Full-Stack Developer from Oregon. I have a passion for UI effects, animations, and creating intuitive user experiences. 
                   </p>
                   <br />
                  <p> I excel at learning new frameworks and technologies by tackling new and challenging projects everyday.</p>
                

             </div>
          </div>
    )
}

export default About