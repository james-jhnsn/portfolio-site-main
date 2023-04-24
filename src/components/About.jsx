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
            I am a software engineer with a passion for back-end programming. I specialize in developing efficient and scalable systems that power complex web applications. My expertise lies in designing and implementing database architecture, optimizing server performance, and writing clean, maintainable code.
            </p>
            <p className="text-lg text-slate-500 mt-8"> I am experienced in several programming languages, including Python, Java, and C#, and am always eager to learn new technologies. My attention to detail, strong problem-solving skills, and ability to work in a team environment make me a valuable asset to any project.</p>
            <p className="text-lg text-slate-500 mt-8"> Outside of work, I enjoy reading about the latest advancements in technology and staying up-to-date with industry trends. I am committed to continuous learning and improvement and am excited about the opportunities that lie ahead in my career as a back-end software engineer.</p>


         </div>
      </div>
   )
}

export default About