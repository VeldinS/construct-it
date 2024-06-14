"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./image-slider";
import ButtonPrimary from "@/components/buttons/button-primary";

function LandingSection() {
    const images = [
            'https://images.pexels.com/photos/220885/pexels-photo-220885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/176342/pexels-photo-176342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/194096/pexels-photo-194096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            'https://images.pexels.com/photos/17687058/pexels-photo-17687058/free-photo-of-marble-steps-and-steel-handrail.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        ];

    return (
        <motion.section
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 1.3}}
            className={'w-screen h-screen relative bg-cover bg-center flex flex-col items-center justify-center gap-8'}>
            <ImagesSlider className="h-full " images={images}>
            <motion.div
                initial={{
                    opacity: 0,
                    y: -80,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.6,
                }}
                className="z-50 flex flex-col justify-center items-center"
            >
                <div className={'w-[50px] h-[5px] bg-orange-primary '}></div>
                <motion.p className="font-bold text-3xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4 md:py-6">
                    Construct.IT
                </motion.p>
                <p className={'text-white text-center font-rubik font-medium text-lg py-4 md:py-6'}>Vaš pouzdan partner za sve vrste građevinskih radova.</p>
                <div className={'py-4 md:py-6'}>
                    <ButtonPrimary text={'POKRENIMO PROJEKAT'} link={'#kontakt'} />
                </div>
            </motion.div>
        </ImagesSlider>
        </motion.section>
    );
}

export default LandingSection;