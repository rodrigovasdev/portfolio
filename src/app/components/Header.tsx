"use client";
import { useEffect, useState } from "react";

export default function Header() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(entry.target.id);
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } 
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="w-1/4 flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="/coding.svg"
            className="h-10"
            alt="Developer Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            Rodrigo Vas-dev
          </span>
        </a>
        <div className="w-1/4 flex justify-end  lg:order-2">
        <a
                    href="/cv.pdf"
                    download="Rodrigo_Vasquez_CV.pdf"
                    className="bg-purple-500 hidden md:flex cursor-pointer hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full"
                >
                    Download Resume
                </a>
                {/* <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button> */}
            </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
          <ul className="flex flex-col gap-5 p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
            <li className="mx-auto">
              <a
                href="#home"
                className={`block py-2 px-3 ${
                  activeSection === "home"
                   ? "text-purple-700 underline underline-offset-8 transition-all duration-100"
      : "text-gray-900 hover:text-purple-800 hover:underline hover:underline-offset-8 transition-all duration-100"
                }`}
              >
                Home
              </a>
            </li>
            <li className="mx-auto">
              <a
                href="#career"
                className={`block py-2 px-3 ${
                  activeSection.includes("career")
                   ? "text-purple-700 underline underline-offset-8 transition-all duration-100"
      : "text-gray-900 hover:text-purple-800 hover:underline hover:underline-offset-8 transition-all duration-100"
                }`}
              >
                Career
              </a>
            </li>
            <li className="mx-auto">
              <a
                href="#about"
                className={`block py-2 px-3 ${
                  activeSection === "about"
                   ? "text-purple-700 underline underline-offset-8 transition-all duration-100"
                    : "text-gray-900 hover:text-purple-800 hover:underline hover:underline-offset-8 transition-all duration-100"
                }`}
              >
                About
              </a>
            </li>
            <li className="mx-auto">
              <a
                href="#contact"
                className={`block py-2 px-3 ${
                  activeSection === "contact"
                   ? "text-purple-700 underline underline-offset-8 transition-all duration-100"
                  : "text-gray-900 hover:text-purple-800 hover:underline hover:underline-offset-8 transition-all duration-100"
                }`}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}