'use client'
import React from 'react';
import { Link as ScrollLink, animateScroll } from 'react-scroll';

import {motion} from "framer-motion";

import ServiceCard from "@/components/services/service-card";


function LandingSection() {
    return (
        <motion.section
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 1.3}}
            className="w-full max-w-full h-auto lg:h-screen flex flex-col justify-start items-start">
            <div className="relative w-full h-auto lg:h-5/6 flex flex-col lg:flex-row justify-between items-start bg-[url('/assets/other/services-bg.jpg')] bg-cover bg-center">
                <div className={'absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-2'}></div>
                <div className={"relative z-1 w-auto h-full px-[3%] sm:px-[10%] py-[30%] sm:py-[20%] lg:py-16 flex flex-col justify-center items-start gap-12"}>
                    <div className={'relative z-3 flex flex-col justify-center items-start gap-4'}>
                        <div className={'flex flex-row justify-center items-stretch gap-4'}>
                            <div className={'w-2 bg-orange-primary'}></div>
                            <h1 className={'text-white text-4xl sm:text-6xl font-rubik font-bold leading-relaxed'}>Naše Usluge i
                                Djelatnosti</h1>
                        </div>
                        <p className={'text-white font-light font-rubik leading-loose text-xl'}>
                            Vaš partner za sve građevinske radove i još mnogo više.
                        </p>
                    </div>
                    <div className={'relative z-3'}>
                        <ScrollLink to={'sveusluge'} smooth={true} duration={1000} className={'flex cursor-pointer flex-row items-center justify-center'}>
                            <p className='text-base font-rubik font-semibold text-white tracking-widest px-6 py-3 border-4 border-orange-primary bg-transparent hover:bg-orange-primary transition-all duration-500'>
                                POGLEDAJ SVE DJELATNOSTI
                            </p>
                        </ScrollLink>
                    </div>
                </div>
                <div className={'relative z-3 w-auto h-full px-[3%] sm:px-8 py-8 flex flex-col justify-center items-start gap-12 bg-transparent'}>
                    <h1 className={'text-orange-primary font-rubik text-3xl sm:text-4xl font-bold'}>Najtraženije</h1>
                    <ServiceCard title={'Izgradnja kamenih konstrukcija'}
                                 description={'Pružamo visokokvalitetne usluge izgradnje kamenih konstrukcija za sve vrste objekata.'}
                                 image={'/assets/icons/kamen-icon-orange.svg'}
                    />
                    <ServiceCard title={'Asfaltiranje i obnova puteva'}
                                 description={'Profesionalne usluge asfaltiranja i obnove puteva za sigurnu i dugotrajnu infrastrukturu.'}
                                 image={'/assets/icons/asfaltiranje-icon-orange.svg'}
                    />
                    <ServiceCard title={'Konsultacije i upravljanje projektima'}
                                 description={'Stručne konsultacije i upravljanje građevinskim projektima za optimalne rezultate.'}
                                 image={'/assets/icons/konsultacije-icon-orange.svg'}
                    />
                </div>
            </div>
            <div className={'w-full h-auto lg:h-1/6 hidden lg:flex flex-row justify-between items-center px-[10%]'}>
                <h1 className={'text-[#2A2A2A] font-rubik text-3xl sm:text-4xl font-bold'}>Započnimo suradnju</h1>
                <ScrollLink to={'kontakt'} smooth={true} duration={1000} className={'cursor-pointer'}>
                    <p className={'text-base font-rubik font-semibold text-orange-primary hover:text-black tracking-widest px-6 py-3 border-4 border-orange-primary bg-transparent hover:bg-orange-primary transition-all duration-500'}>
                        KONTAKTIRAJ NAS
                    </p>
                </ScrollLink>
            </div>
        </motion.section>
    );
}

export default LandingSection;