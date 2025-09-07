
export default function SkillsContainer ({ skills, isOdd }: { skills: string[]; isOdd: boolean }) {
    console.log("SkillsContainer isOdd:", isOdd);

    const liClass = `text-lg text-center mx-auto ${isOdd ? "text-blue-500" : "text-purple-500"}`;
    return (
        <section id="skills" className="h-full w-full">
            <ul className="list-none flex gap-4 border-1 border-gray-400 py-0.5 px-0.5 rounded-xl">
                {skills.map((skill, index) => (
                    <li key={index} className={liClass}>{skill}</li>
                ))}
            </ul>
        </section>
    )
}