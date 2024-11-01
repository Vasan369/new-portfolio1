import React, { useState } from 'react';
import StonePaperScissorsGame from '../SPSgame/StonePaperScissorsGame ';
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import { IoCloseCircle } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import Qrcode from '../qrcode/Qrcode';
import MiniWallet from '../wallet/MiniWallet';
import MERN from '../mern/MERN';
import AgeCalculator from '../age/AgeCalculator';
import { assets } from '../../assets';

function Project() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const slides = [
        {
            src: `${assets.notes}`,
            title: 'Notes App',
            description: 'CRUD Operation Using MERN Stack',
            component: MERN,
            git: "https://github.com/Vasan369/Notes-app.git"
        },
        {
            src: `${assets.QR}`,
            title: 'QR Code Generator',
            description: 'Generate QR code Using API',
            component: Qrcode,
            git: "https://github.com/Vasan369/QRcode.git"
        },
        {
            src: `${assets.wallet}`,
            title: 'Mini Wallet',
            description: 'Mini Wallet data are store in local storage',
            component: MiniWallet,
            git: "https://github.com/Vasan369/new-mini-wallet.git"
        },
        {
            src: `${assets.SPS}`,
            title: 'Stone Paper Scissors',
            description: 'This is a game',
            component: StonePaperScissorsGame,
            git: "https://github.com/Vasan369/SPSgame.git"
        },
        {
            src: `${assets.age}`,
            title: 'Age Calculator',
            description: 'Find your age',
            component: AgeCalculator,
            git: "https://github.com/Vasan369/new-age-cal.git"
        }
    ];

    const handlePrev = () => {
        setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
    };

    const handleNext = () => {
        setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
    };

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="text-gray-900 h-screen project w-full flex items-center justify-center">
            <div id='project' className={` p-6 rounded-2xl shadow-2xl text-center dark:bg-blue-gray-50 ${isOpen ? 'w-[340px] md:w-[360px] h-[470px]' : 'w-[300px] md:w-[330px] h-[450px]'} relative transition-all duration-500 ease-in-out`}>
                {isOpen && (
                    <button className="absolute top-1 right-1 text-3xl text-red-500 rounded-full shadow-lg" onClick={toggleOpen}>
                        <IoCloseCircle />
                    </button>
                )}
                {!isOpen && (
                    <div className="flex overflow-hidden w-full">
                        {slides.map((slide, index) => (
                            <div key={index} className=" min-w-full transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                                <img src={slide.src} alt={`Slide ${index}`} className="mx-auto w-[200px]" />
                                <p className=" mt-2 text-2xl font-medium  mb-3">{slide.title}</p>
                                <p className=" text-lg mb-3">{slide.description}</p>
                                <a href={slide.git} target='_blank' className="bg-gray-500 w-52 mx-auto text-white items-center justify-center flex px-4 py-2 rounded-full gap-2">Source<FaGithub /></a>
                            </div>
                        ))}
                    </div>
                )}
                {isOpen && React.createElement(slides[currentSlide].component)}
                {!isOpen && (

                    <>
                        <button className="bg-white text-gray-900 rounded-full absolute top-40 -left-6 text-4xl border-none p-1 cursor-pointer shadow-xl" onClick={handlePrev}><FaCircleChevronLeft /></button>
                        <button className="bg-white text-gray-900 rounded-full absolute top-40 -right-6 text-4xl border-none p-1 cursor-pointer shadow-xl" onClick={handleNext}><FaCircleChevronRight /></button>
                    </>

                )}
                <div className="mt-4 flex justify-center ">
                    {!isOpen && (
                        <button className="bg-blue-500 text-white rounded-full px-5 py-2 w-full" onClick={toggleOpen}>
                            Open
                        </button>
                    )}

                </div>
                {!isOpen && <div className='text-gray-500 font-extrabold text-5xl'>
                    <p className='absolute -top-6 -left-5 '>LIVE</p>
                    <p className='absolute  -bottom-7 -right-5 '>PROJECT</p>
                </div>}
            </div>

        </div>
    );
}

export default Project;
