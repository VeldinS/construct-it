import React from 'react';
import Image from "next/image";

interface serviceCardProps {
    title: string;
    description: string;
    image: string;
}

function ServiceCard({title, description, image}: serviceCardProps) {
    return (
        <div className={'flex flex-row justify-start items-center gap-2'}>
            <Image src={image} alt={title} width={60} height={60} />
            <div className={'flex flex-col items-start justify-center gap-2'}>
                <h1 className={'text-[#2A2A2A] font-rubik text-lg font-bold'}>{title}</h1>
                <p className={'text-[#666666] font-rubik text-base font-light'}>{description}</p>
            </div>
        </div>
    );
}

export default ServiceCard;