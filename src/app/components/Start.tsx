"use client";
import { useState, useEffect } from "react";

export default function Start() {
    const [h1Text, setH1Text] = useState(``);
    const [spanText, setSpanText] = useState(``);

    useEffect(() => {
        const h1Content = `   Hi, I'm Rodrigo`;
        const spanContent = `  Software Engineer at Pontificia Universidad Católica de Valparaíso  \nand passionate full-stack developer crafting innovative digital solutions.`;
        let h1Index = 0;
        let spanIndex = 0; 

        const typeH1 = () => {
            if (h1Index < h1Content.length - 1) {
                setH1Text((prev) => prev + h1Content[h1Index]);
                h1Index++;
                setTimeout(typeH1, 100); // Velocidad de escritura para el h1
            } else {
                typeSpan(); // Inicia la escritura del span después de terminar el h1
            }
        };

        const typeSpan = () => {
            if (spanIndex < spanContent.length - 1) {
                setSpanText((prev) => prev + spanContent[spanIndex]);
                spanIndex++;
                setTimeout(typeSpan, 50); // Velocidad de escritura para el span
            }
        };

        typeH1();
    }, []);

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
            <h1 className="text-6xl">{h1Text}</h1>
            <span style={{ whiteSpace: "pre-line" }}>{spanText}</span>
            <div className="flex justify-center gap-6">
                <a
                    href="#career"
                    className="bg-purple-500 cursor-pointer hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full"
                >
                    View My Career
                </a>
                <a
                    href="#contact"
                    className="bg-blue-500 cursor-pointer hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                >
                    Contact Me
                </a>
            </div>
        </section>
    );
}