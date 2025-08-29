import Card from "./Card"
import { CAREER_DATA } from "../utils/constants"
export default function Career () {
    return (
        <section id="career" className="h-full bg-gray-200 p-5 md:p-20 py-18">
            <h1 className="text-center p-5 text-6xl tracking-tight font-extrabold text-gray-900 ">Career</h1>
            {CAREER_DATA.map((item, index) => (
                    <Card key={index} {...item} />
                ))}
        </section>
    )
}