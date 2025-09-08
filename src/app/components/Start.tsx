
'use client';

import { useEffect, useState } from 'react';

interface StartProps {
  isLoadingComplete?: boolean;
}

export default function Start({ isLoadingComplete = false }: StartProps) {
    const [showAnimations, setShowAnimations] = useState(false);

    useEffect(() => {
        if (isLoadingComplete) {
            // Pequeño retraso para que se vea bien la transición después del loading
            const timer = setTimeout(() => {
                setShowAnimations(true);
            }, 0);
            return () => clearTimeout(timer);
        }
    }, [isLoadingComplete]);

    return (
        <section id="home" className="h-screen bg-gray-100 px-5 md:px-0 text-center content-center grid gap-6"
         style={{
            backgroundImage: `
            repeating-linear-gradient(45deg, rgba(0, 0, 0, 0.03) 0px, rgba(0, 0, 0, 0.03) 1px, transparent 1px, transparent 21px),
            repeating-linear-gradient(-45deg, rgba(0, 0, 0, 0.03) 0px, rgba(0, 0, 0, 0.03) 1px, transparent 1px, transparent 21px),
            repeating-linear-gradient(45deg, white 0px, white 14px, rgb(255, 255, 255) 14px, rgb(255, 255, 255) 18px),
            repeating-linear-gradient(-45deg, white 0px, white 14px, rgb(255, 255, 255) 14px, rgb(255, 255, 255) 18px)
            `,
            backgroundSize: '21px 21px'
        }}>             
            <h1 className="text-6xl">Hi, I'm Rodrigo</h1>
            <span style={{ whiteSpace: "pre-line" }}>Software Engineer at Pontificia Universidad Católica de Valparaíso  <br/>and passionate full-stack developer crafting innovative digital solutions.</span>
            <div className="flex justify-center gap-6">
                <a
                    href="#career-0"
                    className={`bg-purple-500 cursor-pointer hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg ${showAnimations ? 'animate-slideUpFromBottom' : 'opacity-0 translate-y-12'}`}
                >
                    View My Career
                </a>
                <a
                    href="https://www.linkedin.com/in/rodrigo-v%C3%A1squez-34425924b/"
                    target="_blank"
                    className={`bg-blue-500 cursor-pointer hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg ${showAnimations ? 'animate-slideUpFromBottom-delayed' : 'opacity-0 translate-y-12'}`}
                >
                    LinkedIn
                </a>
            </div>
        </section>
    );
}