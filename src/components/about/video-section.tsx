import React from "react";

import ButtonSecondary from "@/components/buttons/button-secondary";
import VideoBackgroundDiv from "@/components/about/video";


function VideoSection() {

    return (
        <section className={'h-auto lg:h-screen w-screen flex flex-col lg:flex-row items-center justify-center bg-white'}>
            <div className="relative bg-[#2A2A2A] w-full lg:w-1/3 h-auto lg:h-full flex flex-col items-start justify-start gap-12 px-6 py-12 lg:py-[5%]">
                <h1 className={'text-white font-rubik text-3xl sm:text-4xl tracking-widest font-bold'}>Posvećenost Kvalitetu i Zadovoljstvu Klijenata</h1>
                <div className={'w-[50px] h-[5px] bg-orange-primary'}></div>
                <p className={'text-white font-rubik font-extralight text-base leading-loose w-full'}>
                    Naša misija je pružiti usluge vrhunske kvalitete i zadovoljiti sve potrebe naših klijenata. Svaki projekt pristupamo s maksimalnom pažnjom i profesionalizmom, koristeći najmodernije tehnike i tehnologije. Naš cilj je da svaki klijent bude potpuno zadovoljan rezultatom našeg rada.
                </p>
                <ButtonSecondary text={'KONTAKTIRAJ NAS'} link={'#kontakt'} />
            </div>
            <div className={' w-full lg:w-2/3 h-auto lg:h-full flex flex-col items-start justify-start'}>
                <VideoBackgroundDiv />
                <div
                    className={'w-full h-auto md:h-1/5 bg-white flex flex-col md:flex-row items-center justify-center'}>
                    <div
                        className={'w-full md:w-1/2 h-full bg-orange-primary py-4 md:py-0 flex flex-col justify-center items-center gap-2'}>
                        <h1 className={'font-rubik text-4xl text-black font-bold'}>Kontaktirajte Nas</h1>
                        <p className={'font-rubik text-xl text-black font-bold'}>info@construct.it</p>
                    </div>
                    <div className={'w-full md:w-1/2 h-full bg-white py-4 md:py-0 hidden md:flex flex-col justify-center items-center gap-2'}>
                        <ButtonSecondary text={'ZAPOČNIMO POSAO'} link={'#kontakt'} />
                    </div>
                </div>
            </div>
        </section>
    );
}


export default VideoSection;