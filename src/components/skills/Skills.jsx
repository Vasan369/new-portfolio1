import React, { useState, useEffect } from 'react';
import './Skills.css';

function ProgressBar({ width, prevWidth }) {
    const [progress, setProgress] = useState(prevWidth);

    useEffect(() => {
        setProgress(width);
    }, [width, prevWidth]);

    return (
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-4">
            <div
                className="bg-blue-500 h-2 rounded-full transition-all duration-1000"
                style={{ width: `${progress}%` }}
            ></div>
        </div>
    );
}

function Skills() {
    const [activeSection, setActiveSection] = useState('Languages');
    const [progressWidth, setProgressWidth] = useState(80); // Default to 'Java' progress
    const [prevWidth, setPrevWidth] = useState(0);

    const handleButtonClick = (section, width) => {
        setPrevWidth(progressWidth);
        setActiveSection(section);
        setProgressWidth(width);
    };

    return (
        <><div className='py-5'></div>

            <div id='skills' className="main-container bg-blue-100 dark:text-gray-300 dark:bg-[#0F4C75] mx-auto" >
                <div className="second-col ">
                    <div className="bar-div dark:text-gray-300 bg-white dark:bg-[#1B262C]">
                        {activeSection && (
                            <>
                                <h2 className="text-3xl font-semibold text-center mb-4">{activeSection}</h2>
                                {activeSection === 'Languages' && (
                                    <>
                                        <div className="flex justify-between items-center text-xl mb-2">
                                            <span>Java</span>
                                            <span>90%</span>
                                        </div>
                                        <ProgressBar width={90} prevWidth={prevWidth} />
                                        <div className="flex justify-between items-center text-xl mb-2">
                                            <span>HTML & CSS</span>
                                            <span>95%</span>
                                        </div>
                                        <ProgressBar width={95} prevWidth={prevWidth} />
                                        <div className="flex justify-between items-center text-xl mb-2">
                                            <span>JavaScript</span>
                                            <span>85%</span>
                                        </div>
                                        <ProgressBar width={85} prevWidth={prevWidth} />
                                    </>
                                )}
                                {activeSection === 'Frameworks' && (
                                    <>
                                        <div className="flex justify-between items-center text-xl mb-2">
                                            <span>Spring Boot</span>
                                            <span>70%</span>
                                        </div>
                                        <ProgressBar width={70} prevWidth={prevWidth} />
                                        <div className="flex justify-between items-center text-xl mb-2">
                                            <span>React JS</span>
                                            <span>80%</span>
                                        </div>
                                        <ProgressBar width={80} prevWidth={prevWidth} />
                                        <div className="flex justify-between items-center text-xl mb-2">
                                            <span>Bootstrap</span>
                                            <span>60%</span>
                                        </div>
                                        <ProgressBar width={60} prevWidth={prevWidth} />

                                        <div className="flex justify-between items-center text-xl mb-2">
                                            <span>Tailwind CSS</span>
                                            <span>80%</span>
                                        </div>
                                        <ProgressBar width={80} prevWidth={prevWidth} />
                                    </>
                                )}
                                {activeSection === 'Database' && (
                                    <>
                                        <div className="flex justify-between items-center text-xl mb-2">
                                            <span>MySQL</span>
                                            <span>80%</span>
                                        </div>
                                        <ProgressBar width={80} prevWidth={prevWidth} />
                                        <div className="flex justify-between items-center text-xl mb-2">
                                            <span>MongoDB</span>
                                            <span>70%</span>
                                        </div>
                                        <ProgressBar width={70} prevWidth={prevWidth} />
                                    </>
                                )}
                                {activeSection === 'Tools' && (
                                    <>
                                        <div className="flex justify-between items-center text-xl mb-2">
                                            <span>Git & Github</span>
                                            <span>80%</span>
                                        </div>
                                        <ProgressBar width={80} prevWidth={prevWidth} />

                                    </>
                                )}
                            </>
                        )}
                    </div>
                </div>


                <div className="first-col">
                    <h1 className='text-2xl font-semibold'>Technical proficiency</h1>
                    <div className="first-col-sub-div gap-3 text-xl">

                        <div className="buttons-div gap-3 ">
                            <button
                                onClick={() => handleButtonClick('Languages', 80)} // Java's progress
                                className="buttons break-all shadow-xl active:shadow-md"
                            >
                                Languages
                            </button>
                            <button
                                onClick={() => handleButtonClick('Database', 70)}
                                className="buttons shadow-xl active:shadow-md"
                            >
                                Database
                            </button>
                        </div>
                        <div className="buttons-div gap-3">
                            <button
                                onClick={() => handleButtonClick('Frameworks', 75)} // React JS's progress
                                className="buttons break-all shadow-xl active:shadow-md"
                            >
                                Frameworks
                            </button>
                            <button
                                onClick={() => handleButtonClick('Tools', 90)}
                                className="buttons shadow-xl active:shadow-md"
                            >
                                Tools
                            </button>
                        </div>
                    </div>
                </div>



            </div>
        </>
    );
}

export default Skills;
