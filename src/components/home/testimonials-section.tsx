import React from "react";
import Image from "next/image";
import starsIcon from '@/assets/icons/stars.svg';

import icon1 from '@/assets/icons/grad-usluge-icon.svg';

const icons = [
    icon1, icon1, icon1,icon1, icon1, icon1,icon1, icon1, icon1,icon1, icon1, icon1
    ];

function TestimonialsSection() {
    return (
        <section className={'h-auto w-screen py-16 bg-[#F7F7F7] flex flex-col justify-center items-center gap-12'}>
            <h1 className={'text-[#2A2A2A] font-rubik text-3xl md:text-4xl font-bold tracking-wider'}>Zadovoljni Klijenti</h1>
            <div className={'w-[50px] h-[5px] bg-orange-primary '}></div>
            <div className={'w-full px-[5%] lg:px-[15%] grid grid-cols-1 lg:grid-cols-3 gap-8'}>
                <div className={'flex flex-col justify-start items-start gap-8 p-6 bg-white'}>
                    <div className={'w-full flex flex-col justify-center items-center'}>
                        <Image src={starsIcon} alt={'Stars from testimonial.'} width={130} height={60}/>
                    </div>
                    <p className={'text-[#666666] font-rubik font-extralight text-base leading-loose'}>
                        "Construct.IT je izvanredno odradio posao na našem prilazu. Sve je urađeno brzo i efikasno!"
                    </p>
                    <h2 className="text-black font-rubik font-medium text-base">
                        Jasmin B.
                    </h2>
                </div>
                <div className={'flex flex-col justify-start items-start gap-8 p-6 bg-white'}>
                    <div className={'w-full flex flex-col justify-center items-center'}>
                        <Image src={starsIcon} alt={'Stars from testimonial.'} width={130} height={60}/>
                    </div>
                    <p className={'text-[#666666] font-rubik font-extralight text-base leading-loose'}>
                        "Njihov tim je bio izuzetno profesionalan. Preporučujem ih za sve vrste građevinskih radova!"
                    </p>
                    <h2 className="text-black font-rubik font-medium text-base">
                        Maja S.
                    </h2>
                </div>
                <div className={'flex flex-col justify-start items-start gap-8 p-6 bg-white'}>
                    <div className={'w-full flex flex-col justify-center items-center'}>
                        <Image src={starsIcon} alt={'Stars from testimonial.'} width={130} height={60}/>
                    </div>
                    <p className={'text-[#666666] font-rubik font-extralight text-base leading-loose'}>
                        Odlična komunikacija i vrhunska kvaliteta rada. Naša nova terasa izgleda fantastično
                        zahvaljujući Construct.IT!"
                    </p>
                    <h2 className="text-black font-rubik font-medium text-base">
                        Amir K.
                    </h2>
                </div>
            </div>

        </section>
    );
}

export default TestimonialsSection;