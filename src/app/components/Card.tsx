"use client";
import { CareerData } from "../types/types"
import React from "react";
import dynamic from "next/dynamic"; // Default import, no destructuring
import "react-image-gallery/styles/css/image-gallery.css";

const ImageGallery = dynamic(() => import('react-image-gallery'), {
    ssr: false,
    loading: () => <p>Loading gallery...</p>
});

// ...existing code...
export default function Card (data: CareerData) {
    

    const midPoint = Math.floor(data.company.length / 2);
    const splitCompany = [data.company.slice(0, midPoint), data.company.slice(midPoint)];
    return (
        
        <div className="h-screen flex justify-between px-10 border-2">

            <div className="my-auto w-4/10">
                <h1 className="mb-3 text-5xl tracking-tight font-extrabold text-gray-900 "><b>{splitCompany[0].toUpperCase()}</b><span className="text-purple-500">{splitCompany[1].toUpperCase()}</span></h1>
                <div className="flex justify-between border-b-1 border-purple-400/75">
                    <h1 className="text-lg">{data.title.toUpperCase()}</h1>
                    <span className="text-purple-500 my-auto"> <i>{data.date}</i> </span>
                </div>
                <div className="mt-10 flex flex-col gap-8">
                    <span className="text-justify">{data.description}</span>
                    <a
                    href="/cv.pdf"
                    className="w-1/3 bg-purple-500 hidden md:flex cursor-pointer hover:bg-purple-700 text-white font-bold py-2 px-5 rounded-full"
                    >
                        Go to website
                    </a>
                </div>
            </div>

            <div className="w-1/2 my-auto hover:border-1 hover:border-purple-500">
               <ImageGallery items={data.images} showThumbnails={false} showPlayButton={false} showBullets={true} showIndex={true} showFullscreenButton={false}/>
            </div>
        </div>
    )
}