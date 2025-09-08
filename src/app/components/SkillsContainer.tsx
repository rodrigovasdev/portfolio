
export default function SkillsContainer ({ skills, isOdd }: { skills: string[]; isOdd: boolean }) {

    const liClass = `text-md text-center mx-auto ${isOdd ? "text-blue-500" : "text-purple-500"}`;
    return (
        <div id="skills" className="h-full w-full">
            <ul className="list-none flex flex-col md:flex-row gap-4 border-1 border-gray-400 rounded-full py-2 px-5">
                {skills.map((skill, index) => (
                    <li key={index} className={liClass}>{skill}</li>
                ))}
            </ul>
        </div>
    )
}