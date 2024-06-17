import React from 'react';

import Image from "next/image";
import doubleArrow from '@/assets/icons/double-right-arrow.svg';

import ButtonSecondary from "@/components/buttons/button-secondary";


function ProjectSection() {
    return (
        <section className={'h-auto lg:h-screen w-screen flex flex-col-reverse lg:flex-row items-center justify-center bg-white'}>
            <div className="w-full lg:w-1/3 h-auto lg:h-full flex flex-col items-start justify-center lg:justify-start gap-4 px-[2%] lg:pt-[10%] py-12 lg:py-0 bg-orange-primary">
                <div className="relative flex flex-row items-center md:items-start justify-start gap-3">
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
                <div className="relative flex flex-row items-center md:items-start justify-start gap-3">
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
                <div className="relative flex flex-row items-center md:items-start justify-start gap-3">
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
            <div className={' w-full lg:w-2/3 h-auto lg:h-full flex flex-col items-start justify-start'}>
                <div className={'w-full h-4/5 bg-[#F7F7F7] flex flex-col items-start justify-center gap-8 px-[8%] py-12 lg:py-0'}>
                    <h1 className={'text-[#2A2A2A] font-rubik text-3xl sm:text-4xl font-bold'}>Nijedan projekt nije prevelik niti premali</h1>
                    <div className={'w-[50px] h-[5px] bg-orange-primary '}></div>
                    <div className={'w-full flex flex-col sm:flex-row justify-start items-start gap-8'}>
                        <p className={'text-[#666666] font-rubik font-extralight text-base leading-loose w-full sm:w-1/2'}>
                            Bilo da je riječ o malim popravkama ili velikim građevinskim projektima, Construct.IT ima kapacitet i stručnost za sve. Naš tim pristupa svakom projektu s jednakom posvećenošću i profesionalizmom, bez obzira na veličinu i kompleksnost.
                        </p>
                        <p className={'text-[#666666] font-rubik font-extralight text-base leading-loose w-full sm:w-1/2'}>
                            Od najmanjih renovacija do najkompleksnijih konstrukcija, mi smo tu da vam pomognemo ostvariti vaše ideje. Naša stručnost i iskustvo garantuju kvalitet i trajnost svakog našeg projekta.
                        </p>
                    </div>
                </div>
                <div className={'w-full h-1/5 bg-[#2A2A2A] md:px-[5%] py-4  gap-4 md:gap-0 flex flex-col md:flex-row items-center justify-between'}>
                    <h2 className={'text-white font-rubik text-3xl font-bold tracking-wide'}>Konsultacije?</h2>
                    <ButtonSecondary text={'KONTAKTIRAJ NAS'} link={'#kontakt'} />
                </div>
            </div>
        </section>
    );
}


export default ProjectSection;