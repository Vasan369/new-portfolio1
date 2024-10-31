import { Input } from "@material-tailwind/react";
import { LuLogIn, LuLogOut } from "react-icons/lu";
import { RiCloseLargeLine, RiSendPlaneFill } from "react-icons/ri";
import { MdRefresh } from "react-icons/md";
import { BsChevronBarDown } from "react-icons/bs";

import { useContext, useState, useEffect } from "react";

import "./ChatBot.css";
import { Context } from "../../context/Context";
import { TypeAnimation } from "react-type-animation";
import { assets } from "../../assets";

function ChatBot() {
    const [userInput, setuserInput] = useState("");
    const [storedValue, setStoredValue] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const letters = storedValue.split(' ').map(word => word.charAt(0)).join('');

    useEffect(() => {
        const storedData = localStorage.getItem("userInput");
        if (storedData) {
            setStoredValue(storedData);
        }
    }, []);

    const submit = (e) => {
        e.preventDefault();
        localStorage.setItem("userInput", userInput);
        setStoredValue(userInput);
        setuserInput("");
        setIsSubmitted(true);
    };

    const logout = () => {
        localStorage.removeItem("userInput");
        setStoredValue("");
        setIsSubmitted(false);
        newPage(false);
        setIsOpened(false);
    };

    const {
        input,
        setInput,
        onSent,
        showResult,
        recentPrompt,
        setShowResult,
        loading,
        resultData,
        newPage,
    } = useContext(Context);

    const onSent1 = (e) => {
        e.preventDefault();
        onSent();
    }

    const [isExpanded, setIsExpanded] = useState(false);
    const [isHeightIncreased, setIsHeightIncreased] = useState(false);

    const handleHeightIncrease = () => {
        setIsExpanded(true);
        setIsHeightIncreased(true);
    };


    const handleDivClose = () => {
        setIsHeightIncreased(false);
        setTimeout(() => {
            setIsExpanded(false);
        }, 500);
    };

    const [isOpened, setIsOpened] = useState(false);

    const handleOpen = () => {
        setIsOpened(true);
    };

    const handleClose = () => {
        setIsOpened(false);
    };

    return (
        <div className=" h-full ">
            <div
                className={`fixed bottom-5 right-5 transition-all duration-500 ease-in-out ${isExpanded ? "rounded-3xl" : "rounded-3xl"
                    } bg-gray-200 dark:bg-blue-gray-700 dark:text-gray-300 shadow-lg overflow-hidden z-40`}
                onClick={(e) => {
                    handleHeightIncrease();
                }}
                style={{
                    width: isExpanded ? "90%" : "63px",
                    height: isHeightIncreased ? "80%" : "63px",
                }}
            >
                <img
                    src={assets.logo}
                    alt="Logo"
                    className="absolute w-12 top-2 left-1.5 rounded-3xl"
                />
                <div
                    className={`absolute top-0 left-0 w-full h-full  transition-opacity duration-500 ease-in-out delay-600 ${isExpanded ? "opacity-100" : "opacity-0"
                        } `}
                >
                    {isHeightIncreased && (
                        <>
                            <div className={` w-11/12 mx-auto h-full  justify-center items-center ${storedValue ? '' : 'flex justify-center items-center'}`}>
                                {storedValue ? (
                                    <div className="h-full">
                                        {!showResult ? (
                                            <div className=" w-full h-full flex flex-col justify-center gap-3">
                                                <p className="bg-gradient-to-r from-[#349dff] to-[#ff5d4e] bg-clip-text text-transparent text-4xl md:text-5xl p-1 md:p-2 font-bold text-center ">
                                                    <TypeAnimation
                                                        cursor={false}
                                                        sequence={[500, `Hi, ${storedValue}`, 1000]}
                                                    />
                                                </p>
                                                <p className="text-slate-400 text-center text-2xl md:text-4xl">
                                                    <TypeAnimation
                                                        cursor={false}
                                                        sequence={[1800, "I'm Vasanth", 1000, " How can I help you today?", 1000]}
                                                        speed={{ type: "keyStrokeDelayInMs" }}
                                                    />
                                                </p>
                                            </div>
                                        ) : (
                                            <div className="h-full w-ful flex items-center  ">
                                                <div className="overflow-y-scroll w-full h-4/6 flex flex-col gap-5">
                                                    <div className="flex w-full items-start justify-end">

                                                        <p className="break-all gap-3 text-lg dark:bg-blue-gray-600 bg-blue-gray-100 rounded-3xl px-3 py-2">
                                                            {recentPrompt}
                                                        </p>


                                                        <div className=" bg-slate-500 w-[40px] h-[40px]  rounded-full cursor-pointer flex items-center mx-2 justify-center  bg-blue-gray-400"><p className="text-white text-center text-2xl ">{letters}</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-start gap-5 w-11/12 md:w-10/12">
                                                        <img
                                                            src={assets.logo}
                                                            alt=""
                                                            className="w-8"
                                                        />

                                                        {loading ? (
                                                            <div className="mt-2 flex
                                                            space-x-2 items-center ">
                                                                <div className="h-3 w-3 bg-gray-600 rounded-full animate-fadeOut
                                                             [animation-delay:-0.3s]"></div>
                                                                <div className="h-4 w-4 bg-gray-700 rounded-full animate-fadeOut
                                                             [animation-delay:-0.1s]"></div>
                                                                <div className="h-3 w-3 bg-gray-600 rounded-full animate-fadeOut "></div>


                                                            </div>
                                                        ) : (
                                                            <p
                                                                dangerouslySetInnerHTML={{ __html: resultData }}
                                                                className="text-lg"
                                                            ></p>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        <div className="absolute bottom-0 left-4 right-4 mx-auto">
                                            <form onSubmit={onSent1} className="search-box flex w-full md:w-9/12 mx-auto items-center justify-between bg-gray-300 dark:text-gray-300 dark:bg-blue-gray-600 py-1 px-4 rounded-full shadow-lg">
                                                <input
                                                    onChange={(e) => setInput(e.target.value)}
                                                    value={input}
                                                    type="text"
                                                    placeholder="Ask me anything..."
                                                    className="bg-transparent border-none outline-none p-1 text-lg w-full"
                                                />
                                                <button type="submit" disabled={!input}>
                                                    <RiSendPlaneFill
                                                        src={assets.send}
                                                        className={`${!input ? 'hidden' : 'block'} cursor-pointer text-2xl`}
                                                    />
                                                </button>
                                            </form>
                                            <p className="bottom-info text-sm my-2 mx-auto text-center text-slate-600">
                                                vasan
                                            </p>
                                        </div>
                                    </div>
                                ) : (
                                    <form
                                        onSubmit={submit}
                                        className="w-full  md:w-6/12 p-6 rounded flex flex-col justify-center dark:text-gray-300"
                                    >

                                        <p className="text-center font-bold text-2xl md:text-3xl mb-5"> How do I call you?</p>
                                        <Input
                                            type="text"
                                            size="lg"
                                            label="Name"
                                            value={userInput}
                                            onChange={(e) => setuserInput(e.target.value)}
                                            className="w-full letter-sp dark:text-gray-300"
                                            placeholder="Type your nick name..."
                                            required
                                        />

                                        <div className='rounded-full flex'>
                                            <button
                                                type="submit"
                                                className={` right-5 w-8/12 gap-3 bottom-1 mt-8 mx-auto p-2 text-white rounded-full ${!userInput ? 'bg-blue-gray-200' : 'bg-blue-600 shadow-xl'} flex justify-center items-center`}
                                                disabled={!userInput}
                                            >
                                                Like this
                                                <LuLogIn className="text-xl" />
                                            </button>

                                        </div>
                                    </form>
                                )}
                            </div>
                            <p className="absolute top-5 left-16">Vasan AI</p>

                            {showResult && (
                                <button
                                    className="bg-white dark:bg-blue-gray-500 absolute top-2.5 right-32 p-1 text-white  rounded-full shadow-xl"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setShowResult(false);
                                    }}
                                >
                                    <MdRefresh src={assets.close} className="text-3xl text-black dark:text-gray-200" />
                                </button>
                            )}
                            {storedValue && (<div
                                className={` absolute top-2 right-16 transition-all duration-500 ease-in-out ${isOpened ? "w-40 h-52" : "w-10 h-10"
                                    } bg-gray-100 dark:bg-blue-gray-500 dark:text-gray-300 rounded-3xl shadow-lg  flex items-center justify-center`}
                                onClick={!isOpened ? handleOpen : undefined}
                            >
                                <div
                                    className={` absolute flex flex-col justify-center items-center w-full transition-transform duration-500 ease-in ${isOpened
                                        ? "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                        : "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                        }`}
                                >
                                    <div className=" bg-slate-500 w-[40px] h-[40px]  rounded-full cursor-pointer flex items-center justify-center  bg-blue-gray-400 "><p className="text-white text-center text-2xl ">{letters}</p></div>
                                    {isOpened && (
                                        <div className=" flex flex-col items-center mt-4 w-8/12 ">
                                            <div className="mb-2 break-all ">{storedValue}</div>
                                            <button
                                                className="p-2 w-full bg-red-300 text-white rounded-full flex justify-center items-center gap-1"
                                                onClick={logout}
                                            >
                                                <LuLogOut className="text-xl" />Log out

                                            </button>
                                        </div>
                                    )}
                                </div>

                                {isOpened && (
                                    <button
                                        className=" absolute top-2 right-2 p-1 text-white rounded"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleClose();
                                        }}
                                    >
                                        <RiCloseLargeLine className="text-xl text-black dark:text-gray-300" />
                                    </button>
                                )}

                            </div>)}


                            <button
                                type="button"
                                className="absolute top-3 right-4"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleDivClose();
                                }}
                            >
                                <BsChevronBarDown src={assets.down} className="text-3xl" />
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ChatBot;
