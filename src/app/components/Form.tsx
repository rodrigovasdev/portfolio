"use client";
import { useState } from "react";

export default function Form() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 
        setIsSubmitted(true); 
    };

    return (
        <section id="contact" className="p-5 md:p-20 py-18">
            <div className="px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-7xl tracking-tight font-extrabold text-gray-900 text-center ">Work Wi<span className="text-purple-500">th Me</span></h2>
                {isSubmitted ? (
                    <div className="text-center">
                        <h3 className="text-2xl font-bold text-gray-900">Thanks!</h3>
                        <p className="text-gray-500">We will make contact with you soon.</p>
                    </div>
                ) : (
                    <>
                        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">
                            Want to collaborate with me? Send me a message and we will get back to you as soon as possible.
                        </p>
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                                    Your email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                                    placeholder="name@mail.com"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                                    placeholder="Let me know how we can help you"
                                    required
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">
                                    Your message
                                </label>
                                <textarea
                                    id="message"
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                                    placeholder="Leave a comment..."
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="bg-blue-500 cursor-pointer hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                            >
                                Send message
                            </button>
                        </form>
                    </>
                )}
            </div>
        </section>
    );
}