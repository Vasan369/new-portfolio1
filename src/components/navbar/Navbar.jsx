import React, { useEffect, useState } from 'react';
import { BsPersonGear } from "react-icons/bs";
import { GoProjectRoadmap } from "react-icons/go";
import { GrContactInfo } from "react-icons/gr";
import { RiMenuFold4Line, RiCloseLargeLine } from "react-icons/ri";
import { LuUser2 } from "react-icons/lu";
import "./Navbar.css";
import Contact from '../contact/Contact';
import { Link } from 'react-scroll';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick1 = () => {
        setIsOpen(!isOpen);
    };

    const [isLarge, setIsLarge] = useState(false);

    const handleMouseLeave = () => {
        setIsLarge(false);
    };

    const handleClick = () => {
        setIsLarge(!isLarge);
    };

    const [shadow, setShadow] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 10) {
            setShadow(true);
        } else {
            setShadow(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <nav className='fixed top-2 left-2 right-2 z-30'>
            <div className='nav-contend-sm mx-auto md:w-10/12  backdrop-blur-md rounded-2xl p-4' style={{ boxShadow: shadow ? '0 25px 30px -12px rgb(0 0 0 / 0.15)' : '' }}>
                <div className='flex relative'>
                    <div className="text-4xl dark:text-gray-300">Vasan..</div>
                    <div
                        onMouseLeave={handleMouseLeave}
                        className="absolute right-0 bg-white dark:bg-blue-gray-900 dark:text-gray-300 rounded-xl border items-center border-blue-400 "
                        style={{
                            width: isLarge ? "60vw" : "45px",
                            height: isLarge ? "25rem" : "43px",
                            transition: "all 0.5s ease",
                            flexDirection: isLarge ? "column" : "row",
                            boxShadow: isLarge ? "0 25px 50px -12px rgb(0 0 0 / 0.35)" : ''
                        }}
                    >
                        <button
                            className="absolute top-1 right-0 p-0 border-none bg-transparent cursor-pointer w-9 z-10"
                            onClick={handleClick}
                        >
                            {isLarge ?
                                <RiCloseLargeLine className='text-2xl mt-1' /> :
                                <RiMenuFold4Line className='text-3xl' />}
                        </button>
                        <div className={`absolute transition delay-200 w-full h-full  ${isLarge ? 'opacity-100' : 'opacity-0'}`}>
                            {isLarge && (
                                <div className='flex flex-col w-full h-full items-center justify-around'>
                                    <Link to="profile"
                                        spy={true}
                                        smooth={true}
                                        offset={-50}
                                        duration={500} onClick={handleClick} className="cursor-pointer mob-it mt-5 flex gap-2 items-center"><GrContactInfo className='text-2xl' />Profile</Link>
                                    <Link to="skills"
                                        spy={true}
                                        smooth={true}
                                        offset={-90}
                                        duration={500} onClick={handleClick} className="cursor-pointer mob-it flex gap-1 items-center"><BsPersonGear className='text-xl' />Skills</Link>
                                    <Link to="project"
                                        spy={true}
                                        smooth={true}
                                        offset={-30}
                                        duration={500} onClick={handleClick} className="cursor-pointer mob-it flex gap-1 items-center"><GoProjectRoadmap className='text-xl' />Projects</Link>
                                    <Link to="about"
                                        spy={true}
                                        smooth={true}
                                        offset={-90}
                                        duration={500} onClick={handleClick} className="cursor-pointer mob-it flex gap-1 items-center"><LuUser2 className='text-xl' />About</Link>
                                    <button className=" text-white active:bg-sky-500 bg-gray-600 px-4 py-2 rounded-xl mb-3" onClick={handleClick1} >
                                        Contact
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>



            <div className="nav-contend-lg rounded-xl p-3 backdrop-blur-lg" style={{ boxShadow: shadow ? '0 25px 30px -12px rgb(0 0 0 / 0.15)' : '' }}>
                <div className="flex items-center justify-between px-4 mx-auto w-11/12">
                    <h2 className=" text-4xl dark:text-gray-300">Vasan..</h2>
                    <ul className="flex items-center gap-10 dark:text-gray-300">
                        <li className='li'>
                            <Link to="profile"
                                spy={true}
                                smooth={true}
                                offset={-50}
                                duration={500} className="cursor-pointer flex items-center gap-2">
                                <GrContactInfo className='text-2xl' />
                                Profile
                            </Link>
                        </li>
                        <li className='li'>
                            <Link to="skills"
                                spy={true}
                                smooth={true}
                                offset={-90}
                                duration={500} className="cursor-pointer flex items-center gap-1">
                                <BsPersonGear className='text-xl' />
                                Skills
                            </Link>
                        </li>
                        <li className='li'>
                            <Link to="project"
                                spy={true}
                                smooth={true}
                                offset={-30}
                                duration={500} className="cursor-pointer flex items-center gap-1">
                                <GoProjectRoadmap className='text-xl' />
                                Project
                            </Link>
                        </li>
                        <li className='li'>
                            <Link to="about"
                                spy={true}
                                smooth={true}
                                offset={-90}
                                duration={500} className="cursor-pointer flex items-center gap-1">
                                <LuUser2 className='text-xl' />
                                About
                            </Link>
                        </li>

                    </ul>
                    <button className="border-2 text-sky-600 dark:text-gray-300 border-sky-500 hover:bg-sky-500 active:bg-sky-300 px-4 py-2 rounded-xl" onClick={handleClick1}>
                        Contact
                    </button>
                </div>
            </div >
            {isOpen && <Contact isOpen={isOpen} setIsOpen={setIsOpen} />}

        </nav >

    );
};

export default Navbar;
