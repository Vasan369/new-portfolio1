import React, { useState } from "react";
import "./Mainbody.css"
import { assets } from "../../assets";
import { TypeAnimation } from "react-type-animation";
import { FiDownload } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GiHand, GiMoon } from "react-icons/gi";
import { IoSunny } from "react-icons/io5";
import useTheme from "../theme/useTheme";


const Mainbody = () => {
    const [nextTheme, setTheme] = useTheme();
    const [themeButton, setThemeButton] = useState(false);

    const theme = () => {
        setTheme(nextTheme);
        setThemeButton(!themeButton);
    }

    return <>
        <div className="main-body py-10" id="profile">
            <div className="main-content w-10/12 mx-auto h-full">
                <div className="photo-container flex items-center justify-center">
                    <img src={assets.photo} alt="" className="photo rounded-3xl mx-auto" />
                </div>
                <div className="text-container w-11/12 mx-auto flex items-center justify-center">
                    <div>
                        <h3 className=" text-4xl flex items-center  justify-center gap-3 font-bold md:text-5xl md:font-bold mb-3 text-gray-800 dark:text-gray-300">
                            <span className=" text-2xl md:text-3xl">🙋🏻‍♂️</span> I'm Vasanth
                        </h3>
                        <h2 className={`${themeButton ? 'welcome' : 'welcome1'} text-2xl font-bold md:text-3xl md:font-bold  text-gray-800 mb-8`}>
                            <TypeAnimation
                                sequence={[500, 'Full Stack Developer', 1000, 'Frontend, ', 1000, 'Backend and', 1000, 'MERN Stack', 1000]}
                                repeat={Infinity}
                            />
                        </h2>
                        <p className="mt-4 text-xl text-gray-800 dark:text-gray-400">I'm a Full Stack Developer with a passion for creating seamless user experiences. Always eager to learn, create, and innovate.</p>
                        <div className="flex mt-14 gap-5 items-center justify-center portfolio-container ">

                            <a href={assets.Resume} download="Resume" className="bg-blue-500 text-xl py-2 px-4 hover:bg-blue-700 transition duration-300 rounded-full no-underline text-white flex items-center gap-2">
                                Resume <FiDownload />
                            </a>

                            <a href="https://github.com/Vasan369/new-portfolio1.git" target="_blank" className="text-4xl dark:text-gray-300"><FaGithub /></a>
                            <a href="https://www.linkedin.com/in/vasanth001/" target="_blank" className="text-4xl dark:text-gray-300"><FaLinkedin /></a>
                            <button className="fixed shadow-lg rounded-full top-24 right-8 text-3xl" onClick={() => { theme() }}>{themeButton ? <IoSunny className="dark:text-white" /> : <GiMoon />}</button>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </>

};

export default Mainbody;
