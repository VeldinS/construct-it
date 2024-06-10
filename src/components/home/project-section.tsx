import React from 'react';
import Image from "next/image";

import doubleArrow from '@/assets/icons/double-right-arrow.svg';

function ProjectSection() {
    return (
        <section className={'h-screen w-screen flex flex-row items-center justify-center bg-white'}>
            <div
                className="w-1/3 h-full flex flex-col items-start justify-start gap-4 px-[2%] pt-[20%] bg-orange-primary">
                <div className="relative flex flex-row items-start justify-start gap-3">
                    <div className="absolute w-[50px] h-[50px]">
                        <Image src={doubleArrow} alt="Double right arrow." fill />
                    </div>
                    <div className="flex flex-col items-start justify-center gap-2 py-3 ml-[70px]">
                        <h2 className="text-black font-rubik font-medium text-base">
                            Precizno, organizovano i na vrijeme
                        </h2>
                        <p className="text-black font-rubik font-light text-sm leading-loose">
                            Naš tim radi precizno, organizovano i poštuje sve dogovorene rokove.
                        </p>
                    </div>
                </div>
                <div className="relative flex flex-row items-start justify-start gap-3">
                    <div className="absolute w-[50px] h-[50px]">
                        <Image src={doubleArrow} alt="Double right arrow." fill />
                    </div>
                    <div className="flex flex-col items-start justify-center gap-2 py-3 ml-[70px]">
                        <h2 className="text-black font-rubik font-medium text-base">
                            Najnovije tehnologije za izvodnju
                        </h2>
                        <p className="text-black font-rubik font-light text-sm leading-loose">
                            Koristimo najnovije tehnologije i metode za sve vrste popravki i renovacija.
                        </p>
                    </div>
                </div>
                <div className="relative flex flex-row items-start justify-start gap-3">
                    <div className="absolute w-[50px] h-[50px]">
                        <Image src={doubleArrow} alt="Double right arrow." fill />
                    </div>
                    <div className="flex flex-col items-start justify-center gap-2 py-3 ml-[70px]">
                        <h2 className="text-black font-rubik font-medium text-base">
                            Visokokvalitetno upravljanje izgradnjom
                        </h2>
                        <p className="text-black font-rubik font-light text-sm leading-loose">
                            Nudimo visokokvalitetno upravljanje građevinskim projektima, osiguravajući najbolje
                            rezultate.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default ProjectSection;