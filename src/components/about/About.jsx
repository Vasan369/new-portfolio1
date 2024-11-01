import React from 'react'
import "./About.css"
import { assets } from '../../assets'


function About() {
    return (
        <>
            <div id='about' className='main-container1 flex flex-col gap-2 items-center bg-gray-300 dark:bg-blue-gray-700 dark:text-gray-300 mx-auto p-4'>
                <h1 className='text-4xl'>About Me..</h1>
                <div className='border-2 p-3 mx-5 md:mx-36 rounded-3xl'>
                    <p className='text-center text-xl text-gray-800 dark:text-gray-300'>Hi! I'm Vasanth, a Full Stack Developer passionate about crafting seamless user experiences. While I may be at the beginning of my journey, my enthusiasm for learning and innovation drives me to create dynamic and responsive web applications. From front-end interfaces to back-end server logic, I enjoy bringing ideas to life through technology. Let's connect and build something amazing together!</p>
                </div>
                <h1 className='text-2xl my-2'>Certifications</h1>
                <div className='flex flex-col md:flex-row gap-3'>
                    <div>
                        <img src={assets.java_c} className='w-[250px]' title='Java Full Stack' alt="" />
                        <p className='text-gray-600 dark:text-gray-400'>Java Full Stack</p>
                    </div>
                    <div>
                        <img src={assets.certificate} className='w-[250px]' title='Python' alt="" />
                        <p className='text-gray-600 dark:text-gray-400'>Python</p>
                    </div>

                </div>
            </div>
            <div>

            </div>
        </>
    )
}

export default About
