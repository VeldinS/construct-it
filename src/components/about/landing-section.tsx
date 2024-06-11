'use client'
import React from 'react';
import ButtonPrimary from "@/components/buttons/button-primary";
import ServiceCard from "@/components/home/service-card";
import { Link as ScrollLink, animateScroll } from 'react-scroll';

function LandingSection() {
    return (
        <section className="w-screen h-screen flex flex-col justify-start items-start">
            <div className="w-full h-auto lg:h-4/5 flex flex-col lg:flex-row justify-start items-start">
                <div className={"relative z-1 w-full lg:w-[70%] h-full px-[5%] sm:px-[10%] py-[30%] sm:py-[20%] lg:py-16 flex flex-col justify-center items-start gap-12 bg-[url('/assets/other/machine2.jpg')] bg-cover bg-center"}>
                    <div className={'absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-2'}></div>
                    <div className={'relative z-3 flex flex-col justify-center items-start gap-4'}>
                        <div className={'flex flex-row justify-center items-stretch gap-4'}>
                            <div className={'w-2 bg-orange-primary'}></div>
                            <h1 className={'text-white text-6xl font-rubik font-bold leading-relaxed'}>O Našoj Kompaniji</h1>
                        </div>
                        <p className={'text-white font-light font-rubik leading-loose text-xl'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis egestas pellentesque libero dolor in diam consequat ut. Mi nibh amet viverra id aliquet neque odio.
                        </p>
                    </div>
                    <div className={'relative z-3'}>
                        <ButtonPrimary text={'POGLEDAJ DJELATNOSTI'} link={'/usluge'} />
                    </div>
                </div>
                <div className={'w-full lg:w-[30%] h-full px-8 py-8 flex flex-col justify-center items-start gap-12 bg-orange-primary'}>
                    <h1 className={'text-[#2A2A2A] font-rubik text-3xl sm:text-4xl font-bold'}>Naše Usluge</h1>
                    <ServiceCard title={'Izrada kamene galanterije'}
                                 description={'Koristimo najkvalitetnije kamenje za kreiranje stolova, stolica, fontana i drugih elemenata.'}
                                 image={'/assets/icons/kamen-icon.svg'}
                    />
                    <ServiceCard title={'Opće građevinske usluge'}
                                 description={'Pružamo sve vrste građevinskih radova, od temelja do krova.'}
                                 image={'/assets/icons/grad-usluge-icon.svg'}
                    />
                    <ServiceCard title={'Upravljanje projektima'}
                                 description={'Osiguravamo visoku kvalitetu upravljanja projektima za efikasnu realizaciju.'}
                                 image={'/assets/icons/upr-projektima-icon.svg'}
                    />
                </div>
            </div>
            <div className={'w-full h-auto lg:h-1/5 hidden lg:flex flex-row justify-between items-center px-[10%]'}>
                <h1 className={'text-[#2A2A2A] font-rubik text-3xl sm:text-4xl font-bold'}>Započnimo suradnju</h1>
                <ScrollLink to={'kontakt'} smooth={true} duration={1000} className={'cursor-pointer'}>
                    <p className={'text-base font-rubik font-semibold text-orange-primary hover:text-black tracking-widest px-6 py-3 border-4 border-orange-primary bg-transparent hover:bg-orange-primary transition-all duration-500'}>
                        KONTAKTIRAJ NAS
                    </p>
                </ScrollLink>
            </div>
        </section>
    );
}

export default LandingSection;