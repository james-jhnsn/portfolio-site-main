import React from 'react'

const Contact = () => {
    return (
        <div name='CONTACT' className='w-full h-80 p-4 text-white px-32 text-center'>
            <div className='flex p-4 justify-center max-w-screen-lg mx-auto h-full '>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline'>
                        Contact
                    </p>
                    <p className='py-6'>
                        Submit the form below to get in touch with me
                    </p>
                    <div>
                        <form action="https://getform.io/f/8280d2b7-40f0-4e0a-92a3-05dc55385d50" method='POST' className='flex flex-col w-full' data-aos="flip-up" data-aos-delay="500">
                            <input type="text" name='name' placeholder='Enter your name' className='p-2 bg-transparent border-2 text-white focus:outline-none' />
                            <input type="text" name='email' placeholder='Enter your Email' className='p-2 bg-transparent border-2 text-white focus:outline-none my-4' />
                            <textarea name="message" rows="10" className='p-2 bg-transparent border-2 text-white focus:outline-none' placeholder='Enter your messsage'></textarea>
                            <button className='py-3 px-6 mx-auto my-8 flex items-center hover:scale-110 duration-300 bg-white text-black rounded-sm'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact