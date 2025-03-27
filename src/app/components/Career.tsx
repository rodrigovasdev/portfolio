import Card from "./Card"
import { CAREER_DATA } from "../utils/constants"
export default function Career () {
    return (
        <section id="career" className="h-full md:h-screen bg-gray-200 p-5 md:p-20 py-18">
            <h1 className="text-center p-5 text-6xl tracking-tight font-extrabold text-gray-900 ">Career</h1>
            <div className="text-center content-center grid grid-cols-1 md:grid-cols-3 gap-6">
                {CAREER_DATA.map((item, index) => (
                        <Card key={index} {...item} />
                    ))}
            </div>

        </section>
    )
}