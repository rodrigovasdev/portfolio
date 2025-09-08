import Image from "next/image"
import img from "@/public/image.jpg"
export default function About () {
    return (
        <section id="about" className="h-full md:h-screen bg-gray-100 flex flex-col md:flex-row p-5 md:p-20 py-18 gap-6 md:gap-0">
            <div className="basis-3/5">
                <div className="w-full md:w-3/4 grid gap-6 justify-center">
                    <div className="flex mb-10 gap-4 justify-center">
                        <h1 className="text-7xl tracking-tight font-extrabold text-gray-900 text-center">About</h1>
                        <h1 className="text-7xl tracking-tight font-extrabold text-purple-500"><b>me</b></h1>
                    </div>
                    <span>Web developer and Software engineer, constantly evolving and currently seeking to enhance and continue advancing my professional career as a developer. Within web development, I work with technologies like Django, React, Next.js, Tailwind, Node.js, among others that you can see on my profile.</span>
                    <span>I am eager to join a development team to deepen my knowledge in software development. I am seeking opportunities that allow me to continue learning while contributing my skills as a full-stack developer. I am proactive and highly motivated, with a strong passion for learning new technologies and continuously growing professionally.</span>
                    <span>In my work, I focus on understanding requirements and aligning solutions with business needs. I am also characterized by strong communication and critical thinking skills, which I apply when exploring solutions collaboratively within a team.</span>
                </div>
            </div>
            <div className="basis-2/5">
                <Image
                src={img}
                alt="a"
                className="shadow-2xl"
                />
            </div>
        </section>
    )
}