"use client";
import { useEffect, useState } from "react";
import logo from "@/public/Coding.gif"
export default function Header() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
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
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="/coding.svg"
            className="h-10"
            alt="Developer Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            Rodrigo Vas-dev
          </span>
        </a>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
            <li>
              <a
                href="#home"
                className={`block py-2 px-3 ${
                  activeSection === "home"
                    ? "text-purple-700 underline underline-offset-8"
                    : "text-gray-900"
                }`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#career"
                className={`block py-2 px-3 ${
                  activeSection === "career"
                    ? "text-purple-700 underline underline-offset-8"
                    : "text-gray-900"
                }`}
              >
                Career
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={`block py-2 px-3 ${
                  activeSection === "about"
                    ? "text-purple-700 underline underline-offset-8"
                    : "text-gray-900"
                }`}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={`block py-2 px-3 ${
                  activeSection === "contact"
                    ? "text-purple-700 underline underline-offset-8"
                    : "text-gray-900"
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