import { Input, Textarea } from '@material-tailwind/react';
import React, { useState } from 'react'

import { IoMdSend, IoIosCloseCircleOutline } from "react-icons/io";


function Contact({ isOpen, setIsOpen }) {

    const [loading, setLoading] = useState(false);

    const handleClick1 = () => {
        setIsOpen(!isOpen);
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "bc174b5b-935c-43c8-b308-5cc5d97d92ff");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        setLoading(true);
        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            setLoading(false);
            setIsOpen(!isOpen);


        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 backdrop-blur-md">
            <div className="modal-container bg-white dark:bg-blue-gray-900 dark:text-gray-300 p-6 rounded-3xl shadow-lg w-96 transform transition-transform duration-500 ease-out">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Contact</h2>
                    <button onClick={handleClick1} className="text-red-500 absolute top-2 right-2 text-3xl">
                        <IoIosCloseCircleOutline />
                    </button>
                </div>
                <form onSubmit={onSubmit} className="space-y-4 ">
                    <Input
                        size='lg'
                        label='Name'
                        type="text"
                        className="dark:text-gray-400"
                        name='name'
                        required
                    />
                    <Input
                        size='lg'
                        label='Email'
                        type="email"
                        className="dark:text-gray-400"
                        name='email'
                        required
                    />
                    <Textarea
                        size='lg'
                        label='Message'
                        className="dark:text-gray-400"
                        name='message'
                        required
                        rows="4"
                    ></Textarea>
                    <button
                        disabled={loading}
                        type="submit"
                        className={`flex items-center justify-center px-5 py-2 ${loading ? 'bg-gray-700' : 'bg-blue-500'} text-white rounded-full mx-auto ${!loading && 'hover:bg-blue-600'}`}
                    >
                        {loading ? <p>Sending...</p> : <p className='flex items-center justify-center gap-3'>Send Message <IoMdSend /></p>}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact