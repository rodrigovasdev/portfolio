import Image from "next/image"
import img from "@/public/image.jpg"
export default function About () {
    return (
        <section id="about" className="h-full md:h-screen bg-gray-100 flex flex-col md:flex-row p-5 md:p-20 py-18 gap-6 md:gap-0">
            <div className="basis-3/5">
                <div className="w-full md:w-3/4 grid gap-6 justify-center">
                    <div className="flex mb-10 gap-4 justify-center">
                        <h1 className="text-5xl sm:text-7xl tracking-tight font-extrabold text-gray-900 text-center">Sobre</h1>
                        <h1 className="text-5xl sm:text-7xl tracking-tight font-extrabold text-purple-500"><b>mí</b></h1>
                    </div>
                    <span>Desarrollador web e ingeniero de software, en constante evolución y actualmente enfocado en potenciar y seguir avanzando mi carrera profesional como desarrollador. En desarrollo web trabajo con tecnologías como Django, React, Next.js, Tailwind y Node.js, entre otras que puedes ver en mi perfil.</span>
                    <span>Busco integrarme a un equipo de desarrollo para profundizar mis conocimientos en ingeniería de software. Estoy en búsqueda de oportunidades que me permitan seguir aprendiendo mientras aporto mis habilidades como desarrollador full-stack. Soy proactivo, altamente motivado y con una fuerte pasión por aprender nuevas tecnologías y crecer profesionalmente de forma continua.</span>
                    <span>En mi trabajo me enfoco en comprender requerimientos y alinear soluciones con las necesidades del negocio. También me caracterizan la comunicación efectiva y el pensamiento crítico, habilidades que aplico al explorar soluciones de forma colaborativa dentro de un equipo.</span>
                </div>
            </div>
            <div className="basis-2/5">
                <Image
                src={img}
                alt="Foto de Rodrigo"
                className="shadow-2xl"
                />
            </div>
        </section>
    )
}