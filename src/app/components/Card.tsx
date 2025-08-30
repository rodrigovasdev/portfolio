"use client";
import { CareerData } from "../types/types"
import React from "react";
import dynamic from "next/dynamic"; // Default import, no destructuring
import "react-image-gallery/styles/css/image-gallery.css";
import SkillsContainer from "./SkillsContainer";

const ImageGallery = dynamic(() => import('react-image-gallery'), {
    ssr: false,
    loading: () => <p>Loading gallery...</p>
});

// ...existing code...
export default function Card (props: CareerData & { index: number }) {

    const images = [
        {
            original: "/career/foundaxis/2.png",
        },
        {
            original: "/career/foundaxis/3.png",
        },
        {
            original: "/career/foundaxis/4.png",
        },
                {
            original: "/career/foundaxis/5.png",
        },
        ]
    const { index, ...data } = props;

    const midPoint = Math.floor(data.company.length / 2);
    const splitCompany = [data.company.slice(0, midPoint), data.company.slice(midPoint)];
    let isOdd = false;
    if (index % 2 !== 0) isOdd = true;
    console.log(index)
    console.log(isOdd)
    const mainDivClasses = `h-screen flex ${isOdd ? "flex-row-reverse bg-gray-100" : "bg-gray-200"} justify-between p-5 md:p-20 py-18 border-b-1 border-gray-300 rounded-b-4xl`;
    const buttonClasses = `w-1/3 hidden md:flex cursor-pointer text-white font-bold py-2 px-5 rounded-full ${isOdd ? "bg-blue-500 hover:bg-blue-700" : "bg-purple-500 hover:bg-purple-700 "}`;
    const companyTitleColor = isOdd ? "text-blue-500" : "text-purple-500";
    const jobTitleClasses = isOdd ? "text-blue-500 my-auto" : "text-purple-500 my-auto";
    const jobDivClasses = isOdd ? "flex justify-between border-b-1 border-blue-400/75" : "flex justify-between border-b-1 border-purple-400/75";
    const galleryDivClasses = isOdd ? "w-1/2 h-3/4 my-auto border-1 border-blue-500" : "w-1/2 h-3/4 my-auto border-1 border-purple-500";
    return (

        <div className={mainDivClasses}>

            <div className="my-auto w-4/10 h-3/4">
                <h1 className="mb-3 text-5xl tracking-tight font-extrabold text-gray-900 "><b>{splitCompany[0].toUpperCase()}</b><span className={companyTitleColor}>{splitCompany[1].toUpperCase()}</span></h1>
                <div className={jobDivClasses}>
                    <h1 className="text-lg">{data.title.toUpperCase()}</h1>
                    <span className={jobTitleClasses}> <i>{data.date}</i> </span>
                </div>
                <div className="mt-10 flex flex-col gap-8">
                    <span className="text-justify">{data.description}</span>
                    <SkillsContainer />
                    <a
                    href="/cv.pdf"
                    className={buttonClasses}
                    >
                        Go to website
                    </a>
                </div>
            </div>

            <div className={galleryDivClasses}>
               <ImageGallery items={images} showThumbnails={false} showPlayButton={false} showBullets={true} showIndex={true} showFullscreenButton={false}/>
            </div>
        </div>
    )
}