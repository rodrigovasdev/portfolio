import { CareerData } from "../types/types"


export default function Card (data: CareerData) {

    const midPoint = Math.floor(data.company.length / 2);
    const splitCompany = [data.company.slice(0, midPoint), data.company.slice(midPoint)];
    return (
        
        <div className="h-screen flex flex-col gap-5 p-5">
            <h2 className="mb-4 text-6xl tracking-tight font-extrabold text-gray-900 ">{splitCompany[0]}<span className="text-purple-500">{splitCompany[1]}</span></h2>
            <div className="w-1/3 flex justify-between border-b-1 border-purple-300/75">
                <h1 className="text-xl"><b>{data.title}</b> </h1>
                <span className="text-purple-500"> <i>{data.date}</i> </span>
            </div>
            <div className="w-1/3">
                <span className="w-1/3">{data.description}</span>
            </div>
        </div>
    )
}