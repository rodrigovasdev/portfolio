import Card from "./Card"
import { CAREER_DATA } from "../utils/constants"
export default function Career () {
    return (
        <section id="career" className="h-full">
            <h1 className="text-center p-5 text-6xl tracking-tight font-extrabold text-gray-900 bg-gray-200">Career</h1>
            {CAREER_DATA.map((item, index) => (
                    <Card key={index} index={index} {...item} />
                ))}
        </section>
    )
}