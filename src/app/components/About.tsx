import Image from "next/image"
import img from "@/public/image.jpg"
export default function About () {
    return (
        <section id="about" className="h-screen bg-gray-100 flex flex-row p-14 py-20">
            <div className="basis-3/5">
                <div className="w-3/4 grid gap-6 justify-center">
                    <div className="flex mb-10 gap-4 justify-center">
                        <h1 className="text-7xl text-center">About</h1>
                        <h1 className="text-7xl text-purple-500"><b>me</b></h1>
                    </div>
                    <span>Web developer and Software engineer, constantly evolving and currently seeking to enhance and continue advancing my professional career as a developer. Within web development, I work with technologies like Django, React, Next.js, Tailwind, Node.js, among others that you can see on my profile.</span>
                    <span>I recently worked at <b>FOUNDAXIS</b> as a junior software developer, where my main tasks were to integrate new software components using Svelte, Tailwind, and Figma. I also had the opportunity to create new endpoints and make changes to the backend models using Django and Python.</span>
                    <span>I am passionate about software development and algorithm building. I have always enjoyed puzzles in general and specifically have a great interest in Rubik’s cubes. I am also a fan of the arts, such as music and photography, with the latter being what I enjoy the most.</span>
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