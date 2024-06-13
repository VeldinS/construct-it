import React from 'react';
import Image from "next/image";

interface projectCardProps {
    title: string;
    description: string;
    image: string;
}

function ProjectCard({title, description, image}: projectCardProps) {
    return (
        <div className={'w-full h-auto flex flex-col items-stretch justify-center gap-6 overflow-hidden'}>
            <div style={{ backgroundImage: `url(${image})` }}
                 className={`w-full h-[250px] lg:h-[200px] bg-center bg-cover`}></div>
            <div className={'w-full h-auto px-6 py-8 flex flex-col items-start justify-start gap-8 border border-black '}>
                <h1 className={'font-rubik text-lg text-black tracking-widest'}>{title}</h1>
                <p className={'font-rubik text-base text-black font-extralight tracking-wider'}>{description}</p>
            </div>
        </div>
    );
}

export default ProjectCard;