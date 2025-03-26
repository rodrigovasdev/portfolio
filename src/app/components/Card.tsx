import { CareerData } from "../types/types"


export default function Card (data: CareerData) {

    return (
        
        <div className="grid gap-2 border-1 border-purple-300 cursor-pointer bg-gray-100 hover:bg-gray-50 hover:border-2 hover:border-purple-400 rounded-xl p-5">
            <h1 className="text-xl border-b-1 border-purple-300/75 h-15"><b>{data.company}</b></h1>
            <div className="flex justify-around">
                <h2><b>{data.title}</b></h2>
                <span className="text-purple-500"> <i>{data.date}</i> </span>
            </div>
            <span>{data.description}</span>
        </div>
    )
}