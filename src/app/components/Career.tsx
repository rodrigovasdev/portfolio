import Card from "./Card"
import { CAREER_DATA } from "../utils/constants"
export default function Career () {
    return (
        <section id="career" className="h-screen bg-gray-200 p-14 py-18 ">
            <h1 className="text-center p-5 text-6xl">Career</h1>
            <div className="text-center content-center grid grid-cols-3 gap-6">
            {CAREER_DATA.map((item, index) => (
                    <Card key={index} {...item} />
                ))}
            </div>

        </section>
    )
}