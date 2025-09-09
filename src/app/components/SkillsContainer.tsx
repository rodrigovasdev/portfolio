
export default function SkillsContainer ({ skills, isOdd }: { skills: string[]; isOdd: boolean }) {

    const liClass = `text-xs sm:text-sm md:text-lg font-stretch-extra-condensed md:font-stretch-extra-expanded xl:text-2xl text-center my-auto mx-auto ${isOdd ? "text-blue-500" : "text-purple-500"}`;
    return (
        <div id="skills" className="h-full w-full">
            <ul className="list-none flex gap-2 sm:gap-4 border-none md:border-1 border-gray-400 rounded-full py-2 px-5">
                {skills.map((skill, index) => (
                    <li key={index} className={liClass}>{skill}</li>
                ))}
            </ul>
        </div>
    )
}