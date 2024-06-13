'use client'
import React, { useEffect, useRef } from 'react';
import ButtonPrimary from "@/components/buttons/button-primary";

const ParallaxSection = () => {
    const bgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (bgRef.current) {
                bgRef.current.style.backgroundPositionY = `${window.scrollY * 0.5}px`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="relative w-screen h-screen overflow-hidden">
            <div
                ref={bgRef}
                className="bg-[url('/assets/other/machine.jpg')] absolute inset-0 bg-fixed bg-contain md:bg-cover bg-center"
            />
            <div className="relative flex flex-col items-center justify-center gap-8 h-full bg-black bg-opacity-50  ">
                <div className={'w-[50px] h-[5px] bg-orange-primary '}></div>
                <h1
                    className="font-bold text-3xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                    Naši realizovani projekti
                </h1>
                <p className={'text-white text-center font-rubik font-medium text-lg'}>
                    Pogledajte naše uspješne projekte i uvjerite se u kvalitet naših radova.
                </p>
                <ButtonPrimary text={'POGLEDAJ PROJEKTE'} link={'#kontakt'}/>
            </div>
        </div>
    );
};

export default ParallaxSection;
